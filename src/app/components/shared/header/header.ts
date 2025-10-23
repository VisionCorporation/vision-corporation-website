import { Component, Renderer2, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  public isMenuOpen = false;
  public isClosing = false;
  private renderer = inject(Renderer2);

  public toggleMenu(): void {
    if (this.isMenuOpen) {
      this.closeMenu();
    } else {
      this.openMenu();
    }
  }

  public openMenu(): void {
    this.isMenuOpen = true;
    this.isClosing = false;
    this.updateBodyScroll();
  }

  public closeMenu(): void {
    this.isClosing = true;

    setTimeout(() => {
      this.isMenuOpen = false;
      this.isClosing = false;
      this.updateBodyScroll();
    }, 300);
  }

  private updateBodyScroll(): void {
    if (this.isMenuOpen) {
      this.renderer.setStyle(document.body, 'overflow', 'hidden');
    } else {
      this.renderer.removeStyle(document.body, 'overflow');
    }
  }
}