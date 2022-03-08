import { ref, h, defineComponent, reactive, onMounted } from "vue";

import { useElementIsVisible } from ".";

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
    const scrollContainer = ref(null);
    onMounted(() => {
      //TODO: How to set scroll container globally?
      scrollContainer.value = document.querySelector(".content");
    });

    const target = ref(null);
    const data = reactive({
      isVisible: useElementIsVisible(target, props.abortIfVisible, scrollContainer, props.elementGetsVisibleAt, props.elementGetsInvisibleAt)
    });

    return () => {
      if (slots.default) {
        return h(props.as, { ref: target }, slots.default(data));
      }
    };
  },
});

export { UseElementIsVisible };