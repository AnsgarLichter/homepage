<template>
  <!-- <div class="mt-4 sm:mt-10 min-w-200 w-64 sm:w-96 md:w-128 lg:flex lg:h-80 xl:h-72 shadow"> -->
  <div class="mt-4 sm:mt-10 lg:flex shadow w-full">
    <div
      class="flex flex-col justify-center items-center space-y-10 p-4 border-b border-l border-t flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
    >
      <img
        class="w-44 object-fill"
        v-for="image in images"
        :key="image.alt"
        :src="getImagePath(image.src)"
        :alt="image.alt"
        data-holder-rendered="true"
      />
    </div>
    <div
      class="border-r border-b border-l border-grey-light lg:border-l-0 lg:border-t lg:border-grey-light bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal w-full"
    >
      <div class="mb-8 text-left">
        <div class="text-black font-bold text-xl mb-2">
          {{ title }}
        </div>
        <div class="grid grid-flow-row grid-cols-10 items-center">
          <font-awesome-icon
            class="h-4 justify-self-center"
            :icon="['fas', 'calendar']"
          />
          <div class="text-base text-grey-dark col-span-9">
            {{ yearStart }} - {{ yearEnd }}
          </div>
          <font-awesome-icon
            class="h-4 justify-self-center"
            :icon="['fas', 'university']"
          />
          <div class="text-grey-darker text-base col-span-9">
            {{ organisation }}
          </div>

          <font-awesome-icon
            class="h-4 justify-self-center"
            :icon="['fas', 'map-marker-alt']"
          />
          <div class="text-grey-darker text-base col-span-9">
            {{ location }}
          </div>
        </div>
        <div class="mt-3 text-grey-darker text-base">
          {{ description }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
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
  },
  methods: {
    getImagePath(imageSrc) {
      return require(`../assets/images/${imageSrc}`);
    },
  },
};
</script>
