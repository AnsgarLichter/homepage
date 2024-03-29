<template>
  <div class="px-3 py-2 flex flex-wrap justify-between my-navbar">
    <div class="flex flex-row navbar-brand-padding">
      <slot name="start"></slot>
    </div>

    <div
      @click="changeNavigationItemsVisibility"
      class="ml-auto lg:hidden flex items-center"
    >
      <div class="py-2 px-3 bg-primaryDark cursor-pointer rounded-lg navbar-menu-border">
        <font-awesome-icon class="fa-lg text-secondary" :icon="['fa', 'bars']" />
      </div>
    </div>

    <div class="flex-basis-100 flex-shrink flex-grow items-center lg:flex lg:flex-auto">
      <ul
        :class="[
          collapse ? 'navbar-collapse' : '',
          'flex flex-col list-none px-0 space-x-0 space-y-2 lg:flex-row lg:space-x-5 lg:space-y-0 lg:my-auto ml-auto lg:justify-end',
        ]"
        v-scroll-spy
      >
        <li
          class="text-secondary hover:text-text navbar-item"
          v-for="(item, index) of items"
          :key="index"
        >
          <slot name="item" :item="item" :index="index">
            <a
              @click="nav"
              :href="item.href"
              class="hover:no-underline"
              :aria-label="item.label"
            >
              {{ item.label }}
            </a>
          </slot>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { withDefaults } from "vue";

import { ref } from "@vue/reactivity";

export interface NavigationItem {
  label: string;
  href: string;
}

export interface NavigationBarProperties {
  items: NavigationItem[];
}

withDefaults(defineProps<NavigationBarProperties>(), {
  items: () => [],
});

const collapse = ref(true);
const changeNavigationItemsVisibility = () => {
  collapse.value = !collapse.value;
};

const nav = () => {
  collapse.value = true;
};
</script>

<style scoped>
.navbar-collapse {
  visibility: collapse;
  display: none;
}

.active,
.active:hover {
  color: var(--accent-color);
}

@screen lg {
  .navbar-collapse {
    display: inherit;
    visibility: visible;
  }
}
</style>
