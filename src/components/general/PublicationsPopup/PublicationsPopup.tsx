import Image from 'next/image';
import { useState } from 'react';
import { AnimatePresence, Variants, m, wrap } from 'framer-motion';
import BasePopup from '@/components/shared/BasePopup';
import { tp } from '@/typograf';
import ArrowSVG from '@/svg/arrow.svg';
import { easeOutQuart } from '@/utils/easings';
import publication1Img from '@/../../public/landing-business/img/publications/1.jpeg';
import publication2Img from '@/../../public/landing-business/img/publications/2.jpeg';
import publication3Img from '@/../../public/landing-business/img/publications/3.jpeg';
import publication4Img from '@/../../public/landing-business/img/publications/4.jpeg';
import publication5Img from '@/../../public/landing-business/img/publications/5.jpeg';

export const PUBLICATIONS_POPUP_NAME = 'publications-popup';

const publications = [
    {
        img: publication1Img,
    },
    {
        img: publication2Img,
    },
    {
        img: publication3Img,
    },
    {
        img: publication4Img,
    },
    {
        img: publication5Img,
    },
];

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

const PublicationsPopup = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const { img } = publications[activeIndex];

    return (
        <BasePopup name={PUBLICATIONS_POPUP_NAME} className="publications-popup">
            <div className="h4 ads-popup__title">{tp('Публикации о вас в соц.сетях и на сайте')}</div>
            <AnimatePresence mode="popLayout">
                <m.div key={activeIndex} variants={variants} initial="initial" animate="visible" exit="exit">
                    {img && (
                        <Image
                            src={img.src}
                            width={img.width}
                            height={img.height}
                            alt=""
                            sizes="(max-width: 767px) 100vw, (max-width: 1199px) 60vw, 37.5vw"
                            className="publications-popup__img img-fluid"
                        />
                    )}
                </m.div>
            </AnimatePresence>
            {publications.length > 0 && (
                <div className="recommendation-popup__bottom">
                    {publications.length > 1 && (
                        <div className="recommendation-popup__counter">
                            <button
                                aria-label="Предыдущий слайд"
                                onClick={() => setActiveIndex(wrap(0, publications.length, activeIndex - 1))}
                                className="recommendation-popup-el__nav-btn recommendation-popup-el__nav-btn--prev"
                            >
                                <ArrowSVG />
                            </button>
                            <div className="recommendation-popup__counter-el">
                                <div className="recommendation-popup__counter-el-item">{activeIndex + 1}</div>
                                <div className="recommendation-popup__counter-el-item">{publications.length}</div>
                            </div>
                            <button
                                aria-label="Следующий слайд"
                                className="recommendation-popup-el__nav-btn recommendation-popup-el__nav-btn--next"
                                onClick={() => setActiveIndex(wrap(0, publications.length, activeIndex + 1))}
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

export default PublicationsPopup;
