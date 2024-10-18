import classNames from 'classnames';
import { tp } from '@/typograf';
import Reviews from './Reviews';
import { useOpenedPopupsState } from '@/atoms/opened-popups';
import { ALL_REVIEWS_POPUP_NAME } from '@/components/general/AllReviewsPopup/AllReviewsPopup';
import { Review } from '@/data/reviews';
import SplitText from '@/components/shared/SplitText';
import Reveal from '@/components/shared/Reveal';

interface Props extends React.HTMLAttributes<HTMLElement> {
    reviews: Review[];
}

const ReviewsSection = ({ reviews, ...props }: Props) => {
    const { openPopup } = useOpenedPopupsState();

    return (
        <div {...props} className={classNames('reviews-section', props.className)}>
            <div className="wrapper reviews-section__top">
                <h2 className="h1 reviews-section__title">
                    <SplitText className="reviews-section__title-inner">
                        {tp('Отзывы наших партнеров и клиентов')}
                    </SplitText>
                </h2>
            </div>
            <Reveal>
                <Reviews reviews={reviews} />
            </Reveal>
            <Reveal>
                <div className="wrapper reviews-section__bottom">
                    <button className="link link--underlined text-s" onClick={() => openPopup(ALL_REVIEWS_POPUP_NAME)}>
                        Смотреть все отзывы
                    </button>
                </div>
            </Reveal>
        </div>
    );
};

export default ReviewsSection;
