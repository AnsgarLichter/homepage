<template>
  <div class="social-icon flex flex-col">
    <a
      :class="socialIconClass"
      :href="href"
      :target="target"
      rel="noopener noreferrer"
    >
      <font-awesome-icon
        class="fa-lg"
        :icon="[icon.prefix, icon.name]"
        color="white"
      />
    </a>
  </div>
</template>

<script>
import { computed } from "@vue/reactivity";

export default {
  name: "SocialIcon",

  props: {
    href: {
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
    customClasses: {
      type: Array,
      default: () => [],
    },
  },

  setup(properties) {
    const socialIconClass = computed(() =>
      ["rounded", "p-3"].concat(properties.customClasses)
    );

    return {
      socialIconClass,
    };
  },
};
</script>

<style scoped>
.social-icon > a:hover {
  background-color: black;
}
</style>
