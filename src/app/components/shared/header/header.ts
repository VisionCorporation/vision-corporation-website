import { Component, DOCUMENT, effect, HostListener, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HEADER_NAV_LINKS } from '../../../data/constants/header.constants';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  public readonly headerNavLinks = HEADER_NAV_LINKS
  private document = inject(DOCUMENT);
  public menuOpen = signal(false);
  public scrolled = signal(false);

  constructor() {
    effect(() => {
      this.document.body.style.overflow = this.menuOpen() ? 'hidden' : '';
    });
  }

  public toggleMenu() { this.menuOpen.update(open => !open); }
  public closeMenu() { this.menuOpen.set(false); }

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