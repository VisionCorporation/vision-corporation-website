import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, inject, OnDestroy, ViewChild } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from "@angular/forms";
import { RouterLink } from '@angular/router';
import { AlertComponent } from '../../components/shared/alert/alert';
import { Api } from '../../services/api';
import { Subject, takeUntil } from 'rxjs';
import { Newsletter } from '../../interfaces/newsletter.interface';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-send-newsletter',
  imports: [ReactiveFormsModule, RouterLink, CommonModule, AlertComponent],
  templateUrl: './send-newsletter.html',
  styleUrl: './send-newsletter.css'
})
export class SendNewsletter implements OnDestroy {
  @ViewChild('alert') alert!: AlertComponent;
  public isAuthenticated = false;
  public isSending = false;
  private fb = inject(FormBuilder)
  private cdr = inject(ChangeDetectorRef);
  public showPassword = false;
  private sendNewsletterApi = inject(Api)
  private readonly destroy$ = new Subject<void>()

  public authenticateUserForm = this.fb.group({
    password: ['', [Validators.required, Validators.minLength(8)]]
  })

  public sendNewsletterForm = this.fb.group({
    templateName: ['', [Validators.required]],
    subject: ['', [Validators.required]],
    heading: ['', [Validators.required]],
    buttonText: ['', [Validators.required]],
    buttonUrl: ['', [Validators.required]],
    message: ['', [Validators.required]]
  })

  public onSubmit(): void {
    if (this.authenticateUserForm.value.password === environment.newsletterPassword) {
      this.alert.showAlert('success', 'You’re in! Newsletter form unlocked', 3000, 'top-right');
      this.isAuthenticated = true;
    } else {
      this.alert.showAlert('error', 'Incorrect password. Please try again.', 3000, 'top-right');
    }
  }

  public submitNewsletter(): void {
    this.isSending = true
    const newsletter = this.sendNewsletterForm.getRawValue() as Newsletter;
    
    this.sendNewsletterApi.sendNewsletter(newsletter).pipe(takeUntil(this.destroy$)).subscribe({
      next: () => {
        this.sendNewsletterForm.reset()
        this.alert.showAlert('success', 'Newsletter sent successfully!', 3000, 'top-right');
        this.detectFormChanges()
      },
      error: () => {
        this.alert.showAlert('error', 'Failed to send newsletter. Try again', 3000, 'top-right');
        this.detectFormChanges()
      }
    })
  }

  private detectFormChanges() {
    queueMicrotask(() => {
      this.isSending = false;
      this.cdr.detectChanges();
    });
  }

  public errorMessage(name: string): string {
    const control = this.authenticateUserForm.get(name);
    if (control?.invalid && (control.dirty || control.touched)) {
      if (control.errors?.['required']) return 'Password is required';
      if (control.errors?.['minlength']) return 'Password must be 8+ characters long';
    }
    return '';
  }

  public togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  ngOnDestroy(): void {
    this.destroy$.next()
    this.destroy$.complete()
  }
}
