import { Component } from '@angular/core';
import { CORE_VALUES } from '../../../data/constants/why-work-with-us.constants';

@Component({
  selector: 'app-why-work-with-us',
  imports: [],
  templateUrl: './why-work-with-us.html',
  styleUrl: './why-work-with-us.css'
})
export class WhyWorkWithUs {
  public readonly coreValues = CORE_VALUES
}
