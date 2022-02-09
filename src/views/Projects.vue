<template>
  <div class="py-10 px-8 sm:pt-24 sm:px-24 lg:px-4">
    <div class="flex flex-row justify-center mb-8">
      <div class="text-2xl text-secondaryLight font-bold sm:text-4xl lg:text-5xl">
        {{ t("projects.title") }}
      </div>
    </div>
    <div class="flex flex-col xl:mx-44">
      <div
        class="flex flex-col-reverse xl:flex-row mb-8"
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
            <div class="text-sm text-accent">Featured Project</div>
            <h2
              class="text-2xl font-bold leading-7 text-secondaryLight sm:text-3xl sm:truncate"
            >
              {{ project.title }}
            </h2>
          </div>
          <div class="mt-4 shadow-xl rounded-md p-5 bg-primaryLight text-secondary">
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
    <div class="mt-16">
      <div class="text-2xl sm:text-4xl text-secondaryLight font-bold mb-8 lg:text-5xl">
        Andere nennenswerte Projekte
      </div>
      <div class="flex flex-col lg:flex-row lg:justify-center lg:space-x-20">
        <div
          v-for="(project, index) of otherProjects"
          :key="index"
          class="shadow-xl rounded-md p-5 bg-primaryLight mb-8 lg:w-144"
        >
          <div class="flex flex-row items-center space-x-4">
            <font-awesome-icon
              class="text-5xl mr-auto"
              :icon="['far', 'folder']"
              color="#007fad"
            />
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
                color="black"
              />
            </a>
          </div>
          <div class="mt-4 text-2xl sm:text-4xl text-secondaryLight">
            {{ project.title }}
          </div>
          <div class="mt-4 sm:mt-8 text-secondary">{{ project.description }}</div>
          <div class="mt-4 sm:mt-8 flex flex-row space-x-4 justify-center">
            <div
              class="flex flex-row text-accent"
              v-for="(technology, index) of project.technologies"
              :key="index"
            >
              {{ technology }}
            </div>
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
        alt: t("projects.catchTheTrain.favoritesAlt"),
      },
      {
        source: "catchTheTrain/stop.png",
        alt: t("projects.catchTheTrain.stopAlt"),
      },
      {
        source: "catchTheTrain/filter.png",
        alt: t("projects.catchTheTrain.filterAlt"),
      },
    ],
    title: t("projects.catchTheTrain.title"),
    description: t("projects.catchTheTrain.description"),
    technologies: [
      t("projects.catchTheTrain.flutter"),
      t("projects.catchTheTrain.api"),
      t("projects.catchTheTrain.dart"),
    ],
    links: {
      github: "https://github.com/AnsgarLichter/CatchTheTrain",
    },
  },
  {
    images: [
      {
        source: "dhbwApp/overview.png",
        alt: t("projects.dhbwApp.overviewAlt"),
      },
      {
        source: "dhbwApp/rapla.png",
        alt: t("projects.dhbwApp.raplaAlt"),
      },
      {
        source: "dhbwApp/mensa.png",
        alt: t("projects.dhbwApp.mensaAlt"),
      },
    ],
    title: t("projects.dhbwApp.title"),
    description: t("projects.dhbwApp.description"),
    technologies: [
      t("projects.dhbwApp.angular"),
      t("projects.dhbwApp.ionic"),
      t("projects.dhbwApp.typeScript"),
      t("projects.dhbwApp.openMensa"),
      t("projects.dhbwApp.kvvApi"),
      t("projects.dhbwApp.rapla"),
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
        alt: t("projects.funnyFart.formulaAlt"),
      },
      {
        source: "funnyFart/calculate.png",
        alt: t("projects.funnyFart.calculateAlt"),
      },
      {
        source: "funnyFart/result.png",
        alt: t("projects.funnyFart.resultAlt"),
      },
    ],
    title: t("projects.funnyFart.title"),
    description: t("projects.funnyFart.description"),
    technologies: [
      t("projects.funnyFart.android"),
      t("projects.funnyFart.java"),
      t("projects.funnyFart.mobile"),
    ],
    links: {
      googlePlay:
        "https://play.google.com/store/apps/details?id=dhbw.lichter.scheuring.formelapp&gl=DE",
      github: "https://github.com/AnsgarLichter/funny-fart",
    },
  },
]);

const otherProjects = computed(() => [
  {
    title: t("projects.justDoIt.title"),
    description: t("projects.justDoIt.description"),
    technologies: [
      t("projects.justDoIt.java"),
      t("projects.justDoIt.jee"),
      t("projects.justDoIt.tomEE"),
      t("projects.justDoIt.derby"),
    ],
    links: {
      github: "https://github.com/DerStimmler/JustDoIt",
    },
  },
  {
    title: t("projects.projectInitializationAutomation.title"),
    description: t("projects.projectInitializationAutomation.description"),
    technologies: [
      t("projects.projectInitializationAutomation.python"),
      t("projects.projectInitializationAutomation.githubAPI"),
    ],
    links: {
      github: "https://github.com/AnsgarLichter/project-initialization-automation",
    },
  },
]);

const getImagePath = (imageSrc) => {
  return require(`@/assets/projects/${imageSrc}`);
};
</script>

<style scoped></style>
