import { HTMLAttributes, forwardRef, useEffect, useRef, useState } from 'react';
import { useMotionValue, m, MotionValue } from 'framer-motion';
import classNames from 'classnames';
import { ImageShape } from '@/types';
import { mergeRefs } from '@/utils/merge-refs';
import ReviewButton from './ReviewButton';

export interface Props extends HTMLAttributes<HTMLElement> {
    slides: { name: string; img?: ImageShape }[];
    scrollY?: MotionValue<string>;
}

const ReviewsScroller = forwardRef<HTMLDivElement, Props>(({ slides, scrollY, ...props }, ref) => {
    const _ref = useRef<HTMLDivElement>(null);
    const scrollerElRef = useRef<HTMLDivElement>(null);
    const x = useMotionValue(0);
    const [dragging, setDragging] = useState(false);
    const [draggingEnabled, setDraggingEnabled] = useState(false);

    useEffect(() => {
        const onResize = () => {
            if (_ref.current && scrollerElRef.current) {
                setDraggingEnabled(_ref.current.offsetWidth < scrollerElRef.current.offsetWidth);
            }
        };

        onResize();
        window.addEventListener('resize', onResize);

        return () => {
            window.removeEventListener('resize', onResize);
        };
    }, []);

    return (
        <div
            {...props}
            ref={mergeRefs([_ref, ref])}
            className={classNames('reviews-scroller', props.className, { 'slider-scroller--drag': draggingEnabled })}
        >
            <m.div
                ref={scrollerElRef}
                className="slider-scroller__el"
                drag={draggingEnabled ? 'x' : undefined}
                dragTransition={{ power: 0.5 }}
                dragConstraints={_ref}
                style={{ x }}
                onDrag={() => setDragging(true)}
                onDragEnd={() => setDragging(false)}
            >
                {slides.map((slide, i) => (
                    <div
                        key={i}
                        className="slider-scroller-slide"
                        style={{ pointerEvents: dragging ? 'none' : undefined }}
                    >
                        <ReviewButton img={slide.img} name={slide.name} index={i} />
                    </div>
                ))}
            </m.div>
        </div>
    );
});

ReviewsScroller.displayName = 'ReviewsScroller';

export default ReviewsScroller;
