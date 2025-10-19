import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Meta } from '@angular/platform-browser';
import { SeoService } from '../../services/seo-service';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './not-found.html',
  styleUrls: ['./not-found.css']
})
export class NotFound {
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private seoService: SeoService,
    private meta: Meta
  ) {
    const pathname = isPlatformBrowser(this.platformId)
      ? window.location.pathname
      : '';

    this.seoService.updatePageSeo({
      title: '404 - Page Not Found | Vision Corporation',
      description: "The page you're looking for doesn't exist. Return to our homepage to explore enterprise software development, IT infrastructure, and strategic consulting.",
      url: 'https://visioncorporationafrica.netlify.app' + pathname,
      image: 'https://ogcdn.net/52bb31b7-9adb-4a94-9adb-2fb68c5c1bdb/v1/og.png'
    });

    this.meta.updateTag({ name: 'robots', content: 'noindex, follow' });
  }
}