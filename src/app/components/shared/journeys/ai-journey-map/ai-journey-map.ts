import { Component, Input } from '@angular/core';
import { JourneyAiApplicationsData } from '../../../../interfaces/journey.interface';
import { AccentText } from '../../accent-text/accent-text';

@Component({
  selector: 'app-ai-journey-map',
  imports: [AccentText],
  templateUrl: './ai-journey-map.html',
  styleUrl: './ai-journey-map.css'
})
export class AiJourneyMap {
  @Input({ required: true }) data!: JourneyAiApplicationsData;
}
