import classNames from 'classnames';
import Image from 'next/image';
import { useRef } from 'react';
import { m, useScroll } from 'framer-motion';
import { tp } from '@/typograf';
import gridImg1 from '@/../../public/landing-business/img/grid-img-1.jpeg';
import gridImg2 from '@/../../public/landing-business/img/grid-img-2.jpeg';
import gridImg3 from '@/../../public/landing-business/img/grid-img-3.jpeg';
import footerBall2Img from '@/../../public/landing-business/img/footer-ball-2.png';
import footerBall3Img from '@/../../public/landing-business/img/footer-ball-3.png';
import footerBall4Img from '@/../../public/landing-business/img/footer-ball-4.png';
import Button from '@/components/shared/Button';
import Parallax from '@/components/shared/Parallax';
import ParallaxedImage from '@/components/shared/ParallaxedImage';
import { useOpenedPopupsState } from '@/atoms/opened-popups';
import AdsPopup, { ADS_POPUP_NAME } from '@/components/general/AdsPopup/AdsPopup';
import PublicationsPopup, { PUBLICATIONS_POPUP_NAME } from '@/components/general/PublicationsPopup/PublicationsPopup';
import ResearchPopup, { RESEARCH_POPUP_NAME } from '@/components/general/ResearchPopup/ResearchPopup';
import SpecialistsPopup, { SPECIALISTS_POPUP_NAME } from '@/components/general/SpecialistsPopup/SpecialistsPopup';
import SplitText from '@/components/shared/SplitText';
import AboutSectionLogoImage from './AboutSectionLogoImage';
import Reveal from '@/components/shared/Reveal';

interface Props extends React.HTMLAttributes<HTMLElement> {}

