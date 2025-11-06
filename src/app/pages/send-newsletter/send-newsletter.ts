import { CommonModule } from '@angular/common';
import { Component, inject, ViewChild } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from "@angular/forms";
import { RouterLink } from '@angular/router';
import { AlertComponent } from '../../components/shared/alert/alert';

@Component({
  selector: 'app-send-newsletter',
  imports: [ReactiveFormsModule, RouterLink, CommonModule, AlertComponent],
  templateUrl: './send-newsletter.html',
  styleUrl: './send-newsletter.css'
})
export class SendNewsletter {
  @ViewChild('alert') alert!: AlertComponent;
  public isAuthenticated = false;
  private fb = inject(FormBuilder)
  public showPassword = false;
  public authenticateUserForm = this.fb.group({
    password: ['', [Validators.required, Validators.minLength(8)]]
  })

  public onSubmit(): void {
    if (this.authenticateUserForm.value.password === 'Vision2024') {
      this.alert.showAlert('success', 'You’re in! Newsletter form unlocked', 3000, 'top-right');
      this.isAuthenticated = true;
    } else {
      this.alert.showAlert('error', 'Incorrect password. Please try again.', 3000, 'top-right');
    }
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
}
