/**
 * Link component.
 *
 * It replicates 'next/link' except scrolling to top.
 *
 * Because of custom page transitions we need the opportunity
 * to scroll the page in the right moment.
 */

import { useIsPageTransitioningState } from '@/atoms/page-transition';
import { default as NextLink, LinkProps } from 'next/link';
import { forwardRef } from 'react';

const Link = forwardRef<
    HTMLAnchorElement,
    Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps> & LinkProps
>(({ children, ...props }, ref) => {
    const [isPageTransitioning] = useIsPageTransitioningState();

    return (
        <NextLink
            {...props}
            ref={ref}
            scroll={props.scroll || false}
            style={{ ...props.style, pointerEvents: isPageTransitioning ? 'none' : undefined }}
        >
            {children}
        </NextLink>
    );
});

Link.displayName = 'Link';

export default Link;
