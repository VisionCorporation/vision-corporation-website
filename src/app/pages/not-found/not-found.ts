import { Component, Inject, PLATFORM_ID, Optional, REQUEST } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterLink, Router } from '@angular/router';
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
    @Optional() @Inject(REQUEST) private request: any,
    private router: Router,
    private seoService: SeoService,
    private meta: Meta
  ) {
    let pathname = '';

    if (isPlatformBrowser(this.platformId)) {
      pathname = window.location.pathname;
    } else if (this.request) {
      pathname = new URL(this.request.url).pathname;
    } else {
      pathname = this.router.url;
    }

    this.seoService.updatePageSeo({
      title: '404 - Page Not Found | Vision Corporation',
      description: "The page you're looking for doesn't exist. Return to our homepage to explore enterprise software development, IT infrastructure, and strategic consulting.",
      url: 'https://visioncorporationafrica.netlify.app' + pathname,
      image: 'https://visioncorporationafrica.netlify.app/assets/images/404-og.jpeg'
    });

    this.meta.updateTag({ name: 'robots', content: 'noindex, follow' });
  }
}