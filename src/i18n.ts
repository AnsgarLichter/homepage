import { createI18n } from "vue-i18n";

import * as en from '@/locales/en.json';
import * as de from '@/locales/de.json';

export enum Locales {
  EN = 'en',
  DE = 'de',
}

export const defaultLocale = Locales.EN;
export const fallbackLocale = Locales.EN;

export const LOCALES = [
  { value: Locales.EN, caption: 'English' },
  { value: Locales.DE, caption: 'German' }
];

type MessageSchema = typeof en

export const i18n = createI18n<[MessageSchema], Locales.EN | Locales.DE>({
  legacy: false,
  locale: defaultLocale,
  fallbackLocale: fallbackLocale,
  missingWarn: false,
  fallbackWarn: false,
  messages: {
    'en': en,
    'de': de
  }
});
