import { Component } from '@angular/core';
import { Header } from '../../components/shared/header/header';
import { Footer } from '../../components/shared/footer/footer';
import { NgOptimizedImage } from '@angular/common';
import { WhoWeAre } from './who-we-are/who-we-are';

@Component({
  selector: 'app-about-us',
  imports: [Header, Footer, WhoWeAre],
  templateUrl: './about-us.html',
  styleUrl: './about-us.css'
})
export class AboutUs {

}
