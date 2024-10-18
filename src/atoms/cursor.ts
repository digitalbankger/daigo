import { ReactNode } from 'react';
import { atom, useRecoilState } from 'recoil';

/**
 * Cursor type
 */

type CursorType = 'default';

const cursorTypeState = atom<CursorType>({
    key: 'cursorTypeState',
    default: 'default',
});

export const useCursorTypeState = () => useRecoilState(cursorTypeState);

/**
 * Cursor content
 */

const cursorContentState = atom<string>({
    key: 'cursorContentState',
    default: '',
});

export const useCursorContentState = () => useRecoilState(cursorContentState);
