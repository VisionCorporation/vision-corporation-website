import { Component, ViewChild, ElementRef, AfterViewInit, ChangeDetectorRef, inject } from '@angular/core';
import { CommonModule, NgOptimizedImage } from "@angular/common";
import { EXPERTISE_CARDS } from '../../data/constants/expertise.contants';

@Component({
  selector: 'app-our-expertise',
  imports: [NgOptimizedImage, CommonModule],
  templateUrl: './our-expertise.html',
  styleUrl: './our-expertise.css'
})
export class OurExpertise implements AfterViewInit {
  @ViewChild('scrollContainer') scrollContainer!: ElementRef;
  public readonly expertiseCards = EXPERTISE_CARDS
  private readonly cdr = inject(ChangeDetectorRef)
  public canScrollLeft = false;
  public canScrollRight = true;


  ngAfterViewInit() {
    setTimeout(() => {
      this.checkScrollPosition();
    }, 0);
  }

  public scrollToNext(): void {
    const container = this.scrollContainer.nativeElement;
    const cardWidth = 350;
    const gap = 75;
    const scrollAmount = cardWidth + gap;

    container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    setTimeout(() => this.checkScrollPosition(), 300);
  }

  public scrollToPrevious(): void {
    const container = this.scrollContainer.nativeElement;
    const cardWidth = 350;
    const gap = 75;
    const scrollAmount = cardWidth + gap;

    container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    setTimeout(() => this.checkScrollPosition(), 300);
  }

  public checkScrollPosition(): void {
    const container = this.scrollContainer.nativeElement;
    this.canScrollLeft = container.scrollLeft > 0;

    const maxScrollLeft = container.scrollWidth - container.clientWidth;
    this.canScrollRight = container.scrollLeft < maxScrollLeft - 1;
  }
}