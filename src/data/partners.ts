import { ImageShape } from '@/types';

import aestetic1Img from '@/../../public/landing-business/img/partners/logos/aestetic/150xNxskinjoy_logo_cg.png.pagespeed.ic.LUPN3m8OEb.png';
import aestetic2Img from '@/../../public/landing-business/img/partners/logos/aestetic/3960880.jpeg';
import aestetic3Img from '@/../../public/landing-business/img/partners/logos/aestetic/466e8e03-d96e-405e-9b89-d1c82a568fc4.jpeg';
import aestetic4Img from '@/../../public/landing-business/img/partners/logos/aestetic/MacBook_Pro_14__-_1.png';
import aestetic5Img from '@/../../public/landing-business/img/partners/logos/aestetic/PRFSL___-_.png';
import aestetic6Img from '@/../../public/landing-business/img/partners/logos/aestetic/estemed.png';
import aestetic7Img from '@/../../public/landing-business/img/partners/logos/aestetic/header-logo.png';
import aestetic9Img from '@/../../public/landing-business/img/partners/logos/aestetic/kosmetologiya-_solar-byuti-klinik_share.jpeg';
import aestetic10Img from '@/../../public/landing-business/img/partners/logos/aestetic/logo_(1).png';
import aestetic11Img from '@/../../public/landing-business/img/partners/logos/aestetic/logo.png';
import aestetic13Img from '@/../../public/landing-business/img/partners/logos/aestetic/logo.webp';
import aestetic14Img from '@/../../public/landing-business/img/partners/logos/aestetic/logo3.png';
import aestetic15Img from '@/../../public/landing-business/img/partners/logos/aestetic/logo_new.png';
import aestetic16Img from '@/../../public/landing-business/img/partners/logos/aestetic/medicinskiy-centr-_versailles_share.jpeg';
import aestetic17Img from '@/../../public/landing-business/img/partners/logos/aestetic/mody.png';
import aestetic18Img from '@/../../public/landing-business/img/partners/logos/aestetic/photo.png';
import aestetic19Img from '@/../../public/landing-business/img/partners/logos/aestetic/photo_53688351777463.jpeg';
import aestetic20Img from '@/../../public/landing-business/img/partners/logos/aestetic/wBkfuJrye0zzUHchlOmS.jpeg';

import multi1Img from '@/../../public/landing-business/img/partners/logos/multiprofile/-08.jpeg';
import multi2Img from '@/../../public/landing-business/img/partners/logos/multiprofile/3849cac81d40ebce5938fc7187111fe2.png';
import multi3Img from '@/../../public/landing-business/img/partners/logos/multiprofile/bm-share.jpeg';
import multi4Img from '@/../../public/landing-business/img/partners/logos/multiprofile/maxresdefault.jpeg';
import multi5Img from '@/../../public/landing-business/img/partners/logos/multiprofile/unnamed.png';
import multi6Img from '@/../../public/landing-business/img/partners/logos/multiprofile/xlogouzi_logo.jpg.pagespeed.ic.JiLAMrP8Mj.webp';
import multi7Img from '@/../../public/landing-business/img/partners/logos/multiprofile/1.jpeg';
import multi8Img from '@/../../public/landing-business/img/partners/logos/multiprofile/2.png';
import multi9Img from '@/../../public/landing-business/img/partners/logos/multiprofile/3.png';
import multi10Img from '@/../../public/landing-business/img/partners/logos/multiprofile/логотип.webp';
import multi11Img from '@/../../public/landing-business/img/partners/logos/multiprofile/4.png';
import multi12Img from '@/../../public/landing-business/img/partners/logos/multiprofile/5.jpeg';

import beauty1Img from '@/../../public/landing-business/img/partners/logos/beauty/_5.png';
import beauty2Img from '@/../../public/landing-business/img/partners/logos/beauty/a8P04fcV4Zc.jpeg';
import beauty4Img from '@/../../public/landing-business/img/partners/logos/beauty/milfey_logo.jpeg';
import beauty5Img from '@/../../public/landing-business/img/partners/logos/beauty/photo.png';
import beauty6Img from '@/../../public/landing-business/img/partners/logos/beauty/1.png';

