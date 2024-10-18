import Collapse from '@/components/shared/Collapse';
import Reveal from '@/components/shared/Reveal';
import SplitText from '@/components/shared/SplitText';
import { Faq } from '@/data/faq';
import { tp } from '@/typograf';
import classNames from 'classnames';

interface Props extends React.HTMLAttributes<HTMLElement> {
    data: Faq[];
}

const FaqSection = ({ data, ...props }: Props) => {
    return (
        <section {...props} className={classNames('faq-section wrapper', props.className)}>
            <div className="faq-section__left">
                <h2 className="h1 faq-section__title">
                    <SplitText>{tp('Возможно, у вас остались вопросы?')}</SplitText>
                </h2>
            </div>
            <div className="faq-section__right">
                <ul className="list-unstyled">
                    {data.map((obj, i) => (
                        <Reveal key={i}>
                            <li className="faq-list__item">
                                <Collapse className="faq-item text-default">
                                    <Collapse.Toggler className="faq-item__toggler">
                                        <span>{obj.q}</span>
                                        <span className="faq-item__toggler-icon">
                                            <span></span>
                                            <span></span>
                                        </span>
                                    </Collapse.Toggler>
                                    <Collapse.Content>
                                        <div
                                            dangerouslySetInnerHTML={{ __html: obj.a }}
                                            className="faq-item__content-inner wysiwyg"
                                        ></div>
                                    </Collapse.Content>
                                </Collapse>
                            </li>
                        </Reveal>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default FaqSection;
