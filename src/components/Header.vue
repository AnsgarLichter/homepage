<template>
  <div id="header" class="fixed inset-x-0 top-0 bg-primaryLight border-b-2 border-accent">
    <NavigationBar :items="navigationItems">
      <template #start>
        <Image
          :src="BrandUrl"
          alt="Ansgar Lichter"
          :styleClasses="['h-12', 'w-12', 'sm:mr-6', 'sm:ml-8']"
        />
        <div class="pl-4 md:pl-1 flex items-center text-secondary text-lg">
          {{ t("general.name") }}
        </div>
      </template>

      <template #item="itemSlotProps">
        <div
          class="flex justify-center transition duration-300 ease-in-out"
          data-bs-toggle="tooltip"
          data-bs-placement="bottom"
          :title="itemSlotProps.item.label"
          v-if="itemSlotProps.index === 4"
        >
          <Image
            :src="imagePath"
            :alt="itemSlotProps.item.label"
            :styleClasses="['h-6', 'w-12']"
            @click="switchLocale"
          />
        </div>
        <div class="flex justify-center" v-else-if="itemSlotProps.index === 5">
          <div
            @click="toggleDarkMode"
            class="mx-2 transition duration-300 ease-in-out"
            data-bs-toggle="tooltip"
            data-bs-placement="bottom"
            :title="itemSlotProps.item.label"
          >
            <font-awesome-icon class="fa-lg" :icon="['fas', 'moon']" />
          </div>
        </div>
      </template>
    </NavigationBar>
  </div>
</template>

<script setup lang="ts">
import type { Ref } from "vue";
import { computed, ref } from "@vue/reactivity";
import { useI18n } from "vue-i18n";
import NavigationBar from "@/components/NavigationBar.vue";
import Image from "@/components/Image.vue";

import { useToggle, useDarkMode, useOnMounted } from "@/composables";

import { Locales } from "@/i18n";

import BrandUrl from "@/assets/images/brand.webp";
import DeUrl from "../assets/images/de.webp";
import GbUrl from "../assets/images/gb.webp";

import type { NavigationItem } from "@/components/NavigationBar.vue";

console.log(BrandUrl);
console.log(DeUrl);

const { t, locale } = useI18n();
const navigationItems = computed<NavigationItem[]>(() => [
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
    label: t("navigation.changeLanguage"),
    href: "#language",
  },
  {
    label: t("navigation.changeColorMode"),
    href: "#changeColorMode",
  },
]);
const imagePath = ref<string>(GbUrl);

function updateImagePath(locale: Ref<string>) {
  if (locale.value.startsWith(Locales.DE)) {
    return GbUrl;
  }
  return DeUrl;
}

function switchLocale() {
  if (locale.value.startsWith(Locales.DE)) {
    locale.value = Locales.EN;
  } else {
    locale.value = Locales.DE;
  }
  imagePath.value = updateImagePath(locale);
}

useOnMounted(() => {
  imagePath.value = updateImagePath(locale);
});
const isDarkMode = useDarkMode();
const toggleDarkMode = useToggle(isDarkMode);
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