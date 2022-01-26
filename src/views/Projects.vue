<template>
  <div class="pt-10 sm:pt-24 px-8 sm:px-22 lg:px-4">
    <div class="flex flex-row justify-center">
      <div class="text-5xl font-bold">{{ t("projects.title") }}</div>
    </div>

    <div class="flex flex-wrap justify-center mx-44 my-10">
      <ul>
        <li>{{ t("projects.catchTheTrain.title") }}</li>
        <li>{{ t("projects.dhbwApp.title") }}</li>
        <li>{{ t("projects.funnyFart.title") }}</li>
      </ul>
    </div>

    <div class="flex flex-col">
      <div class="flex flex-row mt-8" v-for="(project, index) of projects" :key="index">
        <div class="basis-1/2 flex flex-col justify-center items-center">
          <img
            class="w-44 object-fill"
            :key="project.image.alt"
            :src="getImagePath(project.image.source)"
            :alt="project.image.alt"
            data-holder-rendered="true"
            loading="lazy"
          />
        </div>
        <div class="basis-1/2">
          <div class="flex flex-row items-end justify-end mr-32 text-sm text-gray-500">
            Featured Project
          </div>
          <h2
            class="flex flex-row items-end justify-end mr-32 text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate"
          >
            {{ project.name }}
          </h2>
          <div class="mt-4 mx-32 shadow-xl rounded-md p-5 bg-blue-300">
            {{ project.description }}
          </div>
          <div class="flex flex-row justify-center mx-32 mt-4">
            <div
              class="mx-8"
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
import { useI18n } from "vue-i18n";

const { t } = useI18n();

const projects = [
  {
    image: {
      source: "sew.svg",
      alt: "Projekt 1",
    },
    name: "Projekt 1",
    description:
      "Lorem Ipsum Dolorem Lorem Ipsum Dolorem Lorem Ipsum Dolorem Lorem Ipsum Dolorem Lorem Ipsum Dolorem Lorem Ipsum Dolorem Lorem Ipsum Dolorem Lorem Ipsum Dolorem Lorem Ipsum Dolorem Lorem Ipsum DoloremLorem Ipsum Dolorem Lorem Ipsum Dolorem Lorem Ipsum Dolorem Lorem Ipsum Dolorem Lorem Ipsum Dolorem Lorem Ipsum Dolorem Lorem Ipsum Dolorem",
    technologies: ["Flutter", "API", "Java"],
  },
  {
    image: {
      source: "sew.svg",
      alt: "Projekt 1",
    },
    name: "Projekt 1",
    description:
      "Lorem Ipsum Dolorem Lorem Ipsum Dolorem Lorem Ipsum Dolorem Lorem Ipsum Dolorem Lorem Ipsum Dolorem Lorem Ipsum Dolorem Lorem Ipsum Dolorem Lorem Ipsum Dolorem Lorem Ipsum Dolorem Lorem Ipsum DoloremLorem Ipsum Dolorem Lorem Ipsum Dolorem Lorem Ipsum Dolorem Lorem Ipsum Dolorem Lorem Ipsum Dolorem Lorem Ipsum Dolorem Lorem Ipsum Dolorem",
    technologies: ["Flutter", "API", "Java"],
  },
  {
    image: {
      source: "sew.svg",
      alt: "Projekt 1",
    },
    name: "Projekt 1",
    description:
      "Lorem Ipsum Dolorem Lorem Ipsum Dolorem Lorem Ipsum Dolorem Lorem Ipsum Dolorem Lorem Ipsum Dolorem Lorem Ipsum Dolorem Lorem Ipsum Dolorem Lorem Ipsum Dolorem Lorem Ipsum Dolorem Lorem Ipsum DoloremLorem Ipsum Dolorem Lorem Ipsum Dolorem Lorem Ipsum Dolorem Lorem Ipsum Dolorem Lorem Ipsum Dolorem Lorem Ipsum Dolorem Lorem Ipsum Dolorem",
    technologies: ["Flutter", "API", "Java"],
  },
];

const getImagePath = (imageSrc) => {
  return require(`@/assets/images/${imageSrc}`);
};
</script>
