import { forwardRef } from 'react';
import classNames from 'classnames';
import Popup from '@/components/shared/Popup';
import { Props as PopupProps } from '@/components/shared/Popup/Popup';
import CrossSVG from '@/svg/cross.svg';
import { useOpenedPopupsState } from '@/atoms/opened-popups';

const DefaultPopup = forwardRef<HTMLDivElement, PopupProps>(({ children, ...props }, ref) => {
    const { closePopup } = useOpenedPopupsState();

    return (
        <Popup
            {...props}
            ref={ref}
            className={classNames('default-popup', props.className)}
            overlay={props.overlay || true}
            data-popup-preset="default"
        >
            <button
                aria-label="Закрыть"
                className="round-btn default-popup__close-btn"
                onClick={() => closePopup(props.name)}
            >
                <CrossSVG />
            </button>
            {children}
        </Popup>
    );
});

DefaultPopup.displayName = 'DefaultPopup';

export default DefaultPopup;
