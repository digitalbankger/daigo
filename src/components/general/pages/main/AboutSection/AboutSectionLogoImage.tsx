import { CSSProperties, useRef } from 'react';
import { MotionValue, m, useTransform, useWillChange } from 'framer-motion';
import Image from 'next/image';
import { useIsFirstRender, useMediaQuery, useResizeObserver } from 'usehooks-ts';
import daigoColorfulLogoImg from '@/../../public/landing-business/img/daigo-colorful-logo.png';
import { viewport } from '@/utils/viewport';

interface Props {
    scrollYProgress: MotionValue<number>;
}

const MotionImage = m(Image);

const AboutSectionLogoImage = ({ scrollYProgress }: Props) => {
    const testRef = useRef<HTMLDivElement>(null);
    const { height: lvh } = useResizeObserver({ ref: testRef }); // чтобы предотвратить скачок при появлении/скрытии мобильной менюшки
    const logoRef = useRef<HTMLImageElement>(null);
    const { height: logoHeight } = useResizeObserver({ ref: logoRef });
    const isMobile = useMediaQuery('(max-width: 767px)');
    const isFirstRender = useIsFirstRender();
    const endRange = 0.2;
    const scale = useTransform(scrollYProgress, [0, endRange], isMobile ? [2.08, 0.808] : [1.16, 0.5625]);
    const y = useTransform(
        scrollYProgress,
        [0, endRange],
        [0, (((lvh || 0) * 100 || viewport.height) - (logoHeight || 0)) / 2],
    );
    const willChange = useWillChange() as any;
    const supportsCSSViewTimeline = typeof window !== 'undefined' ? CSS.supports('animation-timeline', 'view()') : true;

    return (
        <>
            <div className="visually-hidden">
                <div ref={testRef} style={{ height: '1lvh' }}></div>
            </div>
            {supportsCSSViewTimeline ? (
                <Image
                    ref={logoRef}
                    src={daigoColorfulLogoImg.src}
                    width={daigoColorfulLogoImg.width}
                    height={daigoColorfulLogoImg.height}
                    className="img-fluid about-section__bg"
                    alt=""
                    style={
                        isFirstRender
                            ? undefined
                            : ({
                                  '--scale-from': isMobile ? '2.08' : '1.16',
                                  '--scale-to': isMobile ? '0.808' : '0.5625',
                                  '--y': `${(((lvh || 0) * 100 || viewport.height) - (logoHeight || 0)) / 2}px`,
                                  '--end-range': `${endRange * 100}%`,
                              } as CSSProperties)
                    }
                />
            ) : (
                <MotionImage
                    ref={logoRef}
                    src={daigoColorfulLogoImg.src}
                    width={daigoColorfulLogoImg.width}
                    height={daigoColorfulLogoImg.height}
                    className="img-fluid about-section__bg"
                    alt=""
                    style={isFirstRender ? undefined : { scaleX: scale, scaleY: scale, y, willChange }}
                />
            )}
        </>
    );
};

export default AboutSectionLogoImage;
