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
      title: 'Privacy Policy - Vision Corporation | Data Protection Rules',
      description: 'Read Vision Corporation’s Privacy Policy to learn how we collect, use, and protect your personal information while ensuring transparency and data security.',
      url: 'https://visioncorporationafrica.netlify.app/privacy-policy',
      image: 'https://visioncorporationafrica.netlify.app/assets/images/privacy-policy-og.jpeg'
    });
  }
}
