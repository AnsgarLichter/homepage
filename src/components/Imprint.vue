<template>
  <Dialog :title="t('imprint.title')" ref="dialog">
    <div class="p-8">
      <h1 class="text-3xl lg:text-3xl font-bold text-center mb-4">Domaininhaber</h1>
      <div class="text-center">
        {{ t("imprint.domain.name") }}<br />
        {{ t("imprint.domain.academicTitle") }}<br />
        {{ t("imprint.domain.mail") }}<br />
      </div>
      <br />
      <hr />
      <br />
      <h1 class="text-3xl lg:text-3xl font-bold text-center">
        {{ t("imprint.disputeSettlement.title") }}
      </h1>
      <br />
      {{ t("imprint.disputeSettlement.description") }}
      <br />
      <br />
      <hr />
      <br />
      <h1 class="text-3xl lg:text-3xl font-bold text-center mb-4">
        {{ t("imprint.liabilityContent.title") }}
      </h1>
      {{ t("imprint.liabilityContent.description") }}
      <br />
      <br />
      <hr />
      <br />
      <h1 class="text-3xl lg:text-3xl font-bold text-center mb-4">
        {{ t("imprint.liabilityLinks.title") }}
      </h1>
      {{ t("imprint.liabilityLinks.description") }}
      <br />
      <br />
      <hr />
      <br />
      <h1 class="text-3xl lg:text-3xl font-bold text-center mb-4">
        {{ t("imprint.copyright.title") }}
      </h1>
      {{ t("imprint.copyright.description") }}
      <br />
      <br />
      <hr />
      <br />
      <h1 class="text-3xl lg:text-3xl font-bold text-center">
        {{ t("imprint.source.title") }}
      </h1>
      <div class="text-center">
        <a
          class="text-blue-500 underline"
          href="https://www.e-recht24.de/"
          target="_blank"
          rel="noopener"
          :aria-label="t('imprint.source.linkDescription')"
          >{{ t("imprint.source.description") }}</a
        >
      </div>
    </div>
  </Dialog>
</template>

<script setup>
import { defineProps, defineExpose } from "vue";

import { ref } from "@vue/reactivity";

import { useI18n } from "vue-i18n";

import Dialog from "@/components/Dialog";

defineProps({
  value: {
    type: Boolean,
    default: false,
  },
});

const { t } = useI18n();

const dialog = ref();
const open = () => {
  dialog.value.open();
};

defineExpose({
  open,
});
</script>
