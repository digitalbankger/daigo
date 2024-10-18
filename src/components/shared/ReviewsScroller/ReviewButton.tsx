import Image from 'next/image';
import Responsive from '../Responsive';
import { ImageShape } from '@/types';
import { useCursorContentState } from '@/atoms/cursor';
import { useActiveReviewIndexState } from '@/atoms/active-review-index';
import { useOpenedPopupsState } from '@/atoms/opened-popups';
import { REVIEW_POPUP_NAME } from '@/components/general/ReviewPopup/ReviewPopup';

interface Props {
    img?: ImageShape;
    name: string;
    index: number;
}

const ReviewButton = ({ index, img, name }: Props) => {
    const [, setCursorContent] = useCursorContentState();
    const [, setActiveReviewIndex] = useActiveReviewIndexState();
    const { openPopup } = useOpenedPopupsState();

    return (
        <button
            className="slider-scroller-slide-btn"
            onMouseEnter={() => setCursorContent('читать<br>отзыв')}
            onMouseLeave={() => setCursorContent('')}
            onClick={() => {
                openPopup(REVIEW_POPUP_NAME);
                setActiveReviewIndex(index);
            }}
            aria-label="Смотреть отзыв"
        >
            <Responsive className="slider-scroller-slide-responsive">
                {img && (
                    <Image
                        src={img.src}
                        fill
                        alt={name}
                        sizes="280px"
                        draggable={false}
                        className="slider-scroller-slide-img"
                    />
                )}
            </Responsive>
        </button>
    );
};

export default ReviewButton;
