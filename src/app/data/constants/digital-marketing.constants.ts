export interface MarketingService {
    id: string;
    icon: string;
    title: string;
    tagline: string;
    description: string;
}

export const MARKETING_SERVICES: readonly MarketingService[] = [
    {
        id: 'seo',
        icon: 'search',
        title: 'SEO',
        tagline: 'Be there when people search.',
        description:
            "We improve your site's structure, content and speed so search engines and AI tools understand what you offer and show you to people who are looking for it.",
    },
    {
        id: 'paid-ads',
        icon: 'ads_click',
        title: 'Paid ads on Meta and Google',
        tagline: 'Reach people ready to buy.',
        description:
            'We plan and run ads on Facebook, Instagram and Google, aimed at the right audience and a budget you control, and keep adjusting them based on what is working.',
    },
    {
        id: 'blog-writing',
        icon: 'edit_note',
        title: 'Blog writing',
        tagline: 'Become the answer people read.',
        description:
            'Helpful articles on the questions your customers actually ask, written in plain language. They bring in search visitors and build trust before anyone contacts you.',
    },
    {
        id: 'email-marketing',
        icon: 'mail',
        title: 'Email marketing',
        tagline: 'Bring customers back.',
        description:
            'Welcome messages, offers and updates sent to people who already know you, so one sale can turn into many.',
    },
    {
        id: 'content-creation',
        icon: 'perm_media',
        title: 'Content creation',
        tagline: 'Give people something worth stopping for.',
        description:
            "Posts, graphics and short videos for your website and social pages, made regularly and in your brand's voice.",
    },
]