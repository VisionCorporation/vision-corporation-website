import { Component, Input } from '@angular/core';
import { JourneyWorkData } from '../../../../interfaces/journey.interface';
import { AccentText } from '../../accent-text/accent-text';

@Component({
  selector: 'app-journey-work',
  imports: [AccentText],
  templateUrl: './journey-work.html',
  styleUrl: './journey-work.css'
})
export class JourneyWork {
  @Input({ required: true }) data!: JourneyWorkData;
}
