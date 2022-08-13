<template>
  <div class="a-image-container relative">
    <img
      :class="styleClasses"
      :src="loadedSource"
      :alt="alt"
      :loading="loading"
      @click="emit('click', $event)"
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
        />
      </slot>
    </div>
  </div>
  <Teleport to="body">
    <div
      :hidden="!isPreviewVisible"
      :style="{ 'background-color': properties.previewOuterBackgroundColor }"
      class="a-preview-outer z-[10000] fixed inset-0 w-full h-full"
      @click="closePreview"
    >
      <div
        class="a-preview z-[10050] fixed top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] w-9/10 h-8/10 md:w-8/10 xl:w-6/10 flex justify-center items-center"
      >
        <img
          class="max-w-full max-h-full"
          :src="loadedSource"
          :alt="alt"
          :loading="loading"
        />
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { withDefaults, defineProps, defineEmits, ref, watch } from "vue";
import { useImage } from "@/composables";

import type { Icon } from "@/fontAwesomeIcons";


export interface ImageProperties {
  src: string;
  alt: string;
  styleClasses?: string[];
  loading?: string;
  preview?: boolean;
  previewIcon?: Icon;
  previewOuterBackgroundColor?: string;
}

export interface ImageEventEmits {
  (eventName: "click", event: MouseEvent): void;
}


const properties = withDefaults(defineProps<ImageProperties>(), {
  styleClasses: () => [],
  loading: "lazy",
  preview: false,
  previewIcon: () => {
    return {
      prefix: "fas",
      name: "search",
      styleClasses: ["text-3xl", "text-accent"],
    };
  },
  previewOuterBackgroundColor: "rgba(0, 0, 0, 0.7)",
});

const emit = defineEmits<ImageEventEmits>();

const loadedSource = ref(useImage(properties.src));
function onSourceChanged() {
  loadedSource.value = useImage(properties.src);
}

watch(() => properties.src, onSourceChanged);

const isPreviewVisible = ref(false);
function changePreviewVisibility() {
  isPreviewVisible.value = !isPreviewVisible.value;
}

function openPreview() {
  changePreviewVisibility();
}

function closePreview() {
  if (isPreviewVisible.value) {
    changePreviewVisibility();
  }
}

</script>

<style scoped>
.a-image-container:hover .a-image-preview-indicator {
  opacity: 1;
}
.a-preview-outer {
  z-index: 50000;
}
.a-preview {
  z-index: 50050;
}
</style>