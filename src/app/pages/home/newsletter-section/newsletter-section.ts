import { ChangeDetectorRef, Component, inject, OnDestroy, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AlertComponent } from '../../../components/shared/alert/alert';
import { ReactiveFormsModule, Validators, FormBuilder } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';
import { CommonModule } from '@angular/common';
import { Api } from '../../../services/api';

@Component({
  selector: 'app-newsletter-section',
  imports: [CommonModule, RouterLink, AlertComponent, ReactiveFormsModule],
  templateUrl: './newsletter-section.html',
  styleUrl: './newsletter-section.css'
})
export class NewsletterSection implements OnDestroy {
  @ViewChild('alert') alert!: AlertComponent;
  public isSubcribing = false;
  private cdr = inject(ChangeDetectorRef);
  private readonly fb = inject(FormBuilder)
  private readonly destroy$ = new Subject<void>()
  private readonly newsletterApi = inject(Api)

  public newsletterForm = this.fb.group({
    email: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)]],
    agree: [false, Validators.requiredTrue]
  })

  public submitForm() {
    this.isSubcribing = true;
    this.cdr.detectChanges();

    this.newsletterApi.subscribeToNewsletter(this.newsletterForm.value.email ?? '').pipe(takeUntil(this.destroy$)).subscribe({
      next: (response) => {
        this.newsletterForm.reset()
        this.alert.showAlert('success', 'You’ve subscribed successfully!', 3000, 'bottom-right');
        this.detectFormChanges()
      },
      error: (error) => {
        if (error.status === 400) {
          this.alert.showAlert('error', 'You’re already subscribed', 3000, 'bottom-right');
          this.detectFormChanges()
        }
        else if (error.status === 0) {
          this.alert.showAlert('error', 'Check your internet and try again', 3000, 'bottom-right');
          this.detectFormChanges()
        }
        else {
          this.alert.showAlert('error', 'Something went wrong. Try again', 3000, 'bottom-right');
          this.detectFormChanges()
        }
      }
    });
  }

  private detectFormChanges() {
    queueMicrotask(() => {
      this.isSubcribing = false;
      this.cdr.detectChanges();
    });
  }

  public errorMessage(name: string): string {
    const control = this.newsletterForm.get(name);
    if (control?.invalid && (control.dirty || control.touched)) {
      if (control.errors?.['required']) return 'Email is required';
      if (control.errors?.['pattern']) return 'Please enter a valid email address';
    }
    return '';
  }

  ngOnDestroy(): void {
    this.destroy$.next()
    this.destroy$.complete()
  }
}
