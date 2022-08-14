<template>
  <div class="social-icon flex flex-col hover:bg-primaryDark">
    <a
      class="rounded p-3"
      :href="href"
      :target="target"
      rel="noopener noreferrer"
      :aria-label="linkDescription"
    >
      <font-awesome-icon
        class="fa-lg"
        :class="[icon.styleClasses]"
        :icon="[icon.prefix, icon.name]"
      />
    </a>
  </div>
</template>

<script setup lang="ts">
import { withDefaults } from "vue";

import type { Icon } from "@/fontAwesomeIcons";

export interface SocialIconProperties {
  href: string;
  linkDescription: string;
  icon: Icon;
  target?: string;
}

withDefaults(defineProps<SocialIconProperties>(), {
  target: "_blank",
});
</script>
