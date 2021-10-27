<template>
  <div class="relative pt-1">
    <div class="flex mb-2 items-center justify-between">
      <span
        class="
          text-xs
          font-semibold
          inline-block
          py-1
          px-2
          uppercase
          rounded-full
          text-white
          bg-bg-grey
        "
      >
        {{ $t("about.technologies.ewm") }}
      </span>
    </div>
    <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
      <div
        class="
          w-6/10
          shadow-none
          flex flex-col
          text-center
          whitespace-nowrap
          text-white
          justify-center
          bg-bg-red
        "
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BarChart",
  props: {
    data: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style scoped>
</style>
