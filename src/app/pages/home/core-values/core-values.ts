import { NgOptimizedImage } from '@angular/common';
import { Component, inject } from '@angular/core';
import { CORE_VALUES } from '../../../data/constants/core-values.constants';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-core-values',
  imports: [NgOptimizedImage],
  templateUrl: './core-values.html',
  styleUrl: './core-values.css'
})
export class CoreValues {
  private readonly sanitizer = inject(DomSanitizer);

  public readonly coreValues = CORE_VALUES.map(card => ({
    ...card,
    icon: this.sanitizer.bypassSecurityTrustHtml(card.icon)
  }));
}
