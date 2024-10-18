import { GetStaticProps } from 'next';
import ErrorPageLayout from '@/components/layout/ErrorPageLayout';
import { CommonPageProps } from '@/types';

const ServerErrorPage = () => {
    return <ErrorPageLayout errorNumber={500} />;
};

export default ServerErrorPage;

export const getStaticProps: GetStaticProps<CommonPageProps> = async () => {
    return {
        props: {
            meta: {
                baseTitle: 'Японские БАДы оптом от производителя |  Уникальные премиальные БАДы из Японии',
                description:
                    'Уникальные премиальные БАДы Daigo из Японии с высокой маржинальностью. ⭐️ Японские БАДы оптом от производителя Дайго признаны профессиональным сообществом врачей, ➦ сформирован спрос среди премиальной аудитории',
                ogImage: '/landing-business/img/og-image.jpeg',
            },
            breadcrumbs: [],
            cookies: null,
            bodyClass: 'error-page',
        },
    };
};
