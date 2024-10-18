/**
 * Компонент для анимации
 * появления элементов по скроллу
 * (при попадании во вьюпорт)
 */

import classNames from 'classnames';
import { cloneElement, ReactElement, useEffect, useRef, useState } from 'react';

type Props = {
    children: ReactElement;
    type?: string;
    /**
     * Задержка в миллисекундах (ms)
     */
    delay?: number;
    allowed?: boolean;
    instant?: boolean;
};

const Reveal = ({ children, type, delay = 0, allowed = true, instant = false }: Props) => {
    const el = useRef<HTMLDivElement>(null);
    const [revealed, setRevealed] = useState(false);

    useEffect(() => {
        let observer: IntersectionObserver | null;
        let timeout: NodeJS.Timeout;

        if (instant) {
            if (allowed) {
                timeout = setTimeout(() => {
                    setRevealed(true);
                }, delay);
            }
        } else {
            observer = new IntersectionObserver((entries, obs) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && allowed) {
                        obs.unobserve(entry.target);

                        timeout = setTimeout(() => {
                            setRevealed(true);
                        }, delay);
                    }
                });
            });

            if (el.current) {
                observer.observe(el.current);
            }
        }

        return () => {
            clearTimeout(timeout);

            if (observer) {
                observer.disconnect();
                observer = null;
            }
        };
    }, [delay, allowed, instant]);

    return cloneElement(children, {
        ...children.props,
        ref: el,
        'data-reveal': true,
        'data-reveal-type': type,
        className: classNames(children.props.className, { 'is-revealed': revealed }),
    });
};

export default Reveal;
