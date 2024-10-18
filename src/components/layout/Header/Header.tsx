import { useEffect, useState } from 'react';
import { m, Variants } from 'framer-motion';
import Button from '@/components/shared/Button';
import Link from '@/components/shared/Link';
import LogoSVG from '@/svg/logo.svg';
import DownloadSVG from '@/svg/download.svg';
import EnvelopeSVG from '@/svg/envelope.svg';
import PlusSVG from '@/svg/plus.svg';
import TelegramHeadSVG from '@/svg/telegram-header.svg';
import { Theme } from '@/types';
import { useOpenedPopupsState } from '@/atoms/opened-popups';
import { PARTNERS_POPUP_NAME } from '@/components/general/PartnersPopup/PartnersPopup';
import { PRIVATE_SPEC_POPUP_NAME } from '@/components/general/PrivateSpecPopup/PrivateSpecPopup';
import { easeOutQuart } from '@/utils/easings';
import { useAppReadyState } from '@/atoms/app-ready';
import { ASSET_PREFIX } from '@/variables';
import { isPdf } from '@/utils/strings';
import { useMediaQueryDeviceState } from '@/atoms/media-query-device';

const themes: Theme[] = ['light', 'dark'];
const defaultTheme = 'light';

const staggerVariants: Variants = {
    initial: {},
    visible: {
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const childrenVariants: Variants = {
    initial: {
        opacity: 0,
        y: -15,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 1, ease: easeOutQuart },
    },
};

const MotionButton = m(Button);

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [mediaQueryDevice] = useMediaQueryDeviceState();
    const marketingKitLink =
        ASSET_PREFIX +
        (mediaQueryDevice === 'desktop'
            ? '/landing-business/daigo-marketing-kit.pdf?v2'
            : '/landing-business/m-daigo-marketing-kit.pdf?v2');
    const [theme, setTheme] = useState<Theme>(defaultTheme);
    const { openPopup } = useOpenedPopupsState();
    const [appReady] = useAppReadyState();
    const telegramBotLink = 'https://t.me/daigo_partners_bot';

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const target = entry.target as HTMLElement;

                    if (entry.isIntersecting) {
                        const theme = target.dataset.theme as Theme | null;
                        setTheme(theme && themes.includes(theme) ? theme : defaultTheme);
                    }
                });
            },
            { rootMargin: '-6% 0% -93.5% 0%', threshold: [0, 1] },
        );

        let timeout: NodeJS.Timeout;

        const onNewPageReady = () => {
            observer.disconnect();
            clearTimeout(timeout);
            timeout = setTimeout(() => {
                Array.from(document.querySelectorAll<HTMLElement>('.js-header-theme-trigger')).forEach((el, i) => {
                    observer.observe(el);
                });
            }, 1);
        };

        onNewPageReady();
        document.addEventListener('new-page-ready', onNewPageReady);

        return () => {
            clearTimeout(timeout);
            document.removeEventListener('new-page-ready', onNewPageReady);
            observer.disconnect();
        };
    }, []);

    const toggleWrapperClass = () => {
        setIsOpen((prevState) => !prevState);
    };

    return (
        <header className={`header header--${theme} pointer-events-none`}>
            <m.div
                className="header__content wrapper"
                variants={staggerVariants}
                initial="initial"
                animate={appReady ? 'visible' : 'hidden'}
            >
                <div className="header__left">
                    <m.div className="header-logo-wrapper" variants={childrenVariants}>
                        <Link
                            href="https://daigo.ru/"
                            className="header-logo pointer-events-auto"
                            aria-label="На главную"
                        >
                            <LogoSVG />
                        </Link>
                    </m.div>
                    <m.a
                        href={marketingKitLink}
                        target={isPdf(marketingKitLink) ? '_blank' : undefined}
                        rel={isPdf(marketingKitLink) ? 'noreferrer' : undefined}
                        className="header-kit-link text-s pointer-events-auto"
                        download={isPdf(marketingKitLink) ? undefined : true}
                        variants={childrenVariants}
                    >
                        <span className="link">Маркетинг кит</span>
                        <DownloadSVG />
                    </m.a>
                </div>
                <div className="header__right">
                    <div
                        className={`header__right-wrapper ${isOpen ? 'header__right-wrapper--open' : 'header__right-wrapper--close'}`}
                    >
                        <button className="btn header-btn__close btn-outline-light btn-md" onClick={toggleWrapperClass}>
                            <div className="header-telergam__icon-wrapper">
                                <TelegramHeadSVG className="header-telegram__icon" aria-hidden="true" />
                            </div>
                            <div className="header-plus__icon-wrapper">
                                <PlusSVG className="header-plus__icon" aria-hidden="true" />
                            </div>
                        </button>
                        <div className="header__right-btn-container">
                            <MotionButton
                                variant="light"
                                className="header-partner-btn"
                                onClick={() => openPopup(PARTNERS_POPUP_NAME)}
                                variants={childrenVariants}
                            >
                                <span className="header-partner-btn__text header__btn-wrapper">Стать партнером</span>
                                <EnvelopeSVG aria-hidden="true" />
                            </MotionButton>

                            {telegramBotLink && (
                                <m.a
                                    href={telegramBotLink}
                                    target={'_blank'}
                                    rel={'noreferrer'}
                                    className="btn header-telegramm-btn text-button btn-outline-light btn-md header__btn-wrapper"
                                    variants={childrenVariants}
                                >
                                    <span className="header-telegram__btn-text">Telegram bot</span>
                                    <TelegramHeadSVG className="header-telegram__btn-link" aria-hidden="true" />
                                </m.a>
                            )}
                        </div>
                    </div>
                </div>
            </m.div>
        </header>
    );
};

export default Header;
