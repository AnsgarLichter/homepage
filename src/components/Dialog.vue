<template>
  <Teleport to="body">
    <div
      :hidden="!isOpened"
      class="a-dialog-outer fixed inset-0 w-full h-full"
      :class="[outerStyleClasses]"
      @click="close"
    >
      <div
        ref="dialog"
        class="a-dialog fixed top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] w-9/10 h-8/10 md:w-8/10 xl:w-6/10 flex flex-col overflow-hidden"
        :class="[styleClasses]"
        @click.stop=""
      >
        <slot name="header">
          <div
            class="a-header flex flex-row flex-shrink-0 flex-basis-auto justify-center items-center border-b-2 p-4"
            :class="[headerStyleClasses]"
          >
            <div class="a-header-content flex justify-center grow">
              <slot name="headerContent">
                <span
                  class="a-dialog-title text-xl"
                  :class="[titleStyleClasses]"
                  v-if="title"
                  >{{ title }}</span
                >
              </slot>
            </div>
            <div class="a-header-icons flex space-x-2">
              <font-awesome-icon
                :class="properties.maximizeIcon.styleClasses"
                :icon="[properties.maximizeIcon.prefix, properties.maximizeIcon.name]"
                @click="maximize"
              />
              <font-awesome-icon
                :class="properties.closeIcon.styleClasses"
                :icon="[properties.closeIcon.prefix, properties.closeIcon.name]"
                @click="close"
              />
            </div>
          </div>
        </slot>

        <div class="a-content overflow-auto a-scroll-container">
          <slot></slot>
        </div>

        <div class="a-footer">
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup>
import { defineProps, defineExpose } from "vue";

import { ref } from "@vue/reactivity";

const properties = defineProps({
  title: {
    type: String,
    default: "",
  },
  titleStyleClasses: {
    type: String,
    default: "text-secondaryLight",
  },
  outerStyleClasses: {
    type: String,
    default: "bg-black bg-opacity-0",
  },
  styleClasses: {
    type: String,
    default: "bg-primaryLight",
  },
  headerStyleClasses: {
    type: String,
    default: "border-accent",
  },
  maximizeIcon: {
    type: Object,
    default: () => {
      return {
        prefix: "fas",
        name: "expand-arrows-alt",
        styleClasses: "fa-lg cursor-pointer text-accent",
      };
    },
  },
  closeIcon: {
    type: Object,
    default: () => {
      return {
        prefix: "fas",
        name: "times",
        styleClasses: "fa-lg cursor-pointer text-accent",
      };
    },
  },
});

const maximizeIconName = ref("expand-arrows-alt");
const isOpened = ref(false);

const dialog = ref();

const changeVisibility = () => {
  isOpened.value = !isOpened.value;
};

const open = () => {
  changeVisibility();
};

const close = () => {
  changeVisibility();
};

const maximize = () => {
  const classList = dialog.value.classList;

  if (maximizeIconName.value === "expand-arrows-alt") {
    maximizeIconName.value = "compress-arrows-alt";

    classList.add("maximized");
  } else {
    maximizeIconName.value = "expand-arrows-alt";

    classList.remove("maximized");
  }
};

defineExpose({
  open,
  close,
});
</script>

<style scoped>
.a-dialog-outer {
  z-index: 50000;
}

.a-dialog {
  z-index: 50050;
}

.maximized {
  width: 100% !important;
  height: 100% !important;
}
</style>
