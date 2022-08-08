import { computed, watch } from "vue";
import { useStorage, useIsDarkModePreferred, useOnMounted } from "@/composables";

const useColorMode = (options = {}) => {
  const {
    selector = 'html',
    attribute = 'class',
    valueDarkMode = 'dark',
    valueLightMode = '',
  } = options;

  const modes = {
    light: valueLightMode,
    dark: valueDarkMode,
    ...options.modes || {}
  };

  //TODO: Extract useUpdateHtmlAttributes? There is still a dependency to modes
  const updateHtmlAttributes = (selector, attribute, value) => {
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
  };

  const store = useStorage('useDarkMode', 'auto');

  const isDarkModePreferred = useIsDarkModePreferred();
  const preferredMode = computed(() => (isDarkModePreferred.value ? 'dark' : 'light'));
  const state = computed({
    get: () => {
      return store.value === 'auto' ? preferredMode.value : store.value;
    },
    set: (value) => {
      store.value = value;
    }
  });

  const defaultOnChanged = (mode) => {
    updateHtmlAttributes(selector, attribute, modes[mode] ?? mode);
  };

  const onChanged = (mode) => {
    options.onChanged ? options.onChanged(mode) : defaultOnChanged(mode);
  };

  watch(state, onChanged, { flush: 'post', immediate: true });

  useOnMounted(() => onChanged(state.value));

  return state;
};

export { useColorMode };