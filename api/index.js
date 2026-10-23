export default async function handler(req, res) {
    const { reqHandler } = await import(
        '../dist/vision-corporation-website/server/server.mjs'
    );

    return reqHandler(req, res);
}