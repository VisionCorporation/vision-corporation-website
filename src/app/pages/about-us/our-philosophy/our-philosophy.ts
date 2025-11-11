import { Component, inject } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { OUR_PHILOSOPHY } from '../../../data/constants/about-us.constants';

@Component({
  selector: 'app-our-philosophy',
  imports: [],
  templateUrl: './our-philosophy.html',
  styleUrl: './our-philosophy.css'
})
export class OurPhilosophy {
  private readonly sanitizer = inject(DomSanitizer);

  public readonly ourPhilosopy = OUR_PHILOSOPHY.map(card => ({
    ...card,
    svg: this.sanitizer.bypassSecurityTrustHtml(card.svg)
  }));
}
