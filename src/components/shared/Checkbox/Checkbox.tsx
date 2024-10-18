import classNames from 'classnames';
import { InputHTMLAttributes } from 'react';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    /**
     * Валиден ли инпут
     */
    valid?: boolean;
}

const Checkbox = ({ children, valid = true, ...props }: Props) => {
    return (
        <label className={classNames('checkbox', props.className)}>
            <input {...props} type="checkbox" className={classNames('visually-hidden', { 'is-error': !valid })} />
            <span className="checkbox__element"></span>
            <span className="text-m checkbox__text">{children}</span>
        </label>
    );
};

export default Checkbox;
