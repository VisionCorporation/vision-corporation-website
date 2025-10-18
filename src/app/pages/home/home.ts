import { Component } from '@angular/core';
import { Header } from '../../components/shared/header/header';
import { HeroSection } from './hero-section/hero-section';
import { OurExpertise } from './our-expertise/our-expertise';
import { CoreValues } from './core-values/core-values';
import { RealitySection } from './reality-section/reality-section';
import { NewsletterSection } from './newsletter-section/newsletter-section';
import { Footer } from '../../components/shared/footer/footer';
import { Testimonials } from './testimonials/testimonials';

@Component({
  selector: 'app-home',
  imports: [Header, HeroSection, OurExpertise, CoreValues, Testimonials, RealitySection, NewsletterSection, Footer],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
