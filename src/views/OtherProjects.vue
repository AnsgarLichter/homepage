<template>
  <div class="bg-primaryLight py-8 px-8 sm:pt-24 sm:px-24 lg:py-16 lg:px-4">
    <div class="text-2xl sm:text-4xl text-secondaryLight font-bold mb-8 lg:text-5xl">
      Andere nennenswerte Projekte
    </div>
    <div class="flex flex-col lg:flex-row lg:justify-center mb-8 last:mb-0 lg:space-x-20">
      <div
        v-for="(project, index) of otherProjects"
        :key="index"
        class="shadow-xl rounded-md p-5 bg-primary mb-8 lg:mb-0 lg:w-144"
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
</template>

<script setup>
import { computed } from "@vue/reactivity";
import { useI18n } from "vue-i18n";

const { t } = useI18n();
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
</script>

<style scoped></style>
