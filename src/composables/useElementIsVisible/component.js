import { ref, h, defineComponent, reactive, inject } from "vue";

import { useElementIsVisible } from ".";
import { useOnMounted } from "../useOnMounted";

const UseElementIsVisible = defineComponent({
  name: 'UseElementIsVisible',
  props: {
    as: {
      type: String,
      default: "div"
    },
    abortIfVisible: {
      type: Boolean,
      default: false
    },
    elementGetsVisibleAt: {
      type: Number,
      default: 0.50
    },
    elementGetsInvisibleAt: {
      type: Number,
      default: 0.50
    }
  },

  setup(props, { slots }) {
    const selectorForScrollContainer = inject('selectorForScrollContainer');

    const scrollContainer = ref(null);
    useOnMounted(() => {
      scrollContainer.value = selectorForScrollContainer ? document.querySelector(selectorForScrollContainer) : document;
    });

    const target = ref(null);
    const data = reactive({
      isVisible: useElementIsVisible(target, props.abortIfVisible, scrollContainer, props.elementGetsVisibleAt, props.elementGetsInvisibleAt)
    });

    return () => {
      if (slots.default) {
        return h(props.as, { ref: target }, slots.default(data));
      }

      return h(props.as, { ref: target });
    };
  },
});

export { UseElementIsVisible };