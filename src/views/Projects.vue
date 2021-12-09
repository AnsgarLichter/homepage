<template>
  <div class="mt-10 sm:mt-24 mx-8 sm:mx-22 lg:mx-4" id="projects">
    <div class="flex flex-row justify-center">
      <div class="text-5xl font-bold">{{ $t("projects.title") }}</div>
    </div>

    <div class="flex flex-wrap justify-center mx-44 my-10">
      <ul>
        <li>{{ $t("projects.catchTheTrain.title") }}</li>
        <li>{{ $t("projects.dhbwApp.title") }}</li>
        <li>{{ $t("projects.funnyFart.title") }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Projects",
};
</script>
