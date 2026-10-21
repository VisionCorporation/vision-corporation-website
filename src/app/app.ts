import { AfterViewInit, Component, inject, OnDestroy, OnInit, PLATFORM_ID } from '@angular/core';
import AOS from 'aos';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Router, RouterOutlet, NavigationEnd, ActivatedRouteSnapshot } from '@angular/router';
import { filter, Subscription } from 'rxjs';
import { CookiePreferences } from './interfaces/cookies.interface';
import { CONSENT_KEY } from './data/constants/cookies.constants';
import { Header } from './components/shared/header/header';
import { Footer } from './components/shared/footer/footer';

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, Header, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit, AfterViewInit, OnDestroy {
  private aosInitialized = false;
  private routerSub!: Subscription;
  private analyticsScriptLoaded = false;
  private readonly router = inject(Router)
  private readonly platformId = inject(PLATFORM_ID)
  public isCookieOpen = false;
  public isCustomiseCookieOpen = false;
  public hideCookieBanner = false;

  public cookiePreferences: CookiePreferences = {
    strictlyNecessary: true,
    functional: false,
    analytics: false,
    advertising: false
  };

  ngOnInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    this.checkConsent();

    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        if (this.cookiePreferences.analytics && window.gtag) {
          window.gtag('config', 'G-ZJXXM97TJ5', {
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
          setTimeout(() => AOS.refreshHard());
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
    script.src = 'https://www.googletagmanager.com/gtag/js?id=G-ZJXXM97TJ5';
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    window.gtag = window.gtag || function () { window.dataLayer!.push(arguments); };

    window.gtag('js', new Date());
    window.gtag('config', 'G-ZJXXM97TJ5');

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