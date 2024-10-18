import { m, AnimatePresence, wrap } from 'framer-motion';
import { useActiveReviewIndexState } from '@/atoms/active-review-index';
import BasePopup from '@/components/shared/BasePopup';
import { Review } from '@/data/reviews';
import { easeOutQuart } from '@/utils/easings';
import ArrowSVG from '@/svg/arrow.svg';
import Image from 'next/image';

interface Props {
    reviews: Review[];
}

export const REVIEW_POPUP_NAME = 'review-popup';

const ReviewPopup = ({ reviews }: Props) => {
    const [activeReviewIndex, setActiveReviewIndex] = useActiveReviewIndexState();
    const { name, date, hashtags, avatar, content } = reviews[activeReviewIndex];

    return (
        <BasePopup name={REVIEW_POPUP_NAME} className="review-popup">
            <AnimatePresence mode="popLayout">
                <m.div
                    key={activeReviewIndex}
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
                    <div className="review-popup-top text-s">
                        {date && <div>{date}</div>}
                        {hashtags.length > 0 && (
                            <ul className="list-unstyled hashtags-list">
                                {hashtags.map((hashtag, i) => (
                                    <li key={i} className="hashtag">
                                        {hashtag}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                    <div className="review-person">
                        {avatar && (
                            <Image
                                src={avatar.src}
                                width={avatar.width}
                                height={avatar.height}
                                alt={name}
                                className="img-fluid review-person__avatar"
                            />
                        )}
                        <div className="h4 review-person__name">{name}</div>
                    </div>

                    <div className="wysiwyg review-content">
                        {typeof content.value === 'string' ? (
                            <div dangerouslySetInnerHTML={{ __html: content.value }}></div>
                        ) : (
                            <Image
                                src={content.value.src}
                                width={content.value.width}
                                height={content.value.height}
                                sizes="(max-width: 1199px) 100vw, 50vw"
                                alt=""
                            />
                        )}
                    </div>
                </m.div>
            </AnimatePresence>
            {reviews.length > 0 && (
                <div className="recommendation-popup__bottom">
                    {reviews.length > 1 && (
                        <div className="recommendation-popup__counter">
                            <button
                                aria-label="Предыдущий слайд"
                                onClick={() => setActiveReviewIndex(wrap(0, reviews.length, activeReviewIndex - 1))}
                                className="recommendation-popup-el__nav-btn recommendation-popup-el__nav-btn--prev"
                            >
                                <ArrowSVG />
                            </button>
                            <div className="recommendation-popup__counter-el">
                                <div className="recommendation-popup__counter-el-item">{activeReviewIndex + 1}</div>
                                <div className="recommendation-popup__counter-el-item">{reviews.length}</div>
                            </div>
                            <button
                                aria-label="Следующий слайд"
                                className="recommendation-popup-el__nav-btn recommendation-popup-el__nav-btn--next"
                                onClick={() => setActiveReviewIndex(wrap(0, reviews.length, activeReviewIndex + 1))}
                            >
                                <ArrowSVG />
                            </button>
                        </div>
                    )}
                </div>
            )}
        </BasePopup>
    );
};

export default ReviewPopup;
