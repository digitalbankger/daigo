import Image from 'next/image';
import classNames from 'classnames';
import branchesBg from '@/../../public/landing-business/img/branch2.png';
import { tp } from '@/typograf';
import { useOpenedPopupsState } from '@/atoms/opened-popups';
import { PARTNERS_POPUP_NAME } from '@/components/general/PartnersPopup/PartnersPopup';
import SplitText from '@/components/shared/SplitText';
import Reveal from '@/components/shared/Reveal';

interface Props extends React.HTMLAttributes<HTMLElement> {}

const PartnersPitchSection = (props: Props) => {
    const { openPopup } = useOpenedPopupsState();

    return (
        <div {...props} className={classNames('partners-pitch-section wrapper', props.className)}>
            <Image src={branchesBg.src} width={2000} height={400} alt="" className="responsive__item partners-pitch-section__img" />
            <div className="partners-pitch-section__content">
                <h2 className="text-s partners-pitch-section__title">
                    <SplitText>{tp('оптовое предложение для партнеров')}</SplitText>
                </h2>
                <SplitText className="h3 partners-pitch-section__text">
                    {tp('Узнайте сколько можно зарабатывать в вашей нише с продуктом Daigo')}
                </SplitText>
                <Reveal>
                    <div>
                        <button
                            className="round-btn partners-pitch-section__btn"
                            onClick={() => openPopup(PARTNERS_POPUP_NAME)}
                        >
                            <span>Оставить заявку</span>
                        </button>
                    </div>
                </Reveal>
            </div>
        </div>
    );
};

export default PartnersPitchSection;
