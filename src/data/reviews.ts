import { tp } from '@/typograf';
import balymReviewImg from '@/../../public/landing-business/img/partners/balym.jpeg';
import turetskayaReviewImg from '@/../../public/landing-business/img/partners/turetskaya.jpeg';
import tumurovaReviewImg from '@/../../public/landing-business/img/partners/tumurova.jpeg';
import valeriyaImg from '@/../../public/landing-business/img/stars/valeriya_photo.jpeg';
import valeriyaReviewImg from '@/../../public/landing-business/img/stars/valeriya.jpeg';
import alsuImg from '@/../../public/landing-business/img/stars/alsu_photo.jpeg';
import alsuReviewImg from '@/../../public/landing-business/img/stars/alsu.jpeg';
import zaraImg from '@/../../public/landing-business/img/stars/zara_photo.jpeg';
import zaraReviewImg from '@/../../public/landing-business/img/stars/zara.jpeg';
import khilkevichImg from '@/../../public/landing-business/img/stars/khilkevich_photo.jpeg';
import khilkevichReviewImg from '@/../../public/landing-business/img/stars/khilkevich.jpeg';
import kandelakiImg from '@/../../public/landing-business/img/stars/kandelaki_photo.jpeg';
import kandelakiReviewImg from '@/../../public/landing-business/img/stars/kandelaki.jpeg';
import sheffpavelImg from '@/../../public/landing-business/img/stars/sheffpavel_photo.jpeg';
import sheffpavelReviewImg from '@/../../public/landing-business/img/stars/sheffpavel.jpeg';
import annaGorodImg from '@/../../public/landing-business/img/stars/anna-gorod_photo.png';
import annaGorodReviewImg from '@/../../public/landing-business/img/stars/anna-gorod.jpeg';
import malikovImg from '@/../../public/landing-business/img/stars/malikov_photo.jpeg';
import malikovReviewImg from '@/../../public/landing-business/img/stars/malikov.jpeg';
import aleksandraMskReviewImg from '@/../../public/landing-business/img/clients/aleksandra-msk.jpeg';
import aleksandraYakutskReviewImg from '@/../../public/landing-business/img/clients/aleksandra-yakutsk.jpeg';
import evgeniaMskReviewImg from '@/../../public/landing-business/img/clients/evgenia-msk.jpeg';
import evgeniaOmskReviewImg from '@/../../public/landing-business/img/clients/evgenia-omsk.jpeg';
import olgaOmskReviewImg from '@/../../public/landing-business/img/clients/olga-omsk.jpeg';
import sergeyEkbReviewImg from '@/../../public/landing-business/img/clients/sergey-ekb.jpeg';
import svetlanaKazanReviewImg from '@/../../public/landing-business/img/clients/svetlana-kazan.jpeg';
import ulyanaUfaReviewImg from '@/../../public/landing-business/img/clients/ulyana-ufa.jpeg';
import { ImageShape } from '@/types';

export type ReviewPersonType = 'partner' | 'star' | 'client';

export type Review = {
    date?: string;
    hashtags: string[];
    type: ReviewPersonType;
    name: string;
    avatar?: ImageShape;
    content: {
        type: 'text' | 'text-image';
        value: string | ImageShape;
    };
};

