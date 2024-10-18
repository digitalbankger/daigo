import ImgSliderPopup from '@/components/shared/ImgSliderPopup';
import { ads } from '@/data/ads';
import { tp } from '@/typograf';

export const ADS_POPUP_NAME = 'ads-popup';

const AdsPopup = () => {
    return (
        <ImgSliderPopup
            popupName={ADS_POPUP_NAME}
            popupTitle={tp('Рекламная продукция для наших партнеров')}
            data={ads}
        />
    );
};

export default AdsPopup;
