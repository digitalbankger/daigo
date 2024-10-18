import Image from 'next/image';
import { useState } from 'react';
import { AnimatePresence, Variants, m, wrap } from 'framer-motion';
import BasePopup from '@/components/shared/BasePopup';
import ArrowSVG from '@/svg/arrow.svg';
import { easeOutQuart } from '@/utils/easings';
import Responsive from '@/components/shared/Responsive';
import { ImageShape } from '@/types';

type Props = {
    popupName: string;
    popupTitle?: string;
    data: {
        img: ImageShape;
        title?: string;
        text?: string;
    }[];
};

const variants: Variants = {
    initial: {
        opacity: 0,
        y: -10,
        transition: { duration: 0.5, ease: easeOutQuart },
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: easeOutQuart, delay: 0.2 },
    },
    exit: {
        opacity: 0,
        y: 10,
        transition: { duration: 0.5, ease: easeOutQuart },
    },
};

const AdsPopup = ({ popupName, popupTitle, data }: Props) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const { img, text, title } = data[activeIndex];

    return (
        <BasePopup name={popupName} className="recommendation-popup">
            {popupTitle && <div className="h4 ads-popup__title">{popupTitle}</div>}
            <AnimatePresence mode="popLayout">
                <m.div
                    className="recommendation-popup-review-wrapper"
                    key={activeIndex}
                    variants={variants}
                    initial="initial"
                    animate="visible"
                    exit="exit"
                >
                    <Responsive className="recommendation-popup-review-responsive">
                        <div className="recommendation-popup-review">
                            {img && (
                                <Image
                                    src={img.src}
                                    fill
                                    alt=""
                                    sizes="(max-width: 767px) 100vw, (max-width: 1199px) 60vw, 37.5vw"
                                    className="responsive__item"
                                />
                            )}
                        </div>
                    </Responsive>
                </m.div>
            </AnimatePresence>
            {data.length > 0 && (
                <div className="recommendation-popup__bottom">
                    <AnimatePresence mode="popLayout">
                        <m.div
                            key={activeIndex}
                            className="ads-popup-text"
                            variants={variants}
                            initial="initial"
                            animate="visible"
                            exit="exit"
                        >
                            {title && <div className="ads-popup-text__primary">{title}</div>}
                            {text && <div className="text-s">{text}</div>}
                        </m.div>
                    </AnimatePresence>
                    {data.length > 1 && (
                        <div className="recommendation-popup__counter">
                            <button
                                aria-label="Предыдущий слайд"
                                onClick={() => setActiveIndex(wrap(0, data.length, activeIndex - 1))}
                                className="recommendation-popup-el__nav-btn recommendation-popup-el__nav-btn--prev"
                            >
                                <ArrowSVG />
                            </button>
                            <div className="recommendation-popup__counter-el">
                                <div className="recommendation-popup__counter-el-item">{activeIndex + 1}</div>
                                <div className="recommendation-popup__counter-el-item">{data.length}</div>
                            </div>
                            <button
                                aria-label="Следующий слайд"
                                className="recommendation-popup-el__nav-btn recommendation-popup-el__nav-btn--next"
                                onClick={() => setActiveIndex(wrap(0, data.length, activeIndex + 1))}
                            >
                                <ArrowSVG />
                            </button>
                        </div>
                    )}
                </div>
            )}
        </BasePopup>
    );
};

export default AdsPopup;
