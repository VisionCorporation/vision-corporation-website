import { Component, DOCUMENT, effect, HostListener, inject, signal } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { HEADER_NAV_LINKS } from '../../../data/constants/header.constants';
import { filter } from 'rxjs';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  public readonly headerNavLinks = HEADER_NAV_LINKS
  private document = inject(DOCUMENT);
  public menuOpen = signal(false);
  public scrolled = signal(false);
  public activeDropdown = signal<string | null>(null);
  public mobileExpanded = signal<string | null>(null);

  private readonly router = inject(Router);
  readonly currentFragment = signal<string | null>(
    this.router.parseUrl(this.router.url).fragment
  );

  constructor() {
    effect(() => {
      this.document.body.style.overflow = this.menuOpen() ? 'hidden' : '';
    });

    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.currentFragment.set(
          this.router.parseUrl(this.router.url).fragment
        );
      });
  }

  public toggleMenu() {
    this.menuOpen.update(open => !open);
  }

  public closeMenu() {
    this.menuOpen.set(false);
    this.mobileExpanded.set(null);
  }

  public openDropdown(label: string) {
    this.activeDropdown.set(label);
  }

  public closeDropdown() {
    this.activeDropdown.set(null);
  }

  public toggleMobileSub(label: string) {
    this.mobileExpanded.update(v => (v === label ? null : label));
  }

  @HostListener('document:keydown.escape')
  onEscape() { this.closeMenu(); }

  @HostListener('window:resize')
  onResize() {
    if (window.innerWidth >= 1024) this.closeMenu();
  }

  @HostListener('window:scroll')
  onScroll() {
    this.scrolled.set(window.scrollY > 10);
  }
}