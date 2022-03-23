import { computed } from "vue";

import { useColorMode, useIsDarkModePreferred, BasicColorModesValues } from "@/composables";

export function useDarkMode() {
  const preferredDarkMode = useIsDarkModePreferred();

  const mode = useColorMode();

  const isDark = computed<boolean>({
    get: () => {
      return mode.value === BasicColorModesValues.dark;
    },
    set: (value) => {
      if (value === preferredDarkMode.value) {
        mode.value = BasicColorModesValues.auto;
        return;
      }

      mode.value = value ? BasicColorModesValues.dark : BasicColorModesValues.light;
    }
  });

  return isDark;
}