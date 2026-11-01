import { DatePipe } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BLOG_CATEGORIES, BLOG_POSTS } from '../../data/constants/blogs.constants';
import { SeoService } from '../../services/seo/seo';

@Component({
  selector: 'app-blogs',
  imports: [RouterLink, DatePipe],
  templateUrl: './blogs.html',
})
export class Blogs {
  private readonly seoService = inject(SeoService);
  protected readonly ALL = 'All';
  protected readonly tabs = [this.ALL, ...BLOG_CATEGORIES];
  protected readonly activeCategory = signal<string>(this.ALL);

  protected readonly featured = computed(() =>
    this.activeCategory() === this.ALL ? BLOG_POSTS.find(p => p.featured) ?? null : null,
  );

  protected readonly posts = computed(() => {
    const selected = this.activeCategory();
    const featuredSlug = this.featured()?.slug;
    return BLOG_POSTS.filter(
      p => (selected === this.ALL || p.category === selected) && p.slug !== featuredSlug,
    ).sort((a, b) => b.date.localeCompare(a.date));
  });

  constructor() {
    this.seoService.updatePageSeo({
      title: 'Blogs - Vision Corporation | Websites, SEO and Digital Marketing Advice',
      description:
        'Practical advice on websites, SEO, digital marketing and building technology in Africa, written in plain language by the Vision Corporation team.',
      url: 'https://visioncorporation.africa/blogs',
      image: 'https://visioncorporation.africa/assets/images/blog-og.jpeg',
    });
  }

  protected viewAll(): void {
    const container = document.getElementById('blog-tabs') as HTMLDivElement | null;
    const allTab = document.getElementById('blog-tab-all') as HTMLButtonElement | null;

    if (container && allTab) {
      this.setActiveCategory(this.ALL, allTab, container);
    } else {
      this.activeCategory.set(this.ALL);
    }
  }

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
}