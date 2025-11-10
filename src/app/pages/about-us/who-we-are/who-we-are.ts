import { Component, inject } from '@angular/core';
import { WHO_WE_ARE } from '../../../data/constants/about-us.constants';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-who-we-are',
  imports: [],
  templateUrl: './who-we-are.html',
  styleUrl: './who-we-are.css'
})
export class WhoWeAre {
  private readonly sanitizer = inject(DomSanitizer);

  public readonly whoWeAre = WHO_WE_ARE.map(card => ({
    ...card,
    svg: this.sanitizer.bypassSecurityTrustHtml(card.svg)
  }));
}
