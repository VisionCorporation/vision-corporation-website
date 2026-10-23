export interface WebsiteTypes {
    type: string
    audience: string
    shortDescription: string
    specs: string[]
    buttonText: string
    isPopular: boolean
}

export const WEBSITE_TYPES: WebsiteTypes[] = [
    {
        type: 'Portfolio Website',
        audience: 'freelancers, creatives, consultants and professionals.',
        shortDescription: 'Show your best work and let people reach you.',
        specs: [
            'Clean design that puts your work first',
            'Project galleries and case studies',
            'About and contact pages',
            'Fast on phones and easy to update',
        ],
        buttonText: 'Get a portfolio site',
        isPopular: false,
    },
    {
        type: 'Business Website',
        audience: 'companies, shops, hotels, clinics and service providers.',
        shortDescription: 'Look credible and get customers to contact you.',
        specs: [
            'Everything in the portfolio website',
            'Service pages built to be found in search',
            'Enquiry forms, bookings and WhatsApp links',
            'Structure that AI search tools can read and understand',
        ],
        buttonText: 'Get a business site',
        isPopular: true,
    },
    {
        type: 'E-commerce Website',
        audience: 'brands and retailers who want to sell online.',
        shortDescription: 'Sell your products anytime, to anyone.',
        specs: [
            'Everything in the business website',
            'Product catalogue and shopping cart',
            'Secure checkout with mobile money and card payments',
            'Order and stock management',
        ],
        buttonText: 'Get an online store',
        isPopular: false,
    },
    {
        type: 'Custom Web Application',
        audience: 'startups and teams with a product or process that needs its own software.',
        shortDescription: 'Turn an idea or a manual process into working software.',
        specs: [
            'Dashboards, portals and booking or management systems',
            'User accounts and secure login',
            'Built to handle growth',
            'Connected to the tools you already use',
        ],
        buttonText: 'Talk about your app',
        isPopular: false,
    },
];