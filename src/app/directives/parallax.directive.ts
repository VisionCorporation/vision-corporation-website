import {
    Directive, ElementRef, NgZone, OnDestroy, OnInit,
    PLATFORM_ID, booleanAttribute, inject, input, numberAttribute,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Directive({ selector: '[appParallax]', standalone: true })
export class ParallaxDirective implements OnInit, OnDestroy {
    speed = input(0.4, { alias: 'appParallax', transform: numberAttribute });
    fade = input(false, { transform: booleanAttribute });

    private el = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;
    private zone = inject(NgZone);
    private isBrowser = isPlatformBrowser(inject(PLATFORM_ID));
    private ticking = false;

    private onScroll = () => {
        if (this.ticking) return;
        this.ticking = true;
        requestAnimationFrame(() => {
            this.update();
            this.ticking = false;
        });
    };

    ngOnInit() {
        if (!this.isBrowser) return;
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

        this.zone.runOutsideAngular(() =>
            window.addEventListener('scroll', this.onScroll, { passive: true }),
        );
        this.update();
    }

    ngOnDestroy() {
        if (this.isBrowser) window.removeEventListener('scroll', this.onScroll);
    }

    private update() {
        const hero = this.el.closest('section') as HTMLElement | null;
        const heroHeight = hero?.offsetHeight ?? window.innerHeight;
        const y = Math.min(window.scrollY, heroHeight);

        this.el.style.transform = `translate3d(0, ${y * this.speed()}px, 0)`;

        if (this.fade()) {
            this.el.style.opacity = String(Math.max(0, 1 - y / (heroHeight * 0.75)));
        }
    }
}