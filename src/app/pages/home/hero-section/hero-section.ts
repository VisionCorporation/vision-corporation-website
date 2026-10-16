import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { ACHIEVEMENT_STATS } from '../../../data/constants/achievement-stats.constants';
import { RouterLink } from '@angular/router';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ParallaxDirective } from '../../../directives/parallax.directive';

@Component({
  selector: 'app-hero-section',
  imports: [NgOptimizedImage, RouterLink, ParallaxDirective],
  host: { class: 'contents' },
  templateUrl: './hero-section.html',
  styleUrl: './hero-section.css'
})
export class HeroSection {
  public readonly achievementStats: { svg: SafeHtml; alt: string; value: string; name: string }[];

  constructor(private sanitizer: DomSanitizer) {
    this.achievementStats = ACHIEVEMENT_STATS.map(stat => ({
      ...stat,
      svg: this.sanitizer.bypassSecurityTrustHtml(stat.svg),
    }));
  }
}
