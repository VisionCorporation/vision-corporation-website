import { HeadingPart, JourneyPageData } from '../../interfaces/journey.interface';

const APPROACH_HEADING: HeadingPart[] = [
    { text: 'How we ' },
    { text: 'approach it', style: 'underline' },
];

const DOING_HEADING: HeadingPart[] = [
    { text: 'What we are ' },
    { text: 'doing', style: 'circle' },
];

export const JOURNEYS: Record<string, JourneyPageData> = {
    'web-design-and-development': {
        slug: 'web-design-and-development',
        ogImage: 'web-design-and-development-journey-og-image.jpeg',
        label: 'Web and Marketing',
        metaTitle: 'Website Development Company in Ghana | Vision Corporation',
        metaDescription:
            'Vision Corporation: website developers who build your ecommerce website, business website, portfolio website and online store, the first step to building technology in Ghana.',
        hero: {
            headline: [
                { text: 'Websites that get ' },
                { text: 'found, trusted and used.', style: 'underline' },
            ],
            subtext:
                'We design and build business websites, portfolio websites, e-commerce stores and custom web applications for startups and growing businesses.',
            buttonText: 'Start a Web Project',
            buttonLink: '/contact-us',
            illustration: 'web',
            illustrationLabel: 'yourbusiness.com',
            tags: ['Portfolio sites', 'Business sites', 'E-commerce', 'Web apps'],
            chips: [
                {
                    title: 'Found on search',
                    text: 'Clear structure, fast loading',
                    icon: ['M21 21l-4.3-4.3', 'M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16z'],
                },
                {
                    title: 'Mobile first',
                    text: 'Designed for the phone screen',
                    icon: ['M7 2h10a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z', 'M12 18h.01'],
                },
                {
                    title: 'Built to grow',
                    text: 'Add pages and features later',
                    icon: ['M3 17l6-6 4 4 8-8', 'M14 7h7v7'],
                },
            ],
        },
        problem: {
            heading: [
                { text: 'Good businesses get ' },
                { text: 'overlooked', style: 'underline' },
                { text: '.' },
            ],
            description:
                "Many capable businesses are invisible online. Their website is slow, dated, hard to use on a phone, or it simply doesn't appear when customers search. People either can't find them, or they find them and don't feel safe enough to get in touch.",
        },
        work: {
            heading: [
                { text: 'What we ' },
                { text: 'build', style: 'circle' },
            ],
            items: [
                {
                    title: 'Portfolio websites',
                    description:
                        'For freelancers, creatives, consultants and professionals who want their work seen.',
                },
                {
                    title: 'Business websites',
                    description:
                        'For companies and service providers who need to look credible and bring in enquiries.',
                },
                {
                    title: 'E-commerce websites',
                    description:
                        'For brands that want to sell products online, with a cart, checkout and order management.',
                },
                {
                    title: 'Custom web applications',
                    description:
                        'For teams with a process or product that needs its own software, such as portals, dashboards and booking systems.',
                },
            ],
        },
        approach: {
            heading: APPROACH_HEADING,
            items: [
                {
                    title: 'Built to be found',
                    description:
                        'Clear structure, fast loading and descriptive content, so search engines and AI tools can understand your site.',
                },
                {
                    title: 'Mobile first',
                    description:
                        'Most of your customers will visit on a phone, so we design for that screen first.',
                },
                {
                    title: 'Built to grow',
                    description:
                        'You can add pages, products and features later without starting from scratch.',
                },
            ],
        },
        whyVision: {
            heading: [
                { text: 'Software is where Vision ' },
                { text: 'began', style: 'circle' },
                { text: '.' },
            ],
            description:
                'Software is where Vision Corporation began, and it funds the bigger work we do in energy, transportation, hardware and AI. So your project is not a side job for us. It is the foundation of our company, and we give it the care we would give anything bigger. We also explain our choices in plain language, so you always understand what you are paying for.',
        },
        cta: {
            heading: 'Tell us what you want to build.',
            text:
                'Share your idea and your goal. We will reply with honest advice on the best place to start.',
            primaryLabel: 'Start a Web Project',
            primaryLink: '/contact-us',
            secondaryLabel: 'Book a Free Consultation',
            secondaryLink: '/contact-us',
        },
    },

    energy: {
        slug: 'energy',
        ogImage: 'energy-journey-og-image.jpeg',
        label: 'Energy',
        metaTitle: 'Electric Company & Nuclear Energy | Vision Corporation',
        metaDescription:
            'Vision Corporation is building Ghana’s next electric company: modular nuclear energy, 100% African-built by 2036, to support the grid and reduce power outages.',
        hero: {
            headline: [
                { text: "Reliable power for Ghana's " },
                { text: 'industrial future.', style: 'underline' },
            ],
            subtext:
                "We are working toward a modular nuclear reactor, designed and built entirely in Africa, to help support Ghana's energy grid by 2036.",
            buttonText: 'Follow Our Energy Journey',
            buttonLink: '/contact-us',
            illustration: 'energy',
            illustrationLabel: 'vision.africa/energy',
            tags: ['Modular design', 'African-built', '2036 goal'],
            chips: [
                {
                    title: 'Modular design',
                    text: 'Added to as demand grows',
                    icon: ['M13 2L3 14h9l-1 8 10-12h-9l1-8z'],
                },
                {
                    title: 'African-built',
                    text: 'Design, engineering, skills',
                    icon: ['M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z', 'M2 12h20'],
                },
                {
                    title: 'Open on safety',
                    text: 'Progress shared publicly',
                    icon: ['M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z'],
                },
            ],
        },
        problem: {
            heading: [
                { text: 'Industry needs ' },
                { text: 'dependable power.', style: 'underline' },
            ],
            description:
                'Factories, hospitals, shops and homes all feel every power cut. Industry cannot grow on a supply that keeps switching off, and a country cannot industrialise on power it cannot rely on. Steady, dependable energy is what lets businesses plan, hire and expand.',
        },
        work: {
            heading: DOING_HEADING,
            paragraphs: [
                "Our goal is a modular nuclear reactor that is 100% African-built by 2036, contributing steady power to Ghana's grid. Modular designs are smaller than traditional plants and can be added to over time as demand grows, which suits a country building its industry step by step.",
                'This is a long journey, and we would rather be clear that it is a goal than promise what we cannot yet show.',
            ],
        },
        approach: {
            heading: APPROACH_HEADING,
            items: [
                {
                    title: 'African-built',
                    description:
                        'The design, engineering and skills should be African, so the capability stays here for generations.',
                },
                {
                    title: 'Safety and openness first',
                    description:
                        'We will be open about our progress and about how safety is handled.',
                },
                {
                    title: 'Partnership',
                    description:
                        'We will work with governments, researchers and community groups, because a project this size cannot be done alone.',
                },
            ],
        },
        whyVision: {
            heading: [
                { text: 'Built for the ' },
                { text: 'long game', style: 'circle' },
                { text: '.' },
            ],
            description:
                'Energy is a generational project, and Vision Corporation was built for the long game. We start with software to fund and speed up the work, we bring hardware, control systems and AI under one roof, and our just cause is technological sovereignty: Africa powering itself with technology it designed.',
        },
        cta: {
            heading: 'Help us power what comes next.',
            text:
                "If you are a researcher, an institution or a partner who cares about Africa's energy future, we would like to talk.",
            primaryLabel: 'Talk to Us About Energy',
            primaryLink: '/contact-us',
        },
    },

    transportation: {
        slug: 'transportation',
        ogImage: 'transportation-journey-og-image.jpeg',
        label: 'Transportation',
        metaTitle: 'Transportation Services & Logistics | Vision Corporation',
        metaDescription:
            'Transportation services from Vision Corporation: a shipping company building transport and logistics in Ghana, to make moving goods across Africa affordable.',
        hero: {
            headline: [
                { text: 'Connecting Africa, so ' },
                { text: 'trade costs less.', style: 'underline' },
            ],
            subtext:
                'We want to create innovative transportation systems that link the continent and make commerce between African countries faster and more affordable.',
            buttonText: 'Follow Our Transport Journey',
            buttonLink: '/contact-us',
            illustration: 'transport',
            illustrationLabel: 'vision.africa/transport',
            tags: ['Routes', 'Costs', 'Cross-border trade'],
            chips: [
                {
                    title: 'Cross-border',
                    text: 'Linking African markets',
                    icon: ['M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z', 'M2 12h20', 'M12 2a15 15 0 0 1 0 20 15 15 0 0 1 0-20z'],
                },
                {
                    title: 'Led by data',
                    text: 'AI studies routes and delays',
                    icon: ['M3 3v18h18', 'M7 14l4-4 3 3 5-6'],
                },
                {
                    title: 'Built with partners',
                    text: 'Governments, business, research',
                    icon: [
                        'M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2',
                        'M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z',
                        'M23 21v-2a4 4 0 0 0-3-3.9',
                        'M16 3.1a4 4 0 0 1 0 7.8',
                    ],
                },
            ],
        },
        problem: {
            heading: [
                { text: 'Moving goods should ' },
                { text: 'cost less.', style: 'underline' },
            ],
            description:
                'Moving goods between African countries is slow, expensive and often unpredictable. Those costs end up in the price of what people buy, and they hold back small businesses that could otherwise sell across borders.',
        },
        work: {
            heading: DOING_HEADING,
            paragraphs: [
                'We are designing transport systems that connect the continent and bring the cost of moving goods down. Our work starts with listening and learning: where goods get stuck, what it costs, and who is affected most. From there, we design systems built for the conditions they will actually operate in.',
            ],
        },
        approach: {
            heading: APPROACH_HEADING,
            items: [
                {
                    title: 'Practical first',
                    description:
                        'We favour solutions that can be put to work under real conditions, not only on paper.',
                },
                {
                    title: 'Led by data',
                    description:
                        'We use AI to study routes, delays and costs, so decisions rest on evidence.',
                },
                {
                    title: 'Built with partners',
                    description:
                        'We work with governments, businesses and researchers, because moving goods across borders takes everyone.',
                },
            ],
        },
        whyVision: {
            heading: [
                { text: 'Connecting the systems that move ' },
                { text: 'Africa', style: 'circle' },
                { text: '.' },
            ],
            description:
                'Good transport systems need software, hardware and intelligence working together. Vision Corporation brings all three, and we are in this for the long term: to make affordable commerce across Africa something the next generation takes for granted.',
        },
        cta: {
            heading: "Let's make moving goods easier.",
            text:
                'If you work in trade, logistics, policy or research and want to shape this with us, get in touch.',
            primaryLabel: 'Talk to Us About Transport',
            primaryLink: '/contact-us',
        },
    },

    'hardware-solutions': {
        slug: 'hardware-solutions',
        ogImage: 'hardware-solutions-journey-og-image.jpeg',
        label: 'Hardware Solutions',
        metaTitle: 'Hardware, Embedded Systems & PLCs | Vision Corporation',
        metaDescription:
            'Vision Corporation builds hardware solutions in Ghana, from integrated circuit design and embedded systems to PLCs for industrial automation and control.',
        hero: {
            headline: [
                { text: 'Designing the ' },
                { text: 'chips', style: 'circle' },
                { text: " and controls inside Africa's infrastructure." },
            ],
            subtext:
                'We design integrated circuits and control systems for advanced technological infrastructure, so more of the technology Africa relies on is designed here.',
            buttonText: 'Follow Our Hardware Journey',
            buttonLink: '/contact-us',
            illustration: 'hardware',
            illustrationLabel: 'vision.africa/hardware',
            tags: ['Integrated circuits', 'Control systems', 'Local engineering skill'],
            chips: [
                {
                    title: 'Integrated circuits',
                    text: 'Designed in Africa',
                    icon: ['M5 5h14v14H5z', 'M9 9h6v6H9z', 'M9 1v4M15 1v4M9 19v4M15 19v4M1 9h4M1 15h4M19 9h4M19 15h4'],
                },
                {
                    title: 'Control systems',
                    text: 'Power, machines, transport',
                    icon: ['M4 21v-7', 'M4 10V3', 'M12 21v-9', 'M12 8V3', 'M20 21v-5', 'M20 12V3', 'M1 14h6', 'M9 8h6', 'M17 16h6'],
                },
                {
                    title: 'Local skill',
                    text: 'Growing African engineering',
                    icon: ['M22 10L12 5 2 10l10 5 10-5z', 'M6 12v5c3 2 9 2 12 0v-5'],
                },
            ],
        },
        problem: {
            heading: [
                { text: 'Africa should help design the technology it ' },
                { text: 'depends on.', style: 'underline' },
            ],
            description:
                'Much of the technology used across Africa runs on hardware designed somewhere else: the chips, the controllers, the parts that decide how a machine behaves. That leaves the continent dependent on others for supply, for price and for design choices, and makes it hard to adapt technology to local conditions.',
        },
        work: {
            heading: DOING_HEADING,
            paragraphs: [
                'We are designing integrated circuits and control systems, the parts that tell power systems, machines and transport systems what to do.',
                'Our software work funds and speeds this up, and the hardware we design is meant to work hand in hand with our energy and transportation journeys and with the AI that guides them.',
            ],
        },
        approach: {
            heading: APPROACH_HEADING,
            items: [
                {
                    title: 'Start practical',
                    description:
                        'We build what can be tested and deployed under real conditions, one step at a time.',
                },
                {
                    title: 'Build local skill',
                    description:
                        'Every project is also a chance to grow African engineering capacity.',
                },
                {
                    title: 'Share what we learn',
                    description:
                        'We work openly with partners and researchers and measure progress by what we achieve together.',
                },
            ],
        },
        whyVision: {
            heading: [
                { text: 'Software, hardware and ' },
                { text: 'AI', style: 'circle' },
                { text: ' working together.' },
            ],
            description:
                'Most companies make either software or hardware. We are building both, with AI across them, because infrastructure needs all three to work together. Our just cause is technological sovereignty, and designing our own hardware is a big part of it.',
        },
        cta: {
            heading: "Build Africa's hardware future with us.",
            text:
                'If you are an engineer, researcher or manufacturer interested in designing and building hardware in Africa, we would like to hear from you.',
            primaryLabel: 'Talk to Us About Hardware',
            primaryLink: '/contact-us',
        },
    },

    'artificial-intelligence': {
        slug: 'artificial-intelligence',
        ogImage: 'artificial-intelligence-journey-og-image.jpeg',
        label: 'Artificial Intelligence (AI)',
        metaTitle: 'Artificial Intelligence & AI Chatbots | Vision Corporation',
        metaDescription:
            'Vision Corporation integrates artificial intelligence, from an AI chatbot to an AI assistant, across software, energy, transportation and hardware in Ghana.',
        hero: {
            headline: [
                { text: 'AI built for the ' },
                { text: 'African context.', style: 'underline' },
            ],
            subtext:
                'Across every journey, we use AI to turn critical data into insight that fits the African ecosystem.',
            buttonText: 'See How AI Fits In',
            buttonLink: '/journeys/artificial-intelligence',
            buttonFragment: 'what-we-do',
            illustration: 'ai',
            illustrationLabel: 'vision.africa/ai',
            tags: ['Energy', 'Transportation', 'Hardware', 'Web and marketing'],
            chips: [
                {
                    title: 'Local context',
                    text: 'African data, not borrowed ones',
                    icon: ['M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z', 'M2 12h20', 'M12 2a15 15 0 0 1 0 20 15 15 0 0 1 0-20z'],
                },
                {
                    title: 'Ethical by design',
                    text: 'Open about how it works',
                    icon: ['M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z'],
                },
                {
                    title: 'People decide',
                    text: 'AI gives insight',
                    icon: ['M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2', 'M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z', 'M17 11l2 2 4-4'],
                },
            ],
        },
        problem: {
            heading: [
                { text: 'AI needs to understand ' },
                { text: 'where it is used.', style: 'underline' },
            ],
            description:
                'Most AI tools are trained on data and conditions from somewhere else. Their answers can miss how African markets, power systems, roads and communities actually work, so the insight they give is often not the insight people here need.',
        },
        work: {
            heading: DOING_HEADING,
            paragraphs: [
                'We are building AI into every journey, not as a separate product, but as a way to understand the data that matters and make better decisions with it.',
            ],
        },
        aiApplications: {
            heading: [
                { text: 'AI across our ' },
                { text: 'journeys', style: 'circle' },
            ],
            description:
                'We are building AI into every journey, not as a separate product, but as a way to understand the data that matters and make better decisions with it.',
            items: [
                {
                    journey: 'Energy',
                    description: 'Understanding demand and keeping supply reliable',
                },
                {
                    journey: 'Transportation',
                    description: 'Finding where goods get delayed and what it costs',
                },
                {
                    journey: 'Hardware',
                    description: 'Smarter control systems for infrastructure',
                },
                {
                    journey: 'Web and marketing',
                    description: 'Helping businesses understand their visitors and customers',
                },
            ],
        },
        approach: {
            heading: APPROACH_HEADING,
            items: [
                {
                    title: 'Ethical by design',
                    description:
                        'AI should serve people. We are open about how it works so people can trust what it tells them.',
                },
                {
                    title: 'Built on local context',
                    description:
                        'We design for African conditions and data, not borrowed assumptions.',
                },
                {
                    title: 'People stay in charge',
                    description: 'AI gives insight. People make the decisions.',
                },
            ],
        },
        whyVision: {
            heading: [
                { text: 'AI grounded in ' },
                { text: 'real problems', style: 'circle' },
                { text: '.' },
            ],
            description:
                'Because AI runs through all our journeys, it learns from real problems in energy, transport and hardware instead of living in a lab. And because we are a collaborative company, we work with governments, researchers and grassroots organisations to make sure it benefits the many, not just the few.',
        },
        cta: {
            heading: "Let's put AI to work for Africa.",
            text:
                'If you have a problem where better insight would help, or you want to work with us on ethical AI, get in touch.',
            primaryLabel: 'Talk to Us About AI',
            primaryLink: '/contact-us',
        },
    },
};