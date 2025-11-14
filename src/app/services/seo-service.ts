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
    // Normalize URL (remove trailing slash)
    const url = this.normalizeUrl(config.url);

    this.title.setTitle(config.title);
    this.meta.updateTag({ name: 'description', content: config.description });

    // Open Graph
    this.meta.updateTag({ property: 'og:title', content: config.title });
    this.meta.updateTag({ property: 'og:description', content: config.description });
    this.meta.updateTag({ property: 'og:url', content: url });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    if (config.image) this.meta.updateTag({ property: 'og:image', content: config.image });

    // Twitter
    this.meta.updateTag({ name: 'twitter:title', content: config.title });
    this.meta.updateTag({ name: 'twitter:description', content: config.description });
    this.meta.updateTag({ property: 'twitter:url', content: url });
    if (config.image) this.meta.updateTag({ name: 'twitter:image', content: config.image });

    // Canonical
    this.updateCanonicalUrl(url);
  }

  private normalizeUrl(url: string): string {
    // Remove trailing slash if not the root domain
    const origin = new URL(url).origin;
    return url.endsWith('/') && url !== `${origin}/` ? url.slice(0, -1) : url;
  }


  private updateCanonicalUrl(url: string) {
    // Remove trailing slash if present (except for domain root)
    const normalizedUrl =
      url.endsWith('/') && url !== `${new URL(url).origin}/` ? url.slice(0, -1) : url;

    let link: HTMLLinkElement | null = this.document.querySelector("link[rel='canonical']");
    if (link) {
      link.setAttribute('href', normalizedUrl);
    } else {
      link = this.document.createElement('link');
      link.setAttribute('rel', 'canonical');
      link.setAttribute('href', normalizedUrl);
      this.document.head.appendChild(link);
    }
  }

}
