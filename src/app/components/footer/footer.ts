import { Component } from '@angular/core';
import { FooterLinks, FooterServices, SocialMediaLinks } from '../../data/constants/footer.constants';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class Footer {
  public readonly currentYear = new Date().getFullYear();
  public readonly footerLinks = FooterLinks;
  public readonly footerServices = FooterServices;
  public readonly socialMediaLinks = SocialMediaLinks;
}
