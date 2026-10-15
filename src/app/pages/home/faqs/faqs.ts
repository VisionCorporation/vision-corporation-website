import { Component, computed, signal } from '@angular/core';
import { FAQ_CATEGORIES } from '../../../data/constants/faqs.constants';

@Component({
  selector: 'app-faqs',
  imports: [],
  templateUrl: './faqs.html',
  styleUrl: './faqs.css'
})
export class Faqs {
  protected readonly activeCategory = signal('All questions');
  protected readonly openFaq = signal<string | null>(null);

  protected readonly FAQ_TABS = [
    'All questions',
    ...FAQ_CATEGORIES.map((category) => category.label),
  ];

  protected readonly visibleFAQs = computed(() => {
    const selected = this.activeCategory();

    if (selected === 'All questions') {
      return FAQ_CATEGORIES.flatMap((category) => category.faqs);
    }

    return FAQ_CATEGORIES.find(
      (category) => category.label === selected,
    )?.faqs ?? [];
  });

  protected setActiveCategory(
    category: string,
    tabButton: HTMLButtonElement,
    tabContainer: HTMLDivElement
  ): void {
    this.activeCategory.set(category);

    if (typeof window === 'undefined' || window.innerWidth >= 768) {
      return;
    }

    const containerRect = tabContainer.getBoundingClientRect();
    const buttonRect = tabButton.getBoundingClientRect();

    const scrollLeft =
      tabContainer.scrollLeft +
      buttonRect.left -
      containerRect.left -
      (containerRect.width - buttonRect.width) / 2;

    tabContainer.scrollTo({
      left: scrollLeft,
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches
        ? 'auto'
        : 'smooth',
    });
  }

  protected toggleFaq(question: string): void {
    this.openFaq.update((current) =>
      current === question ? null : question
    );
  }
}
