import { Component, inject } from '@angular/core';
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
  private readonly sanitizer = inject(DomSanitizer);
  private router = inject(Router)

  public readonly otherServices = OTHER_SERVICES.map(card => ({
    ...card,
    svg: this.sanitizer.bypassSecurityTrustHtml(card.svg)
  }));

  constructor() {
    this.seoService.updatePageSeo({
      title: 'Our Services - Vision Corporation | IT & Software Solutions',
      description: 'Expert software development, cloud solutions, IT consulting, and digital transformation services designed to empower businesses and drive long-term success.',
      url: 'https://visioncorporation.africa/services',
      image: 'https://visioncorporation.africa/assets/images/services-og.jpeg'
    });
  }

  public navigatePackageToContactForm(packageTitle: string, packageName: string): void {
    console.log(packageTitle, packageName)
    this.router.navigate(['/contact'], {
      skipLocationChange: false,
      state: {
        messageCategory: packageTitle,
        packageName: packageName,
        scrollToForm: true
      }
    });
  }

  public navigateToContactForm(value: string): void {
    this.router.navigate(['/contact'], {
      skipLocationChange: false,
      state: {
        messageCategory: value,
        scrollToForm: true
      }
    });
  }
}
