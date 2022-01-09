<template>
  <Teleport to="body">
    <div
      :hidden="!isOpened"
      class="a-dialog-outer fixed inset-0 w-full h-full"
      @click="close"
    >
      <div
        ref="dialog"
        class="a-dialog fixed top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] w-9/10 h-8/10 md:w-8/10 xl:w-6/10 flex flex-col overflow-hidden bg-white"
        @click.stop=""
      >
        <div
          class="a-header flex flex-row flex-shrink-0 flex-basis-auto justify-center items-center border-b-2 border-gray-200 p-4"
        >
          <div class="a-header-content flex justify-center grow">
            <slot name="header">
              <span class="a-dialog-title text-xl" v-if="title">{{ title }}</span>
            </slot>
          </div>
          <div class="a-header-icons flex space-x-2">
            <font-awesome-icon
              class="fa-lg cursor-pointer"
              :icon="['fas', maximizeIconName]"
              color="grey"
              @click="maximize"
            />
            <font-awesome-icon
              class="fa-lg cursor-pointer"
              :icon="['fas', 'times']"
              color="grey"
              @click="close"
            />
          </div>
        </div>

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

defineProps({
  title: {
    type: String,
    default: "",
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
  background-color: rgba(0, 0, 0, 0.4);
}

.a-dialog {
  z-index: 50050;
}

.maximized {
  width: 100% !important;
  height: 100% !important;
}
</style>
