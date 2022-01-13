import { ref, getCurrentInstance } from "vue";

import { useOnMounted } from "@/composables/useOnMounted";

const useElementIsVisible = (element, abortIfVisible, scrollContainer) => {
  const isVisible = ref(false);

  const onContainerScrolled = () => {
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

    if (abortIfVisible && isVisible.value) {
      scrollContainer.value.removeEventListener("scroll", onContainerScrolled);
    }
  };

  if (getCurrentInstance()) {
    useOnMounted(() => {
      scrollContainer.value.addEventListener("scroll", onContainerScrolled, { passive: true });
    });
  }

  return isVisible;
};

export { useElementIsVisible };