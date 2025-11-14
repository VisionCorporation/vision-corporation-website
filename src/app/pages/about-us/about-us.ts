import { Component, inject } from '@angular/core';
import { Header } from '../../components/shared/header/header';
import { Footer } from '../../components/shared/footer/footer';
import { NgOptimizedImage } from '@angular/common';
import { WhoWeAre } from './who-we-are/who-we-are';
import { OurVision } from './our-vision/our-vision';
import { OurJourney } from './our-journey/our-journey';
import { OurPhilosophy } from './our-philosophy/our-philosophy';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../services/seo-service';

@Component({
  selector: 'app-about-us',
  imports: [Header, Footer, WhoWeAre, OurVision, OurJourney, OurPhilosophy, RouterLink],
  templateUrl: './about-us.html',
  styleUrl: './about-us.css'
})
export class AboutUs {
  private readonly seoService = inject(SeoService);

  constructor() {
    this.seoService.updatePageSeo({
      title: 'About Us | Vision Corporation - Building Digital Futures',
      description: 'Discover Vision Corporation, a forward-thinking team delivering modern web development, software solutions, and digital innovation across Africa and beyond.',
      url: 'https://visioncorporationafrica.netlify.app/about-us/',
      image: 'https://visioncorporationafrica.netlify.app/assets/images/about-us-og.jpeg'
    });
  }
}
