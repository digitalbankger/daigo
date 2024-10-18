import { HTMLAttributes, forwardRef, useState } from 'react';
import classNames from 'classnames';
import { AnimatePresence, Variants, m } from 'framer-motion';
import ReviewsScroller from '@/components/shared/ReviewsScroller';
import { Review, ReviewPersonType } from '@/data/reviews';
import { easeInQuart, easeOutQuart } from '@/utils/easings';
import ReviewPopup from '@/components/general/ReviewPopup';
import ReviewsFilter from './ReviewsFilter';
import AllReviewsPopup from '@/components/general/AllReviewsPopup';

interface Props extends HTMLAttributes<HTMLElement> {
    reviews: Review[];
}

const variants: Variants = {
    initial: {
        opacity: 0,
        y: -30,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: easeOutQuart },
    },
    exit: {
        opacity: 0,
        y: 30,
        transition: { duration: 0.5, ease: easeInQuart },
    },
};

const MotionReviewsScroller = m(ReviewsScroller);

const Reviews = forwardRef<HTMLDivElement, Props>(({ reviews, ...props }, ref) => {
    const [selectedType, setSelectedType] = useState<ReviewPersonType | ''>('');
    const filteredReviews = reviews.filter((review) => (selectedType === '' ? true : review.type === selectedType));

    return (
        <div {...props} ref={ref} className={classNames('reviews', props.className)}>
            <div className="wrapper">
                <div className="reviews-filter-wrapper">
                    <ReviewsFilter selectedType={selectedType} setSelectedType={setSelectedType} />
                </div>
            </div>

            <AnimatePresence mode="wait">
                <MotionReviewsScroller
                    key={selectedType}
                    slides={filteredReviews.map((review) => ({ name: review.name, img: review.avatar }))}
                    className="reviews-section-scroller"
                    variants={variants}
                    initial="initial"
                    animate="visible"
                    exit="exit"
                />
            </AnimatePresence>

            <ReviewPopup reviews={filteredReviews} />
            <AllReviewsPopup selectedType={selectedType} setSelectedType={setSelectedType} reviews={filteredReviews} />
        </div>
    );
});

Reviews.displayName = 'Reviews';

export default Reviews;
