import { atom, useRecoilState } from 'recoil';

export type PageTransitionName = 'default' | 'instant';

export const DEFAULT_MODE = 'sync';
export const DEFAULT_NAME = 'default';

const pageTransitionState = atom<{
    mode: 'wait' | 'sync' | 'popLayout';
    name: PageTransitionName;
    targetElement?: Element | null;
}>({
    key: 'pageTransitionState',
    default: {
        mode: DEFAULT_MODE,
        name: DEFAULT_NAME,
    },
});

export const usePageTransitionState = () => useRecoilState(pageTransitionState);

const isPageTransitioningState = atom<boolean>({
    key: 'isPageTransitioningState',
    default: false,
});

export const useIsPageTransitioningState = () => useRecoilState(isPageTransitioningState);
