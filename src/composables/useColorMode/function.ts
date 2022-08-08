import { computed, watch, ref } from "vue";
import { useStorage, useIsDarkModePreferred, useOnMounted } from "@/composables";

export enum BasicColorModesValues {
  auto = 'auto',
  light = 'light',
  dark = 'dark'
}
export type BasicColorModes = BasicColorModesValues.auto | BasicColorModesValues.dark | BasicColorModesValues.light;

export interface UseColorModeOptions<T extends string = BasicColorModes> {
  /**
   * CSS selector for the target element
   *
   * @default 'html'
   */
  selector?: string,
  /**
   * HTML attribute applying to the target element
   *
   * @default 'class'
   */
  attribute?: string,
  /**
   * Custom color modes
   *
   * @default {}
   */
  modes?: Record< T | BasicColorModes, string>,
  /**
   * Custom handler to handle the updates of the color modes.
   * The default behaviour will be overridden.
   *
   * @default undefined
   */
  onChanged?: (mode: T | BasicColorModes) => void
}

export function useColorMode<T extends string = BasicColorModes>(options: UseColorModeOptions<T> = {}) {
  const {
    selector = 'html',
    attribute = 'class',
  } = options;

  const modes = {
    auto: '',
    light: 'light',
    dark: 'dark',
    ...options.modes || {}
  } as Record<T | BasicColorModes, string>;

  const store = useStorage<T | BasicColorModes>('useDarkMode', ref(BasicColorModesValues.auto));

  const isDarkModePreferred = useIsDarkModePreferred();
  const preferredMode = computed<T | BasicColorModes>(() => (isDarkModePreferred.value ? BasicColorModesValues.dark : BasicColorModesValues.light));
  const state = computed({
    get() {
      return store.value === BasicColorModesValues.auto ? preferredMode.value : store.value;
    },
    set(value: T | BasicColorModes) {
      store.value = value;
    }
  });

  function updateHtmlAttributes(selector: string, attribute: string, value: string) {
    const element = window?.document.querySelector(selector);
    if (!element) {
      return;
    }

    if (attribute !== 'class') {
      element.setAttribute(attribute, value);
      return;
    }

    const htmlClassList = element.classList;
    const classesToBeApplied = value.split(/\s/g);
    Object.values(modes).filter(Boolean).forEach((value) => {
      classesToBeApplied.includes(value) ? htmlClassList.add(value) : htmlClassList.remove(value);
    });
  }

  function defaultOnChanged(mode: T | BasicColorModes) {
    updateHtmlAttributes(selector, attribute, modes[mode] ?? mode);
  }

  function onChanged(mode: T | BasicColorModes) {
    options.onChanged ? options.onChanged(mode) : defaultOnChanged(mode);
  }

  watch(state, onChanged, { flush: 'post', immediate: true });

  useOnMounted(() => onChanged(state.value));

  return state;
}