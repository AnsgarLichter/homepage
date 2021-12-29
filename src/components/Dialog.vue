<template>
  <Teleport to="body">
    <div class="a-dialog-outer" ref="dialog" @click="close()">
      <div class="a-dialog flex flex-col" @click.stop="">
        <div
          class="
            a-header
            flex flex-row
            justify-center
            items-center
            flex-shrink
            flex-basis-auto
          "
        >
          <slot name="header">
            <span class="a-dialog-title" v-if="title">{{ title }}</span>
          </slot>
          <div class="a-header-icons flex items-end">
            <!--TODO: Close button and maximize button -->
            Close-Button
          </div>
        </div>
        <div class="a-content">
          <slot></slot>
        </div>
        <div class="a-footer">
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </Teleport>
</template>
<script>
import { defineComponent } from "vue";

import { ref } from "@vue/reactivity";

export default defineComponent({
  props: {
    title: {
      type: String,
      "default": ""
    }
  },

  setup() {
    const dialog = ref();

    const getClassList = () => {
      return dialog.value.classList;
    };

    const open = () => {
      const classList = getClassList();

      classList.add("a-dialog-open");
    };

    const close = () => {
      const classList = getClassList();

      classList.remove("a-dialog-open");
    };

    const onOuterDialogClicked = (event) => {
      debugger;
    };

    return {
      dialog,
      open,
      close,
      onOuterDialogClicked
    };
  }
});
</script>

<style scoped>
.a-dialog-outer {
  display: none;
  position: fixed;
  z-index: 1000;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
}

.a-dialog {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  height: 90%;
  position: fixed;
  z-index: 1050;
  overflow-y: auto;
  background-color: white !important;
}

.a-dialog-open {
  display: flex !important;
}
</style>
