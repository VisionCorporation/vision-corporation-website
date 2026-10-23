
const fs = require('fs');
const path = require('path');

const domain = 'https://visioncorporation.africa';

const routes = [
    {
        path: '/',
        priority: '1.0',
        changefreq: 'weekly',
    },
    {
        path: '/digital-marketing',
        priority: '0.9',
        changefreq: 'monthly',
    },
    {
        path: '/why-vision',
        priority: '0.8',
        changefreq: 'monthly',
    },
    {
        path: '/contact-us',
        priority: '0.8',
        changefreq: 'yearly',
    },

    {
        path: '/journeys/web-design-and-development',
        priority: '0.9',
        changefreq: 'monthly',
    },
    {
        path: '/journeys/energy',
        priority: '0.8',
        changefreq: 'monthly',
    },
    {
        path: '/journeys/transportation',
        priority: '0.8',
        changefreq: 'monthly',
    },
    {
        path: '/journeys/hardware-solutions',
        priority: '0.8',
        changefreq: 'monthly',
    },
    {
        path: '/journeys/artificial-intelligence',
        priority: '0.9',
        changefreq: 'monthly',
    },

    {
        path: '/privacy-policy',
        priority: '0.3',
        changefreq: 'yearly',
    },
    {
        path: '/terms-of-service',
        priority: '0.3',
        changefreq: 'yearly',
    },
    {
        path: '/cookie-policy',
        priority: '0.3',
        changefreq: 'yearly',
    },
];

const escapeXml = (value) =>
    value
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&apos;');

const urls = routes
    .map(
        (route) => `
    <url>
        <loc>${escapeXml(`${domain}${route.path}`)}</loc>
        <changefreq>${route.changefreq}</changefreq>
        <priority>${route.priority}</priority>
    </url>`,
    )
    .join('');

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;

const distPath = path.join(
    __dirname,
    'dist',
    'vision-corporation-website',
    'browser',
);

if (!fs.existsSync(distPath)) {
    throw new Error(
        `Build output directory not found: ${distPath}. Run the Angular build first.`,
    );
}

fs.writeFileSync(
    path.join(distPath, 'sitemap.xml'),
    sitemap.trim() + '\n',
    'utf8',
);

console.log(`Sitemap generated with ${routes.length} URLs.`);
