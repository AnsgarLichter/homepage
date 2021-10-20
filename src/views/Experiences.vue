<template>
  <div class="mt-10 sm:mt-24 mx-8 sm:mx-22 lg:mx-4" id="experiences">
    <div class="flex flex-row justify-center">
      <div class="text-5xl font-bold">{{ $t("experiences.title") }}</div>
    </div>
    <div class="mt-10 timeline flex flex-col">
      <div class="container flex relative">
        <div class="opposite p-1 flex flex-col items-center flex-1"></div>
        <div
          class="separator flex flex-col items-center flex-grow-0 flex-shrink"
        >
          <div
            class="
              sperator
              marker
              w-10
              h-10
              flex
              items-center
              justify-center
              bg-purple-600
              rounded-3xl
            "
          >
            <font-awesome-icon
              class="fa-lg"
              :icon="['fa', 'user-graduate']"
              color="black"
            />
          </div>
          <div class="separator connector w-1 bg-black flex-grow" />
        </div>

        <div class="content p-1 flex flex-col items-center flex-1">
          <Card
            :images="[
              { src: 'dhbw.svg', alt: $t('experiences.images.dhbw') },
              { src: 'sew.svg', alt: $t('experiences.images.sew') },
            ]"
            :title="$t('experiences.education.studies.title')"
            :yearStart="$t('experiences.education.studies.yearStart')"
            :yearEnd="$t('experiences.education.studies.yearEnd')"
            :organisation="$t('experiences.education.studies.organisation')"
            :location="$t('experiences.education.studies.location')"
            :description="$t('experiences.education.studies.description')"
          />

          <Card
            :images="[
              { src: 'china.png', alt: $t('experiences.images.china') },
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
      <div class="container flex relative">
        <div class="opposite p-1 flex flex-col items-center flex-1"></div>
        <div
          class="separator flex flex-col items-center flex-grow-0 flex-shrink"
        >
          <div
            class="
              sperator
              marker
              w-10
              h-10
              flex
              items-center
              justify-center
              bg-purple-600
              rounded-3xl
            "
          >
            <font-awesome-icon
              class="fa-lg"
              :icon="['fa', 'industry']"
              color="black"
            />
          </div>
          <div class="separator connector w-1 bg-black flex-grow" />
        </div>

        <div class="content p-1 flex flex-col items-center flex-1">
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
  <!-- <div class="mt-10 sm:mt-24 mx-8 sm:mx-22 lg:mx-4" id="experiences">
    <div class="flex flex-row justify-center">
      <div class="text-5xl font-bold">{{ $t("experiences.title") }}</div>
    </div>
    <div class="flex flex-col xl:flex-row">
      <div
        class="flex flex-col flex-wrap xl:w-1/2 self-center text-center mt-10"
      >
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
  </div> -->
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

.timeline > div:nth-child(even) {
  flex-direction: row;
}

@screen xl {
  .timeline > div:nth-child(even) {
    flex-direction: row-reverse;
  }
}
</style>