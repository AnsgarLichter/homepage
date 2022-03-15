<template>
  <div class="py-8 px-8 lg:py-16 lg:px-44">
    <UseElementIsVisible abortIfVisible v-slot="{ isVisible }">
      <FadeInUp>
        <h1
          v-visible="isVisible"
          class="text-2xl sm:text-4xl text-secondaryLight font-bold mb-8 lg:text-5xl"
        >
          {{ t("about.title") }}
        </h1>
      </FadeInUp>
    </UseElementIsVisible>
    <div class="flex flex-col items-center lg:flex-row">
      <div class="flex lg:flex-col lg:w-1/2 justify-center">
        <UseElementIsVisible abortIfVisible v-slot="{ isVisible }">
          <FadeInUp>
            <div class="justify-center" v-visible="isVisible">
              <img
                class="h-60 w-60 lg:h-72 lg:w-72 xl:h-96 xl:w-96"
                src="@/assets/images/aboutme.webp"
                :alt="t('about.alt')"
                loading="lazy"
              />
            </div>
          </FadeInUp>
        </UseElementIsVisible>
      </div>

      <div class="flex flex-col lg:w-1/2 mt-3 lg:mt-0">
        <UseElementIsVisible abortIfVisible v-slot="{ isVisible }">
          <FadeInUp>
            <div
              v-visible="isVisible"
              class="text-left text-base text-secondary mx-10 lg:mx-0"
            >
              {{ t("about.description-1") }}<br class="hidden lg:block" />
              {{ t("about.description-2") }}
              {{ t("about.description-3") }}<br />
              {{ t("about.description-4") }}
            </div>
          </FadeInUp>
        </UseElementIsVisible>

        <div class="mt-10 lg:mt-10 mx-10 sm:mx-20 md:mx-40 lg:mx-0">
          <UseElementIsVisible abortIfVisible v-slot="{ isVisible }">
            <FadeInUp>
              <BarChart v-visible="isVisible" :data="skills" />
            </FadeInUp>
          </UseElementIsVisible>
        </div>

        <div class="mt-4 flex justify-center">
          <UseElementIsVisible abortIfVisible v-slot="{ isVisible }">
            <FadeInUp>
              <button
                v-visible="isVisible"
                @click="openCV"
                class="bg-primary border-2 border-accent p-4 rounded-full flex flex-row"
              >
                <font-awesome-icon
                  class="fa-lg text-accent"
                  :icon="['fas', 'download']"
                />
                <div class="ml-2 text-accent">Download CV</div>
              </button>
            </FadeInUp>
          </UseElementIsVisible>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, reactive } from "vue";
import { useI18n } from "vue-i18n";

import BarChart from "@/components/BarChart";

import FadeInUp from "@/transitions/FadeInUp";

import { UseElementIsVisible } from "@/composables";

const { t, locale } = useI18n();
const pathToCV = computed(() => "/" + locale.value + "/CurriculumVitaeAnsgarLichter.pdf");
const openCV = () => {
  window.open(pathToCV.value, "_blank", "noopener");
};

const skills = reactive([
  {
    label: t("about.technologies.ewm"),
    styleClasses: "bg-[#d62828]",
    width: "60%",
  },
  {
    label: t("about.technologies.ui5"),
    styleClasses: "bg-[#003049] dark:bg-[#0071AD]",
    width: "80%",
  },
  {
    label: t("about.technologies.abap"),
    styleClasses: "bg-[#f77f00]",
    width: "80%",
  },
  {
    label: t("about.technologies.js"),
    styleClasses: "bg-[#fcbf49]",
    width: "70%",
  },
]);
</script>

<style scoped></style>
