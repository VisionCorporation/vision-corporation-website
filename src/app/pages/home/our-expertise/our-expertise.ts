import {
  Component,
  ViewChild,
  ElementRef,
  AfterViewInit,
  ChangeDetectorRef,
  inject,
  PLATFORM_ID,
} from '@angular/core';
import { CommonModule, NgOptimizedImage, isPlatformBrowser } from '@angular/common';
import { EXPERTISE_CARDS } from '../../../data/constants/expertise.contants';

@Component({
  selector: 'app-our-expertise',
  imports: [NgOptimizedImage, CommonModule],
  templateUrl: './our-expertise.html',
  styleUrl: './our-expertise.css',
})
export class OurExpertise implements AfterViewInit {
  @ViewChild('scrollContainer') scrollContainer!: ElementRef;
  public readonly expertiseCards = EXPERTISE_CARDS;
  private readonly cdr = inject(ChangeDetectorRef);
  private readonly platformId = inject(PLATFORM_ID);

  public canScrollLeft = false;
  public canScrollRight = true;
  public isMobile = false; // SSR-safe flag

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      // Safe to access window here
      this.checkIfMobile();
      this.checkScrollPosition();

      // Optional: update when window resizes
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
      ? container.clientWidth // one full card width on mobile
      : 350 + 75; // card width + gap on desktop

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
