<template>
  <div class="timeline flex flex-col">
    <div
      v-for="(item, index) of events"
      :key="index"
      class="timeline-container flex relative"
    >
      <div
        class="timeline-event-opposite p-1 flex flex-col items-center flex-0 xl:flex-1"
      >
        <slot name="opposite" :item="item" :index="index"> </slot>
      </div>

      <div
        class="timeline-event-separator flex flex-col items-center flex-grow-0 flex-shrink"
      >
        <div
          v-if="item.icon"
          class="timeline-event-marker w-10 h-10 flex items-center justify-center bg-accent rounded-3xl"
        >
          <slot name="marker" :item="item" :index="index"> </slot>
        </div>

        <div
          v-else
          class="timeline-event-marker w-10 h-10 flex items-center justify-center"
        >
          <slot name="connector" v-if="index !== events.length - 1">
            <div class="timeline-event-connector w-1 h-10 bg-accent" />
          </slot>
        </div>

        <slot name="connector" v-if="index !== events.length - 1">
          <div class="timeline-event-connector w-1 bg-accent flex-grow" />
        </slot>
      </div>

      <div class="timeline-event-content p-1 flex flex-col items-center flex-1">
        <slot name="content" :item="item" :index="index"></slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { withDefaults, defineProps } from "vue";

import { Icon } from "@/fontAwesomeIcons";

export interface TimelineEvent<T> {
  icon?: Icon;
  content: T;
}
export interface TimelineProperties<T> {
  events: TimelineEvent<T>[];
}

withDefaults(defineProps<TimelineProperties<any>>(), {
  events: () => [],
});
</script>

<style scoped>
@screen xl {
  .timeline > div:nth-child(even) {
    flex-direction: row;
  }

  .timeline > div:nth-child(odd) {
    flex-direction: row-reverse;
  }
}
</style>
