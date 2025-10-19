import { Component, OnInit } from '@angular/core';
import { SeoService } from '../../services/seo-service';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.html',
  styleUrls: ['./not-found.css']
})
export class NotFound implements OnInit {
  constructor(
    private seoService: SeoService,
    private meta: Meta
  ) { }

  ngOnInit() {
    this.seoService.updatePageSeo({
      title: '404 - Page Not Found | Vision Corporation',
      description: 'The page you are looking for could not be found. Return to Vision Corporation homepage for enterprise IT solutions.',
      url: 'https://visioncorporationafrica.netlify.app' + (typeof window !== 'undefined' ? window.location.pathname : ''),
      image: 'https://visioncorporationafrica.netlify.app/assets/images/404-og-image.png'
    });

    this.meta.updateTag({ name: 'robots', content: 'noindex, follow' });
  }
}