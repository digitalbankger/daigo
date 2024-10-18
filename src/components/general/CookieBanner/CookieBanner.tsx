'use client';

import { useCookies } from 'react-cookie';
import { motion, AnimatePresence } from 'framer-motion';
import { tp } from '@/typograf';
import Button from '@/components/shared/Button';
import { useAppReadyState } from '@/atoms/app-ready';
import { easeOutQuart } from '@/utils/easings';

export const COOKIES_USAGE_COOKIE_NAME = 'COOKIES_USAGE_ACCEPTED';

const CookieBanner = () => {
    const [cookies, setCookies] = useCookies([COOKIES_USAGE_COOKIE_NAME]);
    const [appReady] = useAppReadyState();

    return (
        <AnimatePresence>
            {cookies.COOKIES_USAGE_ACCEPTED !== true && appReady && (
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0, transition: { duration: 1, ease: easeOutQuart, delay: 1.5 } }}
                    exit={{
                        opacity: 0,
                        y: 10,
                        transition: { duration: 0.75, ease: easeOutQuart },
                    }}
                    className="cookie-banner"
                >
                    <div
                        className="cookie-banner__text text-s"
                        dangerouslySetInnerHTML={{
                            __html: tp(
                                `Продолжая использовать сайт, вы соглашаетесь со сбором файлов cookie для корректного функционирования и аналитики сайта в соответствии с <a href="https://daigo.ru/cookie-policy/" class="link link--underlined" target="_blank" rel="noreferrer">Политикой Конфиденциальности</a>.`,
                            ),
                        }}
                    ></div>
                    <Button
                        variant="dark"
                        className="btn-narrow"
                        onClick={() => {
                            setCookies(COOKIES_USAGE_COOKIE_NAME, true);
                        }}
                    >
                        Ок
                    </Button>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default CookieBanner;
