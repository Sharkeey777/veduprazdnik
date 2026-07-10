/**
 * ЕДИНЫЙ ФАЙЛ КОНТЕНТА САЙТА
 * ──────────────────────────────────────────────────────────────
 * Здесь меняются ВСЕ тексты, контакты, ссылки и списки.
 * Ищите пометку TODO — это данные, которые нужно заменить вручную
 * (реальные телефон / email / город / реквизиты и т.д.).
 */

/** Adds the deployment base path so public media works on GitHub Pages. */
export const mediaAsset = (path: string) => `${import.meta.env.BASE_URL}media/${path}`;

export const site = {
  name: 'Юлия Собенина',
  role: 'Ведущая мероприятий',
  city: 'Москва и Московская область',
};

/**
 * Контакты. По решению заказчика связь только через мессенджеры/соцсети —
 * телефона/WhatsApp/email на сайте нет, поэтому и в контенте их не держим.
 */
export const contacts = {
  telegram: '@Sobenina_event',
  telegramHref: 'https://t.me/Sobenina_event',
  max: 'MAX',
  maxHref: 'https://max.ru/u/f9LHodD0cOKjgbucxj5FFJrgRPXa_S3_S85m7x9LT9jENWYFeS2bqpQ7ZaM',
  vkGroupHref: 'https://vk.com/club212339247',
  vkPageHref: 'https://vk.com/y.sobenina',
  instagramHref: 'https://instagram.com/sobenina_event',
};

export const nav = [
  { label: 'О Юлии', href: '#about' },
  { label: 'Форматы', href: '#formats' },
  { label: 'Видео', href: '#showreel' },
  { label: 'Отзывы', href: '#reviews' },
  { label: 'Контакты', href: '#contacts' },
];

export const hero = {
  title: 'Юлия Собенина — ведущая ваших событий',
  subtitle:
    'Свадьбы, юбилеи, корпоративы и камерные праздники с живой атмосферой, тонким юмором и вниманием к каждому гостю.',
  trust: ['Свадьбы', 'Юбилеи', 'Корпоративы', 'Выездные церемонии'],
  stats: [
    { value: '10 лет', label: 'опыта' },
    { value: 'Москва', label: 'и область' },
  ] as { value: string; label: string }[],
};

export const about = {
  text: 'Я создаю события, где гостям легко, молодожёнам спокойно, а атмосфера складывается естественно. Без неловких конкурсов, затянутых пауз и шаблонных сценариев — только продуманная программа, живое общение и праздник, который действительно хочется вспоминать.',
  cards: [
    'Индивидуальный сценарий под событие',
    'Лёгкая коммуникация с гостями',
    'Современные интерактивы без пошлости',
    'Помощь в структуре вечера',
    'Работа в связке с диджеем, фотографом и организаторами',
  ],
};

export const formats = [
  {
    title: 'Свадьба',
    text: 'Сценарий, который держит ритм вечера: трогательные моменты, живые интерактивы, мягкий юмор и внимание к вашим гостям.',
  },
  {
    title: 'Выездная церемония',
    text: 'Тёплые, искренние слова и точный тайминг — момент, за который не стыдно ни перед гостями, ни перед камерой.',
  },
  {
    title: 'Юбилей / день рождения',
    text: 'Праздник вокруг героя вечера: истории, поздравления и атмосфера, в которой комфортно всем поколениям гостей.',
  },
  {
    title: 'Корпоратив',
    text: 'Событие, которое объединяет команду: динамика, уместный юмор и программа без затянутых пауз и неловкости.',
  },
  {
    title: 'Выпускной',
    text: 'Лёгкий, современный формат без пафоса — так, чтобы вечер запомнился самим выпускникам, а не только организаторам.',
  },
  {
    title: 'Камерный семейный праздник',
    text: 'Уютные события в узком кругу: спокойный ритм, живое общение и внимание к каждому, кто рядом.',
  },
  {
    title: 'Девичник / тематическая вечеринка',
    text: 'Атмосферный сценарий под настроение и стиль: тонко, со вкусом и без банальных конкурсов.',
  },
  {
    title: 'Концерт / открытие / презентация',
    text: 'Уверенное ведение мероприятия: чёткая структура, работа со сценой и аудиторией, точный тайминг блоков.',
  },
];

