import { Component, inject, PLATFORM_ID } from '@angular/core';
import { HOW_IT_WORKS_STEPS } from '../../../data/constants/how-it-works.constants';
import { isPlatformBrowser } from '@angular/common';

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: { url: string }) => void;
    };
  }
}

@Component({
  selector: 'app-how-it-works',
  imports: [],
  templateUrl: './how-it-works.html',
  styleUrl: './how-it-works.css'
})
export class HowItWorks {
  public howItWorksSteps = HOW_IT_WORKS_STEPS
  private readonly platformId = inject(PLATFORM_ID)
  private calendlyScriptPromise?: Promise<void>;

  public openCalendly(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    this.loadCalendly().then(() => {
      window.Calendly?.initPopupWidget({
        url: 'https://calendly.com/visioncorporationafrica/30min',
      });
    }).catch((error) => {
      console.error('Unable to load Calendly:', error);
    });
  }

  private loadCalendly(): Promise<void> {
    if (window.Calendly) return Promise.resolve();

    if (this.calendlyScriptPromise) {
      return this.calendlyScriptPromise;
    }

    this.calendlyScriptPromise = new Promise<void>((resolve, reject) => {
      const script = document.createElement('script');

      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;

      script.onload = () => {
        if (window.Calendly) {
          resolve();
        } else {
          this.calendlyScriptPromise = undefined;
          reject(new Error('Calendly did not initialize.'));
        }
      };

      script.onerror = () => {
        this.calendlyScriptPromise = undefined;
        reject(new Error('Failed to load Calendly script.'));
      };

      document.head.appendChild(script);
    });

    return this.calendlyScriptPromise;
  }
}
