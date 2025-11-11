import { Component } from '@angular/core';
import { Header } from '../../components/shared/header/header';
import { Footer } from '../../components/shared/footer/footer';
import { NgOptimizedImage } from '@angular/common';
import { WhoWeAre } from './who-we-are/who-we-are';
import { OurVision } from './our-vision/our-vision';
import { OurJourney } from './our-journey/our-journey';
import { OurPhilosophy } from './our-philosophy/our-philosophy';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about-us',
  imports: [Header, Footer, WhoWeAre, OurVision, OurJourney, OurPhilosophy, RouterLink],
  templateUrl: './about-us.html',
  styleUrl: './about-us.css'
})
export class AboutUs {

}
