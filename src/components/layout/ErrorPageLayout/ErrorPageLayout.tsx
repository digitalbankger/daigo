import Image from 'next/image';
import Button from '@/components/shared/Button';
import Link from '@/components/shared/Link';
import { tp } from '@/typograf';
import footerBall1Img from '@/../../public/landing-business/img/footer-ball-1.png';
import footerBall2Img from '@/../../public/landing-business/img/footer-ball-2.png';
import footerBall3Img from '@/../../public/landing-business/img/footer-ball-3.png';
import footerBall4Img from '@/../../public/landing-business/img/footer-ball-4.png';
import footerBall5Img from '@/../../public/landing-business/img/footer-ball-5.png';

interface Props {
    errorNumber: number;
}

const ErrorPageLayout = ({ errorNumber }: Props) => {
    return (
        <div className="error-page-layout js-header-theme-trigger" data-theme="light">
            <Image
                src={footerBall1Img.src}
                width={footerBall1Img.width}
                height={footerBall1Img.height}
                alt=""
                className="img-fluid error-ball-1"
                sizes="(max-width: 767px) 100vw, 50vw"
            />
            <Image
                src={footerBall2Img.src}
                width={footerBall2Img.width}
                height={footerBall2Img.height}
                alt=""
                className="img-fluid error-ball-2"
                sizes="245px"
            />
            <Image
                src={footerBall3Img.src}
                width={footerBall3Img.width}
                height={footerBall3Img.height}
                alt=""
                className="img-fluid error-ball-3"
                sizes="198px"
            />
            <Image
                src={footerBall4Img.src}
                width={footerBall4Img.width}
                height={footerBall4Img.height}
                alt=""
                className="img-fluid error-ball-4"
                sizes="198px"
            />
            <Image
                src={footerBall5Img.src}
                width={footerBall5Img.width}
                height={footerBall5Img.height}
                alt=""
                className="img-fluid error-ball-5"
                sizes="245px"
            />
            <div className="error-page-layout__content-wrapper">
                <div className="error-page-layout__content">
                    <h1 className="text-s error-page__title">Ошибка {errorNumber}</h1>
                    <div className="h4">{tp('Что-то пошло не так. Попробуем еще раз?')}</div>
                </div>
                <Button variant="light" tag={Link} href="/" className="error-page__link">
                    вернуться на главную
                </Button>
            </div>
        </div>
    );
};

export default ErrorPageLayout;