export const showreel = {
  title: 'Посмотрите, как Юлия работает вживую',
  text: 'Живые эмоции гостей, атмосфера событий и стиль ведения — короткие фрагменты и авторские SDE-ролики с реальных праздников.',
  /** Главное showreel-видео (горизонтальное). */
  main: {
    src: mediaAsset('video/showreel.mp4'),
    poster: mediaAsset('video/showreel.jpg'),
    label: 'Showreel — фрагменты с мероприятий',
  },
  /** Второй горизонтальный акцент — авторский SDE-фильм со свадебного дня. */
  sde: {
    src: mediaAsset('video/sde-main.mp4'),
    poster: mediaAsset('video/sde-main.jpg'),
    label: 'SDE-ролик — фильм, смонтированный прямо в день свадьбы',
  },
  /** Вертикальные ролики: короткий SDE + личные видео Юлии «из закулисья». */
  reels: [
    { src: mediaAsset('video/sde-reel.mp4'), poster: mediaAsset('video/sde-reel.jpg') },
    { src: mediaAsset('video/personal01.mp4'), poster: mediaAsset('video/personal01.jpg') },
    { src: mediaAsset('video/personal02.mp4'), poster: mediaAsset('video/personal02.jpg') },
    { src: mediaAsset('video/personal03.mp4'), poster: mediaAsset('video/personal03.jpg') },
    { src: mediaAsset('video/personal04.mp4'), poster: mediaAsset('video/personal04.jpg') },
    { src: mediaAsset('video/personal05.mp4'), poster: mediaAsset('video/personal05.jpg') },
    { src: mediaAsset('video/personal06.mp4'), poster: mediaAsset('video/personal06.jpg') },
    { src: mediaAsset('video/personal07.mp4'), poster: mediaAsset('video/personal07.jpg') },
  ],
};

/**
 * Личные (студийные) фото Юлии — для блока «О Юлии».
 * Это портретная съёмка, не событийная, поэтому вынесена из галереи праздников.
 */
export const aboutPhotos: { src: string; alt: string }[] = [
  { src: mediaAsset('photos/g17.jpg'), alt: 'Юлия Собенина — студийный портрет' },
  { src: mediaAsset('photos/about.jpg'), alt: 'Портрет ведущей Юлии Собениной' },
  { src: mediaAsset('photos/g15.jpg'), alt: 'Юлия Собенина, портретная съёмка' },
  { src: mediaAsset('photos/g19.jpg'), alt: 'Юлия Собенина в студии' },
  { src: mediaAsset('photos/g13.jpg'), alt: 'Юлия Собенина, портретная фотосессия' },
];

/**
 * Галерея «Живые моменты с праздников».
 * Разбита по типам событий: свадьбы, дни рождения, Новый год.
 * В каждой вкладке — и видео (с постером), и фото. Медиа лежит в /public/media/gallery/*.
 */
export type GalleryMedia =
  | { type: 'video'; src: string; poster: string; alt: string }
  | { type: 'photo'; src: string; alt: string };

export type GalleryCategory = {
  id: string;
  label: string;
  caption: string;
  items: GalleryMedia[];
};

/** Хелпер: сгенерировать список пронумерованных ассетов (w01, w02, …). */
const seq = (count: number, fn: (n: string, i: number) => GalleryMedia): GalleryMedia[] =>
  Array.from({ length: count }, (_, i) => fn(String(i + 1).padStart(2, '0'), i));

