<template>
  <div class="pt-10 sm:pt-24 px-8 sm:px-22 lg:px-4">
    <div ref="title" class="flex flex-row justify-center">
      <UseElementIsVisible v-slot="{ isVisible }">
        <div v-if="isVisible">
          <FadeInUp>
            <div v-if="isTitleVisible" class="text-5xl font-bold">
              {{ t("experiences.title") }}
            </div>
          </FadeInUp>
        </div>
      </UseElementIsVisible>
    </div>

    <div class="mt-10">
      <Timeline :events="events">
        <template #marker="markerSlotProps">
          <font-awesome-icon
            class="fa-lg"
            :icon="[markerSlotProps.item.icon.prefix, markerSlotProps.item.icon.name]"
            :color="markerSlotProps.item.icon.color"
          />
        </template>
        <template #content="contentSlotProps">
          <div
            class="w-full"
            v-for="(item, index) in contentSlotProps.item.experiences"
            :key="index"
          >
            <UseElementIsVisible v-slot="{ isVisible }">
              <div v-if="isVisible">
                <FadeInUp>
                  <Card
                    :images="item.images"
                    :title="item.title"
                    :yearStart="item.yearStart"
                    :yearEnd="item.yearEnd"
                    :organisation="item.organisation"
                    :location="item.location"
                    :description="item.description"
                  />
                </FadeInUp>
              </div>
            </UseElementIsVisible>
          </div>
        </template>
      </Timeline>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import { useI18n } from "vue-i18n";

import Card from "@/components/Card";
import Timeline from "@/components/Timeline";

import FadeInUp from "@/transitions/FadeInUp";

import { UseElementIsVisible } from "@/composables";

const { t } = useI18n();

const events = computed(() => [
  {
    experiences: [
      {
        images: [
          { src: "dhbw.svg", alt: t("experiences.images.dhbw") },
          { src: "sew.svg", alt: t("experiences.images.sew") },
        ],
        title: t("experiences.education.studies.title"),
        yearStart: t("experiences.education.studies.yearStart"),
        yearEnd: t("experiences.education.studies.yearEnd"),
        organisation: t("experiences.education.studies.organisation"),
        location: t("experiences.education.studies.location"),
        description: t("experiences.education.studies.description"),
      },
      {
        images: [
          { src: "china.webp", alt: t("experiences.images.china") },
          { src: "sew.svg", alt: t("experiences.images.sew") },
        ],
        title: t("experiences.education.abroad.title"),
        yearStart: t("experiences.education.abroad.yearStart"),
        yearEnd: t("experiences.education.abroad.yearEnd"),
        organisation: t("experiences.education.abroad.organisation"),
        location: t("experiences.education.abroad.location"),
        description: t("experiences.education.abroad.description"),
      },
    ],
    icon: {
      prefix: "fa",
      name: "user-graduate",
      color: "black",
    },
  },
  {
    experiences: [
      {
        images: [{ src: "sew.svg", alt: t("experiences.images.sew") }],
        title: t("experiences.work.itpa.title"),
        yearStart: t("experiences.work.itpa.yearStart"),
        yearEnd: t("experiences.work.itpa.yearEnd"),
        organisation: t("experiences.work.itpa.organisation"),
        location: t("experiences.work.itpa.location"),
        description: t("experiences.work.itpa.description"),
      },
    ],
    icon: {
      prefix: "fa",
      name: "industry",
      color: "black",
    },
  },
]);

const scrollContainer = ref(null);
onMounted(() => {
  scrollContainer.value = document.querySelector(".content");
});
</script>

<style scoped>
.timeline > div:nth-child(even) {
  flex-direction: row;
}

@screen xl {
  .timeline > div:nth-child(even) {
    flex-direction: row-reverse;
  }
}
</style>
