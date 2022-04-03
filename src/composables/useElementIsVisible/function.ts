import { Ref, ref } from "vue";

import { useOnMounted } from "@/composables/useOnMounted";

export interface UseElementIsVisibleOptions {
  /**
   * Deregister event listener as soon as the element is visible?
   *
   * @default false
   */
  abortIfVisible?: boolean,
  /**
   * Percentage value as decimal number at which the element's visibility should be triggered.
   * The bigger the value the later the element is visible.
   *
   * @default 0.50
   */
  elementGetsVisibleAt?: number,
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
export function useElementIsVisible (element: Ref<HTMLElement | null | undefined>, scrollContainer: Ref<HTMLElement>, options: UseElementIsVisibleOptions = {}) {
  const {
    abortIfVisible = false,
    elementGetsVisibleAt = 0.50,
    elementGetsInvisibleAt = 0.50
  } = options;

  if (elementGetsVisibleAt > 1 || elementGetsVisibleAt < 0 || elementGetsInvisibleAt > 1 || elementGetsInvisibleAt < 0) {
    throw "elementGetsVisibleAt and elementGetsUnvisibleAt represent percentage values. Therefore the values must be between 0 and 1.";
  }

  const isVisible = ref<boolean>(false);
  function onScrolled() {
    if (!scrollContainer?.value) {
      return;
    }

    if (!element?.value) {
      isVisible.value = false;
      return;
    }

    const rect = element.value.getBoundingClientRect();
    const multiplier = isVisible.value ? elementGetsInvisibleAt : elementGetsVisibleAt;

    isVisible.value =
      rect.top + (rect.height * multiplier) >= 0 &&
      rect.left + (rect.width * multiplier) >= 0 &&
      rect.bottom - (rect.height * multiplier) <= scrollContainer.value.clientHeight &&
      rect.right - (rect.width * multiplier) <= scrollContainer.value.clientWidth;

    if (abortIfVisible && isVisible.value) {
      scrollContainer.value.removeEventListener("scroll", onScrolled);
    }
  }

  function addScrollListener() {
    scrollContainer.value.addEventListener("scroll", onScrolled, { passive: true });
  }
  useOnMounted(addScrollListener);

  return isVisible;
}
