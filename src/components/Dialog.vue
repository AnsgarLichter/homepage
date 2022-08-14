<template>
  <Teleport to="body">
    <div
      :hidden="!isOpened"
      class="a-dialog-outer fixed inset-0 w-full h-full"
      :class="outerStyleClasses"
      @click="close"
    >
      <div
        ref="dialog"
        class="a-dialog fixed top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] w-9/10 h-8/10 md:w-8/10 xl:w-6/10 flex flex-col overflow-hidden"
        :class="styleClasses"
        @click.stop=""
      >
        <slot name="header">
          <div
            class="a-header flex flex-row flex-shrink-0 flex-basis-auto justify-center items-center border-b-2 p-4"
            :class="headerStyleClasses"
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
                :class="changeSizeIcon.styleClasses"
                :icon="[changeSizeIcon.prefix, changeSizeIcon.name]"
                @click="maximize"
              />
              <font-awesome-icon
                :class="closeIcon.styleClasses"
                :icon="[closeIcon.prefix, closeIcon.name]"
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

<script setup lang="ts">
import { withDefaults } from "vue";
import { ref } from "@vue/reactivity";
import type { Icon } from "@/fontAwesomeIcons";
export interface DialogProperties {
  title: string;
  titleStyleClasses?: string[];
  outerStyleClasses?: string[];
  styleClasses?: string[];
  headerStyleClasses?: string[];
  maximizeIcon?: Icon;
  compressIcon?: Icon;
  closeIcon?: Icon;
}
const properties = withDefaults(defineProps<DialogProperties>(), {
  title: "",
  titleStyleClasses: () => ["text-secondaryLight"],
  outerStyleClasses: () => ["bg-black bg-opacity-[0.7]"],
  styleClasses: () => ["bg-primaryLight"],
  headerStyleClasses: () => ["border-accent"],
  maximizeIcon: () => {
    return {
      prefix: "fas",
      name: "expand-arrows-alt",
      styleClasses: ["fa-lg", "cursor-pointer", "text-accent"],
    };
  },
  compressIcon: () => {
    return {
      prefix: "fas",
      name: "compress-arrows-alt",
      styleClasses: ["fa-lg", "cursor-pointer", "text-accent"],
    };
  },
  closeIcon: () => {
    return {
      prefix: "fas",
      name: "times",
      styleClasses: ["fa-lg", "cursor-pointer", "text-accent"],
    };
  },
});
const isOpened = ref(false);
const dialog = ref<HTMLElement>();
const changeVisibility = () => {
  isOpened.value = !isOpened.value;
};
function open() {
  changeVisibility();
}
function close() {
  changeVisibility();
}
const changeSizeIcon = ref<Icon>(properties.maximizeIcon);
function maximize() {
  if (!dialog.value) {
    return;
  }
  const classList = dialog.value.classList;
  if (changeSizeIcon.value === properties.maximizeIcon) {
    changeSizeIcon.value = properties.compressIcon;
    classList.add("maximized");
  } else {
    changeSizeIcon.value = properties.maximizeIcon;
    classList.remove("maximized");
  }
}
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