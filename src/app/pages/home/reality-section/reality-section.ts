import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-reality-section',
  imports: [NgOptimizedImage, RouterLink],
  templateUrl: './reality-section.html',
  styleUrl: './reality-section.css'
})
export class RealitySection {

}
