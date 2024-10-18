import Image from 'next/image';
import { MotionValue, m, useScroll, useTransform } from 'framer-motion';
import { CSSProperties, HTMLAttributes, PropsWithChildren, ReactNode, useEffect, useRef, useState } from 'react';
import { useIsFirstRender, useResizeObserver } from 'usehooks-ts';
import classNames from 'classnames';
import { tp } from '@/typograf';
import MedSVG from '@/svg/med.svg';
import { viewport } from '@/utils/viewport';
import branchImg from '@/../../public/landing-business/img/branch2.png';
import { products } from '@/data/products';
import PlusSVG from '@/svg/plus.svg';
import FirstBlockCatalog from './FirstBlockCatalog';
import { useMediaQueryDeviceState } from '@/atoms/media-query-device';
import ProductPopup from '../../ProductPopup';
import { useOpenedPopupsState } from '@/atoms/opened-popups';
import { PRODUCT_POPUP_NAME } from '../../ProductPopup/ProductPopup';
import Button from '@/components/shared/Button';
import doctorRecommendImg from '@/../../public/landing-business/img/doctor-recommend.jpeg';
import RecommendationPopup from '../../RecommendationPopup';
import { RECOMMENDATION_POPUP_NAME } from '../../RecommendationPopup/RecommendationPopup';
import SplitText from '@/components/shared/SplitText';
import Reveal from '@/components/shared/Reveal';

type Props = HTMLAttributes<HTMLElement>;

const MotionImage = m(Image);

const ContainerBlockEl = ({
    scrollYProgress,
    imageWidth,
    children,
}: PropsWithChildren & { scrollYProgress: MotionValue<number>; imageWidth: number }) => {
    const [mediaQueryDevice] = useMediaQueryDeviceState();
    const isFirstRender = useIsFirstRender();
    const value = isFirstRender ? 0 : -(imageWidth - viewport.width * (mediaQueryDevice.includes('desktop') ? 0.5 : 1));
    const x = useTransform(scrollYProgress, (val) => val * value);
    const supportsCSSViewTimeline = typeof window !== 'undefined' ? CSS.supports('animation-timeline', 'view()') : true;

    return supportsCSSViewTimeline ? (
        <div
            className="first-block-section-container-block"
            style={
                {
                    '--x': `${value}px`,
                } as CSSProperties
            }
        >
            {children}
        </div>
    ) : (
        <m.div className="first-block-section-container-block" style={{ x }}>
            {children}
        </m.div>
    );
};

const ContainerBlockElWrapper = ({
    children,
    imageWidth,
    scrollYProgress,
}: {
    imageWidth: number;
    scrollYProgress: MotionValue<number>;
    children: ReactNode;
}) => {
    return (
        <ContainerBlockEl scrollYProgress={scrollYProgress} imageWidth={imageWidth}>
            {children}
        </ContainerBlockEl>
    );
};

