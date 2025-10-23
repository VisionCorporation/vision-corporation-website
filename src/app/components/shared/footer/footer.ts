import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import {
  FooterLinks,
  FooterServices,
  SocialMediaLinks,
} from '../../../data/constants/footer.constants';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  readonly currentYear = new Date().getFullYear();
  readonly footerLinks = FooterLinks;
  readonly footerServices = FooterServices;
  readonly socialMediaLinks: { label: string; url: string; icon: SafeHtml }[];

  constructor(private sanitizer: DomSanitizer) {
    this.socialMediaLinks = SocialMediaLinks.map((link) => ({
      ...link,
      icon: this.sanitizer.bypassSecurityTrustHtml(link.icon),
    }));
  }
}
