import { AnyObject, StringSchema, addMethod, boolean, object, string } from 'yup';
import { useFormik } from 'formik';
import axios from 'axios';
import { FocusEventHandler, FormHTMLAttributes, useRef, useState } from 'react';
import { AnimatePresence, m } from 'framer-motion';
import classNames from 'classnames';
import Button from '@/components/shared/Button';
import Checkbox from '@/components/shared/Checkbox';
import Input from '@/components/shared/Input';
import PhoneInput from '@/components/shared/PhoneInput';
import { isPhone } from '@/utils/validation/phone';
import { tp } from '@/typograf';
import Loader from '@/components/shared/Loader';
import { easeOutQuart } from '@/utils/easings';
import { toFormData } from '@/utils/forms';
import { DICT } from '@/dict';
import { FeedbackResponse } from '@/types';

type Props = FormHTMLAttributes<HTMLFormElement> & {
    data?: Record<string, any>;
};

addMethod(string, 'customPhone', function (errorMessage) {
    return this.test(`test-custom-phone`, errorMessage, function (value) {
        return typeof value === 'string' ? isPhone(value) : false;
    });
});

const schema = object({
    name: string().required(DICT.EMPTY_FIELD.ru),
    phone: (
        string().required(DICT.EMPTY_FIELD.ru) as StringSchema<string, AnyObject, undefined, ''> & {
            customPhone: any;
        }
    ).customPhone(DICT.INVALIDATED_PHONE.ru),
    email: string()
        .required(DICT.EMPTY_FIELD.ru)
        .matches(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/, DICT.INVALIDATED_EMAIL.ru),
    agreementChecked: boolean().oneOf([true]),
});

const PrivateSpecForm = ({ data = {}, ...props }: Props) => {
    const timeout = useRef<NodeJS.Timeout>();
    const [response, setResponse] = useState<FeedbackResponse | null>(null);

    const {
        handleSubmit,
        handleChange,
        handleBlur,
        values,
        errors,
        touched,
        isSubmitting,
        setFieldTouched,
        setValues,
        setTouched,
        initialTouched,
        initialValues,
    } = useFormik({
        initialValues: {
            ...data,
            check_val: '1',
            name: '',
            phone: '',
            email: '',
            agreementChecked: false,
        },
        validationSchema: schema,
        onSubmit: async (values) => {
            clearTimeout(timeout.current);
            setResponse(null);

            try {
                const { data } = await axios.post<FeedbackResponse>(
                    `${process.env.NEXT_PUBLIC_API_HOST || ''}/local/ajax/mail.php`,
                    toFormData({ ...values, check_val: '' }),
                );
                setResponse(data);

                if (data.success) {
                    setValues(initialValues);
                    setTouched(initialTouched);
                }
            } catch (err) {
                setResponse({ success: false, message: err instanceof Error ? err.message : 'Что-то пошло не так' });

                throw err;
            } finally {
                timeout.current = setTimeout(() => {
                    setResponse(null);
                }, 5000);
            }
        },
    });

    const onFocus: FocusEventHandler<HTMLInputElement> = (event) => {
        setFieldTouched(event.target.name, false);
    };

    return (
        <form {...props} className={classNames('partners-form', props.className)} noValidate onSubmit={handleSubmit}>
            <input type="hidden" value={values.check_val} />
            <Input
                id="partners-form-name"
                name="name"
                label="Ваше имя"
                required
                value={values.name}
                onInput={handleChange}
                onChange={handleChange}
                onFocus={onFocus}
                onBlur={handleBlur}
                message={touched.name ? errors.name : ''}
                valid={!(!!touched.name && !!errors.name)}
            />
            <PhoneInput
                id="partners-form-phone"
                name="phone"
                label="Телефон"
                hideLabel
                required
                value={values.phone}
                onInput={handleChange}
                onChange={handleChange}
                onFocus={onFocus}
                onBlur={handleBlur}
                message={touched.phone ? errors.phone : ''}
                valid={!(!!touched.phone && !!errors.phone)}
            />
            <Input
                id="partners-form-email"
                type="email"
                name="email"
                label="Email"
                required
                value={values.email}
                onInput={handleChange}
                onChange={handleChange}
                onFocus={onFocus}
                onBlur={handleBlur}
                message={touched.email ? errors.email : ''}
                valid={!(!!touched.email && !!errors.email)}
            />
            <div>
                <Checkbox
                    name="agreementChecked"
                    className="partners-form-checkbox"
                    required
                    checked={values.agreementChecked}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    valid={!errors.agreementChecked}
                >
                    Принимаю{' '}
                    <a href="https://daigo.ru/privacy/" target="_blank" rel="noreferrer" className="link">
                        политику конфиденциальности
                    </a>
                </Checkbox>
            </div>

            <AnimatePresence>
                {response || isSubmitting ? (
                    <m.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1, transition: { duration: 0.3, ease: easeOutQuart } }}
                        exit={{ opacity: 0 }}
                        className="feedback-form__status"
                    >
                        {response && (
                            <m.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1, transition: { duration: 0.3, ease: easeOutQuart } }}
                                exit={{
                                    opacity: 0,
                                }}
                                className={classNames('feedback-form__status-inner', {
                                    'feedback-form__status-inner--error': !response.success,
                                })}
                            >
                                <div className="feedback-form__text h5">
                                    {response.message && response.success ? tp(response.message) : 'Error'}
                                </div>
                            </m.div>
                        )}
                    </m.div>
                ) : null}
            </AnimatePresence>

            <div className="partners-form-submit-btn-wrapper">
                <Button
                    type="submit"
                    variant="dark"
                    size="lg"
                    className="partners-form-submit-btn"
                    disabled={isSubmitting}
                >
                    Отправить
                </Button>
                <Loader className={classNames('partners-form-loader', { 'is-visible': isSubmitting })} />
            </div>
        </form>
    );
};

export default PrivateSpecForm;
