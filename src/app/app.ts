import { AfterViewInit, Component, Inject, OnDestroy, PLATFORM_ID } from '@angular/core';
import AOS from 'aos';
import { isPlatformBrowser, NgOptimizedImage } from '@angular/common';
import { Router, RouterOutlet, NavigationEnd, ActivatedRouteSnapshot } from '@angular/router';
import { filter, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgOptimizedImage],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements AfterViewInit, OnDestroy {
  private aosInitialized = false;
  private routerSub!: Subscription;

  public isCookieOpen = true;
  public isCustomiseCookieOpen = false;
  public hideCookieBanner = false;

  public cookiePreferences = {
    strictlyNecessary: true,
    functional: false,
    analytics: false,
    advertising: false
  };

  constructor(
    @Inject(PLATFORM_ID) private platformId: object,
    private router: Router
  ) { }

  ngAfterViewInit() {
    if (!isPlatformBrowser(this.platformId)) return;

    this.routerSub = this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {

        if (!this.aosInitialized) {
          AOS.init({
            duration: 400,
            easing: 'ease-out-cubic',
            once: false,
            offset: 90,
            delay: 0,
          });
          this.aosInitialized = true;
        } else {
          AOS.refreshHard();
        }

        const rootRoute = this.router.routerState.snapshot.root;
        this.hideCookieBanner = this.shouldHideCookieBanner(rootRoute);
      });
  }

  ngOnDestroy(): void {
    if (this.routerSub) {
      this.routerSub.unsubscribe();
    }
  }

  private shouldHideCookieBanner(route: ActivatedRouteSnapshot): boolean {
    if (route.data?.['hideCookieBanner']) return true;
    if (route.firstChild) return this.shouldHideCookieBanner(route.firstChild);
    return false;
  }

  public closeCookieBanner(): void {
    this.isCookieOpen = !this.isCookieOpen;
  }

  public toggleCookieBanners(): void {
    this.isCookieOpen = !this.isCookieOpen;
    this.isCustomiseCookieOpen = !this.isCustomiseCookieOpen;
  }

  public confirmCustomiseChoices(): void {
    this.isCustomiseCookieOpen = !this.isCustomiseCookieOpen;
  }

  public toggleCookie(type: 'strictlyNecessary' | 'functional' | 'analytics' | 'advertising'): void {
    if (type === 'strictlyNecessary') return;
    this.cookiePreferences[type] = !this.cookiePreferences[type];
  }

  public acceptAll(): void {
    this.cookiePreferences = {
      strictlyNecessary: true,
      functional: true,
      analytics: true,
      advertising: true
    };
  }

  public rejectAll(): void {
    this.cookiePreferences = {
      strictlyNecessary: true,
      functional: false,
      analytics: false,
      advertising: false
    };
  }
}
