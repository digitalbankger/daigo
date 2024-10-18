import Image from 'next/image';
import { CSSProperties, useCallback, useEffect, useRef, useState } from 'react';
import classNames from 'classnames';
import { Review } from '@/data/reviews';
import { useOpenedPopupsState } from '@/atoms/opened-popups';
import { ALL_REVIEWS_POPUP_NAME } from './AllReviewsPopup';

interface Props {
    review: Review;
}

const AllReviewsPopupItem = ({ review }: Props) => {
    const ref = useRef<HTMLDivElement>(null);
    const MAX_ROWS = 8;
    const [scrollHeight, setScrollHeight] = useState(0);
    const { openedPopups } = useOpenedPopupsState();
    const [lh, setLh] = useState(0);
    const height = Math.round(lh * MAX_ROWS);
    const collapsingEnabled = review.content.type === 'text' && scrollHeight > height;
    const [collapsed, setCollapsed] = useState(true);

    const onResize = useCallback(() => {
        if (ref.current && review.content.type === 'text') {
            setLh(parseFloat(getComputedStyle(ref.current).lineHeight));
            setScrollHeight(ref.current.scrollHeight);
        }
    }, [review.content.type]);

    useEffect(() => {
        if (openedPopups.includes(ALL_REVIEWS_POPUP_NAME)) {
            onResize();
        }
    }, [openedPopups, onResize]);

    useEffect(() => {
        const ro = new ResizeObserver(onResize);

        if (ref.current) {
            ro.observe(ref.current);
        }

        return () => {
            ro.disconnect();
        };
    }, [onResize]);

    return (
        <div className="all-reviews-popup__review">
            <div className="all-reviews-popup__review-top text-xs">
                {review.date && <div>{review.date}</div>}
                <div>{review.name}</div>
                {review.hashtags.length > 0 && (
                    <ul className="list-unstyled hashtags-list">
                        {review.hashtags.map((hashtag, i) => (
                            <li key={i} className="hashtag">
                                {hashtag}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
            <div className="all-reviews-popup__review-main">
                {review.avatar && (
                    <Image
                        src={review.avatar.src}
                        width={review.avatar.width}
                        height={review.avatar.height}
                        className="all-reviews-popup__review-avatar"
                        alt={review.name}
                    />
                )}
                <div className="all-reviews-popup__review-content">
                    {typeof review.content.value === 'string' ? (
                        <div
                            ref={ref}
                            className={classNames('all-reviews-popup__review-content-text', {
                                'is-expanded': !collapsed,
                            })}
                            style={
                                {
                                    '--max-rows': `${MAX_ROWS}`,
                                    '--height': `${scrollHeight}px`,
                                    '--collapsed-height': `${height - 3}px`,
                                } as CSSProperties
                            }
                        >
                            <div
                                className="wysiwyg all-reviews-popup__review-content-text-inner"
                                dangerouslySetInnerHTML={{ __html: review.content.value }}
                            ></div>
                        </div>
                    ) : (
                        <Image
                            src={review.content.value.src}
                            width={review.content.value.width}
                            height={review.content.value.height}
                            sizes="(max-width: 1199px) 100vw, 50vw"
                            alt=""
                            className="img-fluid"
                        />
                    )}
                    {collapsingEnabled && (
                        <button className="link link--underlined" onClick={() => setCollapsed(!collapsed)}>
                            {collapsed ? 'Читать полностью' : 'Свернуть'}
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AllReviewsPopupItem;
