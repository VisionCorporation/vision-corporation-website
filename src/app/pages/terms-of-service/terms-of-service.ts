import { Component, inject } from '@angular/core';
import { Header } from '../../components/shared/header/header';
import { Footer } from '../../components/shared/footer/footer';
import { SeoService } from '../../services/seo-service';

@Component({
  selector: 'app-terms-of-service',
  imports: [Header, Footer],
  templateUrl: './terms-of-service.html',
  styleUrl: './terms-of-service.css'
})
export class TermsOfService {
  private readonly seoService = inject(SeoService);

  constructor() {
    this.seoService.updatePageSeo({
      title: 'Terms of Service - Vision Corporation | Legal User Agreement',
      description: 'Read Vision Corporation’s Terms of Service to understand your rights, responsibilities, and our policies when using our digital products and IT solutions.',
      url: 'https://visioncorporationafrica.netlify.app/terms-of-service',
      image: 'https://visioncorporationafrica.netlify.app/assets/images/terms-of-service-og.jpeg'
    });
  }
}