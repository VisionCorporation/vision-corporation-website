import { Component, inject, signal, ViewChild } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { SeoService } from '../../services/seo-service';
import { FAQS, SOCIALS, STEPS, SUBJECTS } from '../../data/constants/contact-us.constants';
import { NgOptimizedImage } from '@angular/common';
import { CONTACT_US_SCHEMA } from '../../data/seo/structured-data';
import { AlertComponent } from '../../components/shared/alert/alert';
import { Api } from '../../services/api';

@Component({
  selector: 'app-contact-us',
  imports: [RouterLink, ReactiveFormsModule, NgOptimizedImage, AlertComponent],
  templateUrl: './contact-us.html',
})
export class ContactUs {
  @ViewChild('alert') alert!: AlertComponent;
  private readonly fb = inject(FormBuilder);
  private readonly seoService = inject(SeoService);
  public readonly formEndpoint = '';
  public readonly email = 'info@visioncorporation.africa';
  public readonly phone = '+233561251006';
  public readonly phoneDisplay = '+233 56 125 1006';
  public readonly whatsappUrl = 'https://wa.link/ydex0f';
  public readonly workingHours = 'Monday – Friday, 8:00 AM – 5:00 PM';
  public readonly location = 'Sekondi-Takoradi, Ghana';
  private readonly apiService = inject(Api)

  public readonly socials = SOCIALS.filter(s => s.url);
  public readonly subjects = SUBJECTS
  public readonly steps = STEPS
  public readonly faqs = FAQS
  private readonly route = inject(ActivatedRoute);

  public readonly contactForm = this.fb.nonNullable.group({
    name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(120)]],
    email: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)]],
    phone: ['', [Validators.pattern(/^\+?\d+$/),]],
    businessName: [''],
    subject: ['', Validators.required],
    message: ['', [Validators.required, Validators.minLength(10)]],
  });

  public readonly status = signal<'idle' | 'sending' | 'success' | 'error'>('idle');
  public readonly openFaq = signal<number | null>(0);

  constructor() {
    this.seoService.updatePageSeo({
      title: 'Contact Us | Vision Corporation',
      description:
        'Tell Vision Corporation about your website, web app or digital marketing project. Based in Sekondi-Takoradi, Ghana. Send a message for a free consultation.',
      url: 'https://visioncorporation.africa/contact-us',
      image: 'https://visioncorporation.africa/assets/images/contact-og.jpeg',
      structuredData: CONTACT_US_SCHEMA,
    });

    const subject = this.route.snapshot.queryParamMap.get('subject');

    if (subject) {
      this.contactForm.controls.subject.setValue(subject);
    }
  }

  ngAfterViewInit(): void {
    if (this.route.snapshot.queryParamMap.has('subject')) {
      requestAnimationFrame(() => this.scrollToForm(new Event('click')));
    }
  }

  public invalid(field: 'name' | 'email' | 'subject' | 'message'): boolean {
    const c = this.contactForm.controls[field];
    return c.invalid && (c.touched || c.dirty);
  }

  public errorText(
    field: 'name' | 'email' | 'subject' | 'message' | 'phone'
  ): string {
    const c = this.contactForm.controls[field];

    if (c.hasError('required')) {
      return {
        name: 'Please tell us your name.',
        email: 'Please enter your email address.',
        subject: 'Please choose what you need help with.',
        message: 'Please tell us a little about your project.',
        phone: ''
      }[field];
    }

    if (c.hasError('maxlength')) return 'Your name is too long. Please keep it under 120 characters.';

    if (c.hasError('minlength')) {
      return field === 'name'
        ? 'Please enter at least 2 characters for your name.'
        : 'Please provide a little more detail (at least 10 characters).';
    }

    if (c.hasError('pattern')) {
      return field === 'phone'
        ? 'Please enter numbers only'
        : 'Please enter a valid email address.';
    }

    return 'Please check this field.';
  }

  public toggleFaq(index: number): void {
    this.openFaq.update(v => (v === index ? null : index));
  }

  public choosePartnership(event: Event): void {
    this.contactForm.patchValue({ subject: 'Partnerships and research' });
    this.scrollToForm(event);
  }

  public scrollToForm(event?: Event): void {
    event?.preventDefault();

    const el = document.getElementById('contact-form');
    if (!el) return;

    const header = document.querySelector('.site-header');
    const bar = header?.closest('.sticky') ?? header;
    const offset = (bar?.getBoundingClientRect().height ?? 90) + 24;

    el.style.scrollMarginTop = `${offset}px`;

    const reduce = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    el.scrollIntoView({
      behavior: reduce ? 'auto' : 'smooth',
      block: 'start',
    });
  }

  public onPhoneInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    let value = input.value.replace(/[^\d+]/g, '');

    value = value.replace(/\+/g, '');
    if (input.value.startsWith('+')) {
      value = `+${value}`;
    }

    input.value = value;
    this.contactForm.controls.phone.setValue(value, {
      emitEvent: false,
    });
  }

  public submit() {
    if (this.status() === 'sending') return;
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    this.status.set('sending')
    const formData = this.contactForm.getRawValue()

    this.apiService.sendContactUsForm(formData).subscribe({
      next: (response) => {
        this.contactForm.reset();
        this.status.set('success');

        this.alert.showAlert(
          'success',
          response.message || 'Your message has been sent successfully. We will get back to you soon.'
        );
      },

      error: (error) => {
        this.status.set('error');

        this.alert.showAlert(
          'error',
          error.error?.message || 'Failed to send your message. Please try again.'
        );
      },
    });


  }

  public sendAnother(): void {
    this.status.set('idle');
  }
}