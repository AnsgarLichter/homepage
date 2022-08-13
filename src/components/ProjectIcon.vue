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

<script setup lang="ts">
import { withDefaults, defineProps } from "vue";

import type { Icon } from "@/fontAwesomeIcons";

export interface ProjectIconProperties {
  href: string;
  linkDescription: string;
  icon: Icon;
  target?: string;
}

withDefaults(defineProps<ProjectIconProperties>(), {
  target: "_blank",
});
</script>
