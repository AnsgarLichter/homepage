<template>
  <div id="about" class="flex flex-col items-center sm:flex-row mt-2 sm:mt-24 mx-8 sm:mx-44">
    <div class="flex sm:flex-col sm:w-1/2 justify-center">
      <div class="justify-center">
        <img class="h-44 w-44 sm:h-96 sm:w-96" src="@/assets/images/aboutme.png" />
      </div>
    </div>
    <div class="flex flex-col sm:w-1/2 mt-3 sm:mt-16">
      <h1 class="text-3xl sm:text-5xl font-bold">{{ $t("about.title") }}</h1>
      <div class="text-left text-base mt-3 sm:mt-6">
        {{ $t("about.description-1") }}<br class="hidden sm:block"/>
        {{ $t("about.description-2") }}
        {{ $t("about.description-3") }}<br />
        {{ $t("about.description-4") }}
      </div>
      <div class="mt-2 sm:mt-10">
        <div class="relative pt-1">
          <div class="flex mb-2 items-center justify-between">
            <span
              class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-white bg-bg-grey"
            >
              {{ $t("about.technologies.ewm")}}
            </span>
          </div>
          <div
            class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200"
          >
            <div
              class="w-6/10 shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-bg-red"
            ></div>
          </div>
        </div>
        <div class="relative pt-1">
          <div class="flex mb-2 items-center justify-between">
            <span
              class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-white bg-bg-grey"
            >
              {{ $t("about.technologies.ui5")}}
            </span>
          </div>
          <div
            class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200"
          >
            <div
              class="w-8/10 shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-bg-blue"
            ></div>
          </div>
        </div>

        <div class="relative pt-1">
          <div class="flex mb-2 items-center justify-between">
            <span
              class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-white bg-bg-grey"
            >
              {{ $t("about.technologies.abap")}}
            </span>
          </div>
          <div
            class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200"
          >
            <div
              class="w-8/10 shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-bg-orange"
            ></div>
          </div>
        </div>

        <div class="relative pt-1">
          <div class="flex mb-2 items-center justify-between">
            <span
              class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-white bg-bg-grey"
            >
              {{ $t("about.technologies.js")}}
            </span>
          </div>
          <div
            class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200"
          >
            <div
              class="w-7/10 shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-bg-yellow"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "About",
};
</script>

<style scoped>

</style>
