import { atom, useRecoilState } from 'recoil';

export const activeReviewIndexState = atom<number>({
    key: 'activeReviewIndexState',
    default: 0,
});

export const useActiveReviewIndexState = () => useRecoilState(activeReviewIndexState);
