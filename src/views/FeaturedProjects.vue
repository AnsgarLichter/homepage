<template>
  <div class="px-8 py-8 sm:pt-24 sm:px-24 lg:px-4 lg:py-16">
    <div class="flex flex-row justify-center">
      <div class="text-2xl sm:text-4xl text-secondaryLight font-bold mb-8 lg:text-5xl">
        {{ t("featuredProjects.title") }}
      </div>
    </div>
    <div class="flex flex-col lg:mx-20 2xl:mx-44">
      <div
        class="flex flex-col-reverse mb-8 last:mb-0 items-center xl:flex-row xl:space-x-16"
        v-for="(project, index) of featuredProjects"
        :key="index"
      >
        <div class="flex flex-row basis-3/5 space-x-8">
          <div v-for="(image, index) of project.images" :key="index">
            <img
              class="w-56 shadow-lg shadow-primaryDark"
              :src="getImagePath(image.source)"
              :alt="image.alt"
              data-holder-rendered="true"
              loading="lazy"
            />
          </div>
        </div>
        <div class="flex flex-col basis-2/5 xl:justify-center">
          <div class="flex flex-col items-end">
            <div class="text-sm text-accent">{{ t("featuredProjects.featured") }}</div>
            <h2
              class="text-2xl font-bold leading-7 text-secondaryLight sm:text-3xl sm:truncate"
            >
              {{ project.title }}
            </h2>
          </div>
          <div
            class="mt-4 shadow-xl rounded-md p-5 bg-primaryLight text-secondary border-2 border-accent"
          >
            {{ project.description }}
          </div>
          <div class="mt-2 flex flex-row flex-wrap justify-end space-x-4">
            <div
              class="text-accent"
              v-for="(technology, index) of project.technologies"
              :key="index"
            >
              {{ technology }}
            </div>
          </div>
          <div class="mt-2 flex flex-row space-x-4 justify-end">
            <a
              v-if="project.links.googlePlay"
              class="rounded p-3"
              :href="project.links.googlePlay"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Link zum Google Play Store"
            >
              <font-awesome-icon
                class="text-2xl"
                :icon="['fab', 'google-play']"
                color="#007fad"
              />
            </a>
            <a
              v-if="project.links.github"
              class="rounded p-3"
              :href="project.links.github"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Link zum Github-Repository"
            >
              <font-awesome-icon
                class="text-2xl"
                :icon="['fab', 'github']"
                color="#007fad"
              />
            </a>
            <a
              v-if="project.links.external"
              class="rounded p-3"
              :href="project.links.external"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Externer Link"
            >
              <font-awesome-icon
                class="text-2xl"
                :icon="['fas', 'external-link-alt']"
                color="#007fad"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "@vue/reactivity";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

const featuredProjects = computed(() => [
  {
    images: [
      {
        source: "catchTheTrain/favorites.png",
        alt: t("featuredProjects.catchTheTrain.favoritesAlt"),
      },
      {
        source: "catchTheTrain/stop.png",
        alt: t("featuredProjects.catchTheTrain.stopAlt"),
      },
      {
        source: "catchTheTrain/filter.png",
        alt: t("featuredProjects.catchTheTrain.filterAlt"),
      },
    ],
    title: t("featuredProjects.catchTheTrain.title"),
    description: t("featuredProjects.catchTheTrain.description"),
    technologies: [
      t("featuredProjects.catchTheTrain.flutter"),
      t("featuredProjects.catchTheTrain.api"),
      t("featuredProjects.catchTheTrain.dart"),
    ],
    links: {
      github: "https://github.com/AnsgarLichter/CatchTheTrain",
    },
  },
  {
    images: [
      {
        source: "dhbwApp/overview.png",
        alt: t("featuredProjects.dhbwApp.overviewAlt"),
      },
      {
        source: "dhbwApp/rapla.png",
        alt: t("featuredProjects.dhbwApp.raplaAlt"),
      },
      {
        source: "dhbwApp/mensa.png",
        alt: t("featuredProjects.dhbwApp.mensaAlt"),
      },
    ],
    title: t("featuredProjects.dhbwApp.title"),
    description: t("featuredProjects.dhbwApp.description"),
    technologies: [
      t("featuredProjects.dhbwApp.angular"),
      t("featuredProjects.dhbwApp.ionic"),
      t("featuredProjects.dhbwApp.typeScript"),
      t("featuredProjects.dhbwApp.openMensa"),
      t("featuredProjects.dhbwApp.kvvApi"),
      t("featuredProjects.dhbwApp.rapla"),
    ],
    links: {
      googlePlay: "https://play.google.com/store/apps/details?id=de.dhbw.karlsruhe.app",
      external: "https://www.karlsruhe.dhbw.de/it-service/software-angebote.html",
    },
  },
  {
    images: [
      {
        source: "funnyFart/formula.png",
        alt: t("featuredProjects.funnyFart.formulaAlt"),
      },
      {
        source: "funnyFart/calculate.png",
        alt: t("featuredProjects.funnyFart.calculateAlt"),
      },
      {
        source: "funnyFart/result.png",
        alt: t("featuredProjects.funnyFart.resultAlt"),
      },
    ],
    title: t("featuredProjects.funnyFart.title"),
    description: t("featuredProjects.funnyFart.description"),
    technologies: [
      t("featuredProjects.funnyFart.android"),
      t("featuredProjects.funnyFart.java"),
      t("featuredProjects.funnyFart.mobile"),
    ],
    links: {
      googlePlay:
        "https://play.google.com/store/apps/details?id=dhbw.lichter.scheuring.formelapp&gl=DE",
      github: "https://github.com/AnsgarLichter/funny-fart",
    },
  },
]);

const getImagePath = (imageSrc) => {
  return require(`@/assets/projects/${imageSrc}`);
};
</script>

<style scoped></style>
