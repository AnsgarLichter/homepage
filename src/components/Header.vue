<template>
  <div id="header" class="fixed inset-x-0 top-0">
    <NavigationBar :items="navigationItems">
      <template #start>
        <img
          src="@/assets/images/tabicon.png"
          class="h-12 w-12 sm:mr-6 sm:ml-8"
          alt="Ansgar Lichter"
        />
        <div class="pl-4 md:pl-1 flex items-center text-white text-lg">
          {{ $t("general.name") }}
        </div>
      </template>

      <template #item="itemSlotProps">
        <div v-if="itemSlotProps.index === 4">
          <img
            v-if="$i18n.locale === 'en'"
            @click="switchLocale"
            class="h-6 w-12"
            src="@/assets/images/gb.png"
          />
          <img
            v-else
            @click="switchLocale"
            class="h-6 w-12"
            src="@/assets/images/de.png"
          />
        </div>
      </template>
    </NavigationBar>
  </div>
</template>

<script>
import { computed } from "@vue/reactivity";
import { useI18n } from "vue-i18n";

import NavigationBar from "@/components/NavigationBar.vue";

export default {
  name: "Header",

  components: {
    NavigationBar,
  },

  setup() {
    const { t } = useI18n();

    const navigationItems = computed(() => [
      {
        label: t("navigation.intro"),
        href: "#intro",
      },
      {
        label: t("navigation.about"),
        href: "#about",
      },
      {
        label: t("navigation.experiences"),
        href: "#experiences",
      },
      {
        label: t("navigation.projects"),
        href: "#projects",
      },
      {
        label: t("navigation.language"),
        href: "#language",
      },
    ]);

    return { navigationItems };
  },

  onMounted() {
    setInterval(this.updateScroll, 1);
    this.$i18n.locale = "de";
  },

  methods: {
    switchLocale() {
      this.$i18n.locale === "de"
        ? (this.$i18n.locale = "en")
        : (this.$i18n.locale = "de");
    },
  },
};
</script>

<style>
#header {
  width: 100%;
  z-index: 300;
  position: fixed;
}

.navbar-brand {
  display: flex !important;
}

.navbar-brand-padding {
  padding-top: 0.3125rem;
  padding-bottom: 0.3125rem;
}

.navbar-menu-border {
  border: 1px solid rgba(255, 255, 255, 0.1) !important;
}

.flex-basis-100 {
  flex-basis: 100%;
}
</style>