import private1Img from '@/../../public/landing-business/img/partners/logos/private/2.png';
import private2Img from '@/../../public/landing-business/img/partners/logos/private/3.png';
import private3Img from '@/../../public/landing-business/img/partners/logos/private/4.png';
import private4Img from '@/../../public/landing-business/img/partners/logos/private/5.jpeg';
import private5Img from '@/../../public/landing-business/img/partners/logos/private/bnz3ecd4nngkcmszf1gj35iu9ed1kqg2.jpeg';
import private6Img from '@/../../public/landing-business/img/partners/logos/private/front-z-400.jpeg';
import private7Img from '@/../../public/landing-business/img/partners/logos/private/logo_(1).png';
import private8Img from '@/../../public/landing-business/img/partners/logos/private/logo.png';
import private9Img from '@/../../public/landing-business/img/partners/logos/private/logo.webp';
import private10Img from '@/../../public/landing-business/img/partners/logos/private/n3zuv24azt7da50g1qhfrivzckzjaghf.jpeg';

import fitness1Img from '@/../../public/landing-business/img/partners/logos/fitness/1logo.png';
import fitness2Img from '@/../../public/landing-business/img/partners/logos/fitness/b3e1f4711358768050ef.png';
import fitness3Img from '@/../../public/landing-business/img/partners/logos/fitness/logo_1.png';
import fitness4Img from '@/../../public/landing-business/img/partners/logos/fitness/logo_2.png';

import spa2Img from '@/../../public/landing-business/img/partners/logos/spa/__1.png';
import spa3Img from '@/../../public/landing-business/img/partners/logos/spa/m_logo.png';
import spa4Img from '@/../../public/landing-business/img/partners/logos/spa/mriya-resort-spa-log.png';
import spa5Img from '@/../../public/landing-business/img/partners/logos/spa/poster.png';
import spa6Img from '@/../../public/landing-business/img/partners/logos/spa/verba-mair-logo.jpeg';

export type PartnerType = 'aestetic' | 'multiprofile' | 'beauty' | 'private' | 'fitness' | 'spa';

export type Partner = { type: PartnerType; img: ImageShape };

