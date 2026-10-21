import { Component, inject } from '@angular/core';
import { HeroSection } from './hero-section/hero-section';
import { SeoService } from '../../services/seo-service';
import { OurJourney } from './our-journey/our-journey';
import { WebDesignAndBenefits } from './web-design-and-benefits/web-design-and-benefits';
import { HowItWorks } from './how-it-works/how-it-works';
import { WhatWeBuild } from './what-we-build/what-we-build';
import { DigitalMarketing } from './digital-marketing/digital-marketing';
import { WhyWorkWithUs } from './why-work-with-us/why-work-with-us';
import { Faqs } from './faqs/faqs';
import { Cta } from '../../components/shared/cta/cta';

@Component({
  selector: 'app-home',
  imports: [HeroSection, OurJourney, WebDesignAndBenefits, HowItWorks, WhatWeBuild, DigitalMarketing, WhyWorkWithUs, Faqs, Cta],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  private readonly seoService = inject(SeoService);

  constructor() {
    this.seoService.updatePageSeo({
      title: 'Vision Corporation | Web Design & Development Agency in Ghana',
      description: 'Vision Corporation designs and builds business websites, portfolio sites, e-commerce stores and custom web applications in Ghana, as the first step in a bigger mission to build Africa\'s technology.',
      url: 'https://visioncorporation.africa/',
      image: 'https://visioncorporation.africa/assets/images/home-og.jpeg'
    });
  }
}
