<template>
  <div class="bg-primaryLight py-8 px-8 sm:pt-24 sm:px-24 lg:py-16 lg:px-4">
    <UseElementIsVisible abortIfVisible v-slot="{ isVisible }">
      <FadeInUp>
        <h1
          v-visible="isVisible"
          class="text-2xl sm:text-4xl text-secondaryLight font-bold mb-8 lg:text-5xl"
        >
          {{ t("otherProjects.title") }}
        </h1>
      </FadeInUp>
    </UseElementIsVisible>
    <div class="flex flex-col lg:flex-row lg:justify-center mb-8 last:mb-0 lg:space-x-20">
      <UseElementIsVisible
        abortIfVisible
        class="shadow-xl rounded-md p-5 bg-primary mb-8 lg:mb-0 lg:w-144"
        v-slot="{ isVisible }"
        v-for="(project, index) of otherProjects"
        :key="index"
      >
        <FadeInUp>
          <div v-visible="isVisible">
            <div class="flex flex-row items-center space-x-4">
              <font-awesome-icon
                class="text-5xl mr-auto text-accent"
                :icon="['far', 'folder']"
              />
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
            <div class="mt-4 text-2xl sm:text-4xl text-secondaryLight">
              {{ project.title }}
            </div>
            <div class="mt-4 sm:mt-8 text-secondary">
              {{ project.description }}
            </div>
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
        </FadeInUp>
      </UseElementIsVisible>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "@vue/reactivity";
import { useI18n } from "vue-i18n";

import ProjectIcon from "@/components/ProjectIcon.vue";

import FadeInUp from "@/transitions/FadeInUp.vue";

import { UseElementIsVisible } from "@/composables";
import type { Project } from "./FeaturedProjects.vue";
import type { Icon } from "@/fontAwesomeIcons";

const { t } = useI18n();

const otherProjects = computed<Project[]>(() => [
  {
    title: t("otherProjects.justDoIt.title"),
    description: t("otherProjects.justDoIt.description"),
    technologies: [
      t("otherProjects.justDoIt.java"),
      t("otherProjects.justDoIt.jee"),
      t("otherProjects.justDoIt.tomEE"),
      t("otherProjects.justDoIt.derby"),
    ],
    links: {
      github: {
        href: "https://github.com/DerStimmler/JustDoIt",
        description: t("otherProjects.justDoIt.linkDescription.github"),
      },
    },
  },
  {
    title: t("otherProjects.projectInitializationAutomation.title"),
    description: t("otherProjects.projectInitializationAutomation.description"),
    technologies: [
      t("otherProjects.projectInitializationAutomation.python"),
      t("otherProjects.projectInitializationAutomation.githubAPI"),
    ],
    links: {
      github: {
        href: "https://github.com/AnsgarLichter/project-initialization-automation",
        description: t(
          "otherProjects.projectInitializationAutomation.linkDescription.github"
        ),
      },
    },
  },
]);

const icons: Record<"googlePlay" | "github" | "external", Icon> = {
  googlePlay: {
    prefix: "fab",
    name: "google-play",
    styleClasses: ["text-2xl", "text-accent"],
  },
  github: {
    prefix: "fab",
    name: "github",
    styleClasses: ["text-2xl", "text-accent"],
  },
  external: {
    prefix: "fas",
    name: "external-link-alt",
    styleClasses: ["text-2xl", "text-accent"],
  },
};
</script>

<style scoped></style>
