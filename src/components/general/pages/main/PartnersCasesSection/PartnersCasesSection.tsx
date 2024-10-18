import classNames from 'classnames';
import Image from 'next/image';
import { useState } from 'react';
import { tp } from '@/typograf';
import partnersCasesPreview1Img from '@/../../public/landing-business/img/partners-cases/preview-1.jpeg';
import partnersCasesPreview2Img from '@/../../public/landing-business/img/partners-cases/preview-2.jpeg';
import partnersCasesPreview3Img from '@/../../public/landing-business/img/partners-cases/preview-3.jpg';
import PartnerCasePopup from '@/components/general/PartnerCasePopup';
import { PartnerCase } from '@/types';
import { useOpenedPopupsState } from '@/atoms/opened-popups';
import { PARTNER_CASE_POPUP_NAME } from '@/components/general/PartnerCasePopup/PartnerCasePopup';
import SplitText from '@/components/shared/SplitText';
import Reveal from '@/components/shared/Reveal';
import { ASSET_PREFIX } from '@/variables';

interface Props extends React.HTMLAttributes<HTMLElement> {}

const cases: PartnerCase[] = [
    {
        type: 'сеть аптек',
        name: 'Нео-фарм',
        text: 'Объем выкупленной и успешно реализованной продукции бренда Дайго сетью аптек «Нео-Фарм» с 2020 года',
        preview: partnersCasesPreview1Img,
        img: {
            src: '/landing-business/img/partners-cases/temp.svg',
            width: 862,
            height: 601,
        },
    },
    {
        type: 'Клиника антиэйджинга',
        name: '5 элемент',
        text: 'Объем выкупленной и успешно реализованной продукции бренда Дайго клиникой «5 элемент» с декабря 2016 года',
        preview: partnersCasesPreview2Img,
        img: {
            src: '/landing-business/img/partners-cases/temp.svg',
            width: 862,
            height: 601,
        },
    },
    {
        type: 'Институт красоты',
        name: 'Babor',
        text: 'Объем выкупленной и успешно реализованной продукции бренда Дайго институтом красоты «Babor» с 2021 года',
        preview: partnersCasesPreview3Img,
        img: {
            src: '/landing-business/img/partners-cases/temp.svg',
            width: 862,
            height: 601,
        },
    },
].map((data) => ({
    ...data,
    type: tp(data.type),
    name: tp(data.name),
    text: tp(data.text),
}));

const PartnersCasesSection = (props: Props) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const { openPopup } = useOpenedPopupsState();

    return (
        <div {...props} className={classNames('partners-cases-section', props.className)}>
            <div className="wrapper">
                <div className="partners-cases-section-content">
                    <h2 className="text-s">
                        <SplitText>Кейсы партнеров</SplitText>
                    </h2>
                    <Reveal>
                        <div
                            className="h2"
                            dangerouslySetInnerHTML={{
                                __html: 'Прибыль партнеров от&nbsp;150&nbsp;тыс.&nbsp;₽ до&nbsp;7&nbsp;млн.&nbsp;₽ в&nbsp;месяц',
                            }}
                        ></div>
                    </Reveal>
                </div>
            </div>
            <ul className="list-unstyled partners-cases-list">
                {cases.map((caseData, i) => (
                    <li key={i} className="partners-cases-list__item">
                        <div className="partners-cases-item">
                            <div className="partners-cases-item__img-wrapper">
                                <Image
                                    src={
                                        (caseData.preview.src.endsWith('.svg') ? ASSET_PREFIX : '') +
                                        caseData.preview.src
                                    }
                                    width={caseData.preview.width}
                                    height={caseData.preview.height}
                                    className="img-fluid partners-cases-item__img"
                                    unoptimized={caseData.preview.src.endsWith('.svg')}
                                    alt=""
                                />
                            </div>
                            <div className="partners-cases-item-inner">
                                <div className="partners-cases-item__content">
                                    <SplitText className="text-s partners-cases-item__type">{caseData.type}</SplitText>
                                    <SplitText className="h4 partners-cases-item__name">{caseData.name}</SplitText>
                                    <SplitText className="text-default">{caseData.text}</SplitText>
                                </div>
                                <Reveal>
                                    <button
                                        className="link link--underlined partners-cases-item__btn"
                                        onClick={() => {
                                            setActiveIndex(i);
                                            openPopup(PARTNER_CASE_POPUP_NAME);
                                        }}
                                    >
                                        Подробнее
                                    </button>
                                </Reveal>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
            <PartnerCasePopup data={cases[activeIndex]} />
        </div>
    );
};

export default PartnersCasesSection;
