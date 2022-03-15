import { ref, isRef } from "vue";

const useToggle = (initialValue) => {
  if (!isRef(initialValue)) {
    const initialValueRef = ref(initialValue);

    const toggle = () => {
      initialValueRef.value = !initialValueRef.value;

      return initialValueRef.value;
    };

    return {
      initialValueRef,
      toggle
    };
  }

  return () => {
    initialValue.value = !initialValue.value;

    return initialValue.value;
  };
};

export { useToggle };