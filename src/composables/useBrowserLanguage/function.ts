import { ref } from "vue";
import type { Ref } from "vue";

import { useOnMounted } from "@/composables/useOnMounted";

export interface UseBrowserLanguageOptions {
  /**
   * Whether to use the full locale or the country code only
   *
   * @default false
   */
  countryCodeOnly?: boolean
}
/**
 * Returns the browser's language
 */
export function useBrowserLanguage(options: UseBrowserLanguageOptions) {
  const {
    countryCodeOnly = false,
  } = options;

  const locale = window.navigator.language;

  return countryCodeOnly ? locale.trim().split('-')[0] : locale;
}
