import { Component, signal } from '@angular/core';
import { Header } from './components/header/header';
import { HeroSection } from './components/hero-section/hero-section';
import { OurExpertise } from './components/our-expertise/our-expertise';

@Component({
  selector: 'app-root',
  imports: [Header, HeroSection, OurExpertise],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

}
