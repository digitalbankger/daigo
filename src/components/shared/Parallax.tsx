import { m, useWillChange } from 'framer-motion';
import { HTMLAttributes, ReactElement, useRef } from 'react';
import { useIsFirstRender } from 'usehooks-ts';
import { useParallax } from '@/hooks/use-parallax';

type Props = HTMLAttributes<HTMLSpanElement> & {
    children: ReactElement;
    distance: number;
};

const Parallax = ({ children, distance, ...props }: Props) => {
    const ref = useRef<HTMLDivElement>(null);
    const y = useParallax(ref, distance);
    const willChange = useWillChange();
    const isFirstRender = useIsFirstRender();

    return (
        <span {...props} ref={ref}>
            <m.span style={isFirstRender ? undefined : { y, display: 'block', willChange }}>{children}</m.span>
        </span>
    );
};

export default Parallax;
