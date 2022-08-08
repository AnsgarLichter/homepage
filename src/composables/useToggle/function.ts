import type { Ref } from "vue";

/**
 * Function to toggle boolean values
 *
 * @param initialValue
 */
const useToggle = (initialValue: Ref<boolean>) => {
  return () => {
    initialValue.value = !initialValue.value;

    return initialValue.value;
  };
};

export { useToggle };
