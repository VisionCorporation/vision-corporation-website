import { Component, inject, ElementRef, QueryList, ViewChildren } from '@angular/core';
import AOS from 'aos';
import { Header } from '../../components/shared/header/header';
import { Footer } from '../../components/shared/footer/footer';
import { SeoService } from '../../services/seo-service';
import { Faqs } from '../../components/shared/faqs/faqs';
import { OTHER_SERVICES, PACKAGES } from '../../data/constants/packages.constants';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-services',
  imports: [CommonModule, Header, Faqs, Footer, CurrencyPipe],
  templateUrl: './services.html',
  styleUrl: './services.css'
})
export class Services {
  private readonly seoService = inject(SeoService);
  public packages = PACKAGES;
  public expandedIndex: number | null = 0;
  private readonly sanitizer = inject(DomSanitizer);
  private router = inject(Router)

  public readonly otherServices = OTHER_SERVICES.map(card => ({
    ...card,
    svg: this.sanitizer.bypassSecurityTrustHtml(card.svg)
  }));

  @ViewChildren('packageContainer') packageContainers!: QueryList<ElementRef>;

  constructor() {
    this.seoService.updatePageSeo({
      title: 'Our Services - Vision Corporation | IT & Software Solutions',
      description: 'Expert software development, cloud solutions, IT consulting, and digital transformation services designed to empower businesses and drive long-term success.',
      url: 'https://visioncorporationafrica.netlify.app/services',
      image: 'https://visioncorporationafrica.netlify.app/assets/images/services-og.jpeg'
    });
  }

  public isPackageExpanded(index: number): boolean {
    return this.expandedIndex === index;
  }

  public togglePackage(index: number): void {
    const next = this.expandedIndex === index ? null : index;
    this.expandedIndex = next;

    setTimeout(() => {
      if (this.expandedIndex !== null) {
        const containers = this.packageContainers.toArray();
        const el = containers[this.expandedIndex!];
        if (el?.nativeElement) {
          try {
            const rect = el.nativeElement.getBoundingClientRect();
            const headerEl = document.querySelector('app-header');
            const headerHeight = headerEl ? headerEl.getBoundingClientRect().height : 0;
            const desiredTop = rect.top + window.scrollY - headerHeight - 8;
            window.scrollTo({ top: Math.max(0, desiredTop), behavior: 'smooth' });
          } catch (e) {
            if (typeof el.nativeElement.scrollIntoView === 'function') {
              el.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
            }
          }
        }

      }

      try { AOS.refresh(); } catch (ignored) { }
    }, 0);
  }

  public navigateToContactForm(value: string): void {
    this.router.navigate(['/contact'], {
      fragment: 'contact-form',
      state: { messageCategory: value }
    });
  }
}
