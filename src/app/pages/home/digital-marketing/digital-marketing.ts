import { Component } from '@angular/core';
import { MARKETING_SERVICES } from '../../../data/constants/digital-marketing.constants';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-digital-marketing',
  imports: [RouterLink],
  templateUrl: './digital-marketing.html',
  styleUrl: './digital-marketing.css'
})
export class DigitalMarketing {
  public readonly marketingServices = MARKETING_SERVICES
}
