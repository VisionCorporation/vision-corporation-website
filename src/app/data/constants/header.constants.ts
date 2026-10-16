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
            { label: 'Software Development', url: '/our-journey/software-development' },
            { label: 'Energy', url: '/our-journey/energy' },
            { label: 'Transportation', url: '/our-journey/transportation' },
            { label: 'Hardware Solutions', url: '/our-journey/hardware-solutions' },
            { label: 'Artificial Intelligence (AI)', url: '/our-journey/artificial-intelligence' },
        ],
    },
    { label: 'Web Services', url: '/web-services' },
    { label: 'Digital Marketing', url: '/digital-marketing' },
    { label: 'Why Vision', url: '/why-vision' },
    { label: 'FAQs', url: '/', fragment: 'faqs' }
]