export const reviews = (
    [
        {
            hashtags: [],
            type: 'partner',
            name: 'Балым Ольга Юрьевна',
            avatar: balymReviewImg,
            content: {
                type: 'text',
                value: `
                <p>Я считаю, что альтернативы нет. Я учусь и там тоже предлагают какие-то продукты, которые тоже обозначаются как метабиотики, но они не работают так. И со специалистами, с которыми я тоже общаюсь, я же доктор, и на всех конгрессах, где говорят о ценности метабиотиков, задаешь вопрос «а какие, какие?», все говорят «Дайго». Сами применяем, наши гости применяют, с регулярностью пользуются. Качество великолепное, поэтому пользуемся.</p>
            `,
            },
        },
        {
            hashtags: [],
            type: 'partner',
            name: 'Турецкая Алла',
            avatar: turetskayaReviewImg,
            content: {
                type: 'text',
                value: `
                <p>Все довольны. Когда приезжал молодой человек, он рассказывал моим администраторам, и у меня продажи стали намного лучше. Рассказали очень доходчиво, администратор обалдела, конечно. Она не предполагала даже, что продукт именно так мощно влияет и там дальше пошли продажи. Это самое главное, что донесли, рассказали об этом продукте. Они вообще начали продавать, до этого вообще ничего не продавали.</p>
            `,
            },
        },
        {
            // date: '16.01.2022',
            hashtags: ['метабиотик Дайго'],
            type: 'partner',
            name: 'Тумурова Ирина Владимировна',
            avatar: tumurovaReviewImg,
            content: {
                type: 'text',
                value: `
                <p>Уникальный метабиотик, который оказывает воздействие на весь организм в целом. Хороший продукт, давно используем. Используем для своих целей и также нравится клиентам.</p>
            `,
            },
        },
        {
            // date: '16.01.2022',
            hashtags: ['Daigo Lux'],
            type: 'client',
            name: 'Евгения, г. Москва',
            avatar: evgeniaMskReviewImg,
            content: {
                type: 'text',
                value: `
                <p>Принимаю Дайго Люкс в течение 3-х лет курсом с октября по апрель-май.</p>

                <p>Результат: нормализовалась работа кишечника. Как следствие, улучшилось общее самочувствие. Считаю что иммунитет стал лучше. Явно реже стал появляться насморк. Раньше он меня мучал по 6-7 месяцев в году. Дети принимают Дайго по 5 мл ежедневно в течение почти 4-х лет. Cейчас им 7 и 5. Результаты такие же как и у меня.</p>                
            `,
            },
        },
        {
            // date: '16.01.2022',
            hashtags: ['Daigo'],
            type: 'client',
            name: 'Александра, г. Якутск',
            avatar: aleksandraYakutskReviewImg,
            content: {
                type: 'text',
                value: `
                <p>Результат от приёма Дайго у сына 4-х лет: принимает Дайго уже 28 дней по одной саше утром.</p>
                <p>1. У малыша запоры.<br>
                Поили пробиотиками и к сожалению не помогало. Спасались питанием (больше сырых овощей-морковки и свеклы) и слабительными.<br>
                На третий день приёма Дайго – стул нормализовался. Теперь у нас это естественная каждодневная процедура.</p>
                <p>2. Заметила, что зуда после укусов комаров практически нет. Это удивительно!<br>
                У нас в Якутии комаров огромное количество и все мы каждое лето страдаем от их укусов.</p>
            `,
            },
        },
        {
            // date: '16.01.2022',
            hashtags: ['Daigo'],
            type: 'client',
            name: 'Светлана, г. Казань',
            avatar: svetlanaKazanReviewImg,
            content: {
                type: 'text',
                value: `
                <p>Дайго прекрасный препарат. Я сама пила его не так долго, после лечения благодаря ему удалось быстро восстановить флору кишечника. Но! хочу сказать, что моя дочь которой скоро будет 3 года, пьет Дайго почти 2 года и великолепные результаты. Быть точнее, она плохо набирала вес и по рекомендации врача мы стали ей давать. Вес выровнялся, сейчас все прекрасно. Используем этот чудесный препарат дальше.</p>

                <p>И еще, когда у старших детей проблемы с ЖКТ – даю разово большую дозу, и тоже мгновенно помогает. Спасибо Игорю с Дайго за замечательное обслуживание и заботу о нашей семье!</p>
            `,
            },
        },
        {
            // date: '16.01.2022',
            hashtags: ['Daigo'],
            type: 'client',
            name: 'Ольга, г. Новосибирск',
            avatar: olgaOmskReviewImg,
            content: {
                type: 'text',
                value: `
                <p>Нам пришли анализы на иммунную систему, результат от Дайго очень хороший.</p>

                <p>Если раньше мы сдавали анализы, у нас показатель общей иммунной системы был 70 при норме 10, то сейчас 30 и анализ на микробиоту значительно улучшился, мы это видим сами, что таких проблем с кишечником уже нет как раньше, именно поэтому нам врач советует продолжать дальше принимать Дайго! Простудными заболеваниями мы уже год не болеем!</p>
            `,
            },
        },
        {
            // date: '16.01.2022',
            hashtags: ['Daigo'],
            type: 'client',
            name: 'Сергей, г. Екатеринбург',
            avatar: sergeyEkbReviewImg,
            content: {
                type: 'text',
                value: `
                <p>Пропив курс, могу оценить, что помимо других положительных моментов, связанных с улучшением работы ЖКТ, роста волос и т.д. Выносливость значительно повысилась, прибавилось энергии и ушло чувство хронической усталости. Недосыпы стало переносить легче</p>
            `,
            },
        },
        {
            // date: '16.01.2022',
            hashtags: ['Daigo'],
            type: 'client',
            name: 'Ульяна, г. Уфа',
            avatar: ulyanaUfaReviewImg,
            content: {
                type: 'text',
                value: `
                <p>…Я три месяца пропила. Пока перерыв.</p>

                <p>Эффект отличный. На первом месяце приема я избавилась от цистита, который уролог не смог полностью убрать.</p>
                
                <p>Утром появилась бодрость. В итоге 3-х месяцев заметила еще, что у меня очистилась кожа спины и декольте. И даже как – будто стала более гладкой. Также ногти стали крепче. Кроме Дайго я принимала еще витамины D3+K2, думаю, эффект совместный (по ногтям)</p>
            `,
            },
        },
        {
            // date: '16.01.2022',
            hashtags: ['Daigo'],
            type: 'client',
            name: 'Александра, г. Москва',
            avatar: aleksandraMskReviewImg,
            content: {
                type: 'text',
                value: `
                <p>Дочь, 21 год, студентка. Принимает Дайго более двух недель.</p>
                <p>Результат:</p>
                <p>1. Высыпается за более короткий срок.</p>
                <p>2. Почувствовала прилив энергии и сил. Говорит, что стала все успевать и не устаёт </p>
                <p>3. Быстро восстановилась после ковида.</p>
                <p>4. У дочери в мае обнаружили фиброаденому. К сожалению доктор не сделал мамограмму и я не могу предоставить результат в цифрах, но мы это исправим.</p>
                
                <p>Так вот. Дочь сказала, что фиброаденома уменьшилась.</p>
                <p>Доктора, которые были на конференции объяснили, что у фиброаденомы природа вирусно-бактериальная-паразитарная.</p>
            `,
            },
        },
        {
            // date: '16.01.2022',
            hashtags: ['Daigo Lux'],
            type: 'client',
            name: 'Евгения, г. Омск',
            avatar: evgeniaOmskReviewImg,
            content: {
                type: 'text',
                value: `
                <p>Здравствуйте! Очень довольна им. Стул наладился буквально через неделю уже. Хотя были проблемы почти с подросткового возраста. Кожа стала лучше, никаких покраснений мелких и цвет более равномерный, сухость прошла (с гипотериозом это была проблема номер один).</p>

                <p>После родов волосы стали сильно выпадать, хотя я уже и не кормлю ребенка. К Дайго добавила витамины и через месяц волосы стали меньше выпадать. Прошла тяжесть в желудке после еды, газообразований стало меньше. Пока эффект от Дайго Люкс мне нравится!</p>
            `,
            },
        },
        {
            date: '18.12.2021',
            hashtags: ['daigo'],
            type: 'star',
            name: 'Валерия',
            avatar: valeriyaImg,
            content: {
                type: 'text-image',
                value: valeriyaReviewImg,
            },
        },
        {
            date: '15.11.2021',
            hashtags: ['метабиотик daigo'],
            type: 'star',
            name: 'Алсу',
            avatar: alsuImg,
            content: {
                type: 'text-image',
                value: alsuReviewImg,
            },
        },
        {
            date: '18.11.2022',
            hashtags: ['метабиотик daigo'],
            type: 'star',
            name: 'Zara',
            avatar: zaraImg,
            content: {
                type: 'text-image',
                value: zaraReviewImg,
            },
        },
        {
            date: '14.08.2022',
            hashtags: ['метабиотик daigo'],
            type: 'star',
            name: 'Анна Хилькевич',
            avatar: khilkevichImg,
            content: {
                type: 'text-image',
                value: khilkevichReviewImg,
            },
        },
        {
            date: '19.03.2020',
            hashtags: ['метабиотик daigo'],
            type: 'star',
            name: 'Тина Канделаки',
            avatar: kandelakiImg,
            content: {
                type: 'text-image',
                value: kandelakiReviewImg,
            },
        },
        {
            date: '13.03.2020',
            hashtags: ['метабиотик daigo'],
            type: 'star',
            name: 'Павел Шефф',
            avatar: sheffpavelImg,
            content: {
                type: 'text-image',
                value: sheffpavelReviewImg,
            },
        },
        {
            date: '01.12.2022',
            hashtags: ['метабиотик daigo'],
            type: 'star',
            name: 'Анна Городжая',
            avatar: annaGorodImg,
            content: {
                type: 'text-image',
                value: annaGorodReviewImg,
            },
        },
        {
            date: '14.05.2023',
            hashtags: ['метабиотик daigo'],
            type: 'star',
            name: 'Дмитрий Маликов',
            avatar: malikovImg,
            content: {
                type: 'text-image',
                value: malikovReviewImg,
            },
        },
    ] satisfies Review[]
).map((obj) => ({
    ...obj,
    name: tp(obj.name),
    content: {
        ...obj.content,
        value: typeof obj.content.value === 'string' ? tp(obj.content.value) : obj.content.value,
    },
}));
