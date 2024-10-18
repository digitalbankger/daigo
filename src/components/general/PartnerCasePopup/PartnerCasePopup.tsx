import Image from 'next/image';
import BasePopup from '@/components/shared/BasePopup';
import { PartnerCase } from '@/types';
import { ASSET_PREFIX } from '@/variables';

interface Props {
    data: PartnerCase;
}

export const PARTNER_CASE_POPUP_NAME = 'partner-case-popup';

const PartnerCasePopup = ({ data }: Props) => {
    const { img, name, text, type } = data;

    return (
        <BasePopup name={PARTNER_CASE_POPUP_NAME} className="partner-case-popup">
            <div className="partner-case-popup__content">
                <div className="text-s partner-case-popup__type">{type}</div>
                <div className="h3 partner-case-popup__name">{name}</div>
                <div>{text}</div>
            </div>
            {img && (
                <Image
                    src={(img.src.endsWith('.svg') ? ASSET_PREFIX : '') + img.src}
                    width={img.width}
                    height={img.height}
                    alt=""
                    className="img-fluid partner-case-popup__img"
                    unoptimized={img.src.endsWith('.svg')}
                />
            )}
        </BasePopup>
    );
};

export default PartnerCasePopup;
