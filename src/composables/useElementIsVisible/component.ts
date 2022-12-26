import { ref, h, defineComponent, reactive, inject } from "vue";

import { useElementIsVisible } from ".";
import { useOnMounted } from "@/composables";
import type { UseElementIsVisibleOptions } from "./function";

const UseElementIsVisible = defineComponent({
  name: "UseElementIsVisible",
  props: {
    as: {
      type: String,
      default: "div"
    },
    abortIfVisible: {
      type: Boolean,
      default: false
    },
    visibilityThreshold: {
      type: Number,
      default: 0.50
    }
  },

  setup(props, { slots }) {
    const selectorForScrollContainer: string | undefined = inject("selectorForScrollContainer");

    const scrollContainer = ref();
    useOnMounted(
      () => {
        scrollContainer.value = selectorForScrollContainer ? document.querySelector(selectorForScrollContainer) : document;
      },
      false
    );

    const target = ref(null);
    const options: UseElementIsVisibleOptions = {
      abortIfVisible: props.abortIfVisible,
      visibilityThreshold: props.visibilityThreshold
    };
    const data = reactive({
      isVisible: useElementIsVisible(target, scrollContainer, options)
    });

    return () => {
      if (slots.default) {
        return h(props.as, { ref: target }, slots.default(data));
      }

      return h(props.as, { ref: target });
    };
  }
});

export { UseElementIsVisible };
