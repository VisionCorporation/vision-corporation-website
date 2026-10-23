import { Component, inject } from '@angular/core';
import { Cta } from '../../components/shared/cta/cta';
import { RouterLink } from '@angular/router';
import { GROWTH, JOURNEYS, PRINCIPLES, VALUES, WHAT_WE_BUILD } from '../../data/constants/why-vision.constants';
import { NgOptimizedImage } from '@angular/common';
import { SeoService } from '../../services/seo/seo';
import { WHY_VISION_SCHEMA } from '../../data/seo/structured-data';

@Component({
  selector: 'app-why-vision',
  imports: [Cta, RouterLink, NgOptimizedImage],
  templateUrl: './why-vision.html',
  styleUrl: './why-vision.css'
})
export class WhyVision {
  public readonly webBuilds = WHAT_WE_BUILD
  public readonly growth = GROWTH
  public readonly journeys = JOURNEYS
  public readonly principles = PRINCIPLES
  public readonly values = VALUES
  private readonly seoService = inject(SeoService);

  constructor() {
    this.seoService.updatePageSeo({
      title: 'About Vision Corporation | Vision Corporation',
      description: 'Meet Vision Corporation, a Ghanaian tech company building Africa’s future, from websites today to energy, transport, hardware and AI. Our vision and values.',
      url: 'https://visioncorporation.africa/why-vision',
      image: 'https://visioncorporation.africa/assets/images/home-og.jpeg',
      structuredData: WHY_VISION_SCHEMA,
    });
  }
}
