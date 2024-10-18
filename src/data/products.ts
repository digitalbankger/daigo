import { tp } from '@/typograf';
import doctorImg from '@/../../public/landing-business/img/doctor-temp.jpeg';
import daigoDentImg from '@/../../public/landing-business/img/products/daigo-dent.jpeg';
import daigoImg from '@/../../public/landing-business/img/products/daigo-methabiotic.jpeg';
import daigoLuxImg from '@/../../public/landing-business/img/products/daigo-lux.jpeg';
import daigoShampooImg from '@/../../public/landing-business/img/products/daigo-shampoo.jpeg';
import tamotsuImg from '@/../../public/landing-business/img/products/tamotsu.jpg';

export const products = [
    {
        type: 'Метабиотик',
        name: 'Daigo',
        text: 'Метабиотик № 1 в мире. Способствует восстановлению работы ЖКТ и баланса кишечной микрофлоры. Помогает укреплению защитных сил организма.',
        href: 'https://daigo.ru/catalog/metabiotik-daigo/',
        img: daigoImg,
        video: 'CnlvPPay82M?si=cLJVYLzGgtPo1vnQ',
    },
    {
        type: 'Метабиотик',
        name: 'Daigo Lux',
        text: 'В процессе производства проходит дополнительную ступень ферментации и является наиболее концентрированным продуктом в линейке Дайго.',
        href: 'https://daigo.ru/catalog/metabiotik-daigo-lux/',
        img: daigoLuxImg,
        video: 'CnlvPPay82M?si=cLJVYLzGgtPo1vnQ',
        recommendation: {
            name: 'Тюзиков Игорь Адамович',
            position:
                'к.м.н., профессор РАЕ, заслуженный работник науки и образования, консультант Клиники профессора Калинченко',
            img: doctorImg,
        },
    },
    {
        type: 'Зубная паста',
        name: 'Daigo Dent',
        text: 'Не просто очищает, но и помогает восстановить микрофлору полости рта, предотвращая множество заболеваний, связанных с ее нарушением!',
        href: 'https://daigo.ru/catalog/zubnaya-pasta-daigo-dent/',
        img: daigoDentImg,
        video: '',
    },
    {
        type: 'Шампунь',
        name: 'Daigo',
        text: 'Инновационный шампунь для выработки коллагена у корней волос и оздоровления кожи головы.',
        href: 'https://daigo.ru/catalog/daigo-shampoo/',
        img: daigoShampooImg,
        video: '',
    },
    {
        type: 'Продукт для умственной активности',
        name: 'Tamotsu',
        text: 'БАД для профилактики преждевременного старения мозга. Натуральный источник плазмалогенов и коэнзима Q10.',
        href: 'https://daigo.ru/catalog/tamotsu/',
        img: tamotsuImg,
        video: '',
    },
].map((obj) => ({
    ...obj,
    name: tp(obj.name),
    text: tp(obj.text),
    video: obj.video,
    recommendation: obj.recommendation
        ? {
              ...obj.recommendation,
              name: tp(obj.recommendation.name),
              position: tp(obj.recommendation.position),
          }
        : undefined,
}));
