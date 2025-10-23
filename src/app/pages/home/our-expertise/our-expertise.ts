import {
  Component,
  ViewChild,
  ElementRef,
  AfterViewInit,
  ChangeDetectorRef,
  inject,
  PLATFORM_ID,
} from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { EXPERTISE_CARDS } from '../../../data/constants/expertise.contants';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-our-expertise',
  imports: [CommonModule],
  templateUrl: './our-expertise.html',
  styleUrl: './our-expertise.css',
})
export class OurExpertise implements AfterViewInit {
  @ViewChild('scrollContainer') scrollContainer!: ElementRef;
  private readonly cdr = inject(ChangeDetectorRef);
  private readonly platformId = inject(PLATFORM_ID);
  private readonly sanitizer = inject(DomSanitizer);

  public canScrollLeft = false;
  public canScrollRight = true;
  public isMobile = false;

  public readonly expertiseCards = EXPERTISE_CARDS.map(card => ({
    ...card,
    safeSvg: this.sanitizer.bypassSecurityTrustHtml(card.svg)
  }));


  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.checkIfMobile();
      this.checkScrollPosition();

      window.addEventListener('resize', () => this.checkIfMobile());
    }
  }

  private checkIfMobile(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.isMobile = window.innerWidth < 768;
      this.cdr.detectChanges();
    }
  }

  public scrollToNext(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    const container = this.scrollContainer.nativeElement;
    const scrollAmount = this.isMobile
      ? container.clientWidth
      : 350 + 75;

    container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    setTimeout(() => this.checkScrollPosition(), 400);
  }

  public scrollToPrevious(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    const container = this.scrollContainer.nativeElement;
    const scrollAmount = this.isMobile
      ? container.clientWidth
      : 350 + 75;

    container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    setTimeout(() => this.checkScrollPosition(), 400);
  }

  public checkScrollPosition(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    const container = this.scrollContainer.nativeElement;
    this.canScrollLeft = container.scrollLeft > 0;

    const maxScrollLeft = container.scrollWidth - container.clientWidth;
    this.canScrollRight = container.scrollLeft < maxScrollLeft - 1;

    this.cdr.detectChanges();
  }
}
