<template>
  <div id="header" class="fixed inset-x-0 top-0 bg-primaryLight border-b-2 border-accent">
    <NavigationBar :items="navigationItems">
      <template #start>
        <img
          src="@/assets/images/brand.webp"
          class="h-12 w-12 sm:mr-6 sm:ml-8"
          alt="Ansgar Lichter"
          loading="lazy"
        />
        <div class="pl-4 md:pl-1 flex items-center text-secondary text-lg">
          {{ t("general.name") }}
        </div>
      </template>

      <template #item="itemSlotProps">
        <div class="flex justify-center" v-if="itemSlotProps.index === 4">
          <img
            :src="imagePath"
            @click="switchLocale"
            class="h-6 w-12"
            :alt="t('navigation.language')"
            loading="lazy"
          />
        </div>
      </template>
    </NavigationBar>
  </div>
</template>

<script setup>
import { computed, ref } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";

import { useI18n } from "vue-i18n";

import NavigationBar from "@/components/NavigationBar.vue";

const { t, locale } = useI18n();

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

const imagePath = ref();
const updateImagePath = (locale) => {
  if (locale.value.startsWith("de")) {
    return require(`@/assets/images/de.webp`);
  }

  return require(`@/assets/images/gb.webp`);
};

const switchLocale = () => {
  if (locale.value.startsWith("de")) {
    locale.value = "en";
  } else {
    locale.value = "de";
  }

  imagePath.value = updateImagePath(locale);
};

onMounted(() => {
  const browserLanguage = navigator.language;

  locale.value = browserLanguage;
  imagePath.value = updateImagePath(locale);
});
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
