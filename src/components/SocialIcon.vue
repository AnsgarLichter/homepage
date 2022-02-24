<template>
  <div class="social-icon flex flex-col hover:bg-primaryDark">
    <a
      class="rounded p-3"
      :href="href"
      :target="target"
      rel="noopener noreferrer"
      :aria-label="linkDescription"
    >
      <font-awesome-icon class="fa-lg" :icon="[icon.prefix, icon.name]" color="white" />
    </a>
  </div>
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
    type: Object,
    default: () => {},
  },
});
</script>
