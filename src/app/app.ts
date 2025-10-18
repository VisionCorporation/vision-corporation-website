import { AfterViewInit, Component, Inject, PLATFORM_ID, signal } from '@angular/core';
import { Header } from './components/header/header';
import { HeroSection } from './components/hero-section/hero-section';
import { OurExpertise } from './components/our-expertise/our-expertise';
import { CoreValues } from "./components/core-values/core-values";
import { Testimonials } from './components/testimonials/testimonials';
import { RealitySection } from './components/reality-section/reality-section';
import { NewsletterSection } from './components/newsletter-section/newsletter-section';
import { Footer } from './components/footer/footer';
import * as AOS from 'aos';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [Header, HeroSection, OurExpertise, CoreValues, Testimonials, RealitySection, NewsletterSection, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements AfterViewInit {
  constructor(@Inject(PLATFORM_ID) private platformId: object) { }
  async ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      const AOS = await import('aos');
      AOS.init({
        duration: 500,
        easing: 'ease-out-cubic',
        once: false,
        offset: 110,
      });
    }

  }
}
