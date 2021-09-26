<template>
  <div class="mt-10 sm:mt-24 mx-8 sm:mx-22 lg:mx-4" id="projects">
    <div class="flex flex-row justify-center">
      <div class="text-5xl font-bold">{{ $t("projects.title") }}</div>
    </div>

    <div class="flex flex-wrap justify-center mx-44 my-10">
      <b-card class="w-full my-3" no-body>
          <b-tabs pills card>
            <b-tab :title="$t('projects.funnyFart.title')" active>
              <b-card-text>Funny Fart</b-card-text>
            </b-tab>
            <b-tab :title="$t('projects.catchTheTrain.title')">
              <b-card-text>Catch The Train</b-card-text>
            </b-tab>
            <b-tab :title="$t('projects.dhbwApp.title')">
              <b-card-text>DHBW App</b-card-text>
            </b-tab>
            <b-tab :title="$t('projects.justDoIt.title')">
              <b-card-text>Just Do It</b-card-text>
            </b-tab>
            <b-tab
              :title="$t('projects.projectInitializationAutomation.title')"
              active
            >
              <b-card-text>Project Initialization Automation</b-card-text>
            </b-tab>
          </b-tabs>
      </b-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "Projects",
};
</script>
