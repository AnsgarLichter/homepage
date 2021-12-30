<template>
  <Dialog :title="$t('imprint.title')" ref="dialog">
    <div class="p-8">
      <h1 class="text-3xl lg:text-3xl font-bold text-center mb-4">
        {{ $t("privacyPolicy.overview.title") }}
      </h1>
      <h2 class="text-2xl lg:text-2xl font-bold">
        {{ $t("privacyPolicy.overview.generalInformation.title") }}
      </h2>
      <div>
        {{ $t("privacyPolicy.overview.generalInformation.description") }}
      </div>
      <br />
      <h2 class="text-2xl lg:text-2xl font-bold">
        {{ $t("privacyPolicy.overview.dataCollection.title") }}
      </h2>
      <h3 class="text-lg lg:text-lg font-bold">
        {{ $t("privacyPolicy.overview.dataCollection.responsiblity.title") }}
      </h3>
      <div>
        {{ $t("privacyPolicy.overview.dataCollection.responsiblity.description") }}
      </div>
      <br />
      <h3 class="text-lg lg:text-lg font-bold">
        {{ $t("privacyPolicy.overview.dataCollection.how.title") }}
      </h3>
      <div>
        {{ $t("privacyPolicy.overview.dataCollection.how.description") }}
      </div>
      <br />
      <h3 class="text-lg lg:text-lg font-bold">
        {{ $t("privacyPolicy.overview.dataCollection.use.title") }}
      </h3>
      <div>
        {{ $t("privacyPolicy.overview.dataCollection.use.description") }}
      </div>
      <br />
      <h3 class="text-lg lg:text-lg font-bold">
        {{ $t("privacyPolicy.overview.dataCollection.rights.title") }}
      </h3>
      <div>
        {{ $t("privacyPolicy.overview.dataCollection.rights.description") }}
      </div>
      <br />
      <hr />
      <br />
      <h1 class="text-3xl lg:text-3xl font-bold text-center mb-4">
        {{ $t("privacyPolicy.cdn.title") }}
      </h1>
      <h2 class="text-2xl lg:text-2xl font-bold">
        {{ $t("privacyPolicy.cdn.hosting.title") }}
      </h2>
      {{ $t("privacyPolicy.cdn.hosting.description1") }}<br />
      {{ $t("privacyPolicy.cdn.hosting.description2") }}
      <ul class="text-center">
        <li>{{ $t("privacyPolicy.cdn.hosting.partner.name") }}</li>
        <li>{{ $t("privacyPolicy.cdn.hosting.partner.street") }}</li>
        <li>{{ $t("privacyPolicy.cdn.hosting.partner.city") }}</li>
      </ul>
      <br />
      <h3 class="text-lg lg:text-lg font-bold">
        {{ $t("privacyPolicy.cdn.contract.title") }}
      </h3>
      <div>
        {{ $t("privacyPolicy.cdn.contract.description") }}
      </div>
      <br />
      <hr />
      <br />
      <h1 class="text-3xl lg:text-3xl font-bold text-center mb-4">
        {{ $t("privacyPolicy.general.title") }}
      </h1>
      <h2 class="text-2xl lg:text-2xl font-bold">
        {{ $t("privacyPolicy.general.protection.title") }}
      </h2>
      <div>
        {{ $t("privacyPolicy.general.protection.description1") }}<br /><br />
        {{ $t("privacyPolicy.general.protection.description2") }}<br /><br />
        {{ $t("privacyPolicy.general.protection.description3") }}
      </div>
      <br />
      <h2 class="text-2xl lg:text-2xl font-bold">
        {{ $t("privacyPolicy.general.responsibility.title") }}
      </h2>
      <div>
        {{ $t("privacyPolicy.general.responsibility.description1") }}
        <ul class="text-center">
          <li>{{ $t("privacyPolicy.general.responsibility.name") }}</li>
          <li>
            {{ $t("privacyPolicy.general.responsibility.mailLabel") }}
            <a href="mailto:lichteransgar@gmai.com">{{
              $t("privacyPolicy.general.responsibility.mail")
            }}</a>
          </li>
        </ul>
        <br />
        {{ $t("privacyPolicy.general.responsibility.description2") }}
      </div>
      <br />
      <h2 class="text-2xl lg:text-2xl font-bold">
        {{ $t("privacyPolicy.general.storagePeriod.title") }}
      </h2>
      <div>
        {{ $t("privacyPolicy.general.storagePeriod.description") }}
      </div>
      <br />
      <h2 class="text-2xl lg:text-2xl font-bold">
        {{ $t("privacyPolicy.general.revocation.title") }}
      </h2>
      <div>
        {{ $t("privacyPolicy.general.revocation.description") }}
      </div>
      <br />
      <h2 class="text-2xl lg:text-2xl font-bold">
        {{ $t("privacyPolicy.general.rightToObject.title") }}
      </h2>
      <div>
        {{ $t("privacyPolicy.general.rightToObject.description") }}
      </div>
      <br />
      <h2 class="text-2xl lg:text-2xl font-bold">
        {{ $t("privacyPolicy.general.rightToComplain.title") }}
      </h2>
      <div>
        {{ $t("privacyPolicy.general.rightToComplain.description") }}
      </div>
      <br />
      <h2 class="text-2xl lg:text-2xl font-bold">
        {{ $t("privacyPolicy.general.dataPortability.title") }}
      </h2>
      <div>
        {{ $t("privacyPolicy.general.dataPortability.description") }}
      </div>
      <br />
      <h2 class="text-2xl lg:text-2xl font-bold">
        {{ $t("privacyPolicy.general.encryption.title") }}
      </h2>
      <div>
        {{ $t("privacyPolicy.general.encryption.description") }}
      </div>
      <br />
      <h2 class="text-2xl lg:text-2xl font-bold">
        {{ $t("privacyPolicy.general.protectionRights.title") }}
      </h2>
      <div>
        {{ $t("privacyPolicy.general.protectionRights.description") }}
      </div>
      <br />
      <h2 class="text-2xl lg:text-2xl font-bold">
        {{ $t("privacyPolicy.general.restrictionOfProcessing.title") }}
      </h2>
      <div>
        {{ $t("privacyPolicy.general.restrictionOfProcessing.description1") }}<br /><br />
        {{ $t("privacyPolicy.general.restrictionOfProcessing.description2") }}<br /><br />
        {{ $t("privacyPolicy.general.restrictionOfProcessing.description3") }}<br /><br />
        {{ $t("privacyPolicy.general.restrictionOfProcessing.description4") }}<br /><br />
        {{ $t("privacyPolicy.general.restrictionOfProcessing.description5") }}<br /><br />
        {{ $t("privacyPolicy.general.restrictionOfProcessing.description6") }}
      </div>
      <br />
      <hr />
      <br />
      <h1 class="text-3xl lg:text-3xl font-bold text-center mb-4">
        {{ $t("privacyPolicy.dataAquistion.title") }}
      </h1>
      <h2 class="text-2xl lg:text-2xl font-bold">
        {{ $t("privacyPolicy.dataAquistion.logs.title") }}
      </h2>
      {{ $t("privacyPolicy.dataAquistion.logs.description") }}
      <ul class="list-disc pl-4">
        <li>{{ $t("privacyPolicy.dataAquistion.logs.list1") }}</li>
        <li>{{ $t("privacyPolicy.dataAquistion.logs.list2") }}</li>
        <li>{{ $t("privacyPolicy.dataAquistion.logs.list3") }}</li>
        <li>{{ $t("privacyPolicy.dataAquistion.logs.list4") }}</li>
        <li>{{ $t("privacyPolicy.dataAquistion.logs.list5") }}</li>
        <li>{{ $t("privacyPolicy.dataAquistion.logs.list6") }}</li>
      </ul>
      {{ $t("privacyPolicy.dataAquistion.logs.description2") }}
      <br />
      <br />
      <hr />
      <br />
      <h1 class="text-3xl lg:text-3xl font-bold text-center mb-4">
        {{ $t("privacyPolicy.plugins.title") }}
      </h1>
      <h2 class="text-2xl lg:text-2xl font-bold">
        {{ $t("privacyPolicy.plugins.fontAwesome.title") }}
      </h2>
      {{ $t("privacyPolicy.plugins.fontAwesome.description") }}
      <a href="https://fontawesome.com/privacy" target="_blank">
        {{ $t("privacyPolicy.plugins.fontAwesome.description2") }}
      </a>
      {{ $t("privacyPolicy.plugins.fontAwesome.description3") }}
      <br />
      <br />
      <hr />
      <br />
      <h1 class="text-3xl lg:text-3xl font-bold text-center">
        {{ $t("privacyPolicy.source.title") }}
      </h1>
      <div class="text-center">
        <a href="https://www.e-recht24.de/" target="_blank">{{
          $t("privacyPolicy.source.description")
        }}</a>
      </div>
    </div>
  </Dialog>
</template>

<script setup>
import { defineProps, defineExpose } from "vue";

import { ref } from "@vue/reactivity";

import Dialog from "@/components/Dialog";

defineProps({
  value: {
    type: Boolean,
    default: false,
  },
});

const dialog = ref();
const open = () => {
  dialog.value.open();
};

defineExpose({
  open,
});
</script>

<style scoped></style>
