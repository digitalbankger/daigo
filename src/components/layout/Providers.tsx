/**
 * Все провайдеры подключаются в этом файле.
 */

import { ReactNode } from 'react';
import { RecoilRoot, RecoilEnv } from 'recoil';
import { LazyMotion, domMax } from 'framer-motion';

RecoilEnv.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED = false;

const Providers = ({ children }: { children: ReactNode }) => {
    return (
        <RecoilRoot>
            <LazyMotion features={domMax}>{children}</LazyMotion>
        </RecoilRoot>
    );
};

export default Providers;
