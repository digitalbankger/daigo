import classNames from 'classnames';
import { useState } from 'react';
import { AnimatePresence, Variants, m } from 'framer-motion';
import { tp } from '@/typograf';
import { Partner, PartnerType } from '@/data/partners';
import PartnersFilter from './PartnersFilter';
import PartnersSlider from '@/components/shared/PartnersSlider';
import { easeInQuart, easeOutQuart } from '@/utils/easings';
import SplitText from '@/components/shared/SplitText';
import Reveal from '@/components/shared/Reveal';

interface Props extends React.HTMLAttributes<HTMLElement> {
    partners: Partner[];
}

const MotionPartnersSlider = m(PartnersSlider);

const variants: Variants = {
    initial: {
        opacity: 0,
        y: -30,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: easeOutQuart },
    },
    exit: {
        opacity: 0,
        y: 30,
        transition: { duration: 0.5, ease: easeInQuart },
    },
};

const PartnersSection = ({ partners, ...props }: Props) => {
    const [activeType, setActiveType] = useState<PartnerType | ''>('');

    const filteredPartners = partners.filter((partner) => (activeType === '' ? true : partner.type === activeType));

    return (
        <div {...props} className={classNames('partners-section', props.className)}>
            <div className="wrapper">
                <div className="partners-section__content">
                    <h2 className="text-s partners-section__title">
                        <SplitText>Наши партнеры</SplitText>
                    </h2>
                    <SplitText className="h2 partners-section__text">
                        {tp('более 580 клиник, аптек, spa-центров и салонов красоты')}
                    </SplitText>
                    <Reveal>
                        <div>
                            <PartnersFilter partners={partners} activeType={activeType} setActiveType={setActiveType} />
                        </div>
                    </Reveal>
                </div>
            </div>
            <AnimatePresence mode="wait">
                <MotionPartnersSlider
                    key={activeType}
                    slides={filteredPartners.map((partner) => partner.img)}
                    variants={variants}
                    initial="initial"
                    animate="visible"
                    exit="exit"
                />
            </AnimatePresence>
        </div>
    );
};

export default PartnersSection;
