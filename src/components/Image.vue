<template>
  <div class="a-image-container relative">
    <img
      :class="classes"
      :src="src"
      :alt="alt"
      :loading="loading"
      data-holder-rendered="true"
    />
    <div
      class="a-image-preview-indicator flex absolute left-0 top-0 w-full h-full items-center justify-center opacity-0 transition-opacity ease-in delay-100 bg-primaryLight"
      v-if="properties.preview"
      @click="openPreview"
    >
      <slot name="indicator">
        <font-awesome-icon
          :class="previewIcon.styleClasses"
          :icon="[previewIcon.prefix, previewIcon.name]"
          :color="previewIcon.color"
        />
      </slot>
    </div>
  </div>
  <Teleport to="body">
    <div
      :hidden="!isPreviewVisible"
      class="a-preview-outer z-[10000] fixed inset-0 w-full h-full"
      @click="closePreview"
    >
      <div
        class="a-preview z-[10050] fixed top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] w-9/10 h-8/10 md:w-8/10 xl:w-6/10 flex justify-center items-center"
      >
        <img
          class="max-w-full max-h-full"
          :src="src"
          :alt="alt"
          :loading="loading"
          data-holder-rendered="true"
        />
      </div>
    </div>
  </Teleport>
</template>

<script setup>
import { defineProps, ref } from "vue";

const properties = defineProps({
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
    default: () => {
      return {
        prefix: "fas",
        name: "search",
        color: "#007fad",
        styleClasses: "text-3xl",
      };
    },
    type: Object,
  },
});

const isPreviewVisible = ref(false);
const changePreviewVisibility = () => {
  isPreviewVisible.value = !isPreviewVisible.value;
};
const openPreview = () => {
  if (properties.preview) {
    changePreviewVisibility();
  }
};

const closePreview = () => {
  if (isPreviewVisible.value) {
    changePreviewVisibility();
  }
};
</script>

<style scoped>
.a-image-container:hover .a-image-preview-indicator {
  opacity: 1;
}

.a-preview-outer {
  z-index: 50000;
  background-color: rgba(0, 0, 0, 0.4);
}

.a-preview {
  z-index: 50050;
}
</style>
