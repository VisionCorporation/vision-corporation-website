
import { Readable } from 'node:stream';

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  try {
    const protocol =
      req.headers['x-forwarded-proto']?.split(',')[0] || 'https';
    const host = req.headers['x-forwarded-host'] || req.headers.host;

    if (!host) {
      res.statusCode = 400;
      res.end('Missing host header');
      return;
    }

    const url = new URL(req.url || '/', `${protocol}://${host}`);

    const headers = new Headers();

    for (const [key, value] of Object.entries(req.headers)) {
      if (Array.isArray(value)) {
        for (const item of value) {
          headers.append(key, item);
        }
      } else if (value !== undefined) {
        headers.set(key, value);
      }
    }

    const hasBody = !['GET', 'HEAD'].includes(req.method || 'GET');

    const request = new Request(url, {
      method: req.method,
      headers,
      ...(hasBody
        ? {
          body: Readable.toWeb(req),
          duplex: 'half',
        }
        : {}),
    });

    const { reqHandler } = await import(
      '../dist/vision-corporation-website/server/server.mjs'
    );

    const response = await reqHandler(request);

    res.statusCode = response.status;

    response.headers.forEach((value, key) => {
      res.setHeader(key, value);
    });

    if (!response.body) {
      res.end();
      return;
    }

    const body = Readable.fromWeb(response.body);
    body.pipe(res);
  } catch (error) {
    console.error('Angular SSR error:', error);
    res.statusCode = 500;
    res.end('Internal Server Error');
  }
}
