import { TContactItem, TSkillItem } from "src/types/types";

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
    type: ''
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
    name: 'TypeScript',
    level: 55,
  },
  {
    name: 'Animation',
    level: 65,
  },
  {
    name: 'RegExp',
    level: 55,
  },
  {
    name: 'Git',
    level: 50
  }

]

export const userSoftWare: TSkillItem[] = [
  {
    name: 'React',
    level: 75,
  },
  {
    name: 'Redux',
    level: 75,
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