const FirstSection = (props: Props) => {
    const wrapperRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLImageElement>(null);
    const { width: imageWidth } = useResizeObserver({ ref: imageRef });
    const { openPopup } = useOpenedPopupsState();
    const [activeProductIndex, setActiveProductIndex] = useState(0);
    const { scrollYProgress } = useScroll({ target: wrapperRef, offset: ['start start', 'end end'] });
    const activeProduct = products[activeProductIndex];

    const openProductInfo = (index: number) => {
        setActiveProductIndex(index);
        openPopup(PRODUCT_POPUP_NAME);
    };

    const supportsCSSViewTimeline = typeof window !== 'undefined' ? CSS.supports('animation-timeline', 'view()') : true;
    const [mediaQueryDevice] = useMediaQueryDeviceState();
    const isFirstRender = useIsFirstRender();
    const value = isFirstRender
        ? 0
        : -((imageWidth || 0) - viewport.width * (mediaQueryDevice.includes('desktop') ? 0.5 : 1));
    const x = useTransform(scrollYProgress, (val) => (supportsCSSViewTimeline ? 0 : val * value));
    const invertedX = useTransform(x, (val) => (supportsCSSViewTimeline ? 0 : -val));
    const ctx = useRef<CanvasRenderingContext2D | null>(null);

    return (
        <section {...props} ref={wrapperRef} className={classNames('first-block-section-wrapper', props.className)}>
            <div className="first-block-section-container">
                <ContainerBlockElWrapper scrollYProgress={scrollYProgress} imageWidth={imageWidth || 0}>
                    <m.div className="first-block-section__bg-wrapper" style={{ x: invertedX }}>
                        <MotionImage
                            ref={imageRef}
                            src={branchImg.src}
                            width={branchImg.width}
                            height={branchImg.height}
                            className="first-block-section__bg"
                            alt=""
                            priority
                            quality={90}
                            fetchPriority="high"
                            variants={{
                                hidden: { opacity: 0 },
                                visible: { opacity: 1, transition: { duration: 0.65 } },
                            }}
                            initial="hidden"
                            animate="visible"
                            style={{ x }}
                        />
                    </m.div>
                    <div className="first-block-section-container-inner">
                        <div className="first-block-section">
                            <div className="wrapper first-block-section__content-wrapper">
                                <div className="first-block-section__content">
                                    <SplitText delay={0.1} className="text-s first-block-section__text">
                                        {tp('Оптовое предложение для партнеров')}
                                    </SplitText>
                                    <h1 className="first-block-section__title">
                                        <SplitText delay={0.2} className="first-block-section__title-inner">
                                            {tp('Уникальные премиальные бады из Японии')}
                                        </SplitText>
                                    </h1>
                                </div>
                                <div className="first-block-section__bottom">
                                    <div className="first-block-section__bottom-item">
                                        <SplitText
                                            delay={0.4}
                                            className="text-s first-block-section__bottom-item__text"
                                        >
                                            {tp('признаны профессиональным сообществом врачей')}
                                        </SplitText>
                                        <m.div
                                            className="first-block-section__bottom-item__icon"
                                            variants={{
                                                hidden: { opacity: 0, y: 20 },
                                                visible: {
                                                    opacity: 1,
                                                    y: 0,
                                                    transition: { duration: 0.65, delay: 0.7 },
                                                },
                                            }}
                                            initial="hidden"
                                            animate="visible"
                                        >
                                            <MedSVG />
                                        </m.div>
                                        <SplitText
                                            delay={0.4}
                                            className="text-s first-block-section__bottom-item__text"
                                        >
                                            {tp('сформирован спрос среди премиальной аудитории')}
                                        </SplitText>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="first-block-section">
                            <Reveal>
                                <div className="first-block-product first-block-product--daigo">
                                    <div className="text-s first-block-product-type">{products[0].type}</div>
                                    <button className="h3 first-block-product-btn" onClick={() => openProductInfo(0)}>
                                        <span className="first-block-product-btn__name">{products[0].name}</span>
                                        <span className="first-block-product-btn__icon" aria-hidden="true">
                                            <PlusSVG />
                                        </span>
                                    </button>
                                </div>
                            </Reveal>
                            <Reveal>
                                <div className="first-block-product first-block-product--daigo-lux">
                                    <div className="text-s first-block-product-type">{products[1].type}</div>
                                    <button className="h3 first-block-product-btn" onClick={() => openProductInfo(1)}>
                                        <span className="first-block-product-btn__name">{products[1].name}</span>
                                        <span className="first-block-product-btn__icon" aria-hidden="true">
                                            <PlusSVG />
                                        </span>
                                    </button>
                                </div>
                            </Reveal>
                        </div>
                        <div className="first-block-section">
                            <Reveal>
                                <div className="first-block-product first-block-product--daigo-dent">
                                    <div className="text-s first-block-product-type">{products[2].type}</div>
                                    <button className="h3 first-block-product-btn" onClick={() => openProductInfo(2)}>
                                        <span className="first-block-product-btn__name">{products[2].name}</span>
                                        <span className="first-block-product-btn__icon" aria-hidden="true">
                                            <PlusSVG />
                                        </span>
                                    </button>
                                </div>
                            </Reveal>
                            <Reveal>
                                <div className="first-block-product first-block-product--daigo-shampoo">
                                    <div className="text-s first-block-product-type">{products[3].type}</div>
                                    <button className="h3 first-block-product-btn" onClick={() => openProductInfo(3)}>
                                        <span className="first-block-product-btn__name">{products[3].name}</span>
                                        <span className="first-block-product-btn__icon" aria-hidden="true">
                                            <PlusSVG />
                                        </span>
                                    </button>
                                </div>
                            </Reveal>
                        </div>
                        <div className="first-block-section">
                            <Reveal>
                                <div className="first-block-product first-block-product--tamotsu">
                                    <div className="text-s first-block-product-type">{products[4].type}</div>
                                    <button className="h3 first-block-product-btn" onClick={() => openProductInfo(4)}>
                                        <span className="first-block-product-btn__name">{products[4].name}</span>
                                        <span className="first-block-product-btn__icon" aria-hidden="true">
                                            <PlusSVG />
                                        </span>
                                    </button>
                                </div>
                            </Reveal>
                            {/* Временно скрыто! */}
                            {/* <div className="recommendation-card first-block-recommendation">
                                <div className="recommendation-card__title">{tp('Рекоммендации врачей')}</div>
                                <div className="recommendation-card__bottom">
                                    <div className="recommendation-card__bottom-left">
                                        <div className="text-xs recommendation-card__text">
                                            {tp('известные врачи рекомендуют продукцию дайго')}
                                        </div>
                                        <Button
                                            variant="outline-dark"
                                            size="sm"
                                            onClick={() => openPopup(RECOMMENDATION_POPUP_NAME)}
                                        >
                                            Подробнее
                                        </Button>
                                    </div>
                                    <div className="recommendation-card__bottom-right">
                                        <Image
                                            src={doctorRecommendImg.src}
                                            width={doctorRecommendImg.width}
                                            height={doctorRecommendImg.height}
                                            alt="Врач"
                                            className="img-fluid recommendation-card__img"
                                            sizes="120px"
                                        />
                                    </div>
                                </div>
                            </div> */}
                            <div className="first-block-catalog-wrapper" aria-hidden="true">
                                <FirstBlockCatalog />
                            </div>
                        </div>
                    </div>
                </ContainerBlockElWrapper>
            </div>
            <ProductPopup product={activeProduct} />
            {/* Временно скрыто! */}
            {/* <RecommendationPopup /> */}
        </section>
    );
};

export default FirstSection;
