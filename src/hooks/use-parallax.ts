import { useScroll, useTransform } from 'framer-motion';
import { RefObject } from 'react';

export function useParallax(
    ref: RefObject<HTMLElement>,
    distance: number,
    startFromZero = false,
    direction: 1 | -1 = 1,
) {
    const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });

    return useTransform(
        scrollYProgress,
        [0, 1],
        [startFromZero ? 0 : -distance, distance].map((x) => x * direction),
    );
}
