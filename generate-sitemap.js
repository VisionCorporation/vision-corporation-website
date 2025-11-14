const fs = require('fs');
const path = require('path');

const routes = [
    '/',
    '/services',
    '/about-us',
    '/contact',
    '/privacy-policy',
    '/terms-of-service',
    '/cookie-policy'
];

const domain = 'https://visioncorporationafrica.netlify.app';

const lastmod = new Date().toISOString();

let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset
      xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
            http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">`;

routes.forEach(route => {
    sitemap += `
<url>
  <loc>${domain}${route}</loc>
  <lastmod>${lastmod}</lastmod>
  <priority>${route === '/' ? '1.00' : '0.80'}</priority>
</url>`;
});

sitemap += '\n</urlset>';

const distPath = path.join(__dirname, 'dist', 'vision-corporation-website', 'browser', 'sitemap.xml');
fs.writeFileSync(distPath, sitemap);
