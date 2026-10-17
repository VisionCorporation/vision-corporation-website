import { Component, Input } from '@angular/core';
import { JourneyHeroData } from '../../../../interfaces/journey.interface';
import { RouterLink } from '@angular/router';
import { AccentText } from '../../accent-text/accent-text';

@Component({
  selector: 'app-journey-hero',
  imports: [RouterLink, AccentText],
  templateUrl: './journey-hero.html',
  styleUrl: './journey-hero.css'
})
export class JourneyHero {
  @Input({ required: true }) label!: string;
  @Input({ required: true }) data!: JourneyHeroData;
}
