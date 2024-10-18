import { useCallback } from 'react';
import { atom, useRecoilState } from 'recoil';
import { addUniqueItemToArray } from '@/utils/arrays/add-unique-item-to-array';

const openedPopupsState = atom<string[]>({
    key: 'openedPopupsState',
    default: [],
});

export const useOpenedPopupsState = () => {
    const [openedPopups, setOpenedPopups] = useRecoilState(openedPopupsState);

    const openPopup = useCallback(
        (name: string) => setOpenedPopups((prevOpenedPopups) => addUniqueItemToArray(prevOpenedPopups, name)),
        [setOpenedPopups],
    );

    const closePopup = useCallback(
        (name: string) =>
            setOpenedPopups((prevOpenedPopups) => prevOpenedPopups.filter((popupName) => popupName !== name)),
        [setOpenedPopups],
    );

    return { openedPopups, setOpenedPopups, openPopup, closePopup };
};
