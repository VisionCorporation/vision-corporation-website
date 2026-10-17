import { Component, Input } from '@angular/core';
import { JourneyProblemData } from '../../../../interfaces/journey.interface';
import { AccentText } from '../../accent-text/accent-text';

@Component({
  selector: 'app-journey-problem',
  imports: [AccentText],
  templateUrl: './journey-problem.html',
  styleUrl: './journey-problem.css'
})
export class JourneyProblem {
  @Input({ required: true }) data!: JourneyProblemData;
}
