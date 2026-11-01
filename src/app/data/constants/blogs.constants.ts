export interface BlogPost {
    slug: string;
    title: string;
    excerpt: string;
    category: BlogCategory;
    author: string;
    date: string;
    readTime: number;
    image?: string;
    featured?: boolean;
}

export const BLOG_CATEGORIES = [
    'SEO',
    'Digital marketing',
    'Web design',
    'E-commerce',
    'Technology in Africa',
] as const;

export type BlogCategory = (typeof BLOG_CATEGORIES)[number];

export const BLOG_POSTS: BlogPost[] = [
    {
        slug: 'why-your-website-is-not-getting-visitors',
        title: 'Why a good website still gets no visitors, and what to do about it',
        excerpt:
            'A beautiful site does little if nobody finds it. Here are the common reasons customers never reach you, and the first fixes worth making.',
        category: 'SEO',
        author: 'Vision Corporation Team',
        date: '2026-10-28',
        readTime: 6,
        image: 'assets/images/why-your-website-is-not-getting-visitors.jpg',
        featured: true,
    },
    {
        slug: 'how-customers-search-before-they-buy',
        title: 'How your customers search before they buy',
        excerpt:
            'Start with the words people actually type into Google, then shape your pages around them. A simple way to begin.',
        category: 'SEO',
        author: 'Vision Corporation Team',
        date: '2026-10-21',
        image: 'assets/images/how-customers-search-before-they-buy.jpg',
        readTime: 5,
    },
    {
        slug: 'meta-and-google-ads-where-to-start',
        title: 'Meta ads or Google ads: where should a small business start?',
        excerpt:
            'Both can bring visitors sooner, but they work differently. A plain comparison to help you pick the right first step.',
        category: 'Digital marketing',
        author: 'Vision Corporation Team',
        image: 'assets/images/meta-and-google-ads-where-to-start.jpg',
        date: '2026-10-14',
        readTime: 7,
    },
    {
        slug: 'email-marketing-for-small-businesses',
        title: 'Email marketing for businesses that already have customers',
        excerpt:
            'Welcome emails, offers and win-back messages can bring past customers back. What to send, and when.',
        category: 'Digital marketing',
        author: 'Vision Corporation Team',
        image: 'assets/images/email-marketing-for-small-businesses.jpg',
        date: '2026-10-07',
        readTime: 5,
    },
    {
        slug: 'what-makes-a-business-website-work',
        title: 'What makes a business website actually work',
        excerpt:
            'Clear pages, fast loading and an obvious next step. The basics that turn visitors into enquiries.',
        category: 'Web design',
        author: 'Vision Corporation Team',
        image: 'assets/images/what-makes-a-business-website-work.jpg',
        date: '2026-09-30',
        readTime: 6,
    },
    {
        slug: 'mobile-first-websites-in-ghana',
        title: 'Why your website should be built for phones first',
        excerpt:
            'Most of your customers will open your site on a phone. How to design for small screens and slow connections.',
        category: 'Web design',
        author: 'Vision Corporation Team',
        date: '2026-09-23',
        image: 'assets/images/mobile-first-websites-in-ghana.jpg',
        readTime: 4,
    },
    {
        slug: 'starting-an-online-shop',
        title: 'Starting an online shop: what to decide before you build',
        excerpt:
            'Products, payments, delivery and trust. A short checklist to work through before any design starts.',
        category: 'E-commerce',
        author: 'Vision Corporation Team',
        image: 'assets/images/starting-an-online-shop.jpg',
        date: '2026-09-16',
        readTime: 8,
    },
    {
        slug: 'building-technology-africa-runs-on',
        title: 'Building the technology Africa runs on',
        excerpt:
            'Why we start with software and work toward energy, transport, hardware and AI, one practical step at a time.',
        category: 'Technology in Africa',
        author: 'Vision Corporation Team',
        image: 'assets/images/building-technology-africa-runs-on.jpg',
        date: '2026-09-09',
        readTime: 6,
    },
];