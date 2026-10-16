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

export const CHANNELS = ['SEO', 'Meta Ads', 'Google Ads', 'Blog', 'Email', 'Content'];
export const BARS = [32, 44, 38, 56, 52, 70, 88];

export const PROBLEMS = [
    {
        title: 'Competitors show up better',
        text: 'Good businesses lose customers every day to competitors who simply appear more clearly online.',
        icon: ['M23 18l-9.5-9.5-5 5L1 6', 'M17 18h6v-6'],
    },
    {
        title: 'A website nobody visits',
        text: 'A beautiful website does little if nobody finds it. Traffic is what turns a good site into a working one.',
        icon: ['M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2', 'M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z'],
    },
    {
        title: 'A social page gone quiet',
        text: 'When a page goes silent for weeks, it gives people a reason to look elsewhere.',
        icon: ['M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z', 'M12 6v6l4 2'],
    },
];

export const SERVICES = [
    {
        title: 'SEO',
        text: 'We review how your site is built, fix what holds it back, and shape your pages around the words your customers actually search, on Google and in AI answers.',
        goodFor: 'Businesses whose customers search before they buy.',
        icon: ['M21 21l-4.3-4.3', 'M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16z'],
    },
    {
        title: 'Paid ads on Meta and Google',
        text: 'We plan and run Facebook, Instagram and Google ads for the right audience and a budget you set, then review results and adjust.',
        goodFor: 'Businesses that want visitors and enquiries sooner.',
        icon: ['M3 11v2a1 1 0 0 0 1 1h2l5 4V6L6 10H4a1 1 0 0 0-1 1z', 'M15.5 8.5a5 5 0 0 1 0 7', 'M18.5 5.5a9 9 0 0 1 0 13'],
    },
    {
        title: 'Blog writing',
        text: "We write helpful articles that answer your customers' real questions in plain language, so people find you through search and trust you before they call.",
        goodFor: 'Businesses that want steady traffic over time.',
        icon: ['M12 20h9', 'M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z'],
    },
    {
        title: 'Email marketing',
        text: 'We set up and write the emails that welcome new customers, share offers and bring past customers back.',
        goodFor: 'Businesses that already have customers or a list of people to stay in touch with.',
        icon: ['M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z', 'M22 6l-10 7L2 6'],
    },
    {
        title: 'Content creation',
        text: "We make posts, graphics and short videos for your website and social pages, regularly and in your brand's voice.",
        goodFor: 'Businesses that want to stay visible without running their own content calendar.',
        icon: ['M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z', 'M10 8l6 4-6 4V8z'],
    },
];

export const STEPS = [
    {
        tag: 'Goal',
        title: 'We start with your goal.',
        text: 'More calls, more sales, more bookings, or simply more people who know your name.',
    },
    {
        tag: 'Mix',
        title: 'We choose the right mix.',
        text: "Most businesses don't need everything at once, so we recommend where to begin.",
    },
    {
        tag: 'Review',
        title: 'We review and adjust.',
        text: "We check what is working, tell you plainly, and change course when something isn't.",
    },
];

export const REASONS = [
    {
        title: 'One team, one plan',
        text: 'When the same team builds your website and markets it, the two fit together from the start: the pages are ready for the traffic, and the campaigns lead somewhere that works.',
    },
    {
        title: 'Honest expectations',
        text: "We won't promise rankings or sales we can't control. We will tell you what to expect, and what we are doing to get you there.",
    },
];