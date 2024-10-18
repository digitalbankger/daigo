const path = require('path');

const ASSET_PREFIX = process.env.NEXT_PUBLIC_ASSET_PREFIX || '';

export default function imageLoader({ src, width, quality = 80 }) {
    const { dir, ext } = path.parse(src);
    return /(png|jpe?g|webp|avif)/.test(ext)
        ? `${ASSET_PREFIX}/nextapi/optimize?src=${src}&w=${width}&q=${quality}`
        : src;
}
