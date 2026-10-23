import { Component, inject } from '@angular/core';
import { HOW_IT_WORKS_STEPS } from '../../../data/constants/how-it-works.constants';
import { Calendly } from '../../../services/calendly/calendly';

@Component({
  selector: 'app-how-it-works',
  imports: [],
  templateUrl: './how-it-works.html',
  styleUrl: './how-it-works.css'
})
export class HowItWorks {
  public howItWorksSteps = HOW_IT_WORKS_STEPS
  private readonly calendlyService = inject(Calendly)

  public openCalendly(): void {
    this.calendlyService.open();
  }

}
