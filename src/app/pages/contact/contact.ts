import { Component, ElementRef, HostListener, inject, ViewChild } from '@angular/core';
import { CommonModule, NgOptimizedImage } from "@angular/common";
import { Header } from '../../components/shared/header/header';
import { Footer } from '../../components/shared/footer/footer';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { CONTACT_CATEGORIES } from '../../data/constants/contact-categories.constants';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [NgOptimizedImage, Header, Footer, CommonModule, ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {
  @ViewChild('dropdownRef', { static: true }) dropdownRef!: ElementRef<HTMLElement>;
  public selectedOption: { value: string; label: string; icon: SafeHtml };
  public options: { value: string; label: string; icon: SafeHtml }[];
  public dropdownOpen = false;
  private fb = inject(FormBuilder)

  public contactUsForm = this.fb.group({
    fullName: ['', [Validators.required, Validators.minLength(5)]],
    email: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)]],
    category: [''],
    subject: ['', [Validators.required, Validators.minLength(5)]],
    message: ['', [Validators.required, Validators.minLength(20)]]
  })

  constructor(private sanitizer: DomSanitizer) {
    this.options = CONTACT_CATEGORIES.map(cat => ({
      ...cat,
      icon: this.sanitizer.bypassSecurityTrustHtml(cat.icon),
    }));

    this.selectedOption = this.options[0];

    this.contactUsForm.patchValue({ category: this.options[0].value });
  }

  public toggleDropdown(event?: MouseEvent): void {
    event?.stopPropagation();
    this.dropdownOpen = !this.dropdownOpen;
  }

  public selectOption(option: any, event?: MouseEvent): void {
    event?.stopPropagation();
    this.selectedOption = option;
    this.contactUsForm.patchValue({ category: option.value });
    this.dropdownOpen = false;
  }

  public handleTriggerKeydown(event: KeyboardEvent): void {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      this.toggleDropdown();
    } else if (event.key === 'ArrowDown' && !this.dropdownOpen) {
      event.preventDefault();
      this.dropdownOpen = true;
    }
  }

  public onSubmit() {
    console.log("Form Data: ", this.contactUsForm.value)
    this.contactUsForm.reset()
    this.selectedOption = this.options[0]
  }

  public errorMessage(name: string): string {
    const control = this.contactUsForm.get(name);
    if (control?.invalid && (control.dirty || control.touched)) {
      if (control.errors?.['required']) return 'Field is required';
      if (control.errors?.['pattern']) return 'Email is invalid';
      if (control.errors?.['minlength']) {
        const requiredLength = control.getError('minlength')?.requiredLength
        return `Minimum length is ${requiredLength} characters`
      }
    }
    return '';
  }

  @HostListener('document:mousedown', ['$event'])
  onDocumentMouseDown(event: MouseEvent) {
    const target = event.target as Node | null;
    const wrapper = this.dropdownRef?.nativeElement;

    if (this.dropdownOpen && wrapper && target && !wrapper.contains(target)) {
      this.dropdownOpen = false;
    }
  }
}