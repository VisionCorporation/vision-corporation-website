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
      description: 'Expert software development, cloud solutions, IT consulting, and digital transformation services designed to empower businesses and drive long-term success.',
      url: 'https://visioncorporationafrica.netlify.app/services',
      image: 'https://visioncorporationafrica.netlify.app/assets/images/home-og.jpeg'
    });
  }
}
