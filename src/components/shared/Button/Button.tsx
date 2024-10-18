import { ButtonHTMLAttributes, forwardRef, createElement, AnchorHTMLAttributes } from 'react';
import classNames from 'classnames';
import { LinkProps } from 'next/link';

export type Props = ButtonHTMLAttributes<HTMLButtonElement> &
    AnchorHTMLAttributes<HTMLAnchorElement> &
    Partial<LinkProps> & {
        /**
         * Какой тег рендерить
         */
        tag?: keyof JSX.IntrinsicElements | any;
        /**
         * Цветовая тема кнопки
         */
        variant?: 'default' | 'dark' | 'outline-dark' | 'light' | 'outline-light';
        /**
         * Размер
         */
        size?: 'lg' | 'md' | 'sm';
    };

const Button = forwardRef<HTMLButtonElement, Props>(
    ({ children, variant = 'default', size = 'md', tag = 'button', ...props }, ref) => {
        return createElement(
            tag,
            {
                ...props,
                ref,
                className: classNames('btn text-button', `btn-${variant}`, `btn-${size}`, props.className),
            },
            children,
        );
    },
);

Button.displayName = 'Button';

export default Button;
