import ImgSliderPopup from '@/components/shared/ImgSliderPopup';
import { specialists } from '@/data/specialists';
import { tp } from '@/typograf';

export const SPECIALISTS_POPUP_NAME = 'specialists-popup';

const SpecialistsPopup = () => {
    return (
        <ImgSliderPopup
            popupName={SPECIALISTS_POPUP_NAME}
            popupTitle={tp('Работаем с ведущими врачами и специалистами')}
            data={specialists}
        />
    );
};

export default SpecialistsPopup;
