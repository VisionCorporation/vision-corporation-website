export interface NavLink {
    label: string;
    url?: string;
    fragment?: string;
    children?: NavLink[];
}

export const HEADER_NAV_LINKS: NavLink[] = [
    {
        label: 'Our Journey',
        children: [
            { label: 'Web Design and Development', url: '/journeys/web-design-and-development' },
            { label: 'Energy', url: '/journeys/energy' },
            { label: 'Transportation', url: '/journeys/transportation' },
            { label: 'Hardware Solutions', url: '/journeys/hardware-solutions' },
            { label: 'Artificial Intelligence (AI)', url: '/journeys/artificial-intelligence' },
        ],
    },
    { label: 'Digital Marketing', url: '/digital-marketing' },
    { label: 'Why Vision', url: '/why-vision' },
    { label: 'FAQs', url: '/', fragment: 'faqs' }
]