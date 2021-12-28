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
          class="timeline-event-marker w-10 h-10 flex items-center justify-center bg-purple-600 rounded-3xl"
        >
          <slot name="marker" :item="item" :index="index"></slot>
        </div>

        <div class="timeline-event-connector w-1 bg-black flex-grow">
          <slot name="connector" v-if="index !== events.length - 1"></slot>
        </div>
      </div>

      <div class="timeline-event-content p-1 flex flex-col items-center flex-1">
        <slot name="content" :item="item" :index="index"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Timeline",
  props: {
    events: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style scoped>
.timeline > div:nth-child(even) {
  flex-direction: row;
}

@screen xl {
  .timeline > div:nth-child(even) {
    flex-direction: row-reverse;
  }
}
</style>
