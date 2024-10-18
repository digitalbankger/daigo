import { m, useWillChange } from 'framer-motion';
import Image from 'next/image';
import { CSSProperties, HTMLAttributes, useRef } from 'react';
import classNames from 'classnames';
import { useResizeObserver } from 'usehooks-ts';
import { useParallax } from '@/hooks/use-parallax';
import { mergeRefs } from '@/utils/merge-refs';

interface Props extends HTMLAttributes<HTMLElement> {
    src: string;
    width?: number;
    height?: number;
    alt?: string;
    scale?: number;
}

const ParallaxedImage = ({ src, width, height, alt, scale = 0, ...props }: Props) => {
    const ref = useRef<HTMLDivElement>(null);
    const elSizeRef = useRef<HTMLDivElement>(null);
    const { height: imgHeight } = useResizeObserver({ ref: elSizeRef });
    const value = (imgHeight || 0) * (scale * 2);
    const y = useParallax(ref, value);
    const supportsCSSViewTimeline = typeof window !== 'undefined' ? CSS.supports('animation-timeline', 'view()') : true;
    const willChange = useWillChange() as any; // баг типов с <Image />

    return (
        <div {...props} ref={mergeRefs([ref, elSizeRef])} className={classNames('parallaxed-image', props.className)}>
            {supportsCSSViewTimeline ? (
                <div
                    className="responsive__item"
                    style={
                        {
                            '--parallax-scale': `${1 + scale}`,
                            '--parallax-y-from': `${-value}px`,
                            '--parallax-y-to': `${value}px`,
                            animation: 'parallax linear',
                            animationFillMode: 'both',
                            animationTimeline: 'view()',
                            animationRange: 'cover 0% cover 100%',
                        } as CSSProperties
                    }
                >
                    <Image src={src} width={width} height={height} className="responsive__item" alt={alt || ''} />
                </div>
            ) : (
                <m.div
                    className="responsive__item"
                    key={value}
                    style={
                        {
                            y,
                            scale: 1 + scale,
                            willChange,
                        } as CSSProperties
                    }
                >
                    <Image src={src} width={width} height={height} className="responsive__item" alt={alt || ''} />
                </m.div>
            )}
        </div>
    );
};

export default ParallaxedImage;
