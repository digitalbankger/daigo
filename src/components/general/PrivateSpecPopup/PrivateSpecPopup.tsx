import { forwardRef } from 'react';
import BasePopup from '@/components/shared/BasePopup';
import { tp } from '@/typograf';
import PrivateSpecForm from '../PrivateSpecForm';

export const PRIVATE_SPEC_POPUP_NAME = 'private-spec-popup';

const PrivateSpecPopup = forwardRef<HTMLDivElement>((_, ref) => {
    return (
        <BasePopup ref={ref} name={PRIVATE_SPEC_POPUP_NAME} className="partners-popup">
            <div className="partners-popup-content">
                <div className="h3 partners-popup__title">{tp('Хотите стать нашим партнером?')}</div>
                <div className="partners-popup__description">{tp('Заполните форму ниже, и мы свяжемся с вами')}</div>
                <PrivateSpecForm data={{ formName: 'Частным специалистам', recipient_email: 'info@daigo.ru' }} />
            </div>
        </BasePopup>
    );
});

PrivateSpecPopup.displayName = 'PrivateSpecPopup';

export default PrivateSpecPopup;
