import { Component, Input } from '@angular/core';
import { JourneyWhyVisionData } from '../../../../interfaces/journey.interface';
import { AccentText } from '../../accent-text/accent-text';

@Component({
  selector: 'app-journey-why-vision',
  imports: [AccentText],
  templateUrl: './journey-why-vision.html',
  styleUrl: './journey-why-vision.css'
})
export class JourneyWhyVision {
  @Input({ required: true }) data!: JourneyWhyVisionData;
}
