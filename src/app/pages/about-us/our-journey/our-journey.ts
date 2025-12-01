import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { JOURNEY_INFO } from '../../../data/constants/about-us.constants';

@Component({
  selector: 'app-our-journey',
  imports: [CommonModule],
  templateUrl: './our-journey.html',
  styleUrl: './our-journey.css'
})
export class OurJourney {
  private readonly sanitizer = inject(DomSanitizer);

  public readonly features = JOURNEY_INFO.map(card => ({
    ...card,
    svg: this.sanitizer.bypassSecurityTrustHtml(card.svg)
  }));


  activeIndex = -1;

  setActive(index: number) {
    this.activeIndex = index;
  }

  clearActive() {
    this.activeIndex = -1;
  }
}
