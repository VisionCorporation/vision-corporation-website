import { Component, input, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Calendly } from '../../../services/calendly/calendly'

@Component({
  selector: 'app-cta',
  imports: [RouterLink],
  templateUrl: './cta.html',
  styleUrl: './cta.css'
})
export class Cta {
  private readonly calendlyService = inject(Calendly);

  public readonly heading = input.required<string>();
  public readonly text = input<string>('');
  public readonly primaryLabel = input.required<string>();
  public readonly primaryLink = input<string>('');
  public readonly secondaryLabel = input<string>('');
  public readonly secondaryLink = input<string>('');
  public readonly secondaryType = input<'link' | 'button'>('link');

  public openCalendly(): void {
    this.calendlyService.open();
  }
}