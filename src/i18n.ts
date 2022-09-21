import { createI18n } from "vue-i18n";

import { useBrowserLanguage } from "@/composables";

import * as en from '@/locales/en.json';
import * as de from '@/locales/de.json';

export enum Locales {
  EN = 'en',
  DE = 'de',
}

export const fallbackLocale = Locales.EN;

export const LOCALES = [
  { value: Locales.EN, caption: 'English' },
  { value: Locales.DE, caption: 'German' }
];

type MessageSchema = typeof en

export const i18n = createI18n<[MessageSchema], Locales.EN | Locales.DE>({
  legacy: false,
  availableLocales: [ Locales.DE, Locales.EN ],
  locale: useBrowserLanguage({ countryCodeOnly: true }),
  fallbackLocale: fallbackLocale,
  missingWarn: false,
  fallbackWarn: false,
  messages: {
    'en': en,
    'de': de
  }
});
