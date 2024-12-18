import { TContactItem, TExampleItem, TSkillItem } from "src/types/types";

export const userContacts: TContactItem[] = [
  {
    imgPath: 'svg/email.svg',
    contact: 'nosdm@yandex.ru',
    alt: 'Иконка электронной почты',
    type: 'mailto:',
  },
  {
    imgPath: 'svg/phone.svg',
    contact: '+7 906-451-41-33',
    alt: 'Иконка телефона',
    type: 'tel:+79064514133 '
  },
  {
    imgPath: 'svg/telegram.svg',
    contact: '@DmitryM_Nos',
    alt: 'Иконка telegram',
    type: 'https://t.me/DmitryM_Nos'
  },

]

export const userSkills: TSkillItem[] = [
  {
    name: 'Html',
    level: 75,
  },
  {
    name: 'Css',
    level: 75,
  },
  {
    name: 'JS / TS',
    level: 55,
  },
  {
    name: 'Animation',
    level: 65,
  },
  // {
  //   name: 'RegExp',
  //   level: 55,
  // },
  // {
  //   name: 'Git',
  //   level: 50
  // }

]

export const userSoftWare: TSkillItem[] = [
  {
    name: 'React',
    level: 70,
  },
  {
    name: 'Redux',
    level: 65,
  },
  {
    name: 'Pug',
    level: 55,
  },
  {
    name: 'WebPack',
    level: 65,
  },
]

export const examples: TExampleItem[] = [
  {
    id: 1,
    name: 'Интернет-магазин ретроспективной фото и видео техникм',
    img: 'content/camera-shop.jpg',
    imgModal: 'content/camera-shop-big.jpg',
    description: '',
    href: 'https://cameras-shop-nosdm.vercel.app/',
  },
  {
    id: 2,
    name: 'Cайт компании, которая занимается проведением игровых квестов разной тематики и уровней сложности.',
    img: 'content/escape-room.jpg',
    imgModal: 'content/escape-room-big.jpg',
    description: '',
    href: 'https://escape-room-sand.vercel.app/',
  },
  {
    id: 3,
    name: 'Сайт-каталог. Продажа спецтехники марок ЧЕТРА И ВИПО',
    img: 'content/gidravlika.jpg',
    imgModal: 'content/gidravlika-big.jpg',
    description: '',
    href: 'https://гидравлика-м.рф/',
  },
  {
    id: 4,
    name: 'Лендинг компании, которая занимается ремонтом и сервисом спецтехники',
    img: 'content/gidravlika-tech.jpg',
    imgModal: 'content/gidravlika-tech-big.jpg',
    description: '',
    href: 'https://gidravlika-m.tech/',
  },


]
