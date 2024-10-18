/**
 * Компонент для анимации
 * появления текста построчно
 * (при попадании во вьюпорт)
 */

import { HTMLAttributes, memo, useRef } from 'react';
import { motion, useInView, useWillChange } from 'framer-motion';
import { useIsFirstRender } from 'usehooks-ts';
import { easeInOutQuart } from '@/utils/easings';

type Props = HTMLAttributes<HTMLElement> & {
    children: string;
    allowed?: boolean;
    delay?: number;
    stagger?: number;
    duration?: number;
    easeFunction?: (x: number) => number;
};

const SplitText = ({
    children,
    /**
     * Задержка (в секундах)
     */
    delay = 0,
    duration = 1,
    stagger = 0,
    allowed = true,
    easeFunction = easeInOutQuart,
    ...props
}: Props) => {
    const el = useRef<HTMLDivElement>(null);
    const isInView = useInView(el, { once: true });
    const willChange = useWillChange();
    const words = children.split(' ');
    const isFirstRender = useIsFirstRender();

    return (
        <span {...props} ref={el} style={{ ...props.style, display: 'flex', flexWrap: 'wrap' }}>
            {words.map((word, i) => (
                <span
                    key={children + i}
                    style={{
                        display: 'inline-block',
                        overflow: isFirstRender ? 'hidden' : CSS.supports('overflow', 'clip') ? 'clip' : 'hidden',
                        pointerEvents: 'none',
                    }}
                >
                    <motion.span
                        initial={{ y: '105%' }}
                        animate={allowed && isInView ? 'visible' : 'hidden'}
                        variants={{
                            visible: () => ({
                                y: 0,
                                transition: { duration, delay: delay + stagger * i, ease: easeFunction },
                            }),
                        }}
                        style={{ display: 'inline-block', willChange }}
                        custom={i}
                    >
                        {word + (i !== words.length - 1 ? '\u00A0' : '')}
                    </motion.span>
                </span>
            ))}
        </span>
    );
};

export default memo(SplitText);
