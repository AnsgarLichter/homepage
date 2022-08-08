import { ref } from "vue";

import { useOnMounted } from "@/composables";

export function useMediaQuery(query: string) {
  const hasMatches = ref<boolean>(false);

  let mediaQuery: MediaQueryList;
  function updateHasMatches() {
    if (!window) {
      return;
    }

    if (!mediaQuery) {
      mediaQuery = window.matchMedia(query);
    }

    hasMatches.value = mediaQuery.matches;
  }

  useOnMounted(
    () => {
      updateHasMatches();

      if (!mediaQuery) {
        return;
      }

      if ('addEventListener' in mediaQuery) {
        mediaQuery.addEventListener('change', updateHasMatches);
      } else if ('addListener' in mediaQuery) {
        mediaQuery.addListener(updateHasMatches);
      }
    },
  );

  return hasMatches;
}