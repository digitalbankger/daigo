import Image from 'next/image';
import { useState } from 'react';
import { AnimatePresence, m, wrap } from 'framer-motion';
import BasePopup from '@/components/shared/BasePopup';
import Person from '@/components/shared/Person';
import { tp } from '@/typograf';
import doctorRecommendImg from '@/../../public/landing-business/img/doctor-recommend.jpeg';
import ArrowSVG from '@/svg/arrow.svg';
import PlaySVG from '@/svg/play.svg';
import { easeOutQuart } from '@/utils/easings';
import Responsive from '@/components/shared/Responsive';

export const RECOMMENDATION_POPUP_NAME = 'recommendation-popup';

const doctors = [
    {
        name: tp('Коитиро Фудзита'),
        occupation: tp('Заслуженный профессор из Токийского медицинского и стоматологического университета'),
        img: doctorRecommendImg,
    },
    {
        name: tp('2 Коитиро Фудзита'),
        occupation: tp('Заслуженный профессор из Токийского медицинского и стоматологического университета'),
        img: doctorRecommendImg,
    },
];

const MotionPerson = m(Person);

const RecommendationPopup = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const { name, occupation, img } = doctors[activeIndex];

    return (
        <BasePopup name={RECOMMENDATION_POPUP_NAME} className="recommendation-popup">
            <div className="h4 recommendation-popup__title">Рекомендации врачей</div>
            <AnimatePresence mode="popLayout">
                <m.div
                    className="recommendation-popup-review-wrapper"
                    key={activeIndex}
                    variants={{
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
                    }}
                    initial="initial"
                    animate="visible"
                    exit="exit"
                >
                    <Responsive className="recommendation-popup-review-responsive">
                        <button className="recommendation-popup-review" aria-label="Смотреть">
                            {img && (
                                <Image
                                    src={img.src}
                                    fill
                                    alt={name}
                                    sizes="(max-width: 767px) 100vw, (max-width: 1199px) 60vw, 37.5vw"
                                    className="responsive__item"
                                />
                            )}
                            <span className="recommendation-popup-review__icon">
                                <PlaySVG />
                            </span>
                        </button>
                    </Responsive>
                </m.div>
            </AnimatePresence>
            {doctors.length > 0 && (
                <div className="recommendation-popup__bottom">
                    <AnimatePresence mode="popLayout">
                        <MotionPerson
                            key={activeIndex}
                            name={name}
                            text={occupation}
                            img={img}
                            variants={{
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
                            }}
                            initial="initial"
                            animate="visible"
                            exit="exit"
                        />
                    </AnimatePresence>
                    {doctors.length > 1 && (
                        <div className="recommendation-popup__counter">
                            <button
                                aria-label="Предыдущий слайд"
                                onClick={() => setActiveIndex(wrap(0, doctors.length, activeIndex - 1))}
                                className="recommendation-popup-el__nav-btn recommendation-popup-el__nav-btn--prev"
                            >
                                <ArrowSVG />
                            </button>
                            <div className="recommendation-popup__counter-el">
                                <div className="recommendation-popup__counter-el-item">{activeIndex + 1}</div>
                                <div className="recommendation-popup__counter-el-item">{doctors.length}</div>
                            </div>
                            <button
                                aria-label="Следующий слайд"
                                className="recommendation-popup-el__nav-btn recommendation-popup-el__nav-btn--next"
                                onClick={() => setActiveIndex(wrap(0, doctors.length, activeIndex + 1))}
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

export default RecommendationPopup;
