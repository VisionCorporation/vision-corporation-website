import { Component, inject } from '@angular/core';
import { Header } from '../../components/shared/header/header';
import { HeroSection } from './hero-section/hero-section';
import { OurExpertise } from './our-expertise/our-expertise';
import { CoreValues } from './core-values/core-values';
import { RealitySection } from './reality-section/reality-section';
import { NewsletterSection } from './newsletter-section/newsletter-section';
import { Footer } from '../../components/shared/footer/footer';
import { Testimonials } from './testimonials/testimonials';
import { SeoService } from '../../services/seo-service';

@Component({
  selector: 'app-home',
  imports: [Header, HeroSection, OurExpertise, CoreValues, Testimonials, RealitySection, NewsletterSection, Footer],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  private readonly seoService = inject(SeoService);

  constructor() {
    this.seoService.updatePageSeo({
      title: 'Vision Corporation – IT Solutions & Digital Transformation',
      description: 'Empowering businesses with cutting-edge software development, IT consulting, and digital transformation solutions across Africa.',
      url: 'https://visioncorporationafrica.netlify.app/',
      image: 'https://ogcdn.net/492b33ea-6084-4713-8edd-a23e75442d52/v1/og.png'
    });
  }
}
