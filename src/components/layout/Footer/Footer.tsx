import Image from 'next/image';
import { formatPhoneHref } from '@/utils/strings';
import VKIconSVG from '@/svg/vk.svg';
import YouTubeIconSVG from '@/svg/youtube.svg';
import TelegramIconSVG from '@/svg/telegram.svg';
import Button from '@/components/shared/Button';
import footerBall1Img from '@/../../public/landing-business/img/footer-ball-1.png';
import footerBall2Img from '@/../../public/landing-business/img/footer-ball-2.png';
import footerBall3Img from '@/../../public/landing-business/img/footer-ball-3.png';
import footerBall4Img from '@/../../public/landing-business/img/footer-ball-4.png';
import footerBall5Img from '@/../../public/landing-business/img/footer-ball-5.png';
import ScrollToLink from '@/components/shared/ScrollToLink';
import { useOpenedPopupsState } from '@/atoms/opened-popups';
import { PARTNERS_POPUP_NAME } from '@/components/general/PartnersPopup/PartnersPopup';
import Reveal from '@/components/shared/Reveal';

const Footer = () => {
    const { openPopup } = useOpenedPopupsState();

    const nav = [
        {
            title: 'продукция',
            href: '#products',
        },
        {
            title: 'о партнерстве',
            href: '#partnership',
        },
        {
            title: 'отзывы',
            href: '#reviews',
        },
        {
            title: 'наши партнеры',
            href: '#partners',
        },
    ] as const;

    const phone = '8 800 555 20 43';

    const socList = [
        {
            name: 'VK',
            icon: VKIconSVG,
            url: 'https://vk.ru/daigoru?roistat_visit=341888',
        },
        {
            name: 'YouTube',
            icon: YouTubeIconSVG,
            url: 'https://youtube.com/@daigojp_ru?roistat_visit=341888',
        },
        {
            name: 'Telegram',
            icon: TelegramIconSVG,
            url: 'https://t.me/daigoru?roistat_visit=341888',
        },
    ] as const;

    return (
        <footer className="footer">
            <div className="footer-ball-1">
                <Image
                    src={footerBall1Img.src}
                    width={footerBall1Img.width}
                    height={footerBall1Img.height}
                    alt=""
                    className="img-fluid footer-ball-inner"
                    sizes="(max-width: 767px) 100vw, 50vw"
                />
            </div>
            <div className="footer-ball-2">
                <Image
                    src={footerBall2Img.src}
                    width={footerBall2Img.width}
                    height={footerBall2Img.height}
                    alt=""
                    className="img-fluid footer-ball-inner"
                    sizes="245px"
                />
            </div>
            <div className="footer-ball-5">
                <Image
                    src={footerBall5Img.src}
                    width={footerBall5Img.width}
                    height={footerBall5Img.height}
                    alt=""
                    className="img-fluid footer-ball-inner"
                    sizes="245px"
                />
            </div>
            <div className="wrapper footer__content" itemScope itemType="https://schema.org/Organization">
                <div className="footer-row footer-top-row">
                    <div className="footer-row__left">
                        <nav aria-label="Footer navigation">
                            <ul className="list-unstyled footer-nav-list text-s">
                                {nav.map((obj, i) => (
                                    <Reveal key={i}>
                                        <li>
                                            <ScrollToLink href={obj.href} className="link">
                                                {obj.title}
                                            </ScrollToLink>
                                        </li>
                                    </Reveal>
                                ))}
                            </ul>
                        </nav>
                    </div>
                    <div className="footer-row__middle">
                        <div className="footer-contact">
                            <Reveal>
                                <div className="footer-contact__label">Телефон:</div>
                            </Reveal>
                            <Reveal>
                                <div className="footer-contact__value">
                                    <a
                                        href={`tel:${formatPhoneHref(phone)}`}
                                        className="link"
                                        aria-label={`Позвонить: ${phone}`}
                                        itemProp="telephone"
                                    >
                                        {phone}
                                    </a>
                                </div>
                            </Reveal>
                        </div>
                    </div>
                    <div className="footer-row__right">
                        <ul className="list-unstyled soc-list">
                            {socList.map((obj, i) => {
                                const Icon = obj.icon;
                                return (
                                    <Reveal key={i}>
                                        <li>
                                            <a
                                                href={obj.url}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="soc-link"
                                                aria-label={`Мы в ${obj.name}`}
                                            >
                                                <Icon />
                                            </a>
                                        </li>
                                    </Reveal>
                                );
                            })}
                        </ul>
                    </div>
                </div>
                <div className="footer-middle-row">
                    <div className="footer-middle-row-btn-wrapper">
                        <div className="footer-ball-3">
                            <Image
                                src={footerBall3Img.src}
                                width={footerBall3Img.width}
                                height={footerBall3Img.height}
                                alt=""
                                className="img-fluid footer-ball-inner"
                                sizes="198px"
                            />
                        </div>
                        <Reveal>
                            <Button
                                variant="dark"
                                size="lg"
                                className="footer-middle-row-btn"
                                onClick={() => openPopup(PARTNERS_POPUP_NAME)}
                            >
                                оставить заявку на партнерство
                            </Button>
                        </Reveal>
                        <div className="footer-ball-4">
                            <Image
                                src={footerBall4Img.src}
                                width={footerBall4Img.width}
                                height={footerBall4Img.height}
                                alt=""
                                className="img-fluid footer-ball-inner"
                                sizes="198px"
                            />
                        </div>
                    </div>
                </div>
                <div className="footer-row footer-bottom-row text-xs">
                    <div className="footer-row__left">
                        <Reveal>
                            <div className="developer">
                                Made in
                                <a
                                    href="https://chipsa.ru/?utm_source=daigo_landing&utm_medium=works&utm_campaign=all"
                                    className="link link--underlined"
                                    target="_blank"
                                    rel="noopener noreferrer nofollow"
                                >
                                    Chipsa
                                </a>
                            </div>
                        </Reveal>
                    </div>
                    <div className="footer-row__middle">
                        <Reveal>
                            <div className="footer-text">
                                Бад, не является лекарственным средством Не является лекарством
                            </div>
                        </Reveal>
                    </div>
                    <div className="footer-row__right">
                        <Reveal>
                            <div>
                                <a
                                    href="https://daigo.ru/privacy/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="link link--underlined text-s"
                                >
                                    политика конфиденциальности
                                </a>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
