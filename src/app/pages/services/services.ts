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

  ngOnInit() {
    this.seoService.updatePageSeo({
      title: 'Our Services - Vision Corporation | Software Development & IT Consulting',
      description: 'Expert software development, cloud solutions, IT consulting, and digital transformation services tailored to your business needs.',
      url: 'https://visioncorporationafrica.netlify.app/services',
      image: 'https://ogcdn.net/fb15cb13-a93b-4dfa-a9ff-8b920d8d1f11/v5/og.png'
    });
  }
}
