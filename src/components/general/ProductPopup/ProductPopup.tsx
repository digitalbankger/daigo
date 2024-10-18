import Image from 'next/image';
import BasePopup from '@/components/shared/BasePopup';
import Responsive from '@/components/shared/Responsive';
import { ImageShape } from '@/types';
import Person from '@/components/shared/Person';
import Button from '@/components/shared/Button';
import PlaySVG from '@/svg/play.svg';
import { useOpenedPopupsState } from '@/atoms/opened-popups';
import VideoPopup, { VIDEO_POPUP_NAME } from '../VideoPopup/VideoPopup';

type Props = {
    product: {
        type: string;
        name: string;
        text: string;
        href: string;
        img: ImageShape;
        video: string | null;
        recommendation?: {
            name: string;
            position?: string;
            img?: ImageShape;
        };
    };
};

export const PRODUCT_POPUP_NAME = 'product';

const AdsPopup = ({ product }: Props) => {
    const { openPopup } = useOpenedPopupsState();

    return (
        <BasePopup name={PRODUCT_POPUP_NAME} className="product-popup">
            <div className="product-popup-top">
                <div className="text-s product-popup__type">{product.type}</div>
                <div className="h3 product-popup__name">{product.name}</div>
                <div className="product-popup__text" dangerouslySetInnerHTML={{ __html: product.text }}></div>
                <div className="ad-btns">
                    <Button tag="a" href={product.href} variant="dark" target="_blank" rel="noreferrer">
                        В магазин
                    </Button>
                    {product.video && (
                        <Button
                            variant="dark"
                            target="_blank"
                            rel="noreferrer"
                            onClick={() => {
                                openPopup(VIDEO_POPUP_NAME);
                            }}
                        >
                            <span className="btn-text">смотреть</span>
                            <span className="btn-icon">
                                <PlaySVG />
                            </span>
                        </Button>
                    )}
                </div>
            </div>
            <div className="product-popup-bottom">
                {product.recommendation && (
                    <div className="product-popup-recommendation">
                        <div className="text-s product-popup-recommendation__label">Рекоммендовано врачом:</div>
                        <Person
                            name={product.recommendation.name}
                            text={product.recommendation.position}
                            img={product.recommendation.img}
                        />
                    </div>
                )}
                {product.img && (
                    <div className="product-popup-img">
                        <Responsive className="product-popup-img-responsive">
                            <Image
                                src={product.img.src}
                                fill
                                alt={product.name}
                                sizes="(max-width: 767px) 100vw, (max-width: 1199px) 60vw, 37.5vw"
                            />
                        </Responsive>
                    </div>
                )}
            </div>
            {product.video && <VideoPopup url={product.video} />}
        </BasePopup>
    );
};

export default AdsPopup;
