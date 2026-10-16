import { Component } from '@angular/core';
import { Header } from '../../components/shared/header/header';
import { Footer } from '../../components/shared/footer/footer';
import { RouterLink } from '@angular/router';
import { Cta } from '../../components/shared/cta/cta';
import { BARS, CHANNELS, PROBLEMS, REASONS, SERVICES, STEPS } from '../../data/constants/digital-marketing.constants';

@Component({
  selector: 'app-digital-marketing',
  imports: [Header, Footer, RouterLink, Cta],
  templateUrl: './digital-marketing.html',
  styleUrl: './digital-marketing.css',
  styles: [`
    @keyframes fade-up {
      from { opacity: 0; transform: translateY(24px); }
      to   { opacity: 1; transform: translateY(0); }
    }
    @keyframes float-y {
      0%, 100% { transform: translateY(0); }
      50%      { transform: translateY(-10px); }
    }
    @keyframes grow-y {
      from { transform: scaleY(0); }
      to   { transform: scaleY(1); }
    }
    .fade-up { animation: fade-up 0.8s cubic-bezier(0.22, 1, 0.36, 1) both; }
    .float-a { animation: float-y 6s ease-in-out infinite; }
    .float-b { animation: float-y 7.5s ease-in-out infinite 0.8s; }
    .float-c { animation: float-y 6.8s ease-in-out infinite 1.6s; }
    .grow-bar { transform-origin: bottom; animation: grow-y 0.9s cubic-bezier(0.22, 1, 0.36, 1) both; }
    @media (prefers-reduced-motion: reduce) {
      .fade-up, .float-a, .float-b, .float-c, .grow-bar { animation: none; }
    }
  `],
})
export class DigitalMarketing {
  public readonly channels = CHANNELS
  public readonly bars = BARS
  public readonly problems = PROBLEMS
  public readonly services = SERVICES
  public readonly steps = STEPS
  public readonly reasons = REASONS
}
