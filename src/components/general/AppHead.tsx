import Head from 'next/head';
import { usePathname } from 'next/navigation';
import { ASSET_PREFIX } from '@/variables';

interface Props {
    meta: Partial<{
        baseTitle: string;
        title: string;
        description: string;
        ogImage: string;
    }>;
}

const AppHead = ({ meta }: Props) => {
    const pathname = usePathname();
    const title = meta.title ? `${meta.title} — ${meta.baseTitle}` : meta.baseTitle;

    return (
        <Head>
            <meta charSet="utf-8" />
            <title>{title}</title>
            <meta name="description" content={meta.description} />
            <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
            {process.env.HOST && (
                <meta property="og:url" content={process.env.HOST + (pathname === '/' ? '' : pathname)} />
            )}
            <meta property="og:locale" content="ru" />
            <meta property="og:type" content="website" />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={meta.description} />
            <meta property="og:image" content={ASSET_PREFIX + meta.ogImage} />
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:image" content={ASSET_PREFIX + meta.ogImage} />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={meta.description} />

            <link
                rel="apple-touch-icon"
                sizes="180x180"
                href={`${ASSET_PREFIX}/landing-business/img/favicon/apple-touch-icon.png`}
            />
            <link
                rel="icon"
                type="image/png"
                sizes="32x32"
                href={`${ASSET_PREFIX}/landing-business/img/favicon/favicon-32x32.png`}
            />
            <link
                rel="icon"
                type="image/png"
                sizes="16x16"
                href={`${ASSET_PREFIX}/landing-business/img/favicon/favicon-16x16.png`}
            />
            <link rel="shortcut icon" href={`${ASSET_PREFIX}/landing-business/img/favicon/favicon.ico`} />
            <meta name="theme-color" content="#ffffff" />

            <link
                rel="preload"
                href={`${ASSET_PREFIX}/landing-business/fonts/new/Mont-Regular.woff2`}
                as="font"
                type="font/woff2"
                crossOrigin="anonymous"
            />
            <link
                rel="preload"
                href={`${ASSET_PREFIX}/landing-business/fonts/new/Mont-SemiBold.woff2`}
                as="font"
                type="font/woff2"
                crossOrigin="anonymous"
            />
        </Head>
    );
};

export default AppHead;
