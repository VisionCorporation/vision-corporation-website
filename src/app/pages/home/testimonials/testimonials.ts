import { Component } from '@angular/core';
import { NgOptimizedImage } from "@angular/common";
import { TESTIMONIALS } from '../../../data/constants/testimonials.constants';

@Component({
  selector: 'app-testimonials',
  imports: [NgOptimizedImage],
  templateUrl: './testimonials.html',
  styleUrl: './testimonials.css'
})
export class Testimonials {
  public readonly testimonials = TESTIMONIALS

  public getInitials(name: string): string {
    if (!name) return '';
    return name
      .split(' ')
      .map(word => word.charAt(0))
      .join('')
      .toUpperCase();
  }
}
