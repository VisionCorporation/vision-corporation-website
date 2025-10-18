import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { ACHIEVEMENT_STATS } from '../../../data/constants/achievement-stats.constants';

@Component({
  selector: 'app-hero-section',
  imports: [NgOptimizedImage],
  templateUrl: './hero-section.html',
  styleUrl: './hero-section.css'
})
export class HeroSection {
  public readonly achievementStats = ACHIEVEMENT_STATS;
}
