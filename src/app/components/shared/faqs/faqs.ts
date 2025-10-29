import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CATEGORIES, FAQS } from '../../../data/constants/faqs.constants';

@Component({
  selector: 'app-faqs',
  imports: [CommonModule],
  templateUrl: './faqs.html',
  styleUrl: './faqs.css'
})
export class Faqs {
   @ViewChildren('tabButton') tabButtons!: QueryList<ElementRef>;
  public categories = CATEGORIES
  public activeTab: (typeof CATEGORIES)[number] = this.categories[0];
  public faqs = FAQS;

  public expandedIndex: number | null = null;

  public setActive(tab: (typeof CATEGORIES)[number]): void {
    this.activeTab = tab;
    this.expandedIndex = null;

    // Scroll the selected tab into view
    setTimeout(() => {
      const index = this.categories.indexOf(tab);
      const button = this.tabButtons.toArray()[index];
      if (button) {
        button.nativeElement.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'center'
        });
      }
    }, 0);
  }

  public toggle(index: number): void {
    this.expandedIndex = this.expandedIndex === index ? null : index;
  }
}
