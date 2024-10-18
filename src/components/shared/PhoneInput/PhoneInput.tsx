import { forwardRef, InputHTMLAttributes, useRef, useEffect, useState } from 'react';
import { useIMask } from 'react-imask';
import { mergeRefs } from '@/utils/merge-refs';
import Input from '../Input';
import { ASSET_PREFIX } from '@/variables';

export interface Props extends InputHTMLAttributes<HTMLInputElement> {
    /**
     * Лейбл (описание)
     */
    label: string;
    /**
     * Нужно ли спрятать лейбл
     */
    hideLabel?: boolean;
    /**
     * Сообщение
     */
    message?: string;
    /**
     * Валиден ли инпут
     */
    valid?: boolean;
}

const getMaskTemplate = (dialCode: string) => {
    switch (dialCode) {
        case '374':
            // Армения
            return `{${dialCode}} 00 00 00 00`;
        case '375':
            // Беларусь
            return `{${dialCode}} 00 000-00-00`;
        case '993':
            // Туркменистан
            return `{${dialCode}} 00 00 00 00`;
        case '994':
            // Азербайджан
            return `{${dialCode}} 00 000 00 00`;
        case '996':
            // Кыргызстан
            return `{${dialCode}} 00 000 00 00`;
        case '998':
            // Узбекистан
            return `{${dialCode}} 00 000 00 00`;
        default:
            // РФ, Казахстан
            return `{${dialCode}} (000) 000-00-00`;
    }
};

const PhoneInput = forwardRef<HTMLInputElement, Props>(({ value, ...props }, ref) => {
    const phoneInputRef = useRef<HTMLInputElement>(null);
    const [dialCode, setDialCode] = useState('7');

    const phoneMask = useIMask({
        mask: getMaskTemplate(dialCode),
        prepare: (value, maskedPattern) => {
            if (dialCode === '7' && maskedPattern._value.length === 0 && value === '8') {
                return dialCode;
            }

            return value;
        },
    });

    useEffect(() => {
        if (typeof value === 'string') {
            phoneMask.setTypedValue(value);
        }
    }, [value, phoneMask]);

    useEffect(() => {
        const input = phoneInputRef.current!;
        let iti: intlTelInput.Plugin | null;

        const setPhoneMask = () => {
            if (iti) {
                const data = iti.getSelectedCountryData();
                setDialCode(data.dialCode);
            }
        };

        import('intl-tel-input' /* webpackChunkName: 'intl-tel-input' */).then((m) => {
            const intlTelInput = m.default;
            iti = intlTelInput(input, {
                formatOnDisplay: false,
                preferredCountries: ['ru', 'by', 'kz', 'tr', 'ae'],
                initialCountry: 'ru',
                utilsScript: ASSET_PREFIX + '/landing-business/js/utils.js',
            });

            setPhoneMask();
            input.addEventListener('countrychange', setPhoneMask);
        });

        return () => {
            input.removeEventListener('countrychange', setPhoneMask);
            iti?.destroy();
        };
    }, []);

    return <Input {...props} ref={mergeRefs([ref, phoneMask.ref, phoneInputRef])} value={phoneMask.value} />;
});

PhoneInput.displayName = 'PhoneInput';

export default PhoneInput;
