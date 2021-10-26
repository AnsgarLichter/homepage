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
      default() {
        return {
          prefix: "",
          name: "",
        };
      },
      type: Object,
    },
    customClasses: {
      type: Array,
      default() {
        return [];
      },
    },
  },

  computed: {
    socialIconClass() {
      return ["rounded", "p-3"].concat(this.customClasses);
    },
  },
};
</script>

<style scoped>
.social-icon > a:hover {
  background-color: black;
}
</style>
