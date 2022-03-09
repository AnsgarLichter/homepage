import { ref } from "vue";

import { useOnMounted } from "@/composables/useOnMounted";

/**
 * Returns if the HTML element is visible in the current viewport.
 *
 * @param {object} element HTML element
 * @param {boolean} abortIfVisible Deregister event listener as soon as the element is visible?
 * @param {object} scrollContainer  Scroll container on whose scroll event is listened
 * @param {number} elementGetsVisibleAt Percentage value as decimal number at which the element's visibility should be triggered. The bigger the value the later the element is visible.
 * @param {number} elementGetsInvisibleAt Percentage value as decimal number at which the element's visibility should be triggered. The bigger the value the later the element is invisible.
 *
 * @returns {boolean} whether the element is visible
 */
const useElementIsVisible = (element, abortIfVisible, scrollContainer, elementGetsVisibleAt = 0.50, elementGetsInvisibleAt = 0.50) => {
  if (elementGetsVisibleAt > 1 || elementGetsVisibleAt < 0 || elementGetsInvisibleAt > 1 || elementGetsInvisibleAt < 0) {
    throw "elementGetsVisibleAt and elementGetsUnvisibleAt represent percentage values. Therefore the values must be between 0 and 1.";
  }

  const isVisible = ref(false);
  const onScrolled = () => {
    if (!scrollContainer?.value) {
      return;
    }

    if (!element?.value) {
      isVisible.value = false;
      return;
    }

    const rect = element.value.getBoundingClientRect();

    let multiplier = elementGetsVisibleAt;
    if (isVisible.value) {
      multiplier = elementGetsInvisibleAt;
    }

    isVisible.value =
      rect.top + (rect.height * multiplier) >= 0 &&
      rect.left + (rect.width * multiplier) >= 0 &&
      rect.bottom - (rect.height * multiplier) <= scrollContainer.value.clientHeight &&
      rect.right - (rect.width * multiplier) <= scrollContainer.value.clientWidth;

    if (abortIfVisible && isVisible.value) {
      scrollContainer.value.removeEventListener("scroll", onScrolled);
    }
  };

  useOnMounted(() => {
    scrollContainer.value.addEventListener("scroll", onScrolled, { passive: true });
  });

  return isVisible;
};

export { useElementIsVisible };