import { Component, signal } from '@angular/core';
import { Header } from './components/header/header';
import { HeroSection } from './components/hero-section/hero-section';
import { OurExpertise } from './components/our-expertise/our-expertise';
import { CoreValues } from "./components/core-values/core-values";
import { Testimonials } from './components/testimonials/testimonials';

@Component({
  selector: 'app-root',
  imports: [Header, HeroSection, OurExpertise, CoreValues, Testimonials],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

}
