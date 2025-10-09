import { Component } from '@angular/core';
import { NgOptimizedImage } from "@angular/common";
import { TESTIMONIALS } from '../../data/constants/testimonials.constants';

@Component({
  selector: 'app-testimonials',
  imports: [NgOptimizedImage],
  templateUrl: './testimonials.html',
  styleUrl: './testimonials.css'
})
export class Testimonials {
  public readonly testimonials = TESTIMONIALS
}
