<template>
  <div class="pt-10 sm:pt-24 px-8 sm:px-22 lg:px-4">
    <div ref="title" class="flex flex-row justify-center">
      <UseElementIsVisible v-slot="{ isVisible }">
        <FadeInUp>
          <div v-visible="isVisible" class="text-5xl font-bold">
            {{ t("experiences.title") }}
          </div>
        </FadeInUp>
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
          <UseElementIsVisible v-slot="{ isVisible }">
            <transition
              name="fade-in-left-out-right"
              enter-active-class="animate__animated animate__fadeInLeft"
              leave-active-class="animate__animated animate__fadeOutRight"
              appear
            >
              <div v-visible="isVisible">
                <Card
                  :images="contentSlotProps.item.content.images"
                  :title="contentSlotProps.item.content.title"
                  :yearStart="contentSlotProps.item.content.yearStart"
                  :yearEnd="contentSlotProps.item.content.yearEnd"
                  :organisation="contentSlotProps.item.content.organisation"
                  :location="contentSlotProps.item.content.location"
                  :description="contentSlotProps.item.content.description"
                >
                </Card>
              </div>
            </transition>
          </UseElementIsVisible>
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
import { UseElementIsVisible } from "@/composables";

import FadeInUp from "@/transitions/FadeInUp";

const { t } = useI18n();

const events = computed(() => [
  {
    content: {
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
    icon: {
      prefix: "fa",
      name: "user-graduate",
      color: "black",
    },
  },
  {
    content: {
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
  },
  {
    content: {
      images: [{ src: "sew.svg", alt: t("experiences.images.sew") }],
      title: t("experiences.work.itpa.title"),
      yearStart: t("experiences.work.itpa.yearStart"),
      yearEnd: t("experiences.work.itpa.yearEnd"),
      organisation: t("experiences.work.itpa.organisation"),
      location: t("experiences.work.itpa.location"),
      description: t("experiences.work.itpa.description"),
    },
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
