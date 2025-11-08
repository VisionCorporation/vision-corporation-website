import { Component } from '@angular/core';
import { NgOptimizedImage } from "@angular/common";
import { Header } from '../../components/shared/header/header';
import { Footer } from '../../components/shared/footer/footer';

@Component({
  selector: 'app-contact',
  imports: [NgOptimizedImage, Header, Footer],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {

}
