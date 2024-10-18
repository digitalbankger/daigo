import classNames from 'classnames';
import { ChangeEventHandler, FocusEventHandler, InputHTMLAttributes, forwardRef, useEffect, useState } from 'react';

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

const Input = forwardRef<HTMLInputElement, Props>(
    ({ id, label, hideLabel = false, valid = true, message, ...props }, ref) => {
        const [focused, setFocused] = useState(false);
        const [innerValue, setInnerValue] = useState(props.value || props.defaultValue);
        const isFloatedLabelActive = focused || (typeof innerValue === 'string' ? innerValue.length > 0 : false);

        const onFocus: FocusEventHandler<HTMLInputElement> = () => {
            setFocused(true);
        };

        const onBlur: FocusEventHandler<HTMLInputElement> = () => {
            setFocused(false);
        };

        const onChange: ChangeEventHandler<HTMLInputElement> = (event) => {
            setInnerValue(event.target.value);
        };

        useEffect(() => {
            setInnerValue(props.value);
        }, [props.value]);

        return (
            <div
                className={classNames('text-m input-group', props.className, {
                    'floated-labels--active': isFloatedLabelActive,
                    'is-required': !!props.required,
                    'is-error': !valid,
                })}
            >
                <input
                    {...props}
                    ref={ref}
                    id={id}
                    data-testid="input"
                    className={classNames('form-control floated-labels', {
                        'floated-labels--active': isFloatedLabelActive,
                        'is-error': !valid,
                    })}
                    onFocus={(event) => {
                        onFocus(event);
                        props.onFocus?.(event);
                    }}
                    onBlur={(event) => {
                        onBlur(event);
                        props.onBlur?.(event);
                    }}
                    onChange={(event) => {
                        onChange(event);
                        props.onChange?.(event);
                    }}
                />
                <label htmlFor={id} className={classNames('form-label', { 'visually-hidden': hideLabel })}>
                    {label}
                </label>
                <div className="app-message" aria-live="polite" aria-describedby={id}>
                    {message}
                </div>
            </div>
        );
    },
);

Input.displayName = 'Input';

export default Input;
