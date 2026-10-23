
import { DOCUMENT } from '@angular/common';
import { Injectable, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

export type StructuredData =
  | Record<string, unknown>
  | Record<string, unknown>[];

export interface PageSeoConfig {
  title: string;
  description: string;
  url: string;
  image?: string;
  structuredData?: StructuredData;
}

@Injectable({
  providedIn: 'root',
})
export class SeoService {
  private readonly meta = inject(Meta);
  private readonly title = inject(Title);
  private readonly document = inject(DOCUMENT);

  public updatePageSeo(config: PageSeoConfig): void {
    this.title.setTitle(config.title);

    this.meta.updateTag({
      name: 'description',
      content: config.description,
    });

    this.meta.updateTag({
      property: 'og:title',
      content: config.title,
    });

    this.meta.updateTag({
      property: 'og:description',
      content: config.description,
    });

    this.meta.updateTag({
      property: 'og:url',
      content: config.url,
    });

    this.meta.updateTag({
      property: 'og:type',
      content: 'website',
    });

    this.meta.updateTag({
      name: 'twitter:card',
      content: 'summary_large_image',
    });

    this.meta.updateTag({
      name: 'twitter:title',
      content: config.title,
    });

    this.meta.updateTag({
      name: 'twitter:description',
      content: config.description,
    });

    this.meta.updateTag({
      name: 'twitter:url',
      content: config.url,
    });

    if (config.image) {
      this.meta.updateTag({
        property: 'og:image',
        content: config.image,
      });

      this.meta.updateTag({
        name: 'twitter:image',
        content: config.image,
      });
    } else {
      this.meta.removeTag('property="og:image"');
      this.meta.removeTag('name="twitter:image"');
    }

    this.updateCanonicalUrl(config.url);
    this.updateStructuredData(config.structuredData);
  }

  private updateStructuredData(
    structuredData?: StructuredData,
  ): void {
    const scriptId = 'page-jsonld';

    let script = this.document.getElementById(
      scriptId,
    ) as HTMLScriptElement | null;

    if (!structuredData) {
      script?.remove();
      return;
    }

    if (!script) {
      script = this.document.createElement('script');
      script.id = scriptId;
      script.type = 'application/ld+json';
      this.document.head.appendChild(script);
    }

    script.textContent = JSON.stringify(structuredData)
      .replace(/</g, '\\u003c');
  }

  private updateCanonicalUrl(url: string): void {
    let link = this.document.querySelector(
      'link[rel="canonical"]',
    ) as HTMLLinkElement | null;

    if (!link) {
      link = this.document.createElement('link');
      link.setAttribute('rel', 'canonical');
      this.document.head.appendChild(link);
    }

    link.setAttribute('href', url);
  }
}
