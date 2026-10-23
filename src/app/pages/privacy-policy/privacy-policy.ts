
import { Component, inject } from '@angular/core';
import { SeoService } from '../../services/seo/seo';
import { SECTIONS } from '../../data/constants/privacy-policy.constants';



@Component({
  selector: 'app-privacy-policy',
  imports: [],
  templateUrl: './privacy-policy.html',
})
export class PrivacyPolicy {
  public readonly lastUpdated = 'November 23, 2025';
  public readonly email = 'info@visioncorporation.africa';
  public readonly phone = '+233561251006';
  private readonly seoService = inject(SeoService);
  readonly sections = SECTIONS;

  constructor() {
    this.seoService.updatePageSeo({
      title: 'Privacy Policy | Vision Corporation',
      description:
        'Read Vision corporation\'s privacy policy to learn how we collect, use, and protect your personal data and information.',
      url: 'https://visioncorporation.africa/privacy-policy',
      image: 'https://visioncorporation.africa/assets/images/privacy-policy-og-image.jpeg',
    });
  }
}
