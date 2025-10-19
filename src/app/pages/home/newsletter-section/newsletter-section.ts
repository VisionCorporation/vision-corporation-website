import { Component } from '@angular/core';
import { NgOptimizedImage } from "@angular/common";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-newsletter-section',
  imports: [NgOptimizedImage, RouterLink],
  templateUrl: './newsletter-section.html',
  styleUrl: './newsletter-section.css'
})
export class NewsletterSection {

}
