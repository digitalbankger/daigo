import 'swiper/scss';
import classNames from 'classnames';
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';
import { MutableRefObject, forwardRef, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { ImageShape } from '@/types';
import Responsive from '../Responsive';
import ArrowSVG from '@/svg/arrow.svg';
import { ASSET_PREFIX } from '@/variables';

interface Props extends React.HTMLAttributes<HTMLElement> {
    slides: ImageShape[];
}

const PartnersSlider = forwardRef<HTMLDivElement, Props>(({ slides, ...props }, ref) => {
    const swiperRef = useRef<SwiperRef>();
    const [isFirstRender, setIsFirstRender] = useState(true);

    useEffect(() => {
        setIsFirstRender(false);
    }, []);

    return (
        <div {...props} ref={ref} className={classNames('partners-slider', props.className)}>
            {isFirstRender ? (
                <div className="partners-slider-el">
                    {slides.map((slide, i) => (
                        <div key={i} className="partners-slider-el__slide">
                            <Responsive className="partners-slider-el__slide-responsive">
                                <Image
                                    src={(slide.src.endsWith('.svg') ? ASSET_PREFIX : '') + slide.src}
                                    fill
                                    alt=""
                                    sizes="15vw"
                                    unoptimized={slide.src.endsWith('.svg')}
                                />
                            </Responsive>
                        </div>
                    ))}
                </div>
            ) : (
                <Swiper
                    className="partners-slider-el"
                    slidesPerView="auto"
                    ref={swiperRef as MutableRefObject<SwiperRef>}
                    spaceBetween={40}
                    speed={800}
                    loop
                    centeredSlides
                    longSwipesRatio={0.01}
                    grabCursor
                    touchEventsTarget="container"
                    breakpoints={{
                        768: {
                            spaceBetween: 80,
                        },
                        1367: {
                            spaceBetween: 100,
                        },
                    }}
                >
                    {slides.map((slide, i) => (
                        <SwiperSlide key={i} className="partners-slider-el__slide">
                            <Responsive className="partners-slider-el__slide-responsive">
                                <Image
                                    src={(slide.src.endsWith('.svg') ? ASSET_PREFIX : '') + slide.src}
                                    fill
                                    alt=""
                                    sizes="15vw"
                                    unoptimized={slide.src.endsWith('.svg')}
                                />
                            </Responsive>
                        </SwiperSlide>
                    ))}
                </Swiper>
            )}
            <div className="partners-slider__controls">
                <button
                    className="partners-slider-nav-btn partners-slider-nav-btn--prev"
                    aria-label="Предыдущий слайд"
                    onClick={() => {
                        swiperRef.current?.swiper.slidePrev();
                    }}
                >
                    <ArrowSVG />
                </button>
                <button
                    className="partners-slider-nav-btn partners-slider-nav-btn--next"
                    aria-label="Следующий слайд"
                    onClick={() => {
                        swiperRef.current?.swiper.slideNext();
                    }}
                >
                    <ArrowSVG />
                </button>
            </div>
        </div>
    );
});

PartnersSlider.displayName = 'PartnersSlider';

export default PartnersSlider;
