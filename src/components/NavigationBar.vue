<template>
  <div class="bg-bg-grey px-3 py-2 flex flex-wrap justify-between my-navbar">
    <div class="flex flex-row navbar-brand-padding">
      <slot name="start"></slot>
    </div>

    <div
      @click="changeNavigationItemsVisibility"
      class="ml-auto lg:hidden flex items-center"
    >
      <div
        class="py-2 px-3 bg-bg-grey cursor-pointer rounded-lg navbar-menu-border"
      >
        <font-awesome-icon
          class="fa-lg"
          :icon="['fa', 'bars']"
          color="rgba(255, 255, 255, 0.5)"
        />
      </div>
    </div>

    <div
      id="navbar-collapse"
      class="flex-basis-100 flex-shrink flex-grow items-center lg:flex lg:flex-auto"
    >
      <ul
        :class="[
          bCollapse ? 'navbar-collapse' : '',
          'flex flex-col list-none px-0 space-x-0 space-y-2 lg:flex-row lg:space-x-5 lg:space-y-0 lg:my-auto ml-auto lg:justify-end',
        ]"
        v-spy
      >
        <li class="navbar-item" v-for="(item, index) of items" :key="index">
          <slot name="item" :item="item" :index="index">
            <a @click="nav" :href="item.href" class="hover:no-underline">
              {{ item.label }}
            </a>
          </slot>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavigationBar",

  props: {
    items: {
      type: Array,
      "default": () => {}
    }
  },

  data() {
    return {
      bCollapse: true
    };
  },

  methods: {
    changeNavigationItemsVisibility() {
      this.bCollapse = !this.bCollapse;
    },

    nav() {
      this.bCollapse = true;
    }
  }
};
</script>

<style scoped>
.navbar-item {
  color: rgba(255, 255, 255, 0.5);
}

.navbar-item:hover {
  color: rgba(255, 255, 255, 0.75);
}

.navbar-collapse {
  visibility: collapse;
  display: none;
}

.active,
.active:hover {
  color: rgba(255, 255, 255, 1);
}

@screen lg {
  .navbar-collapse {
    display: inherit;
    visibility: visible;
  }
}
</style>
