import { Component } from '@angular/core';
import { HOW_IT_WORKS_STEPS } from '../../../data/constants/how-it-works.constants';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-how-it-works',
  imports: [ RouterLink],
  templateUrl: './how-it-works.html',
  styleUrl: './how-it-works.css'
})
export class HowItWorks {
  public howItWorksSteps = HOW_IT_WORKS_STEPS
}
