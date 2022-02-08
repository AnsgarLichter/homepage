<template>
  <div class="mt-4 sm:mt-10 lg:flex shadow w-full">
    <div
      class="flex flex-col bg-primaryLight justify-center items-center space-y-10 p-4 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
    >
      <img
        class="w-44 object-fill"
        v-for="image in images"
        :key="image.alt"
        :src="getImagePath(image.src)"
        :alt="image.alt"
        data-holder-rendered="true"
        loading="lazy"
      />
    </div>
    <div
      class="bg-primaryLight rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal w-full"
    >
      <div class="mb-8 text-left">
        <div class="text-secondaryLight font-bold text-xl mb-2">
          {{ title }}
        </div>
        <div class="grid grid-flow-row grid-cols-10 items-center">
          <font-awesome-icon
            class="h-4 justify-self-center"
            :icon="['fas', 'calendar']"
            color="#88ffff"
          />
          <div class="text-base text-grey-dark text-secondary col-span-9">
            {{ yearStart }} - {{ yearEnd }}
          </div>
          <font-awesome-icon
            class="h-4 justify-self-center"
            :icon="['fas', 'university']"
            color="#88ffff"
          />
          <div class="text-grey-darker text-base text-secondary col-span-9">
            {{ organisation }}
          </div>

          <font-awesome-icon
            class="h-4 justify-self-center"
            :icon="['fas', 'map-marker-alt']"
            color="#88ffff"
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

<script setup>
import { defineProps } from "vue";

defineProps({
  images: {
    type: Array,
    default: () => [],
  },
  title: {
    type: String,
    default: "",
  },
  yearStart: {
    type: String,
    default: "",
  },
  yearEnd: {
    type: String,
    default: "",
  },
  organisation: {
    type: String,
    default: "",
  },
  location: {
    type: String,
    default: "",
  },
  description: {
    type: String,
    default: "",
  },
});

const getImagePath = (imageSrc) => {
  return require(`@/assets/images/${imageSrc}`);
};
</script>
