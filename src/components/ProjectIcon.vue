<template>
  <a
    class="rounded p-3"
    :href="href"
    :target="target"
    rel="noopener noreferrer"
    :aria-label="linkDescription"
  >
    <font-awesome-icon
      :class="iconStyleClasses"
      :icon="[icon.prefix, icon.name]"
      :color="iconColor"
    />
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
  iconColor: {
    default: "white",
    type: String,
  },
  iconStyleClasses: {
    default: "text-2xl",
    type: String,
  },
});
</script>
