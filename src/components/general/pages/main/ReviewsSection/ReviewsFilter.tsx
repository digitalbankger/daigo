import classNames from 'classnames';
import { Dispatch, HTMLAttributes, SetStateAction } from 'react';
import Button from '@/components/shared/Button';
import { ReviewPersonType, reviews } from '@/data/reviews';

interface Props extends HTMLAttributes<HTMLElement> {
    selectedType: ReviewPersonType | '';
    setSelectedType: Dispatch<SetStateAction<ReviewPersonType | ''>>;
}

const DICT = {
    star: 'звездные клиенты',
    client: 'клиенты',
    partner: 'партнеры',
} as const;

const types = reviews
    .reduce<ReviewPersonType[]>((arr, review) => {
        const type = review.type as ReviewPersonType;
        if (!arr.includes(type)) {
            arr.push(type);
        }

        return arr;
    }, [])
    .sort((a, b) => DICT[a].localeCompare(DICT[b]));

const ReviewsFilter = ({ selectedType, setSelectedType, ...props }: Props) => {
    return (
        <ul {...props} className={classNames('list-unstyled reviews-filter', props.className)}>
            <li className="reviews-filter__item">
                <Button variant={selectedType === '' ? 'dark' : 'outline-dark'} onClick={() => setSelectedType('')}>
                    Все
                </Button>
            </li>
            {types.map((type, i) => (
                <li key={i} className="reviews-filter__item">
                    <Button
                        variant={selectedType === type ? 'dark' : 'outline-dark'}
                        onClick={() => setSelectedType(type)}
                        className={classNames('reviews-filter-btn', { 'is-active': selectedType === type })}
                    >
                        {DICT[type]}
                    </Button>
                </li>
            ))}
        </ul>
    );
};

export default ReviewsFilter;
