import { forwardRef } from 'react';
import BasePopup from '@/components/shared/BasePopup';
import PartnersForm from '../PartnersForm';
import { tp } from '@/typograf';

export const PARTNERS_POPUP_NAME = 'partners';

const PartnersPopup = forwardRef<HTMLDivElement>((_, ref) => {
    return (
        <BasePopup ref={ref} name={PARTNERS_POPUP_NAME} className="partners-popup">
            <div className="partners-popup-content">
                <div className="h3 partners-popup__title">{tp('Хотите стать нашим партнером?')}</div>
                <div className="partners-popup__description">{tp('Заполните форму ниже, и мы свяжемся с вами')}</div>
                <PartnersForm data={{ formName: 'Хотите стать нашим партнером?', recipient_email: 'info@daigo.ru' }} />
            </div>
        </BasePopup>
    );
});

PartnersPopup.displayName = 'PartnersPopup';

export default PartnersPopup;
