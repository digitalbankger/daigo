import { m, AnimatePresence } from 'framer-motion';
import { Dispatch, SetStateAction } from 'react';
import BasePopup from '@/components/shared/BasePopup';
import { easeOutQuart } from '@/utils/easings';
import { Review, ReviewPersonType } from '@/data/reviews';
import ReviewsFilter from '../pages/main/ReviewsSection/ReviewsFilter';
import AllReviewsPopupItem from './AllReviewPopupItem';

type Props = {
    reviews: Review[];
    selectedType: ReviewPersonType | '';
    setSelectedType: Dispatch<SetStateAction<ReviewPersonType | ''>>;
};

export const ALL_REVIEWS_POPUP_NAME = 'all-reviews-popup';

const AllReviewsPopup = ({ reviews, selectedType, setSelectedType }: Props) => {
    return (
        <BasePopup name={ALL_REVIEWS_POPUP_NAME} className="all-reviews-popup">
            <div className="h4 all-reviews-popup__title">Отзывы</div>

            <div className="reviews-filter-wrapper">
                <ReviewsFilter
                    selectedType={selectedType}
                    setSelectedType={setSelectedType}
                    className="all-reviews-filter"
                />
            </div>

            <AnimatePresence mode="popLayout">
                <m.div
                    key={selectedType}
                    variants={{
                        initial: {
                            opacity: 0,
                            y: -10,
                            transition: { duration: 0.5, ease: easeOutQuart },
                        },
                        visible: {
                            opacity: 1,
                            y: 0,
                            transition: { duration: 0.5, ease: easeOutQuart, delay: 0.2 },
                        },
                        exit: {
                            opacity: 0,
                            y: 10,
                            transition: { duration: 0.5, ease: easeOutQuart },
                        },
                    }}
                    initial="initial"
                    animate="visible"
                    exit="exit"
                >
                    {reviews.length > 0 && (
                        <ul className="list-unstyled">
                            {reviews.map((review, i) => (
                                <li key={i} className="all-reviews-popup__reviews-list__item">
                                    <AllReviewsPopupItem review={review} />
                                </li>
                            ))}
                        </ul>
                    )}
                </m.div>
            </AnimatePresence>
        </BasePopup>
    );
};

export default AllReviewsPopup;
