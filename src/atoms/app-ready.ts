import { atom, useRecoilState } from 'recoil';

export const appReadyState = atom<boolean>({
    key: 'appReadyState',
    default: false,
});

export const useAppReadyState = () => useRecoilState(appReadyState);
