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
      <template #marker="{ item }">
        <font-awesome-icon
          v-if="item.icon"
          class="fa-lg text-black"
          :icon="[item.icon.prefix, item.icon.name]"
        />
      </template>
      <template #content="{ item, index }">
        <UseElementIsVisible
          v-slot="{ isVisible }"
        >
          <transition
            :name="'fade-in-left-out-right' + index"
            :enter-active-class="
              'animate__animated timeline-fadeIn' + (!!(index % 2) ? ' timeline-odd' : '')
            "
            :leave-active-class="
              'animate__animated timeline-fadeOut' +
              (!!(index % 2) ? ' timeline-odd' : '')
            "
            appear
          >
            <div v-visible="isVisible">
              <Card
                :images="item.content.images"
                :title="item.content.title"
                :yearStart="item.content.yearStart"
                :yearEnd="item.content.yearEnd"
                :organisation="item.content.organisation"
                :location="item.content.location"
                :description="item.content.description"
              >
              </Card>
            </div>
          </transition>
        </UseElementIsVisible>
      </template>
    </Timeline>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useI18n } from "vue-i18n";

import Card from "@/components/Card.vue";
import Timeline from "@/components/Timeline.vue";
import type { TimelineEvent } from "@/components/Timeline.vue";

import FadeInUp from "@/transitions/FadeInUp.vue";

import { UseElementIsVisible } from "@/composables";

import DhbwUrl from "@/assets/images/dhbw.webp";
import HkaUrl from "@/assets/images/hka.webp";
import ScholarshipUrl from "@/assets/images/scholarship.webp";
import ChinaUrl from "@/assets/images/china.webp";
import SewUrl from "@/assets/images/sew.webp";
import SapUrl from "@/assets/images/sap.webp";


export interface Image {
  src: string;
  alt: string;
}

export interface Experience {
  images: Image[];
  title: string;
  yearStart: string;
  yearEnd: string;
  organisation: string;
  location: string;
  description: string;
}

const { t } = useI18n();
const events = computed<TimelineEvent<Experience>[]>(() => [
  {
    content: {
      images: [
        { src: HkaUrl, alt: t("experiences.images.hka") },
        { src: SapUrl, alt: t("experiences.images.sap") },
      ],
      title: t("experiences.education.master.title"),
      yearStart: t("experiences.education.master.yearStart"),
      yearEnd: t("experiences.education.master.yearEnd"),
      organisation: t("experiences.education.master.organisation"),
      location: t("experiences.education.master.location"),
      description: t("experiences.education.master.description"),
    },
    icon: {
      prefix: "fa",
      name: "user-graduate",
    },
  },
  {
    content: {
      images: [
        { src: ScholarshipUrl, alt: t("experiences.images.scholarship") },
        { src: HkaUrl, alt: t("experiences.images.hka") },
      ],
      title: t("experiences.education.scholarship.title"),
      yearStart: t("experiences.education.scholarship.yearStart"),
      yearEnd: t("experiences.education.scholarship.yearEnd"),
      organisation: t("experiences.education.scholarship.organisation"),
      location: t("experiences.education.scholarship.location"),
      description: t("experiences.education.scholarship.description"),
    },
    icon: {
      prefix: "fa",
      name: "user-graduate",
    },
  },
  {
    content: {
      images: [{ src: SewUrl, alt: t("experiences.images.sew") }],
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
  {
    content: {
      images: [
        { src: ChinaUrl, alt: t("experiences.images.china") },
        { src: SewUrl, alt: t("experiences.images.sew") },
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
      images: [
        { src: DhbwUrl, alt: t("experiences.images.dhbw") },
        { src: SewUrl, alt: t("experiences.images.sew") },
      ],
      title: t("experiences.education.bachelor.title"),
      yearStart: t("experiences.education.bachelor.yearStart"),
      yearEnd: t("experiences.education.bachelor.yearEnd"),
      organisation: t("experiences.education.bachelor.organisation"),
      location: t("experiences.education.bachelor.location"),
      description: t("experiences.education.bachelor.description"),
    },
    icon: {
      prefix: "fa",
      name: "user-graduate",
    },
  }
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
