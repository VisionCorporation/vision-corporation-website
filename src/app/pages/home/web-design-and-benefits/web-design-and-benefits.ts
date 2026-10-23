import { isPlatformBrowser } from '@angular/common';
import { Component, inject, PLATFORM_ID, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { WEB_DEVELOPMENT_AUDIENCES, WEB_DEVELOPMENT_BENEFITS } from '../../../data/constants/web-design-and-benefits.constants';

@Component({
  selector: 'app-web-design-and-benefits',
  imports: [RouterLink],
  templateUrl: './web-design-and-benefits.html',
  styleUrl: './web-design-and-benefits.css'
})
export class WebDesignAndBenefits {
  public readonly audiences = WEB_DEVELOPMENT_AUDIENCES;
  public readonly benefits = WEB_DEVELOPMENT_BENEFITS;

  private platformId = inject(PLATFORM_ID);
  private alive = true;

  public readonly queries = [
    'best bakery near me',
    'affordable electrician in Accra',
    'wedding photographer near me',
  ];
  public readonly typed = signal('');
  public readonly showYou = signal(false);      

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) this.runDemo();
  }

  ngOnDestroy() { this.alive = false; }

  private sleep(ms: number) { return new Promise(r => setTimeout(r, ms)); }

  private async runDemo() {
    let i = 0;
    while (this.alive) {
      const q = this.queries[i++ % this.queries.length];
      this.typed.set('');
      this.showYou.set(false);
      await this.sleep(600);

      for (const ch of q) {
        if (!this.alive) return;
        this.typed.update(t => t + ch);
        await this.sleep(70 + Math.random() * 60);
      }

      await this.sleep(400);
      await this.sleep(900);
      this.showYou.set(true);
      await this.sleep(5000);
    }
  }
}
