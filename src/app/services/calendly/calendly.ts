
import { isPlatformBrowser } from '@angular/common';
import { inject, Injectable, PLATFORM_ID } from '@angular/core';

declare global {
    interface Window {
        Calendly?: {
            initPopupWidget: (options: { url: string }) => void;
        };
    }
}

@Injectable({
    providedIn: 'root',
})
export class Calendly {
    private readonly platformId = inject(PLATFORM_ID);

    private assetsPromise?: Promise<void>;

    private readonly calendlyUrl =
        'https://calendly.com/visioncorporationafrica/30min';

    public open(): void {
        if (!isPlatformBrowser(this.platformId)) return;

        void this.loadAssets()
            .then(() => {
                window.Calendly?.initPopupWidget({
                    url: this.calendlyUrl,
                });
            })
            .catch((error: unknown) => {
                console.error('Unable to load Calendly:', error);
            });
    }

    private loadAssets(): Promise<void> {
        if (!isPlatformBrowser(this.platformId)) {
            return Promise.reject(
                new Error('Calendly is only available in the browser.'),
            );
        }

        if (window.Calendly) return Promise.resolve();

        if (this.assetsPromise) return this.assetsPromise;

        this.assetsPromise = Promise.all([
            this.loadStylesheet(),
            this.loadScript(),
        ])
            .then(() => undefined)
            .catch((error: unknown) => {
                this.assetsPromise = undefined;
                throw error;
            });

        return this.assetsPromise;
    }

    private loadStylesheet(): Promise<void> {
        return new Promise((resolve, reject) => {
            const existing = document.getElementById(
                'calendly-widget-css',
            ) as HTMLLinkElement | null;

            if (existing) {
                if (existing.sheet) {
                    resolve();
                    return;
                }

                existing.addEventListener('load', () => resolve(), {
                    once: true,
                });

                existing.addEventListener(
                    'error',
                    () => reject(new Error('Failed to load Calendly CSS.')),
                    { once: true },
                );

                return;
            }

            const link = document.createElement('link');

            link.id = 'calendly-widget-css';
            link.rel = 'stylesheet';
            link.href =
                'https://assets.calendly.com/assets/external/widget.css';

            link.onload = () => resolve();

            link.onerror = () => {
                link.remove();
                reject(new Error('Failed to load Calendly CSS.'));
            };

            document.head.appendChild(link);
        });
    }

    private loadScript(): Promise<void> {
        return new Promise((resolve, reject) => {
            if (window.Calendly) {
                resolve();
                return;
            }

            const existing = document.querySelector<HTMLScriptElement>(
                'script[data-calendly-widget]',
            );

            const script = existing ?? document.createElement('script');

            const onLoad = () => {
                cleanup();

                if (window.Calendly) {
                    resolve();
                } else {
                    reject(
                        new Error('Calendly failed to initialize.'),
                    );
                }
            };

            const onError = () => {
                cleanup();
                script.remove();

                reject(
                    new Error('Failed to load the Calendly script.'),
                );
            };

            const cleanup = () => {
                script.removeEventListener('load', onLoad);
                script.removeEventListener('error', onError);
            };

            script.addEventListener('load', onLoad, { once: true });
            script.addEventListener('error', onError, { once: true });

            if (!existing) {
                script.src =
                    'https://assets.calendly.com/assets/external/widget.js';

                script.async = true;
                script.dataset['calendlyWidget'] = 'true';

                document.head.appendChild(script);
            }
        });
    }
}
