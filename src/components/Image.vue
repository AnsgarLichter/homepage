<template>
  <div class="a-image-container">
    <img
      :class="classes"
      :src="src"
      :alt="alt"
      :loading="loading"
      data-holder-rendered="true"
    />
    <div
      class="
        a-image-preview-indicator
        absolute
        left-0
        top-0
        w-full
        h-full
        items-center
        justify-center
      "
      v-if="preview"
      @click="onImageClick"
    >
      <slot name="indicator">
        <font-awesome-icon
          :class="iconStyleClasses"
          :icon="[previewIcon.prefix, previewIcon.name]"
          :color="previewIcon.color"
        />
      </slot>
    </div>
    <Teleport to="body">
      <div :hidden="isPreviewVisible">
        <img
          class="max-w-full max-h-full"
          :src="src"
          :alt="alt"
          :loading="loading"
          data-holder-rendered="true"
        />
      </div>
    </Teleport>
  </div>
</template>

<script setup>
import { defineProps, ref } from "vue";

defineProps({
  classes: {
    default: "",
    type: String,
  },
  src: {
    default: "",
    type: String,
  },
  loading: {
    default: "lazy",
    type: String,
  },
  alt: {
    default: "",
    type: String,
  },
  preview: {
    default: false,
    type: Boolean,
  },
  previewIcon: {
    default: () => {},
    type: Object,
  },
});

const isPreviewVisible = ref(false);
const changePreviewVisibility = () => {
  isPreviewVisible.value = !isPreviewVisible.value;
};
const onImageClick = () => {
  if (this.preview) {
    changePreviewVisibility();
  }
};
</script>

<style scoped></style>
