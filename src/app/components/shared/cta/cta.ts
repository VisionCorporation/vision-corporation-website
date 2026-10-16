import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cta',
  imports: [RouterLink],
  templateUrl: './cta.html',
  styleUrl: './cta.css'
})
export class Cta {
  public readonly heading = input.required<string>();
  public readonly text = input<string>('');
  public readonly primaryLabel = input.required<string>();
  public readonly primaryLink = input<string>('');
  public readonly secondaryLabel = input<string>('');
  public readonly secondaryLink = input<string>('');
}
