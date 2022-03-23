<template>
  <div class="mt-4 sm:mt-10 lg:flex shadow w-full">
    <div
      class="flex flex-col bg-primary justify-center items-center space-y-10 p-4 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
    >
      <Image
        :styleClasses="['w-44', 'object-fill']"
        v-for="image in images"
        :key="image.alt"
        :src="image.src"
        :alt="image.alt"
      />
    </div>
    <div
      class="bg-primary rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal w-full"
    >
      <div class="mb-8 text-left">
        <div class="text-secondaryLight font-bold text-xl mb-2">
          {{ title }}
        </div>
        <div class="grid grid-flow-row grid-cols-10 items-center">
          <font-awesome-icon
            class="h-4 justify-self-center text-accent"
            :icon="['fas', 'calendar']"
          />
          <div class="text-base text-grey-dark text-secondary col-span-9">
            {{ yearStart }} - {{ yearEnd }}
          </div>
          <font-awesome-icon
            class="h-4 justify-self-center text-accent"
            :icon="['fas', 'university']"
          />
          <div class="text-grey-darker text-base text-secondary col-span-9">
            {{ organisation }}
          </div>

          <font-awesome-icon
            class="h-4 justify-self-center text-accent"
            :icon="['fas', 'map-marker-alt']"
          />
          <div class="text-secondary text-base col-span-9">
            {{ location }}
          </div>
        </div>
        <div class="mt-3 text-grey-darker text-base text-secondary">
          {{ description }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

import Image from "@/components/Image.vue";

export interface CardImage {
  src: string;
  alt: string;
}

export interface CardProperties {
  images: CardImage[];
  title: string;
  yearStart: number;
  yearEnd: number;
  organisation: string;
  location: string;
  description: string;
}

defineProps<CardProperties>();
</script>
