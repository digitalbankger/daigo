import { LinkProps } from 'next/link';
import { useRouter } from 'next/router';
import { HTMLAttributes, MouseEventHandler, forwardRef } from 'react';
import Link from '@/components/shared/Link';
import { getOffsetTop } from '@/utils/dom';

type Props = HTMLAttributes<HTMLAnchorElement> & LinkProps;

const ScrollToLink = forwardRef<HTMLAnchorElement, Props>((props, ref) => {
    const router = useRouter();

    const onClick: MouseEventHandler<HTMLAnchorElement> = async (event) => {
        event.preventDefault();

        const target = event.target as HTMLElement;
        const href = target.getAttribute('href');

        const scrollTo = (href: string, hashtagIndex: number, headerHeight = 0) => {
            const el = document.querySelector(href.substring(hashtagIndex));

            if (el) {
                window.scrollTo({ top: getOffsetTop(el) - headerHeight, behavior: 'smooth' });
            }
        };

        if (href) {
            const hashtagIndex = href.indexOf('#');

            if (href.startsWith('/') && router.pathname !== href.slice(0, hashtagIndex)) {
                document.addEventListener(
                    'new-page-ready',
                    () => {
                        setTimeout(() => {
                            scrollTo(href, hashtagIndex);
                        }, 100);
                    },
                    {
                        once: true,
                    },
                );
                router.push(href, undefined, { scroll: false });
            } else {
                scrollTo(href, hashtagIndex);
            }
        }
    };

    return (
        <Link
            {...props}
            ref={ref}
            onClick={(event) => {
                onClick(event);
                props.onClick?.(event);
            }}
        />
    );
});

ScrollToLink.displayName = 'ScrollToLink';

export default ScrollToLink;
