import { AfterViewInit, Component, Inject, OnDestroy, OnInit, PLATFORM_ID } from '@angular/core';
import AOS from 'aos';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Router, RouterOutlet, NavigationEnd, ActivatedRouteSnapshot, NavigationStart, NavigationCancel, NavigationError } from '@angular/router';
import { filter, Subscription } from 'rxjs';
import { CookiePreferences } from './interfaces/cookies.interface';
import { CONSENT_KEY } from './data/constants/cookies.constants';

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit, AfterViewInit, OnDestroy {
  public loading = false;
  private aosInitialized = false;
  private routerSub!: Subscription;
  private analyticsScriptLoaded = false;

  public isCookieOpen = false;
  public isCustomiseCookieOpen = false;
  public hideCookieBanner = false;

  public cookiePreferences: CookiePreferences = {
    strictlyNecessary: true,
    functional: false,
    analytics: false,
    advertising: false
  };

  constructor(
    @Inject(PLATFORM_ID) private platformId: object,
    private router: Router
  ) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.loading = true;
      }
      if (event instanceof NavigationEnd ||
        event instanceof NavigationCancel ||
        event instanceof NavigationError) {
        this.loading = false;
      }
    });
  }

  ngOnInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    this.checkConsent();

    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        if (this.cookiePreferences.analytics && window.gtag) {
          window.gtag('config', 'G-Y9GGWL1N5Q', {
            page_path: event.urlAfterRedirects
          });
        }
      });
  }

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

  private shouldHideCookieBanner(route: ActivatedRouteSnapshot): boolean {
    if (route.data?.['hideCookieBanner']) return true;
    if (route.firstChild) return this.shouldHideCookieBanner(route.firstChild);
    return false;
  }

  private checkConsent(): void {
    const savedConsent = localStorage.getItem(CONSENT_KEY);

    if (savedConsent) {
      this.isCookieOpen = false;
      this.cookiePreferences = JSON.parse(savedConsent);

      if (this.cookiePreferences.analytics) {
        this.loadAnalyticsScript();
      }
    } else {
      this.isCookieOpen = true;
    }
  }

  private saveConsent(): void {
    localStorage.setItem(CONSENT_KEY, JSON.stringify(this.cookiePreferences));
    this.isCookieOpen = false;
    this.isCustomiseCookieOpen = false;
  }

  private loadAnalyticsScript(): void {
    if (!isPlatformBrowser(this.platformId) || this.analyticsScriptLoaded) return;

    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=G-Y9GGWL1N5Q';
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    window.gtag = window.gtag || function () { window.dataLayer!.push(arguments); };

    window.gtag('js', new Date());
    window.gtag('config', 'G-Y9GGWL1N5Q');

    this.analyticsScriptLoaded = true;
  }

  public toggleCookieBanners(): void {
    this.isCookieOpen = !this.isCookieOpen;
    this.isCustomiseCookieOpen = !this.isCustomiseCookieOpen;
  }

  public closeCookieBanner(): void {
    this.rejectAll();
  }

  public toggleCookie(type: keyof CookiePreferences): void {
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
    this.saveConsent();
    this.loadAnalyticsScript();
  }

  public rejectAll(): void {
    this.cookiePreferences = {
      strictlyNecessary: true,
      functional: false,
      analytics: false,
      advertising: false
    };
    this.saveConsent();
  }

  public confirmCustomiseChoices(): void {
    this.saveConsent();

    if (this.cookiePreferences.analytics) {
      this.loadAnalyticsScript();
    }
  }

  ngOnDestroy(): void {
    if (this.routerSub) {
      this.routerSub.unsubscribe();
    }
  }
}