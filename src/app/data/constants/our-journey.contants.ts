export interface OurJourney {
    tag: string;
    title: string;
    problem: string;
    solution: string;
    image: string;
    buttonText: string;
    buttonUrl: string;
    problemIcon: string;
    solutionIcon: string;
}

const ICONS = {
    warning: 'M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z',
    doneAll: 'M18 7l-1.41-1.41-6.34 6.34 1.41 1.41L18 7zm4.24-1.41L11.66 16.17 7.48 12l-1.41 1.41L11.66 19l12-12-1.42-1.41zM.41 13.41L6 19l1.41-1.41L1.83 12 .41 13.41z',
    bolt: 'M7 2v11h3v9l7-12h-4l4-8z',
    power: 'M16.01 7L16 3h-2v4h-4V3H8v4h-.01C7 6.99 6 7.99 6 8.99v5.49L9.5 18v3h5v-3l3.5-3.51v-5.5c0-1-1-2-1.99-1.99z',
    truck: 'M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-9l1.96 2.5H17V9.5h2.5zm-1.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z',
    route: 'M23 8c0 1.1-.9 2-2 2-.18 0-.35-.02-.51-.07l-3.56 3.55c.05.16.07.34.07.52 0 1.1-.9 2-2 2s-2-.9-2-2c0-.18.02-.36.07-.52l-2.55-2.55c-.16.05-.34.07-.52.07s-.36-.02-.52-.07l-4.55 4.56c.05.16.07.33.07.51 0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2c.18 0 .35.02.51.07l4.56-4.55C8.02 9.36 8 9.18 8 9c0-1.1.9-2 2-2s2 .9 2 2c0 .18-.02.36-.07.52l2.55 2.55c.16-.05.34-.07.52-.07s.36.02.52.07l3.55-3.56C19.02 8.35 19 8.18 19 8c0-1.1.9-2 2-2s2 .9 2 2z',
    chip: 'M15 9H9v6h6V9zm-2 4h-2v-2h2v2zm8-2V9h-2V7c0-1.1-.9-2-2-2h-2V3h-2v2h-2V3H9v2H7c-1.1 0-2 .9-2 2v2H3v2h2v2H3v2h2v2c0 1.1.9 2 2 2h2v2h2v-2h2v2h2v-2h2c1.1 0 2-.9 2-2v-2h2v-2h-2v-2h2zm-4 6H7V7h10v10z',
    gear: 'M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58a.49.49 0 0 0 .12-.61l-1.92-3.32a.488.488 0 0 0-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54a.484.484 0 0 0-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58a.49.49 0 0 0-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z',
    sparkle: 'M19 9l1.25-2.75L23 5l-2.75-1.25L19 1l-1.25 2.75L15 5l2.75 1.25L19 9zm-7.5.5L9 4 6.5 9.5 1 12l5.5 2.5L9 20l2.5-5.5L17 12l-5.5-2.5zM19 15l-1.25 2.75L15 19l2.75 1.25L19 23l1.25-2.75L23 19l-2.75-1.25L19 15z',
    shield: 'M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z',
};

export const OUR_JOURNEY_DATA: OurJourney[] = [
    {
        tag: 'Software Development (where we start)',
        title: 'Building the digital bridge for African businesses',
        problem: 'Many African businesses are open, capable and busy, but invisible online. Customers search, can\'t find them, and go elsewhere.',
        solution: 'Building websites and web applications that real customers can discover, trust and buy from. This work funds and fuels everything else on this page.',
        image: '',
        buttonText: 'See our web services',
        buttonUrl: '/web-services',
        problemIcon: ICONS.warning,
        solutionIcon: ICONS.doneAll,
    },
    {
        tag: 'Energy',
        title: 'Powering industry with modular nuclear innovation',
        problem: 'Power cuts slow down factories, shops and hospitals. Industry cannot grow on a supply that keeps switching off.',
        solution: 'Working toward a modular nuclear reactor, designed and built entirely in Africa, to support Ghana\'s grid by 2036 and give industry a steady supply it can plan around.',
        image: '',
        buttonText: 'Explore our energy journey',
        buttonUrl: '/our-journey/energy',
        problemIcon: ICONS.bolt,
        solutionIcon: ICONS.power,
    },
    {
        tag: 'Transportation',
        title: 'Connecting the continent through smarter trade',
        problem: 'Moving goods between African countries is slow and expensive, and that cost lands on the person buying at the end.',
        solution: 'Designing transport systems that connect the continent and make trade between our countries easier and cheaper.',
        image: '',
        buttonText: 'Explore transportation',
        buttonUrl: '/our-journey/transportation',
        problemIcon: ICONS.truck,
        solutionIcon: ICONS.route,
    },
    {
        tag: 'Hardware Solutions',
        title: 'Designing the chips that control our future',
        problem: 'Africa builds a lot of software on hardware designed somewhere else, and depends on others for the chips and controls inside it.',
        solution: 'Designing integrated circuits and control systems for advanced infrastructure, so more of the technology Africa uses is designed here.',
        image: '',
        buttonText: 'Explore hardware solutions',
        buttonUrl: '/our-journey/hardware-solutions',
        problemIcon: ICONS.chip,
        solutionIcon: ICONS.gear,
    },
    {
        tag: 'Artificial Intelligence (across every journey)',
        title: 'AI built for African markets and data',
        problem: 'Most AI tools are trained on data and conditions from somewhere else, so the answers they give often don\'t fit African markets, infrastructure or communities.',
        solution: 'Building AI into every journey above, to analyse critical data on energy, transport, hardware and business, and to turn it into insight that suits the African ecosystem. We build it ethically and openly, so people can understand and trust what it tells them.',
        image: '',
        buttonText: 'Explore our AI journey',
        buttonUrl: '/our-journey/artificial-intelligence',
        problemIcon: ICONS.sparkle,
        solutionIcon: ICONS.shield,
    }
]