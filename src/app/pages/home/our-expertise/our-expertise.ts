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
  private currentIndex = 0;

  public readonly expertiseCards = EXPERTISE_CARDS.map(card => ({
    ...card,
    safeSvg: this.sanitizer.bypassSecurityTrustHtml(card.svg)
  }));


  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.checkScrollPosition();
      window.addEventListener('resize', () => this.checkScrollPosition());
    }
  }

  private getCardWidthAndGap(): { cardWidth: number; gap: number } {
    if (!isPlatformBrowser(this.platformId)) return { cardWidth: 0, gap: 0 };

    const windowWidth = window.innerWidth;

    if (windowWidth < 640) {
      return { cardWidth: 280, gap: 16 };
    } else if (windowWidth < 768) {
      return { cardWidth: 320, gap: 24 };
    } else if (windowWidth < 1024) {
      return { cardWidth: 350, gap: 30 };
    } else {
      return { cardWidth: 350, gap: 75 };
    }
  }

  public scrollToNext(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    const container: HTMLElement = this.scrollContainer.nativeElement;
    const cards: NodeListOf<HTMLElement> = container.querySelectorAll('.expertise-card');
    if (!cards || cards.length === 0) return;

    const containerRect = container.getBoundingClientRect();
    const scrollLeft = container.scrollLeft;

    let currentVisibleIndex = 0;
    for (let i = 0; i < cards.length; i++) {
      const cardRect = cards[i].getBoundingClientRect();
      const cardLeft = cardRect.left - containerRect.left + scrollLeft;
      if (cardLeft >= scrollLeft - 1) {
        currentVisibleIndex = i;
        break;
      }
    }

    let nextIndex = Math.min(currentVisibleIndex + 1, cards.length - 1);
    const targetCard = cards[nextIndex];
    const targetRect = targetCard.getBoundingClientRect();
    const targetLeft = targetRect.left - containerRect.left + scrollLeft;

    container.scrollTo({ left: targetLeft, behavior: 'smooth' });
    this.currentIndex = nextIndex;
    setTimeout(() => this.checkScrollPosition(), 400);
  }

  public scrollToPrevious(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    const container: HTMLElement = this.scrollContainer.nativeElement;
    const cards: NodeListOf<HTMLElement> = container.querySelectorAll('.expertise-card');
    if (!cards || cards.length === 0) return;

    const containerRect = container.getBoundingClientRect();
    const scrollLeft = container.scrollLeft;


    if (scrollLeft < 10) {
      container.scrollTo({ left: 0, behavior: 'smooth' });
      this.currentIndex = 0;
      setTimeout(() => this.checkScrollPosition(), 400);
      return;
    }

    let currentVisibleIndex = 0;
    for (let i = 0; i < cards.length; i++) {
      const cardRect = cards[i].getBoundingClientRect();
      const cardLeft = cardRect.left - containerRect.left + scrollLeft;
      if (cardLeft >= scrollLeft - 1) {
        currentVisibleIndex = i;
        break;
      }
    }

    let prevIndex = Math.max(currentVisibleIndex - 1, 0);
    const targetCard = cards[prevIndex];
    const targetRect = targetCard.getBoundingClientRect();
    const targetLeft = targetRect.left - containerRect.left + scrollLeft;

    container.scrollTo({ left: targetLeft, behavior: 'smooth' });
    this.currentIndex = prevIndex;
    setTimeout(() => this.checkScrollPosition(), 400);
  }

  public checkScrollPosition(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    const container = this.scrollContainer.nativeElement;

    this.canScrollLeft = container.scrollLeft > 5;

    const maxScrollLeft = container.scrollWidth - container.clientWidth;
    this.canScrollRight = container.scrollLeft < maxScrollLeft - 1;

    this.cdr.detectChanges();
  }
}