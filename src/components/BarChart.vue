<template>
  <div class="barchart">
    <div v-for="(item, index) of items" :key="index" class="barchart-container">
      <div class="relative pt-1">
        <div class="flex mb-2 items-center justify-between">
          <span
            class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-accent bg-primaryLight border-2 border-accent"
          >
            {{ item.label }}
          </span>
        </div>
        <div
          class="overflow-hidden h-2 mb-4 text-xs flex rounded"
          :style="{ 'background-color': backgroundColor }"
        >
          <div
            class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center"
            :class="[item.styleClasses]"
            :style="{ width: item.width }"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { withDefaults } from "vue";

export interface BarChartItem {
  label: string;
  width: string;
  styleClasses?: string[];
}

export interface BarChartProperties {
  items: BarChartItem[];
  backgroundColor?: string;
}

withDefaults(defineProps<BarChartProperties>(), {
  items: () => [],
  backgroundColor: "rgba(229, 231, 235, 1)",
});
</script>

<style scoped></style>
