<template>
  <Dialog :title="$t('imprint.title')" ref="dialog">
    <!--v-bind:ok-title="$t('imprint.close')"-->
    <div class="p-8">
      <h1 class="text-3xl lg:text-3xl font-bold text-center mb-4">Domaininhaber</h1>
      <div class="text-center">
        {{ $t("imprint.domain.name") }}<br />
        {{ $t("imprint.domain.academicTitle") }}<br />
        {{ $t("imprint.domain.mail") }}<br />
      </div>
      <br />
      <hr />
      <br />
      <h1 class="text-3xl lg:text-3xl font-bold text-center">
        {{ $t("imprint.disputeSettlement.title") }}
      </h1>
      <br />
      {{ $t("imprint.disputeSettlement.description") }}
      <br />
      <br />
      <hr />
      <br />
      <h1 class="text-3xl lg:text-3xl font-bold text-center mb-4">
        {{ $t("imprint.liabilityContent.title") }}
      </h1>
      {{ $t("imprint.liabilityContent.description") }}
      <br />
      <br />
      <hr />
      <br />
      <h1 class="text-3xl lg:text-3xl font-bold text-center mb-4">
        {{ $t("imprint.liabilityLinks.title") }}
      </h1>
      {{ $t("imprint.liabilityLinks.description") }}
      <br />
      <br />
      <hr />
      <br />
      <h1 class="text-3xl lg:text-3xl font-bold text-center mb-4">
        {{ $t("imprint.copyright.title") }}
      </h1>
      {{ $t("imprint.copyright.description") }}
      <br />
      <br />
      <hr />
      <br />
      <h1 class="text-3xl lg:text-3xl font-bold text-center">
        {{ $t("imprint.source.title") }}
      </h1>
      <div class="text-center">
        <a href="https://www.e-recht24.de/" target="_blank">{{
          $t("imprint.source.description")
        }}</a>
      </div>
    </div>
  </Dialog>
</template>

<script>
import { defineComponent } from "@vue/composition-api";

import { ref } from "@vue/reactivity";

import Dialog from "@/components/Dialog";

export default defineComponent({
  components: {
    Dialog
  },

  props: {
    value: {
      type: Boolean,
      "default": false
    }
  },

  setup() {
    const dialog = ref();

    return {
      dialog
    };
  },

  methods: {
    open() {
      this.dialog.open();
    }
  }
});
</script>
