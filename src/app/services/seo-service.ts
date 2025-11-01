import { Injectable, inject, DOCUMENT } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SeoService {
  private readonly meta = inject(Meta);
  private readonly title = inject(Title);
  private readonly document = inject(DOCUMENT);

  public updatePageSeo(config: {
    title: string;
    description: string;
    url: string;
    image?: string;
  }) {
    // Update title
    this.title.setTitle(config.title);

    // Update standard meta tags
    this.meta.updateTag({ name: 'description', content: config.description });

    // Update Open Graph tags
    this.meta.updateTag({ property: 'og:title', content: config.title });
    this.meta.updateTag({ property: 'og:description', content: config.description });
    this.meta.updateTag({ property: 'og:url', content: config.url });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    if (config.image) {
      this.meta.updateTag({ property: 'og:image', content: config.image });
    }

    // Update Twitter tags
    this.meta.updateTag({ name: 'twitter:title', content: config.title });
    this.meta.updateTag({ name: 'twitter:description', content: config.description });
    this.meta.updateTag({ property: 'twitter:url', content: config.url });
    if (config.image) {
      this.meta.updateTag({ name: 'twitter:image', content: config.image });
    }

    // Update canonical link
    this.updateCanonicalUrl(config.url);
  }

  private updateCanonicalUrl(url: string) {
    let link: HTMLLinkElement | null = this.document.querySelector("link[rel='canonical']");
    if (link) {
      link.setAttribute('href', url);
    } else {
      link = this.document.createElement('link');
      link.setAttribute('rel', 'canonical');
      link.setAttribute('href', url);
      this.document.head.appendChild(link);
    }
  }
}
