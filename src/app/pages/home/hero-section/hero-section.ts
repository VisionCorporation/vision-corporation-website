import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ParallaxDirective } from '../../../directives/parallax.directive';

@Component({
  selector: 'app-hero-section',
  imports: [NgOptimizedImage, RouterLink, ParallaxDirective],
  host: { class: 'contents' },
  templateUrl: './hero-section.html',
  styleUrl: './hero-section.css'
})
export class HeroSection {
  
}
