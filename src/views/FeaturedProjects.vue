<template>
  <div class="px-8 py-8 sm:pt-24 sm:px-24 lg:px-4 lg:py-16">
    <div class="flex flex-row justify-center">
      <UseElementIsVisible abortIfVisible v-slot="{ isVisible }">
        <FadeInUp>
          <h1
            v-visible="isVisible"
            class="text-2xl sm:text-4xl text-secondaryLight font-bold mb-8 lg:text-5xl"
          >
            {{ t("featuredProjects.title") }}
          </h1>
        </FadeInUp>
      </UseElementIsVisible>
    </div>
    <div class="flex flex-col lg:mx-20 2xl:mx-44">
      <UseElementIsVisible
        class="mb-8 last:mb-0"
        abortIfVisible
        v-slot="{ isVisible }"
        v-for="(project, index) of featuredProjects"
        :key="index"
      >
        <FadeInUp>
          <div
            v-visible="isVisible"
            class="flex flex-col-reverse items-center xl:flex-row xl:space-x-16"
          >
            <div class="flex flex-row basis-3/5 space-x-8">
              <div v-for="(image, index) of project.images" :key="index">
                <Image
                  :styleClasses="['w-56', 'shadow-lg', 'shadow-primaryDark']"
                  :src="image.src"
                  :alt="image.alt"
                  preview
                />
              </div>
            </div>
            <div class="flex flex-col basis-2/5 xl:justify-center">
              <div class="flex flex-col items-end">
                <div class="text-sm text-accent">
                  {{ t("featuredProjects.featured") }}
                </div>
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
                <ProjectIcon
                  v-if="project.links.googlePlay"
                  :href="project.links.googlePlay.href"
                  :linkDescription="project.links.googlePlay.description"
                  :icon="icons.googlePlay"
                />
                <ProjectIcon
                  v-if="project.links.github"
                  :href="project.links.github.href"
                  :linkDescription="project.links.github.description"
                  :icon="icons.github"
                />
                <ProjectIcon
                  v-if="project.links.external"
                  :href="project.links.external.href"
                  :linkDescription="project.links.external.description"
                  :icon="icons.external"
                />
              </div>
            </div>
          </div>
        </FadeInUp>
      </UseElementIsVisible>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "@vue/reactivity";
import { useI18n } from "vue-i18n";

import ProjectIcon from "@/components/ProjectIcon.vue";
import Image from "@/components/Image.vue";
import type { ImageProperties } from "@/components/Image.vue";

import FadeInUp from "@/transitions/FadeInUp.vue";

import { UseElementIsVisible } from "@/composables";

import type { Icon } from "@/fontAwesomeIcons";

import CatchTheTrainFavoritesUrl from "@/assets/projects/catchTheTrain/favorites.png";
import CatchTheTrainFilterUrl from "@/assets/projects/catchTheTrain/filter.png";
import CatchTheTrainStopUrl from "@/assets/projects/catchTheTrain/stop.png";

import DhbwAppEventsUrl from "@/assets/projects/dhbwApp/events.png"; //TODO: Delete image
import DhbwAppMensaUrl from "@/assets/projects/dhbwApp/mensa.png";
import DhbwAppOverviewUrl from "@/assets/projects/dhbwApp/overview.png";
import DhbwAppRaplaUrl from "@/assets/projects/dhbwApp/rapla.png";

import FunnyFartCalculateUrl from "@/assets/projects/funnyFart/calculate.png";
import FunnyFartFormulaUrl from "@/assets/projects/funnyFart/formula.png";
import FunnyFartOverviewUrl from "@/assets/projects/funnyFart/overview.png"; //TODO: Delete image
import FunnyFartResultUrl from "@/assets/projects/funnyFart/result.png";


export interface Link {
  href: string;
  description: string;
}

export interface Project {
  images?: ImageProperties[];
  title?: string;
  description?: string;
  technologies?: string[];
  links: {
    github?: Link;
    googlePlay?: Link;
    external?: Link;
  };
}

const { t } = useI18n();

const featuredProjects = computed<Project[]>(() => [
  {
    images: [
      {
        src: CatchTheTrainFavoritesUrl,
        alt: t("featuredProjects.catchTheTrain.favoritesAlt"),
      },
      {
        src: CatchTheTrainStopUrl,
        alt: t("featuredProjects.catchTheTrain.stopAlt"),
      },
      {
        src: CatchTheTrainFilterUrl,
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
      github: {
        href: "https://github.com/AnsgarLichter/CatchTheTrain",
        description: t("featuredProjects.catchTheTrain.linkDescription.github"),
      },
    },
  },
  {
    images: [
      {
        src: DhbwAppOverviewUrl,
        alt: t("featuredProjects.dhbwApp.overviewAlt"),
      },
      {
        src: DhbwAppRaplaUrl,
        alt: t("featuredProjects.dhbwApp.raplaAlt"),
      },
      {
        src: DhbwAppMensaUrl,
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
      googlePlay: {
        href: "https://play.google.com/store/apps/details?id=de.dhbw.karlsruhe.app",
        description: t("featuredProjects.dhbwApp.linkDescription.googlePlay"),
      },
      external: {
        href: "https://www.karlsruhe.dhbw.de/it-service/software-angebote.html",
        description: t("featuredProjects.dhbwApp.linkDescription.external"),
      },
    },
  },
  {
    images: [
      {
        src: FunnyFartFormulaUrl,
        alt: t("featuredProjects.funnyFart.formulaAlt"),
      },
      {
        src: FunnyFartCalculateUrl,
        alt: t("featuredProjects.funnyFart.calculateAlt"),
      },
      {
        src: FunnyFartResultUrl,
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
      googlePlay: {
        href:
          "https://play.google.com/store/apps/details?id=dhbw.lichter.scheuring.formelapp&gl=DE",
        description: t("featuredProjects.funnyFart.linkDescription.googlePlay"),
      },
      github: {
        href: "https://github.com/AnsgarLichter/funny-fart",
        description: t("featuredProjects.funnyFart.linkDescription.github"),
      },
    },
  },
]);

const icons: Record<string, Icon> = {
  googlePlay: {
    prefix: "fab",
    name: "google-play",
    styleClasses: ["text-3xl", "text-accent"],
  },
  github: {
    prefix: "fab",
    name: "github",
    styleClasses: ["text-3xl", "text-accent"],
  },
  external: {
    prefix: "fas",
    name: "external-link-alt",
    styleClasses: ["text-3xl", "text-accent"],
  },
};
</script>

<style scoped></style>
