import { Component } from '@angular/core';
import { Cta } from '../../components/shared/cta/cta';
import { RouterLink } from '@angular/router';
import { GROWTH, JOURNEYS, PRINCIPLES, VALUES, WHAT_WE_BUILD } from '../../data/constants/why-vision.constants';

@Component({
  selector: 'app-why-vision',
  imports: [Cta, RouterLink],
  templateUrl: './why-vision.html',
  styleUrl: './why-vision.css'
})
export class WhyVision {
  public readonly webBuilds = WHAT_WE_BUILD
  public readonly growth = GROWTH
  public readonly journeys = JOURNEYS
  public readonly principles = PRINCIPLES
  public readonly values = VALUES
}
