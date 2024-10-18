import { forwardRef } from 'react';
import classNames from 'classnames';
import Popup from '@/components/shared/Popup';
import { Props as PopupProps } from '@/components/shared/Popup/Popup';
import CrossSVG from '@/svg/cross.svg';
import { useOpenedPopupsState } from '@/atoms/opened-popups';

const BasePopup = forwardRef<HTMLDivElement, PopupProps>(({ children, ...props }, ref) => {
    const { closePopup } = useOpenedPopupsState();

    return (
        <Popup
            {...props}
            ref={ref}
            className={classNames('base-popup', props.className)}
            overlay={props.overlay || true}
            data-popup-preset="slide-right"
        >
            <button
                aria-label="Закрыть"
                className="round-btn base-popup__close-btn"
                onClick={() => closePopup(props.name)}
            >
                <CrossSVG />
            </button>
            {children}
        </Popup>
    );
});

BasePopup.displayName = 'BasePopup';

export default BasePopup;
