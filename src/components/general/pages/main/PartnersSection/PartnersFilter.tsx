import { Dispatch, HTMLAttributes, SetStateAction, forwardRef } from 'react';
import classNames from 'classnames';
import Button from '@/components/shared/Button';
import Dropdown from '@/components/shared/Dropdown';
import ArrDownSVG from '@/svg/arr-down.svg';
import { Partner, PartnerType, partners } from '@/data/partners';

interface Props extends HTMLAttributes<HTMLElement> {
    partners: Partner[];
    activeType: PartnerType | '';
    setActiveType: Dispatch<SetStateAction<PartnerType | ''>>;
}

const DICT: Record<PartnerType | '', string> = {
    '': 'все',
    aestetic: 'Клиники эстетической косметологии',
    multiprofile: 'Многопрофильные клиники',
    beauty: 'Салоны красоты',
    private: 'Сетевые и частные аптеки',
    fitness: 'СПА и фитнес-центры',
    spa: 'СПА отели и санатории',
} as const;

const types = partners
    .reduce<PartnerType[]>((arr, review) => {
        const type = review.type as PartnerType;
        if (!arr.includes(type)) {
            arr.push(type);
        }

        return arr;
    }, [])
    .sort((a, b) => DICT[a].localeCompare(DICT[b]));

const PartnersFilter = ({ partners, activeType, setActiveType, ...props }: Props) => {
    return (
        <Dropdown {...props} className={classNames('app-dropdown', props.className)}>
            <Dropdown.Toggler tag={Button} variant="outline-dark" className="app-dropdown-toggler text-default">
                <span>{DICT[activeType]}</span>
                <ArrDownSVG aria-hidden="true" />
            </Dropdown.Toggler>
            <Dropdown.Content className="app-dropdown-content" position="bottom-center">
                <ul className="list-unstyled app-dropdown-content-list">
                    <li className="app-dropdown-content-list__item">
                        <Dropdown.Picker
                            className={classNames('app-dropdown-content-btn', { 'is-active': activeType === '' })}
                            onClick={() => setActiveType('')}
                        >
                            Все
                        </Dropdown.Picker>
                    </li>
                    {types.map((partnerType, i) => (
                        <li key={i} className="app-dropdown-content-list__item">
                            <Dropdown.Picker
                                className={classNames('app-dropdown-content-btn', {
                                    'is-active': activeType === partnerType,
                                })}
                                onClick={() => setActiveType(partnerType)}
                            >
                                {DICT[partnerType]}
                            </Dropdown.Picker>
                        </li>
                    ))}
                </ul>
            </Dropdown.Content>
        </Dropdown>
    );
};

export default PartnersFilter;
