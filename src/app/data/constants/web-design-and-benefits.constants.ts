export interface AudienceItem {
    readonly label: string;
    readonly icon: string;
}

export const WEB_DEVELOPMENT_AUDIENCES: readonly AudienceItem[] = [
    {
        label: 'Startups',
        icon: 'M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0 M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5',
    },
    {
        label: 'Small and growing businesses',
        icon: 'M22 7 13.5 15.5 8.5 10.5 2 17 M16 7h6v6',
    },
    {
        label: 'Online shops and retailers',
        icon: 'M3 3h2l2.4 11.4a2 2 0 0 0 2 1.6h8.8a2 2 0 0 0 2-1.6L22 8H6 M10 20h.01 M18 20h.01',
    },
    {
        label: 'Professionals and creatives',
        icon: 'M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z M13.5 6.5h.01 M17.5 10.5h.01 M6.5 12.5h.01 M8.5 7.5h.01',
    },
    {
        label: 'Schools and organisations',
        icon: 'm21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z M22 10v6 M6 12.5V16a6 3 0 0 0 12 0v-3.5',
    },
    {
        label: 'Teams that need a custom web app',
        icon: 'm16 18 6-6-6-6 M8 6l-6 6 6 6',
    },
]

export interface WebDevelopmentBenefit {
    readonly title: string;
    readonly description: string;
    readonly icon: string;
}

export const WEB_DEVELOPMENT_BENEFITS: readonly WebDevelopmentBenefit[] = [
    {
        title: 'Be found when people search.',
        description:
            'We build with search and AI search in mind, so customers looking for what you offer can find you.',
        icon: 'M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16z M21 21l-4.35-4.35 M8 11h6 M11 8v6',
    },
    {
        title: 'Look credible from the first second.',
        description:
            'A clean, professional design makes a stranger feel safe enough to contact you or buy.',
        icon: 'M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11z M9 12l2 2 4-4',
    },
    {
        title: 'Turn visitors into customers.',
        description:
            'Clear pages, simple forms and obvious buttons lead people to the next step, whether that is a call, a booking or a purchase.',
        icon: 'M3 3h18v18H3z M7 14l4-4 3 3 4-5 M14 8h4v4',
    },
    {
        title: 'Work on any phone.',
        description:
            'Most of your customers are on mobile. Your site loads quickly and feels natural on a small screen.',
        icon: 'M5 2h14a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z M10 18h4',
    },
    {
        title: 'Sell online without the stress.',
        description:
            'For e-commerce, we set up products, payments and orders so you can sell around the clock.',
        icon: 'M3 3h2l2.4 11.4a2 2 0 0 0 2 1.6h8.8a2 2 0 0 0 2-1.6L22 8H6 M10 20h.01 M18 20h.01',
    },
    {
        title: 'Grow with you.',
        description:
            'You own your site, and it is built so new pages, products and features can be added without starting over.',
        icon: 'M12 3v18 M3 12h18 M5 5l14 14 M19 5 5 19',
    },
];