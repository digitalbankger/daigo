import Image from 'next/image';
import daigoCatalogImg from '@/../../public/landing-business/img/daigo-catalog.jpeg';
import DownloadSVG from '@/svg/download.svg';
import Button from '@/components/shared/Button';
import SplitText from '@/components/shared/SplitText';
import Reveal from '@/components/shared/Reveal';
import { ASSET_PREFIX } from '@/variables';
import { useMediaQueryDeviceState } from '@/atoms/media-query-device';

const FirstBlockCatalog = () => {
    const [mediaQueryDevice] = useMediaQueryDeviceState();
    const catalogLink =
        ASSET_PREFIX +
        (mediaQueryDevice === 'desktop'
            ? '/landing-business/daigo-catalog.pdf?v2'
            : '/landing-business/m-daigo-catalog.pdf?v2');

    return (
        <div className="first-block-catalog">
            <div className="first-block-catalog__middle">
                <div className="first-block-catalog__middle-text">
                    <SplitText className="text-s first-block-catalog__middle-text__label">
                        ознакомиться подробнее
                    </SplitText>
                    <SplitText className="h4">Полный каталог нашей продукции</SplitText>
                </div>
                <Reveal>
                    <Image
                        src={daigoCatalogImg.src}
                        width={daigoCatalogImg.width}
                        height={daigoCatalogImg.height}
                        alt=""
                        className="img-fluid first-block-catalog__img"
                    />
                </Reveal>
            </div>
            <div className="first-block-catalog__bottom">
                <Reveal>
                    <Button
                        tag="a"
                        href={catalogLink}
                        target="_blank"
                        rel="noreferrer"
                        variant="dark"
                        size="lg"
                    >
                        <span className="btn-text">скачать каталог</span>
                        <span className="btn-icon">
                            <DownloadSVG />
                        </span>
                    </Button>
                </Reveal>
                <Reveal>
                    <a
                        href="https://daigo.ru/catalog/"
                        target="_blank"
                        rel="noreferrer"
                        className="link link--underlined text-s"
                    >
                        смотреть на сайте
                    </a>
                </Reveal>
            </div>
        </div>
    );
};

export default FirstBlockCatalog;
