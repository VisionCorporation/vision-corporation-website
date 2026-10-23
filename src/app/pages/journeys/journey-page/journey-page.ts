import { Component, computed, effect, inject } from '@angular/core';
import { JOURNEYS } from '../../../data/constants/journeys.constants';
import { ActivatedRoute } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import { toSignal } from '@angular/core/rxjs-interop';
import { JourneyHero } from '../../../components/shared/journeys/journey-hero/journey-hero';
import { JourneyProblem } from '../../../components/shared/journeys/journey-problem/journey-problem';
import { JourneyWork } from '../../../components/shared/journeys/journey-work/journey-work';
import { JourneyApproach } from '../../../components/shared/journeys/journey-approach/journey-approach';
import { JourneyWhyVision } from '../../../components/shared/journeys/journey-why-vision/journey-why-vision';
import { AiJourneyMap } from '../../../components/shared/journeys/ai-journey-map/ai-journey-map';
import { Cta } from '../../../components/shared/cta/cta';
import { JourneyNotFound } from '../journey-not-found/journey-not-found';
import { SeoService } from '../../../services/seo/seo';
import { JOURNEY_STRUCTURED_DATA } from '../../../data/seo/structured-data';

@Component({
  selector: 'app-journey-page',
  imports: [
    JourneyHero,
    JourneyProblem,
    JourneyWork,
    JourneyApproach,
    JourneyWhyVision,
    AiJourneyMap,
    Cta,
    JourneyNotFound
  ],
  templateUrl: './journey-page.html',
  styleUrl: './journey-page.css'
})
export class JourneyPage {
  private readonly route = inject(ActivatedRoute);
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);
  private readonly seoService = inject(SeoService);
  private readonly routeParams = toSignal(this.route.paramMap, {
    initialValue: this.route.snapshot.paramMap,
  });

  public readonly journey = computed(() => {
    const slug = this.routeParams().get('slug');
    return slug ? JOURNEYS[slug] : undefined;
  });

  constructor() {
    effect(() => {
      const page = this.journey();

      if (!page) {
        this.seoService.updatePageSeo({
          title: 'Journey Not Found | Vision Corporation',
          description: 'The requested journey could not be found.',
          url: '',
        });

        return;
      }

      const structuredData = JOURNEY_STRUCTURED_DATA[page.slug];

      this.seoService.updatePageSeo({
        title: page.metaTitle,
        description: page.metaDescription,
        url: `https://visioncorporation.africa/journeys/${page.slug}`,
        image: `https://visioncorporation.africa/assets/images/${page.ogImage}`,
        ...(structuredData ? { structuredData } : {}),
      });
    });
  }
}
