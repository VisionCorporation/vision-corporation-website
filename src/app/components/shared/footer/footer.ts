import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FOOTER_CONTACT, FOOTER_LEGAL, FOOTER_MENU, FOOTER_SERVICES, FOOTER_SOCIALS } from '../../../data/constants/footer.constants';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  public readonly currentYear = new Date().getFullYear();
  public readonly footerMenu = FOOTER_MENU
  public readonly footerServices = FOOTER_SERVICES
  public readonly footerLegal = FOOTER_LEGAL
  public readonly footerContact = FOOTER_CONTACT;
  public readonly footerSocials = FOOTER_SOCIALS;
}
