<template>
  <div class="bg-primaryLight py-8 px-8 sm:px-22 lg:py-16 lg:px-4">
    <div class="flex flex-row justify-center">
      <UseElementIsVisible abortIfVisible v-slot="{ isVisible }">
        <FadeInUp>
          <div
            v-visible="isVisible"
            class="text-2xl sm:text-4xl text-secondaryLight font-bold mb-8 lg:text-5xl"
          >
            {{ t("experiences.title") }}
          </div>
        </FadeInUp>
      </UseElementIsVisible>
    </div>

    <Timeline :events="events">
      <template #marker="markerSlotProps">
        <font-awesome-icon
          class="fa-lg text-black"
          :icon="[markerSlotProps.item.icon.prefix, markerSlotProps.item.icon.name]"
        />
      </template>
      <template #content="contentSlotProps">
        <UseElementIsVisible
          v-slot="{ isVisible }"
          :elementGetsVisibleAt="0.7"
          :elementGetsInvisibleAt="0.7"
        >
          <transition
            :name="'fade-in-left-out-right' + contentSlotProps.index"
            :enter-active-class="
              'animate__animated timeline-fadeIn' +
              (!!(contentSlotProps.index % 2) ? ' timeline-odd' : '')
            "
            :leave-active-class="
              'animate__animated timeline-fadeOut' +
              (!!(contentSlotProps.index % 2) ? ' timeline-odd' : '')
            "
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
</template>

<script setup>
import { computed } from "vue";
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
    },
  },
]);
</script>

<style scoped>
.timeline-fadeIn {
  --webkit-animation-name: fadeInLeft;
  animation-name: fadeInLeft;
}

.timeline-fadeOut {
  --webkit-animation-name: fadeOutRight;
  animation-name: fadeOutRight;
}

@screen xl {
  .timeline-fadeOut {
    --webkit-animation-name: fadeOutLeft;
    animation-name: fadeOutLeft;
  }

  .timeline-fadeIn.timeline-odd {
    --webkit-animation-name: fadeInRight;
    animation-name: fadeInRight;
  }

  .timeline-fadeOut.timeline-odd {
    --webkit-animation-name: fadeOutRight;
    animation-name: fadeOutRight;
  }
}
</style>
