import { ref } from "vue";
import type { Ref } from "vue";

import { useOnMounted } from "@/composables/useOnMounted";

export interface UseElementIsVisibleOptions {
  /**
   * Deregister event listener as soon as the element is visible?
   *
   * @default false
   */
  abortIfVisible?: boolean,
  /**
   * Numeric value representing percentage of the target element which is visible
   *
   * @default 0.50
   */
  visibilityThreshold?: number,
  /**
   * Percentage value as decimal number at which the element's visibility should be triggered.
   * The bigger the value the later the element is invisible.
   *
   * @default 0.50
   */
  elementGetsInvisibleAt?: number
}

/**
 * Returns if the HTML element is visible in the current viewport.
 */
export function useElementIsVisible(element: Ref<HTMLElement | null | undefined>, scrollContainer: Ref<HTMLElement>, options: UseElementIsVisibleOptions = {}) {
  const {
    abortIfVisible = false,
    visibilityThreshold = 0.50
  } = options;

  if (visibilityThreshold > 1 || visibilityThreshold < 0) {
    throw "elementGetsVisibleAt and elementGetsUnvisibleAt represent percentage values. Therefore the values must be between 0 and 1.";
  }

  const isVisible = ref<boolean>(false);
  const observer = new IntersectionObserver(
    ([entry]) => {
      isVisible.value = entry.isIntersecting;

      if (isVisible.value && abortIfVisible && element.value) {
        observer.unobserve(element.value);
      }
    },
    {
      threshold: visibilityThreshold
    }
  );

  function startObservation() {
    if (!element?.value) {
      isVisible.value = false;
      return;
    }

    observer.observe(element.value);
  }

  useOnMounted(startObservation);

  return isVisible;
}
