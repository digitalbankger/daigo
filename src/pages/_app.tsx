import '../css/base/_fonts.scss';
import '../css/app.scss';
import { useEffect } from 'react';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import Providers from '@/components/layout/Providers';
import Header from '@/components/layout/Header';
import LayoutGrid from '@/components/utils/LayoutGrid';
import Footer from '@/components/layout/Footer';
import vhMobileFix from '@/utils/vh-mobile-fix';
import { calculateScrollbarWidth } from '@/utils/calculate-scrollbar-width';
import { usePrevious } from '@/hooks/use-previous';
import AppInits from '@/components/general/AppInits';
import AppHead from '@/components/general/AppHead';
import { CommonPageProps } from '@/types';
import PartnersPopup from '@/components/general/PartnersPopup';
import Cursor from '@/components/general/Cursor';
import PrivateSpecPopup from '@/components/general/PrivateSpecPopup';
import CookieBanner from '@/components/general/CookieBanner';
import Metrics from '@/components/general/Metrics';

if (typeof window !== 'undefined') {
    document.documentElement.classList.add('js-ready');
    vhMobileFix();
    calculateScrollbarWidth();
}

const App = ({ Component, pageProps }: AppProps<CommonPageProps>) => {
    const router = useRouter();
    const prevBodyClass = usePrevious(pageProps.bodyClass);

    /**
     * Смена класса на <html> при переходах между страницами
     */
    useEffect(() => {
        const onNewPageReady = () => {
            if (prevBodyClass) {
                document.documentElement.classList.remove(...prevBodyClass.split(' '));
            }

            if (pageProps.bodyClass) {
                document.documentElement.classList.add(...pageProps.bodyClass.split(' '));
            }
        };

        document.addEventListener('new-page-ready', onNewPageReady);

        return () => {
            document.removeEventListener('new-page-ready', onNewPageReady);
        };
    }, [pageProps.bodyClass, prevBodyClass]);

    useEffect(() => {
        history.scrollRestoration = 'manual';
    }, []);

    return (
        <Providers>
            <AppInits />
            <AppHead meta={pageProps.meta} />
            {process.env.NODE_ENV === 'production' && <Metrics />}
            <Header />
            <main className="main">
                <Component {...pageProps} key={router.asPath} />
            </main>
            <Footer />
            <Cursor />
            <PartnersPopup />
            <PrivateSpecPopup />
            <CookieBanner />
            {process.env.NODE_ENV === 'development' && <LayoutGrid />}
        </Providers>
    );
};

export default App;