const AboutSection = (props: Props) => {
    const innerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: innerRef, offset: ['start center', 'end end'] });
    const { openPopup } = useOpenedPopupsState();

    return (
        <section {...props} className={classNames('about-section', props.className)}>
            <div className="about-section-text">
                <div className="about-section-text-inner">
                    <h2 className="text-s about-section__title">
                        <SplitText>О компании</SplitText>
                    </h2>
                    <SplitText className="h4">{tp('Создаем все условия для роста продаж наших партнеров')}</SplitText>
                </div>
            </div>
            <div ref={innerRef} className="about-section-inner">
                <AboutSectionLogoImage scrollYProgress={scrollYProgress} />
                <div className="about-section-grid">
                    <div className="about-section-grid-item about-section-grid-item-content about-section-grid-item--experience">
                        <div className="about-section-grid-item--experience-ball">
                            <Parallax distance={100}>
                                <Image
                                    src={footerBall3Img.src}
                                    width={footerBall3Img.width}
                                    height={footerBall3Img.height}
                                    alt=""
                                    className="img-fluid"
                                    sizes="198px"
                                />
                            </Parallax>
                        </div>
                        <div className="about-section-grid-item-content__top">
                            <SplitText className="text-s about-section-grid-item-content__title">наш опыт</SplitText>
                            <SplitText className="h3 about-section-grid-item-content__text">
                                {tp('12 лет на рынке РФ и СНГ')}
                            </SplitText>
                        </div>
                        <ul className="list-unstyled about-section-grid-item-content__bottom about-section-numbers-list">
                            <Reveal>
                                <li>
                                    <div className="about-section-number__top">
                                        <div className="text-s about-section-number__top-small-text">до</div>
                                        <div className="h2 about-section-number__top-large-text">50</div>
                                        <div className="text-s about-section-number__top-small-text">млн.</div>
                                    </div>
                                    <div className="about-section-number__bottom">
                                        {tp('вкладываем в узнаваемость')}
                                    </div>
                                </li>
                            </Reveal>{' '}
                            <Reveal>
                                <li>
                                    <div className="about-section-number__top">
                                        <div className="h2 about-section-number__top-large-text">15</div>
                                        <div className="text-s about-section-number__top-small-text">тыс.</div>
                                    </div>
                                    <div className="about-section-number__bottom">
                                        {tp('брендовых запросов в месяц по рф')}
                                    </div>
                                </li>
                            </Reveal>{' '}
                            <Reveal>
                                <li>
                                    <div className="about-section-number__top">
                                        <div className="h2 about-section-number__top-large-text">57</div>
                                        <div className="text-s about-section-number__top-small-text">тыс.</div>
                                    </div>
                                    <div className="about-section-number__bottom">
                                        {tp('подписчиков во всех соц. сетях')}
                                    </div>
                                </li>
                            </Reveal>
                        </ul>
                    </div>
                    <div className="about-section-grid-item about-section-grid-item--img-1 about-section-grid-item__img-wrapper">
                        <ParallaxedImage
                            src={gridImg1.src}
                            width={gridImg1.width}
                            height={gridImg1.height}
                            className="responsive__item"
                            scale={0.2}
                        />
                    </div>
                    <div className="about-section-grid-item"></div>
                    <div className="about-section-grid-item about-section-grid-item-content about-section-grid-item--adv">
                        <div className="about-section-grid-item-content__top">
                            <SplitText className="h3 about-section-grid-item-content__text">
                                {tp('Предоставляем рекламную продукцию')}
                            </SplitText>
                        </div>
                        <div className="about-section-grid-item-content__bottom">
                            <ul className="list-unstyled about-section-grid-item-content__bottom-left about-section-grid-item-content__text-list">
                                <li>
                                    <SplitText>{tp('Рекламный стенд с баннером')}</SplitText>
                                </li>
                                <li>
                                    <SplitText>{tp('Выставочные настольные конструкции')}</SplitText>
                                </li>
                                <li>
                                    <SplitText>{tp('Индивидуальный light-box под заказ')}</SplitText>
                                </li>
                            </ul>
                            <Reveal>
                                <Button
                                    variant="light"
                                    className="about-section-grid-item-content__bottom-right"
                                    onClick={() => openPopup(ADS_POPUP_NAME)}
                                >
                                    Подробнее
                                </Button>
                            </Reveal>
                        </div>
                    </div>
                    <div className="about-section-grid-item about-section-grid-item-content about-section-grid-item--soc">
                        <div className="about-section-grid-item--soc-ball">
                            <Parallax distance={100}>
                                <Image
                                    src={footerBall3Img.src}
                                    width={footerBall3Img.width}
                                    height={footerBall3Img.height}
                                    alt=""
                                    className="img-fluid"
                                    sizes="198px"
                                />
                            </Parallax>
                        </div>
                        <div className="about-section-grid-item-content__top">
                            <SplitText className="h3 about-section-grid-item-content__text">
                                {tp('Публикации о вас в соц.сетях и на сайте')}
                            </SplitText>
                        </div>
                        <div className="about-section-grid-item-content__bottom">
                            <div className="about-section-grid-item-content__bottom-left">
                                <SplitText>{tp('Публикуем посты / stories о вас во всех аккаунтах')}</SplitText>
                                <SplitText>{tp('Проводим совместные конкурсы и розыгрыши')}</SplitText>
                                <SplitText>{tp('Размещаем на сайт в разделе «Партнеры»')}</SplitText>
                            </div>
                            <Reveal>
                                <Button
                                    variant="light"
                                    className="about-section-grid-item-content__bottom-right"
                                    onClick={() => openPopup(PUBLICATIONS_POPUP_NAME)}
                                >
                                    примеры публикаций
                                </Button>
                            </Reveal>
                        </div>
                    </div>
                    <div className="about-section-grid-item"></div>
                    <div className="about-section-grid-item about-section-grid-item--hr-wrapper">
                        <div className="about-section-grid-item--hr-img">
                            <ParallaxedImage
                                src={gridImg2.src}
                                width={gridImg2.width}
                                height={gridImg2.height}
                                className="responsive__item"
                                scale={0.2}
                            />
                        </div>
                        <div className="about-section-grid-item-content about-section-grid-item--hr">
                            <div className="about-section-grid-item-content__top">
                                <SplitText className="h3 about-section-grid-item-content__text">
                                    {tp('Обучение вашего персонала от экспертов')}
                                </SplitText>
                            </div>
                            <div className="about-section-grid-item-content__bottom">
                                <div className="about-section-grid-item-content__bottom-left">
                                    <SplitText>{tp('Специфика применения в вашей сфере')}</SplitText>
                                    <SplitText>{tp('Выездные мастер-классы, дегустации')}</SplitText>
                                    <SplitText>{tp('Клиентские дни и мероприятия')}</SplitText>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="about-section-grid-item about-section-grid-item-content about-section-grid-item--sales">
                        <div className="about-section-grid-item-content__top">
                            <SplitText className="h3 about-section-grid-item-content__text">
                                {tp('Обучение продажам и системе мотивации')}
                            </SplitText>
                        </div>
                        <div className="about-section-grid-item-content__bottom">
                            <div className="about-section-grid-item-content__bottom-left">
                                <SplitText>{tp('Как продавать, какой продукт, при каких условиях')}</SplitText>
                                <SplitText>{tp('Система мотивации для персонала')}</SplitText>
                            </div>
                        </div>
                    </div>
                    <div className="about-section-grid-item"></div>
                    <div className="about-section-grid-item about-section-grid-item--img-1">
                        <ParallaxedImage
                            src={gridImg3.src}
                            width={gridImg3.width}
                            height={gridImg3.height}
                            className="responsive__item"
                            scale={0.2}
                        />
                    </div>
                    <div className="about-section-grid-item about-section-grid-item-content about-section-grid-item--recognition">
                        <div className="about-section-grid-item--recognition-ball">
                            <Parallax distance={120}>
                                <Image
                                    src={footerBall4Img.src}
                                    width={footerBall4Img.width}
                                    height={footerBall4Img.height}
                                    alt=""
                                    className="img-fluid"
                                    sizes="198px"
                                />
                            </Parallax>
                        </div>
                        <div className="about-section-grid-item-content__top">
                            <SplitText className="h3 about-section-grid-item-content__text">
                                {tp('Признание от сообщества врачей и экспертов')}
                            </SplitText>
                        </div>
                        <div className="about-section-grid-item-content__bottom">
                            <div className="about-section-grid-item-content__bottom-left">
                                <SplitText>
                                    {tp('Daigo – коллективный член РАЕН в справочнике лекарственных средств Vidal')}
                                </SplitText>
                                <SplitText>{tp('Более 15 исследований в Японии, России и Европе')}</SplitText>
                            </div>
                            <Reveal>
                                <Button
                                    variant="light"
                                    className="about-section-grid-item-content__bottom-right"
                                    onClick={() => openPopup(RESEARCH_POPUP_NAME)}
                                >
                                    список исследований
                                </Button>
                            </Reveal>
                        </div>
                    </div>
                    <div className="about-section-grid-item"></div>
                    <div className="about-section-grid-item about-section-grid-item-content about-section-grid-item--tops">
                        <div className="about-section-grid-item-content__top">
                            <div className="about-section-grid-item--tops-ball">
                                <Parallax distance={150}>
                                    <Image
                                        src={footerBall2Img.src}
                                        width={footerBall2Img.width}
                                        height={footerBall2Img.height}
                                        alt=""
                                        className="img-fluid"
                                        sizes="198px"
                                    />
                                </Parallax>
                            </div>
                            <SplitText className="h3 about-section-grid-item-content__text">
                                {tp('Работаем с ведущими врачами и специалистами')}
                            </SplitText>
                        </div>
                        <div className="about-section-grid-item-content__bottom">
                            <div className="about-section-grid-item-content__bottom-left">
                                <SplitText>{tp('Совместные посты, stories и эфиры')}</SplitText>
                                <SplitText>
                                    {tp(
                                        'Интервью и лекции с авторитетными известными врачами и health-коучами на актуальные темы',
                                    )}
                                </SplitText>
                                <SplitText>{tp('о здоровье, молодости и красоте')}</SplitText>
                            </div>
                            <Reveal>
                                <Button
                                    variant="light"
                                    className="about-section-grid-item-content__bottom-right"
                                    onClick={() => openPopup(SPECIALISTS_POPUP_NAME)}
                                >
                                    подробнее
                                </Button>
                            </Reveal>
                        </div>
                    </div>
                </div>
            </div>
            <AdsPopup />
            <PublicationsPopup />
            <ResearchPopup />
            <SpecialistsPopup />
        </section>
    );
};

export default AboutSection;
