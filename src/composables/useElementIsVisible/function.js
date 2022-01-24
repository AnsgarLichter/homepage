import { ref } from "vue";

import { useOnMounted } from "@/composables/useOnMounted";

const useElementIsVisible = (element, abortIfVisible, scrollContainer) => {
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

    isVisible.value =
      rect.top + (rect.height / 2) >= 0 &&
      rect.left + (rect.width / 2) >= 0 &&
      rect.bottom - (rect.height / 2) <= scrollContainer.value.clientHeight &&
      rect.right - (rect.width / 2) <= scrollContainer.value.clientWidth;

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