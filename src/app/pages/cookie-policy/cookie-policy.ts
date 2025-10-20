import { Component, inject } from '@angular/core';
import { Header } from '../../components/shared/header/header';
import { Footer } from '../../components/shared/footer/footer';
import { SeoService } from '../../services/seo-service';

@Component({
  selector: 'app-cookie-policy',
  imports: [Header, Footer],
  templateUrl: './cookie-policy.html',
  styleUrl: './cookie-policy.css'
})
export class CookiePolicy {
  private readonly seoService = inject(SeoService);

  constructor() {
    this.seoService.updatePageSeo({
      title: 'Cookie Policy - Vision Corporation | How We Use Cookies',
      description: 'Learn how Vision Corporation uses cookies to enhance website functionality, improve user experience, and ensure transparency, privacy, and data protection.',
      url: 'https://visioncorporationafrica.netlify.app/cookie-policy',
      image: 'https://visioncorporationafrica.netlify.app/assets/images/cookie-policy-og.jpeg'
    });
  }
}
