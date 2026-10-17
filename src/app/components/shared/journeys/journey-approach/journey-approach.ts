import { Component, Input } from '@angular/core';
import { JourneyApproachData } from '../../../../interfaces/journey.interface';
import { AccentText } from '../../accent-text/accent-text';

@Component({
  selector: 'app-journey-approach',
  imports: [AccentText],
  templateUrl: './journey-approach.html',
  styleUrl: './journey-approach.css'
})
export class JourneyApproach {
  @Input({ required: true }) data!: JourneyApproachData;
}
