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
      rect.top <= scrollContainer.value.clientHeight &&
      rect.left <= scrollContainer.value.clientWidth &&
      rect.bottom >= 0 &&
      rect.right >= 0;

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