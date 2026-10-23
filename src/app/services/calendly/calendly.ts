
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
    private scriptPromise?: Promise<void>;

    private readonly calendlyUrl =
        'https://calendly.com/visioncorporationafrica/30min';

    public open(): void {
        if (!isPlatformBrowser(this.platformId)) return;

        void this.loadScript()
            .then(() => {
                window.Calendly?.initPopupWidget({
                    url: this.calendlyUrl,
                });
            })
            .catch((error: unknown) => {
                console.error('Unable to load Calendly:', error);
            });
    }

    private loadScript(): Promise<void> {
        if (!isPlatformBrowser(this.platformId)) {
            return Promise.reject(
                new Error('Calendly is only available in the browser.'),
            );
        }

        if (window.Calendly) return Promise.resolve();

        if (this.scriptPromise) return this.scriptPromise;

        this.scriptPromise = new Promise<void>((resolve, reject) => {
            let script = document.querySelector<HTMLScriptElement>(
                'script[data-calendly-widget]',
            );

            if (!script) {
                script = document.createElement('script');
                script.src =
                    'https://assets.calendly.com/assets/external/widget.js';
                script.async = true;
                script.dataset['calendlyWidget'] = 'true';
                document.head.appendChild(script);
            }

            const onLoad = () => {
                cleanup();

                if (window.Calendly) {
                    resolve();
                } else {
                    reject(new Error('Calendly failed to initialize.'));
                }
            };

            const onError = () => {
                cleanup();
                this.scriptPromise = undefined;
                reject(new Error('Failed to load the Calendly script.'));
            };

            const cleanup = () => {
                script?.removeEventListener('load', onLoad);
                script?.removeEventListener('error', onError);
            };

            if (window.Calendly) {
                resolve();
            } else {
                script!.addEventListener('load', onLoad, { once: true });
                script!.addEventListener('error', onError, { once: true });
            }
        });

        return this.scriptPromise;
    }
}
