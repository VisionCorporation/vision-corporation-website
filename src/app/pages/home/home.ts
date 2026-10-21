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
      title: 'Web Design & Digital Marketing Agency in Ghana | Vision Corporation',
      description: 'Looking for a reliable web design and digital marketing agency in Ghana? Vision Corporation builds high-performing business websites, e-commerce stores, and custom web apps, backed by SEO and ads to grow your brand.',
      url: 'https://visioncorporation.africa/',
      image: 'https://visioncorporation.africa/assets/images/home-og.jpeg'
    });
  }
}
