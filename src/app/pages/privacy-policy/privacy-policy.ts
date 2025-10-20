import { Component, inject } from '@angular/core';
import { Header } from '../../components/shared/header/header';
import { Footer } from '../../components/shared/footer/footer';
import { SeoService } from '../../services/seo-service';

@Component({
  selector: 'app-privacy-policy',
  imports: [Header, Footer],
  templateUrl: './privacy-policy.html',
  styleUrl: './privacy-policy.css'
})
export class PrivacyPolicy {
  private readonly seoService = inject(SeoService);

  constructor() {
    this.seoService.updatePageSeo({
      title: 'Privacy Policy - Vision Corporation',
      description: 'Learn how Vision Corporation collects, uses, and protects your personal information. Your privacy and data security are our top priorities.',
      url: 'https://visioncorporationafrica.netlify.app/privacy-policy',
      image: 'https://visioncorporationafrica.netlify.app/assets/images/privacy-policy-og.jpeg'
    });
  }
}
