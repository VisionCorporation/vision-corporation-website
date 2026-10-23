import { Component, inject } from '@angular/core';
import { SeoService } from '../../services/seo/seo';
import { SECTIONS } from '../../data/constants/terms-of-service.constants';

@Component({
  selector: 'app-terms-of-service',
  imports: [],
  templateUrl: './terms-of-service.html',
})
export class TermsOfService {
  readonly lastUpdated = 'November 21, 2025';
  readonly email = 'info@visioncorporation.africa';
  readonly phone = '+233561251006';
  private readonly seoService = inject(SeoService);
  readonly sections = SECTIONS;

  constructor() {
    this.seoService.updatePageSeo({
      title: 'Terms of Service | Vision Corporation',
      description:
        'Review the Terms of Service and conditions for using Vision Corporation\'s website and services.',
      url: 'https://visioncorporation.africa/terms-of-service',
      image: 'https://visioncorporation.africa/assets/images/terms-of-service-og.jpeg',
    });
  }
}