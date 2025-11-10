import { ChangeDetectorRef, Component, ElementRef, HostListener, inject, ViewChild, PLATFORM_ID, Inject } from '@angular/core';
import { CommonModule, NgOptimizedImage, ViewportScroller, isPlatformBrowser } from "@angular/common";
import { Header } from '../../components/shared/header/header';
import { Footer } from '../../components/shared/footer/footer';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { CONTACT_CATEGORIES } from '../../data/constants/contact-categories.constants';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { AlertComponent } from '../../components/shared/alert/alert';
import { Api } from '../../services/api';
import { Subject, takeUntil } from 'rxjs';
import { ContactUs } from '../../interfaces/contact-us.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { SeoService } from '../../services/seo-service';

@Component({
  selector: 'app-contact',
  imports: [NgOptimizedImage, Header, Footer, CommonModule, ReactiveFormsModule, AlertComponent],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {
  @ViewChild('alert') alert!: AlertComponent;
  @ViewChild('dropdownRef', { static: true }) dropdownRef!: ElementRef<HTMLElement>;
  public selectedOption: { value: string; label: string; icon: SafeHtml };
  public options: { value: string; label: string; icon: SafeHtml }[];
  public dropdownOpen = false;
  private fb = inject(FormBuilder)
  public isSubmitting = false
  private cdr = inject(ChangeDetectorRef)
  private readonly seoService = inject(SeoService);
  private sendContactForm = inject(Api)
  private readonly destroy$ = new Subject<void>()
  private isBrowser: boolean;

  public contactUsForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(5)]],
    email: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)]],
    subject: ['', [Validators.required, Validators.minLength(5)]],
    messageCategory: [''],
    message: ['', [Validators.required, Validators.minLength(20)]]
  })

  constructor(
    private sanitizer: DomSanitizer,
    private viewportScroller: ViewportScroller,
    private route: ActivatedRoute,
    private router: Router,
    @Inject(PLATFORM_ID) platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(platformId);

    this.options = CONTACT_CATEGORIES.map(cat => ({
      ...cat,
      icon: this.sanitizer.bypassSecurityTrustHtml(cat.icon),
    }));

    this.selectedOption = this.options[0];
    this.contactUsForm.patchValue({ messageCategory: this.options[0].value });

    this.seoService.updatePageSeo({
      title: 'Contact Us - Vision Corporation | IT & Software Support',
      description: 'Contact Vision Corporation for software development, IT consulting, and digital solutions. Let\'s discuss your project and find the best solutions together.',
      url: 'https://visioncorporationafrica.netlify.app/contact',
      image: 'https://visioncorporationafrica.netlify.app/assets/images/contact-og.jpeg'
    });
  }

  ngOnInit() {
    if (this.isBrowser) {
      const navigation = this.router.currentNavigation();
      const state = navigation?.extras?.state || window.history.state;

      if (state?.messageCategory) {
        const category = this.options.find(opt => opt.value === state.messageCategory);
        if (category) {
          this.selectedOption = category;
          this.contactUsForm.patchValue({ messageCategory: category.value });
        }
      }

      if (state?.packageName) {
        this.contactUsForm.patchValue({ subject: state.packageName });
      }

      if (state?.scrollToForm) {
        setTimeout(() => {
          const element = document.getElementById('contact-form');
          if (element) {
            const headerOffset = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
          }
        }, 100);
      }
    }
  }

  public toggleDropdown(event?: MouseEvent): void {
    event?.stopPropagation();
    this.dropdownOpen = !this.dropdownOpen;
  }

  public selectOption(option: any, event?: MouseEvent): void {
    event?.stopPropagation();
    this.selectedOption = option;
    this.contactUsForm.patchValue({ messageCategory: option.value });
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
    const formData = this.contactUsForm.value as ContactUs
    this.isSubmitting = true

    this.sendContactForm.sendContactUsForm(formData).pipe(takeUntil(this.destroy$)).subscribe({
      next: () => {
        this.contactUsForm.reset()
        this.selectedOption = this.options[0]
        this.alert.showAlert('success', 'Your message has been received. We\'ll respond shortly.', 3000, 'top-right');
        this.detectFormChanges()
      },
      error: (error) => {
        if (error.status === 0) {
          this.alert.showAlert('error', 'Check your internet and try again', 3000, 'top-right');
          this.detectFormChanges()
        }
        else {
          this.alert.showAlert('error', 'Something went wrong. Try again', 3000, 'top-right');
          this.detectFormChanges()
        }
      }
    });
  }

  private detectFormChanges() {
    queueMicrotask(() => {
      this.isSubmitting = false;
      this.cdr.detectChanges();
    });
  }

  public errorMessage(name: string): string {
    const control = this.contactUsForm.get(name);
    if (control?.invalid && (control.dirty || control.touched)) {
      if (control?.errors?.['required']) return 'Field is required';
      if (control?.errors?.['pattern']) return 'Invalid email (e.g., user@domain.com)';
      if (control?.errors?.['minlength']) {
        const requiredLength = control.getError('minlength')?.requiredLength
        return `Minimum length is ${requiredLength} characters`
      }
    }
    return '';
  }

  @HostListener('document:mousedown', ['$event'])
  onDocumentMouseDown(event: MouseEvent) {
    if (!this.isBrowser) return;

    const target = event.target as Node | null;
    const wrapper = this.dropdownRef?.nativeElement;

    if (this.dropdownOpen && wrapper && target && !wrapper.contains(target)) {
      this.dropdownOpen = false;
    }
  }

  ngOnDestroy(): void {
    this.destroy$.next()
    this.destroy$.complete()
  }
}