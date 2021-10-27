<template>
  <div
    id="about"
    class="flex flex-col items-center mt-8 mx-8 lg:flex-row lg:mt-24 lg:mx-44"
  >
    <div class="flex lg:flex-col lg:w-1/2 justify-center">
      <div class="justify-center">
        <img
          class="h-60 w-60 lg:h-72 lg:w-72 xl:h-96 xl:w-96"
          src="@/assets/images/aboutme.png"
        />
      </div>
    </div>

    <div class="flex flex-col lg:w-1/2 mt-3 lg:mt-16">
      <h1 class="text-3xl lg:text-5xl font-bold">{{ $t("about.title") }}</h1>
      <div class="text-left text-base mx-10 lg:mx-0 mt-3 lg:mt-6">
        {{ $t("about.description-1") }}<br class="hidden lg:block" />
        {{ $t("about.description-2") }}
        {{ $t("about.description-3") }}<br />
        {{ $t("about.description-4") }}
      </div>

      <div class="mt-10 lg:mt-10 mx-10 sm:mx-20 md:mx-40 lg:mx-0">
        <BarChart :data="skills" />
      </div>
    </div>
  </div>
</template>

<script>
import BarChart from "../components/BarChart";

export default {
  name: "About",

  components: {
    BarChart,
  },

  data() {
    return {
      skills: [
        {
          label: this.$t("about.technologies.ewm"),
          color: "#d62828",
          width: "60%",
        },
        {
          label: this.$t("about.technologies.ui5"),
          color: "#003049",
          width: "80%",
        },
        {
          label: this.$t("about.technologies.abap"),
          color: "#f77f00",
          width: "80%",
        },
        {
          label: this.$t("about.technologies.js"),
          color: "#fcbf49",
          width: "70%",
        },
      ],
    };
  },
};
</script>

<style scoped>
</style>
