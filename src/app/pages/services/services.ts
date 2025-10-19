import { Component, inject } from '@angular/core';
import { Header } from '../../components/shared/header/header';
import { Footer } from '../../components/shared/footer/footer';
import { SeoService } from '../../services/seo-service';

@Component({
  selector: 'app-services',
  imports: [Header, Footer],
  templateUrl: './services.html',
  styleUrl: './services.css'
})
export class Services {
  private readonly seoService = inject(SeoService);

  constructor() {
    this.seoService.updatePageSeo({
      title: 'Our Services - Vision Corporation | IT & Software Solutions',
      description: 'Expert software development, cloud solutions, IT consulting, and digital transformation services tailored to your business needs.',
      url: 'https://visioncorporationafrica.netlify.app/services',
      image: 'https://ogcdn.net/492b33ea-6084-4713-8edd-a23e75442d52/v1/og.png'
    });
  }
}
