<template>
  <div class="mt-10 sm:mt-24 mx-8 sm:mx-22 lg:mx-4" id="experiences">
    <div class="flex flex-row justify-center">
      <div class="text-5xl font-bold">{{ $t("experiences.title") }}</div>
    </div>
    <div class="flex flex-col xl:flex-row">
      <div class="flex flex-col flex-wrap xl:w-1/2 self-center text-center mt-10">
        <div class="text-3xl font-bold">
          {{ $t("experiences.education.title") }}
        </div>
        <div class="flex flex-row justify-center">
          <Card
            :images="[{ src: 'dhbw.svg', alt: $t('experiences.images.dhbw') }]"
            :title="$t('experiences.education.studies.title')"
            :yearStart="$t('experiences.education.studies.yearStart')"
            :yearEnd="$t('experiences.education.studies.yearEnd')"
            :organisation="$t('experiences.education.studies.organisation')"
            :location="$t('experiences.education.studies.location')"
            :description="$t('experiences.education.studies.description')"
          />
        </div>

        <div class="flex flex-row justify-center">
          <Card
            :images="[
              { src: 'dhbw.svg', alt: $t('experiences.images.dhbw') },
              { src: 'sew.svg', alt: $t('experiences.images.sew') },
            ]"
            :title="$t('experiences.education.abroad.title')"
            :yearStart="$t('experiences.education.abroad.yearStart')"
            :yearEnd="$t('experiences.education.abroad.yearEnd')"
            :organisation="$t('experiences.education.abroad.organisation')"
            :location="$t('experiences.education.abroad.location')"
            :description="$t('experiences.education.abroad.description')"
          />
        </div>
      </div>
      <div class="flex flex-col xl:w-1/2 self-center text-center mt-10">
        <div class="text-3xl font-bold">{{ $t("experiences.work.title") }}</div>

        <div class="flex flex-row justify-center">
          <Card
            :images="[{ src: 'sew.svg', alt: $t('experiences.images.sew') }]"
            :title="$t('experiences.work.studies.title')"
            :yearStart="$t('experiences.work.studies.yearStart')"
            :yearEnd="$t('experiences.work.studies.yearEnd')"
            :organisation="$t('experiences.work.studies.organisation')"
            :location="$t('experiences.work.studies.location')"
            :description="$t('experiences.work.studies.description')"
          />
        </div>

        <div class="flex flex-row justify-center">
          <Card
            :images="[{ src: 'sew.svg', alt: $t('experiences.images.sew') }]"
            :title="$t('experiences.work.itpa.title')"
            :yearStart="$t('experiences.work.itpa.yearStart')"
            :yearEnd="$t('experiences.work.itpa.yearEnd')"
            :organisation="$t('experiences.work.itpa.organisation')"
            :location="$t('experiences.work.itpa.location')"
            :description="$t('experiences.work.itpa.description')"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Card from "../components/Card";

export default {
  name: "Expieriences",
  components: { Card },
};
</script>

<style scoped>
.dhbw {
  background-image: url("~@/assets/images/dhbw.jpg");
}
</style>