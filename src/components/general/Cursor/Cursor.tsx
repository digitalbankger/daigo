'use client';

import { AnimatePresence, AnimationProps, m } from 'framer-motion';
import React, { memo, useEffect, useRef, useState } from 'react';
import classNames from 'classnames';
import { useRouter } from 'next/router';
import { lerp } from '@/utils/lerp';
import { viewport } from '@/utils/viewport';
import { useCursorContentState, useCursorTypeState } from '@/atoms/cursor';
import { tp } from '@/typograf';

const baseProps: AnimationProps = {
    initial: { x: '-50%', y: '-50%', scale: 0 },
    animate: { x: '-50%', y: '-50%', scale: 1 },
    exit: { x: '-50%', y: '-50%', scale: 0 },
};

const Cursor = () => {
    const el = useRef<HTMLDivElement>(null);
    const rAF = useRef<number>(0);
    const mouse = useRef<{ x: number; y: number }>({
        x: typeof window === 'undefined' ? 0 : viewport.width / 2,
        y: typeof window === 'undefined' ? 0 : viewport.height / 2,
    });
    const lerpedMouse = useRef<{ x: number; y: number }>({
        x: typeof window === 'undefined' ? 0 : viewport.width / 2,
        y: typeof window === 'undefined' ? 0 : viewport.height / 2,
    });
    const [visible, setVisible] = useState(false);
    const [type, setType] = useCursorTypeState();
    const [content] = useCursorContentState();
    const router = useRouter();

    /**
     * Сброс состояния курсора по смене страницы
     */
    useEffect(() => {
        const onPageChange = () => {
            setType('default');
        };

        router.events.on('routeChangeComplete', onPageChange);

        return () => router.events.off('routeChangeComplete', onPageChange);
    }, [router.events, setType]);

    /**
     * По умолчанию курсор не видно. Показываем его при движении мыши
     */
    useEffect(() => {
        function revealCursor() {
            setVisible(true);
        }

        document.addEventListener('mousemove', revealCursor, { once: true });

        return () => {
            document.removeEventListener('mousemove', revealCursor);
        };
    }, []);

    useEffect(() => {
        function getMouseCoords(event: MouseEvent) {
            mouse.current.x = event.clientX;
            mouse.current.y = event.clientY;
        }

        document.addEventListener('mousemove', getMouseCoords);

        return () => {
            document.removeEventListener('mousemove', getMouseCoords);
        };
    }, []);

    useEffect(() => {
        function render() {
            lerpedMouse.current.x = lerp(lerpedMouse.current.x, mouse.current.x, 0.1);
            lerpedMouse.current.y = lerp(lerpedMouse.current.y, mouse.current.y, 0.1);

            if (el.current) {
                el.current.style.transform = `translate3d(${lerpedMouse.current.x}px, ${lerpedMouse.current.y}px, 0) translate3d(-50%, -50%, 0)`;
            }
        }

        function animate() {
            render();
            rAF.current = requestAnimationFrame(animate);
        }

        rAF.current = requestAnimationFrame(animate);

        return () => {
            cancelAnimationFrame(rAF.current);
        };
    }, []);

    return (
        <div
            ref={el}
            className={classNames('cursor', {
                'cursor--hidden': !visible,
            })}
            style={{ opacity: visible ? 1 : 0 }}
        >
            <AnimatePresence>
                {content && (
                    <m.div {...baseProps} className="cursor-text__inner">
                        <div
                            className="cursor-text__inner-text"
                            dangerouslySetInnerHTML={{ __html: tp(content) }}
                        ></div>
                    </m.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default memo(Cursor);
