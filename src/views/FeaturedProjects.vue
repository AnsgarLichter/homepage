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
                  v-if="project.links.nuget"
                  :href="project.links.nuget.href"
                  :linkDescription="project.links.nuget.description"
                  :icon="icons.nuget"
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
import { computed } from "vue";
import { useI18n } from "vue-i18n";

import ProjectIcon from "@/components/ProjectIcon.vue";
import Image from "@/components/Image.vue";
import type { ImageProperties } from "@/components/Image.vue";

import FadeInUp from "@/transitions/FadeInUp.vue";

import { UseElementIsVisible } from "@/composables";

import type { Icon } from "@/fontAwesomeIcons";
import CatchTheTrainFavoritesUrl from "@/assets/projects/catchTheTrain/favorites.webp";
import CatchTheTrainFilterUrl from "@/assets/projects/catchTheTrain/filter.webp";
import CatchTheTrainStopUrl from "@/assets/projects/catchTheTrain/stop.webp";

import DhbwAppMensaUrl from "@/assets/projects/dhbwApp/mensa.webp";
import DhbwAppOverviewUrl from "@/assets/projects/dhbwApp/overview.webp";
import DhbwAppRaplaUrl from "@/assets/projects/dhbwApp/rapla.webp";

import ExportKindleClippingsToNotionDetailUrl from "@/assets/projects/exportKindleClippingsToNotion/detail.webp";
import ExportKindleClippingsToNotionFileUrl from "@/assets/projects/exportKindleClippingsToNotion/file.webp";
import ExportKindleClippingsToNotionListUrl from "@/assets/projects/exportKindleClippingsToNotion/list.webp";


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
    nuget?: Link;
    googlePlay?: Link;
    external?: Link;
  };
}

const { t } = useI18n();

const featuredProjects = computed<Project[]>(() => [
  {
    images: [
      {
        src: ExportKindleClippingsToNotionFileUrl,
        alt: t("featuredProjects.ExportKindleClippingsToNotion.file"),
      },
      {
        src: ExportKindleClippingsToNotionListUrl,
        alt: t("featuredProjects.ExportKindleClippingsToNotion.list"),
      },
      {
        src: ExportKindleClippingsToNotionDetailUrl,
        alt: t("featuredProjects.ExportKindleClippingsToNotion.detail"),
      },
    ],
    title: t("featuredProjects.ExportKindleClippingsToNotion.title"),
    description: t("featuredProjects.ExportKindleClippingsToNotion.description"),
    technologies: [
      t("featuredProjects.ExportKindleClippingsToNotion.dotnet"),
      t("featuredProjects.ExportKindleClippingsToNotion.notionAPI"),
      t("featuredProjects.ExportKindleClippingsToNotion.cli"),
    ],
    links: {
      nuget: {
        href:
          "https://www.nuget.org/packages/ExportKindleClippingsToNotion",
        description: t("featuredProjects.funnyFart.linkDescription.nuget"),
      },
      github: {
        href: "https://github.com/AnsgarLichter/funny-fart",
        description: t("featuredProjects.funnyFart.linkDescription.github"),
      },
    },
  },
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
  nuget: {
    prefix: "fab",
    name: "microsoft",
    styleClasses: ["text-3xl", "text-accent"],
  },
  external: {
    prefix: "fas",
    name: "external-link-alt",
    styleClasses: ["text-3xl", "text-accent"],
  }
};
</script>

<style scoped></style>
