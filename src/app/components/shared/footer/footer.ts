import { Component, inject, signal, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FOOTER_CONTACT, FOOTER_LEGAL, FOOTER_MENU, FOOTER_SERVICES, FOOTER_SOCIALS } from '../../../data/constants/footer.constants';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Api } from '../../../services/api';
import { AlertComponent } from '../alert/alert';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule, AlertComponent],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  @ViewChild('alert') alert!: AlertComponent;
  public readonly currentYear = new Date().getFullYear();
  public readonly footerMenu = FOOTER_MENU
  public readonly footerServices = FOOTER_SERVICES
  public readonly footerLegal = FOOTER_LEGAL
  public readonly footerContact = FOOTER_CONTACT;
  public readonly footerSocials = FOOTER_SOCIALS;
  private readonly fb = inject(FormBuilder)
  private readonly apiService = inject(Api)
  public isSubmitting = signal(false)

  public emailForm = this.fb.group({
    email: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)]]
  })

  public onSubmit(): void {
    if (this.emailForm.invalid || this.isSubmitting()) {
      this.emailForm.markAllAsTouched();
      return;
    }

    const email = this.emailForm.value.email?.trim() ?? '';

    this.isSubmitting.set(true);

    this.apiService
      .subscribeToNewsletter(email)
      .pipe(
        finalize(() => this.isSubmitting.set(false))
      )
      .subscribe({
        next: (response) => {
          this.emailForm.reset();

          this.alert.showAlert(
            'success',
            response.message || 'Successfully subscribed to our newsletter.'
          );
        },
        error: (error) => {
          this.alert.showAlert(
            'error',
            error.error?.message || 'Subscription failed. Please try again.'
          );
        }
      });
  }

  public errorMessage(name: string): string {
    const control = this.emailForm.get(name);

    if (control?.invalid && (control.dirty || control.touched)) {
      if (control.errors?.['required']) {
        return 'Email is required';
      }

      if (control.errors?.['pattern']) {
        return 'Invalid email (e.g., user@domain.com)';
      }
    }

    return '';
  }
}
