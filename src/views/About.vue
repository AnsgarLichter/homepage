<template>
  <div class="flex flex-col items-center pt-8 px-8 lg:flex-row lg:pt-24 lg:px-44">
    <div ref="aboutMe" class="flex lg:flex-col lg:w-1/2 justify-center">
      <FadeInUp>
        <div class="justify-center" v-if="isAboutMeVisible">
          <img
            class="h-60 w-60 lg:h-72 lg:w-72 xl:h-96 xl:w-96"
            src="@/assets/images/aboutme.webp"
            :alt="t('about.alt')"
            loading="lazy"
          />
        </div>
      </FadeInUp>
    </div>

    <div class="flex flex-col lg:w-1/2 mt-3 lg:mt-16">
      <div ref="description">
        <FadeInUpWith1sDelay>
          <div v-if="isDescriptionVisible">
            <h1 class="text-3xl lg:text-5xl font-bold">{{ t("about.title") }}</h1>
            <div class="text-left text-base mx-10 lg:mx-0 mt-3 lg:mt-6">
              {{ t("about.description-1") }}<br class="hidden lg:block" />
              {{ t("about.description-2") }}
              {{ t("about.description-3") }}<br />
              {{ t("about.description-4") }}
            </div>
          </div>
        </FadeInUpWith1sDelay>
      </div>

      <div ref="barChart" class="mt-10 lg:mt-10 mx-10 sm:mx-20 md:mx-40 lg:mx-0">
        <FadeInUpWith1sDelay>
          <BarChart v-if="isBarChartVisible" :data="skills" />
        </FadeInUpWith1sDelay>
      </div>

      <div ref="downloadCV" class="mt-4 flex justify-center">
        <FadeInUpWith1sDelay>
          <button
            v-if="isDownloadCvVisible"
            @click="openCV"
            class="bg-bg-grey p-4 rounded-full flex flex-row"
          >
            <font-awesome-icon class="fa-lg" :icon="['fas', 'download']" color="white" />
            <div class="ml-2 text-white">Download CV</div>
          </button>
        </FadeInUpWith1sDelay>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, reactive, ref } from "vue";
import { useI18n } from "vue-i18n";

import BarChart from "@/components/BarChart";

import FadeInUp from "@/transitions/FadeInUp";
import FadeInUpWith1sDelay from "@/transitions/FadeInUpWith1sDelay";

import { useElementIsVisible } from "@/composables";

const { t, locale } = useI18n();
const pathToCV = computed(() => "/" + locale.value + "/CurriculumVitaeAnsgarLichter.pdf");
const openCV = () => {
  window.open(pathToCV.value, "_blank", "noopener");
};

const skills = reactive([
  {
    label: t("about.technologies.ewm"),
    color: "#d62828",
    width: "60%",
  },
  {
    label: t("about.technologies.ui5"),
    color: "#003049",
    width: "80%",
  },
  {
    label: t("about.technologies.abap"),
    color: "#f77f00",
    width: "80%",
  },
  {
    label: t("about.technologies.js"),
    color: "#fcbf49",
    width: "70%",
  },
]);

const aboutMe = ref(null);
const description = ref(null);
const barChart = ref(null);
const downloadCV = ref(null);
const scrollContainer = ref(null);

onMounted(() => {
  scrollContainer.value = document.querySelector(".content");
});

const isAboutMeVisible = useElementIsVisible(aboutMe, true, scrollContainer);
const isDescriptionVisible = useElementIsVisible(description, true, scrollContainer);
const isBarChartVisible = useElementIsVisible(barChart, true, scrollContainer);
const isDownloadCvVisible = useElementIsVisible(downloadCV, true, scrollContainer);
</script>

<style scoped></style>
