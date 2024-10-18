import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { Cookies } from 'react-cookie';
import { CommonPageProps, NonUndefined } from '@/types';
import DefaultLayout from '@/components/layout/DefaultLayout';
import FirstSection from '@/components/general/pages/main/FirstSection';
import FirstBlockCatalog from '@/components/general/pages/main/FirstBlockCatalog';
import AboutSection from '@/components/general/pages/main/AboutSection';
import ReviewsSection from '@/components/general/pages/main/ReviewsSection';
import PartnersSection from '@/components/general/pages/main/PartnersSection';
import { reviews } from '@/data/reviews';
import { partners } from '@/data/partners';
import PartnersCasesSection from '@/components/general/pages/main/PartnersCasesSection';
import PartnersPitchSection from '@/components/general/pages/main/PartnersPitchSection';
import FaqSection from '@/components/general/pages/main/FaqSection';
import { faq } from '@/data/faq';

const IndexPage = ({}: InferGetStaticPropsType<typeof getStaticProps>) => {
    return (
        <DefaultLayout>
            <FirstSection id="products" className="js-header-theme-trigger" data-theme="light" />
            <div className="catalog-wrapper-mobile js-header-theme-trigger" data-theme="light">
                <FirstBlockCatalog />
            </div>
            <AboutSection className="js-header-theme-trigger" data-theme="light" />
            {reviews.length > 0 && (
                <ReviewsSection id="reviews" reviews={reviews} className="js-header-theme-trigger" data-theme="light" />
            )}
            {partners.length > 0 && (
                <PartnersSection
                    id="partners"
                    partners={partners}
                    className="js-header-theme-trigger"
                    data-theme="light"
                />
            )}
            <PartnersCasesSection className="js-header-theme-trigger" data-theme="light" />
            <PartnersPitchSection id="partnership" className="js-header-theme-trigger" data-theme="light" />
            {faq.length > 0 && <FaqSection data={faq} className="js-header-theme-trigger" data-theme="light" />}
        </DefaultLayout>
    );
};

export default IndexPage;

type IndexPageProps = NonUndefined<CommonPageProps>;

export const getStaticProps: GetStaticProps<IndexPageProps> = async () => {
    return {
        props: {
            meta: {
                baseTitle: 'Японские БАДы оптом от производителя | Уникальные премиальные БАДы из Японии',
                description:
                    'Японские БАДы оптом от производителя Дайго признаны профессиональным сообществом врачей, ➦ сформирован спрос среди премиальной аудитории',
                ogImage: '/landing-business/img/og-image.jpeg',
            },
            cookies: new Cookies().getAll(),
            breadcrumbs: [],
            bodyClass: 'index-page',
        } satisfies IndexPageProps,
    };
};
