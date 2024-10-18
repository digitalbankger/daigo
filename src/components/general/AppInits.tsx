import { useEffect } from 'react';
import { lockBodyScroll, unlockBodyScroll } from '@/utils/dom';
import { useMediaQueryDeviceState } from '@/atoms/media-query-device';
import { useScrollLockState } from '@/atoms/scroll-lock';
import { useOpenedPopupsState } from '@/atoms/opened-popups';
import { useAppReadyState } from '@/atoms/app-ready';

const AppInits = () => {
    const [_, setMediaQueryDeviceState] = useMediaQueryDeviceState();
    const [scrollLocked, setScrollLocked] = useScrollLockState();
    const { openedPopups } = useOpenedPopupsState();
    const [, setAppReady] = useAppReadyState();

    /**
     * Блокирование скролла при открытых попапах
     */
    useEffect(() => {
        setScrollLocked(openedPopups.length > 0);
    }, [openedPopups.length, setScrollLocked]);

    /**
     * Блокирование скролла страницы
     */
    useEffect(() => {
        if (scrollLocked) {
            lockBodyScroll();
        } else {
            unlockBodyScroll();
        }
    }, [scrollLocked]);

    useEffect(() => {
        const setDevice = () => {
            switch (true) {
                case matchMedia('(max-width: 767px)').matches:
                    setMediaQueryDeviceState('vertical-mobile');
                    break;
                case matchMedia('(max-width: 900px) and (orientation: landscape)').matches:
                    setMediaQueryDeviceState('horizontal-mobile');
                    break;
                case matchMedia('(min-width: 768px) and (max-width: 1199px) and (orientation: portrait)').matches:
                    setMediaQueryDeviceState('vertical-tablet');
                    break;
                case matchMedia('(min-width: 768px) and (max-width: 1199px) and (orientation: landscape)').matches:
                    setMediaQueryDeviceState('horizontal-tablet');
                    break;
                default:
                    setMediaQueryDeviceState('desktop');
                    break;
            }
        };

        const onResize = () => {
            setDevice();
        };

        onResize();
        window.addEventListener('resize', onResize);

        return () => window.removeEventListener('resize', setDevice);
    }, [setMediaQueryDeviceState]);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setAppReady(true);
        }, 300);

        return () => clearTimeout(timeout);
    }, [setAppReady]);

    return null;
};

export default AppInits;