export const partners: Partner[] = [
    {
        type: 'aestetic',
        img: aestetic1Img,
    },
    {
        type: 'aestetic',
        img: aestetic2Img,
    },
    {
        type: 'aestetic',
        img: aestetic3Img,
    },
    {
        type: 'aestetic',
        img: aestetic4Img,
    },
    {
        type: 'aestetic',
        img: aestetic5Img,
    },
    {
        type: 'aestetic',
        img: aestetic6Img,
    },
    {
        type: 'aestetic',
        img: aestetic7Img,
    },
    {
        type: 'aestetic',
        img: {
            src: '/landing-business/img/partners/logos/aestetic/header-logo.svg',
            width: 1,
            height: 1,
        },
    },
    {
        type: 'aestetic',
        img: aestetic9Img,
    },
    {
        type: 'aestetic',
        img: aestetic10Img,
    },
    {
        type: 'aestetic',
        img: aestetic11Img,
    },
    {
        type: 'aestetic',
        img: {
            src: '/landing-business/img/partners/logos/aestetic/logo.svg',
            width: 1,
            height: 1,
        },
    },
    {
        type: 'aestetic',
        img: aestetic13Img,
    },
    {
        type: 'aestetic',
        img: aestetic14Img,
    },
    {
        type: 'aestetic',
        img: aestetic15Img,
    },
    {
        type: 'aestetic',
        img: aestetic16Img,
    },
    {
        type: 'aestetic',
        img: aestetic17Img,
    },
    {
        type: 'aestetic',
        img: aestetic18Img,
    },
    {
        type: 'aestetic',
        img: aestetic19Img,
    },
    {
        type: 'aestetic',
        img: aestetic20Img,
    },
    {
        type: 'aestetic',
        img: {
            src: '/landing-business/img/partners/logos/aestetic/1.svg',
            width: 1,
            height: 1,
        },
    },
    {
        type: 'multiprofile',
        img: multi1Img,
    },
    {
        type: 'multiprofile',
        img: multi2Img,
    },
    {
        type: 'multiprofile',
        img: multi3Img,
    },
    {
        type: 'multiprofile',
        img: multi4Img,
    },
    {
        type: 'multiprofile',
        img: multi5Img,
    },
    {
        type: 'multiprofile',
        img: multi6Img,
    },
    {
        type: 'multiprofile',
        img: multi7Img,
    },
    {
        type: 'multiprofile',
        img: multi8Img,
    },
    {
        type: 'multiprofile',
        img: multi9Img,
    },
    {
        type: 'multiprofile',
        img: multi10Img,
    },
    {
        type: 'multiprofile',
        img: multi11Img,
    },
    {
        type: 'multiprofile',
        img: multi12Img,
    },
    {
        type: 'multiprofile',
        img: {
            src: '/landing-business/img/partners/logos/multiprofile/1.svg',
            width: 1,
            height: 1,
        },
    },
    {
        type: 'beauty',
        img: beauty1Img,
    },
    {
        type: 'beauty',
        img: beauty2Img,
    },
    {
        type: 'beauty',
        img: {
            src: '/landing-business/img/partners/logos/beauty/logo_c-02.svg',
            width: 1,
            height: 1,
        },
    },
    {
        type: 'beauty',
        img: beauty4Img,
    },
    {
        type: 'beauty',
        img: beauty5Img,
    },
    {
        type: 'beauty',
        img: beauty6Img,
    },
    {
        type: 'beauty',
        img: {
            src: '/landing-business/img/partners/logos/beauty/1.svg',
            width: 1,
            height: 1,
        },
    },
    {
        type: 'private',
        img: private1Img,
    },
    {
        type: 'private',
        img: private2Img,
    },
    {
        type: 'private',
        img: private3Img,
    },
    {
        type: 'private',
        img: private4Img,
    },
    {
        type: 'private',
        img: private5Img,
    },
    {
        type: 'private',
        img: private6Img,
    },
    {
        type: 'private',
        img: private7Img,
    },
    {
        type: 'private',
        img: private8Img,
    },
    {
        type: 'private',
        img: private9Img,
    },
    {
        type: 'private',
        img: private10Img,
    },
    {
        type: 'private',
        img: {
            src: '/landing-business/img/partners/logos/private/tuta-logo-header.svg',
            width: 1,
            height: 1,
        },
    },
    {
        type: 'private',
        img: {
            src: '/landing-business/img/partners/logos/private/1.svg',
            width: 1,
            height: 1,
        },
    },
    {
        type: 'fitness',
        img: fitness1Img,
    },
    {
        type: 'fitness',
        img: fitness2Img,
    },
    {
        type: 'fitness',
        img: fitness3Img,
    },
    {
        type: 'fitness',
        img: fitness4Img,
    },
    {
        type: 'fitness',
        img: {
            src: '/landing-business/img/partners/logos/fitness/1.svg',
            width: 1,
            height: 1,
        },
    },
    {
        type: 'spa',
        img: {
            src: '/landing-business/img/partners/logos/spa/LOGO_white01.svg',
            width: 1,
            height: 1,
        },
    },
    {
        type: 'spa',
        img: spa2Img,
    },
    {
        type: 'spa',
        img: spa3Img,
    },
    {
        type: 'spa',
        img: spa4Img,
    },
    {
        type: 'spa',
        img: spa5Img,
    },
    {
        type: 'spa',
        img: spa6Img,
    },
    {
        type: 'spa',
        img: {
            src: '/landing-business/img/partners/logos/spa/1.svg',
            width: 1,
            height: 1,
        },
    },
];