export const galleryCategories: GalleryCategory[] = [
  {
    id: 'wedding',
    label: 'Свадьбы',
    caption: 'Церемонии, первые танцы и самые тёплые моменты дня — вживую и в кадре.',
    items: [
      ...seq(17, (n, i) => ({
        type: 'video',
        src: mediaAsset(`gallery/wedding/wv${n}.mp4`),
        poster: mediaAsset(`gallery/wedding/wv${n}.jpg`),
        alt: `Видео со свадьбы, которую вела Юлия Собенина №${i + 1}`,
      })),
      ...seq(26, (n, i) => ({
        type: 'photo',
        src: mediaAsset(`gallery/wedding/w${n}.jpg`),
        alt: `Момент со свадьбы с ведущей Юлией Собениной №${i + 1}`,
      })),
    ],
  },
  {
    id: 'birthday',
    label: 'Дни рождения',
    caption: 'Юбилеи и дни рождения — праздник вокруг героя вечера, тепло и с юмором.',
    items: [
      {
        type: 'video',
        src: mediaAsset('gallery/birthday/bv01.mp4'),
        poster: mediaAsset('gallery/birthday/bv01.jpg'),
        alt: 'Видео с дня рождения, которое вела Юлия Собенина',
      },
      ...seq(3, (n, i) => ({
        type: 'photo',
        src: mediaAsset(`gallery/birthday/b${n}.jpg`),
        alt: `Момент с дня рождения с ведущей Юлией Собениной №${i + 1}`,
      })),
    ],
  },
  {
    id: 'newyear',
    label: 'Новый год',
    caption: 'Новогодние вечера и корпоративы в атмосфере настоящего праздника.',
    items: [
      {
        type: 'video',
        src: mediaAsset('gallery/newyear/nv01.mp4'),
        poster: mediaAsset('gallery/newyear/nv01.jpg'),
        alt: 'Видео с новогоднего вечера, который вела Юлия Собенина №1',
      },
      {
        type: 'video',
        src: mediaAsset('gallery/newyear/nv02.mp4'),
        poster: mediaAsset('gallery/newyear/nv02.jpg'),
        alt: 'Видео с новогоднего вечера, который вела Юлия Собенина №2',
      },
    ],
  },
];

export const steps = [
  {
    n: '01',
    title: 'Знакомство',
    text: 'Созваниваемся или встречаемся, я узнаю о вас, событии и о том, каким вы хотите видеть свой праздник.',
  },
  {
    n: '02',
    title: 'Обсуждение события',
    text: 'Разбираем формат, гостей, площадку, тайминг и пожелания — фиксируем все важные детали.',
  },
  {
    n: '03',
    title: 'Сценарий и программа',
    text: 'Собираю индивидуальную программу под ваше событие и согласую её с вами и подрядчиками.',
  },
  {
    n: '04',
    title: 'Проведение праздника',
    text: 'В день события беру ритм вечера на себя — вам остаётся только быть с близкими и наслаждаться.',
  },
];

export const trust = [
  { title: 'Вовремя на связи', text: 'Отвечаю без долгих пауз и держу вас в курсе на каждом этапе подготовки.' },
  { title: 'Помогаю с таймингом', text: 'Выстраиваю логику вечера так, чтобы всё шло без спешки и провисаний.' },
  { title: 'Чувствую аудиторию', text: 'Считываю настроение зала и веду программу по гостям, а не по шаблону.' },
  { title: 'Без перегруза конкурсами', text: 'Интерактивы — уместные и добровольные, без неловких игр «из-под палки».' },
  { title: 'Работаю с разными поколениями', text: 'Нахожу общий язык и с молодёжью, и со старшими гостями за одним столом.' },
  { title: 'Подстраиваюсь под ваш стиль', text: 'Веду в тональности пары или заказчика — от камерной до яркой и динамичной.' },
];

export const cta = {
  title: 'Хотите узнать, свободна ли ваша дата?',
  text: 'Напишите Юлии — обсудим формат события, дату, гостей и атмосферу, которую вы хотите создать.',
};

/** Типы событий для выпадающего списка формы */
export const eventTypes = [
  'Свадьба',
  'Выездная церемония',
  'Юбилей / день рождения',
  'Корпоратив',
  'Выпускной',
  'Камерный семейный праздник',
  'Девичник / вечеринка',
  'Другое событие',
];

/** Отзывы — скриншоты из папки «отзывы» (реальные). */
export const reviews: { src: string; alt: string }[] = Array.from({ length: 13 }, (_, i) => ({
  src: mediaAsset(`reviews/r${String(i + 1).padStart(2, '0')}.jpg`),
  alt: `Отзыв клиента о ведущей Юлии Собениной №${i + 1}`,
}));

/** Студия-разработчик сайта — кредит в самом низу страницы. */
export const studio = {
  name: 'Далее',
  tagline: 'Студия digital-решений',
  made: 'Сайт создан в студии',
  href: '', // ссылка на студию (сайт / Telegram); пусто — просто текст без ссылки
};
