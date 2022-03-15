import { computed } from "vue";

import { useColorMode, useIsDarkModePreferred } from "@/composables";

const useDarkMode = (options = {}) => {
  const preferredDarkMode = useIsDarkModePreferred();

  const state = useColorMode();

  const isDark = computed({
    get: () => {
      return state.value === 'dark';
    },
    set: (value) => {
      if (value === preferredDarkMode.value) {
        state.value = 'auto';
        return;
      }

      state.value = value ? 'dark' : 'light';
    }
  });

  return isDark;
};

export { useDarkMode };