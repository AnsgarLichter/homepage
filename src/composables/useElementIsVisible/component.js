import { ref, h, defineComponent, reactive, onMounted } from "vue";

import { useElementIsVisible } from ".";

const UseElementIsVisible = defineComponent({
  name: 'UseElementIsVisible',
  props: {
    as: {
      type: String,
      default: "div"
    }
  },
  setup(props, { slots }) {
    const scrollContainer = ref(null);
    onMounted(() => {
      scrollContainer.value = document.querySelector(".content");
    });

    const target = ref(null);
    const data = reactive({
      isVisible: useElementIsVisible(target, true, scrollContainer)
    });

    return () => {
      if (slots.default) {
        return h(props.as, { ref: target }, slots.default(data));
      }
    };
  },
});

export { UseElementIsVisible };