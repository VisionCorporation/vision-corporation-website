import {
  Component,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { OUR_JOURNEY_DATA } from '../../../data/constants/our-journey.contants';

@Component({
  selector: 'app-our-journey',
  imports: [CommonModule],
  host: { class: 'contents' },
  templateUrl: './our-journey.html',
  styleUrl: './our-journey.css'
})
export class OurJourney {
  public readonly journeys = OUR_JOURNEY_DATA;
  public readonly duration = 5000;
  public readonly current = signal(0);
  public readonly paused = signal(false);

  public next(): void {
    this.current.update(i => (i + 1) % this.journeys.length);
  }

  public go(i: number): void {
    this.current.set(i);
  }

  public togglePause(): void {
    this.paused.update(p => !p);
  }
}