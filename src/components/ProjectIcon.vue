<template>
  <a
    class="project-icon rounded p-3"
    :href="href"
    :target="target"
    rel="noopener noreferrer"
    :aria-label="linkDescription"
  >
    <font-awesome-icon :class="icon.styleClasses" :icon="[icon.prefix, icon.name]" />
  </a>
</template>

<script setup>
import { defineProps } from "vue";

defineProps({
  href: {
    default: "",
    type: String,
  },
  linkDescription: {
    default: "",
    type: String,
  },
  target: {
    default: "_blank",
    type: String,
  },
  icon: {
    default: () => {},
    type: Object,
  },
});
</script>
