import { Component } from '@angular/core';
import { FooterLinks, FooterServices, SocialMediaLinks } from '../../../data/constants/footer.constants';
import { RouterLink } from '@angular/router';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-footer',
  imports: [RouterLink, NgOptimizedImage],
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class Footer {
  public readonly currentYear = new Date().getFullYear();
  public readonly footerLinks = FooterLinks;
  public readonly footerServices = FooterServices;
  public readonly socialMediaLinks = SocialMediaLinks;
}
