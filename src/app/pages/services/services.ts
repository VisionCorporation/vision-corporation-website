import { Component } from '@angular/core';
import { Header } from '../../components/shared/header/header';
import { Footer } from '../../components/shared/footer/footer';

@Component({
  selector: 'app-services',
  imports: [Header, Footer],
  templateUrl: './services.html',
  styleUrl: './services.css'
})
export class Services {

}
