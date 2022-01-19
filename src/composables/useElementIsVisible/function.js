import { ref, getCurrentInstance } from "vue";

import { useOnMounted } from "@/composables/useOnMounted";

const useElementIsVisible = (element, abortIfVisible, scrollContainer) => {
  const isVisible = ref(false);

  const onScrolled = () => {
    if (!scrollContainer?.value) {
      return;
    }

    if (!element?.value) {
      isVisible.value = false;
    }

    const rect = element.value.getBoundingClientRect();

    isVisible.value =
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= scrollContainer.value.clientHeight &&
      rect.right <= scrollContainer.value.clientWidth;

    console.log("Top: " + rect.top + " left: " + rect.left + " bottom: " + rect.bottom + " right: " + rect.right + "is in view: " + isVisible.value);
    if (abortIfVisible && isVisible.value) {
      scrollContainer.value.removeEventListener("scroll", onScrolled);
    }
  };

  if (getCurrentInstance()) {
    useOnMounted(() => {
      scrollContainer.value.addEventListener("scroll", onScrolled, { passive: true });
    });
  }

  return isVisible;
};

export { useElementIsVisible };