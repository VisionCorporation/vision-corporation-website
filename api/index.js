
export default async function handler(req, res) {
  const { reqHandler } = await import(
    '../dist/vision-corporation-website/server/server.mjs'
  );

  const protocol =
    req.headers['x-forwarded-proto']?.split(',')[0] || 'https';

  const host = req.headers['x-forwarded-host'] || req.headers.host;

  if (!host) {
    res.statusCode = 400;
    res.end('Missing host header');
    return;
  }

  const originalUrl = req.url || '/';
  req.url = new URL(originalUrl, `${protocol}://${host}`).toString();

  return reqHandler(req, res);
}
