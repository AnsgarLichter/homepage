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
  </div>
</template>

<script setup>
import { useI18n } from "vue-i18n";

const { t } = useI18n();
</script>
