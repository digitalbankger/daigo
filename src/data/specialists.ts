import { tp } from '@/typograf';
import proschaevImg from '@/../../public/landing-business/img/specialists/Прощаев.jpeg';
import ilnitskiyImg from '@/../../public/landing-business/img/specialists/Ильницкий.jpeg';
import gerontologiyaImg from '@/../../public/landing-business/img/specialists/ГЕРОНТОЛОГИЯ.jpeg';
import gippokratImg from '@/../../public/landing-business/img/specialists/Гиппократ.jpeg';
import alekseevImg from '@/../../public/landing-business/img/specialists/Алексеев.jpeg';

export const specialists = [
    {
        img: proschaevImg,
        title: tp('Кирилл Иванович Прощаев'),
        text: tp('доктор медицинских наук, профессор, руководитель международного проекта «Архитектура возраста»'),
    },
    {
        img: ilnitskiyImg,
        title: tp('Андрей Николаевич Ильницкий'),
        text: tp('доктор медицинских наук, профессор, член правления Европейского общества гериатрической медицины'),
    },
    {
        img: gerontologiyaImg,
        title: tp('Научно-исследовательский медицинский центр «ГЕРОНТОЛОГИЯ»'),
    },
    {
        img: gippokratImg,
        title: tp('Интеллектуальный клуб экспертов медицины «Гиппократ»'),
    },
    {
        img: alekseevImg,
        title: tp('Дмитрий Алексеев'),
        text: tp('Микробиолог, работал в Голландии, Англии'),
    },
];
