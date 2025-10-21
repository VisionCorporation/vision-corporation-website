import { AfterViewInit, Component, Inject, PLATFORM_ID } from '@angular/core';
import AOS from 'aos';
import { isPlatformBrowser, NgOptimizedImage } from '@angular/common';
import { Router, RouterOutlet, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgOptimizedImage],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements AfterViewInit {
  private aosInitialized = false;
  public isCookieOpen = true

  constructor(
    @Inject(PLATFORM_ID) private platformId: object,
    private router: Router
  ) { }

  ngAfterViewInit() {
    if (!isPlatformBrowser(this.platformId)) return;

    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        setTimeout(() => {
          if (!this.aosInitialized) {

            AOS.init({
              duration: 500,
              easing: 'ease-out-cubic',
              once: false,
              offset: 90,
              delay: 0
            });
            this.aosInitialized = true;
          } else {

            AOS.refresh();
          }
        }, 200);
      });
  }

  public closeCookieBanner(): void {
    this.isCookieOpen = !this.isCookieOpen
  }
}
