import { Component, input } from '@angular/core';
import { HeadingPart } from '../../../interfaces/journey.interface';

@Component({
    selector: 'app-accent-text',
    standalone: true,
    template: `
        @for (part of parts(); track $index) {
        @switch (part.style) {
        @case ('underline') {
        <span class="relative inline-block text-[var(--color-primary)]">{{ part.text }}<svg aria-hidden="true"
                class="absolute -bottom-2 left-0 h-2 w-full" viewBox="0 0 200 8" fill="none" preserveAspectRatio="none">
                <path d="M2 6c40-5 100-5 196 0" stroke="currentColor" stroke-width="3" vector-effect="non-scaling-stroke"
                    stroke-linecap="round" />
            </svg></span>
        }
        @case ('circle') {
        <span class="relative inline-block px-6 text-[var(--color-primary)]">{{ part.text }}<svg aria-hidden="true"
                class="pointer-events-none absolute -rotate-1 -inset-x-1 -inset-y-1 h-[calc(100%+8px)] w-[calc(100%+8px)]"
                viewBox="0 0 120 50" fill="none" preserveAspectRatio="none">
                <path d="M104 12C84 2 36 0 16 10C-2 20 2 38 28 44C58 50 100 46 112 32C122 20 108 8 80 5" stroke="currentColor"
                    stroke-width="2.5" stroke-linecap="round" vector-effect="non-scaling-stroke" stroke-linejoin="round" />
            </svg></span>
        }
        @default {
        <ng-container>{{ part.text }}</ng-container>
        }
        }
        }
    `,
})
export class AccentText {
    parts = input.required<HeadingPart[]>();
}