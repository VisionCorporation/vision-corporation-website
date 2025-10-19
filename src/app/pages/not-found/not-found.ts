import { Component, inject, OnInit } from '@angular/core';
import { SeoService } from '../../services/seo-service';
import { Meta } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-not-found',
  imports: [RouterLink],
  templateUrl: './not-found.html',
  styleUrls: ['./not-found.css']
})
export class NotFound implements OnInit {
  private readonly seoService = inject(SeoService);
  private readonly meta = inject(Meta);

  ngOnInit() {
    this.seoService.updatePageSeo({
      title: '404 - Page Not Found | Vision Corporation',
      description: "The page you're looking for doesn't exist. Return to our homepage to explore enterprise software development, IT infrastructure, and strategic consulting.",
      url: 'https://visioncorporationafrica.netlify.app' + (typeof window !== 'undefined' ? window.location.pathname : ''),
      image: 'https://ogcdn.net/52bb31b7-9adb-4a94-9adb-2fb68c5c1bdb/v1/og.png'
    });

    this.meta.updateTag({ name: 'robots', content: 'noindex, follow' });
  }
}