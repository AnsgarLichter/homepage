<template>
  <div class="bg-primaryLight h-12 fixed inset-x-0 bottom-0 border-t-2 border-accent">
    <div class="flex flex-row h-full">
      <div
        class="flex flex-col justify-center items-start md:items-center w-1/2 sm:w-1/4 md:w-1/3 text-secondary"
      >
        <div class="ml-4 sm:ml-12">&copy; {{ currentYear }}</div>
      </div>

      <div class="hidden sm:flex sm:w-1/2 flex-col justify-center md:w-1/3">
        <div class="flex flex-row justify-center space-x-3">
          <SocialIcon
            href="https://github.com/AnsgarLichter"
            :linkDescription="t('socialIcon.github.linkDescription')"
            :icon="{ prefix: 'fab', name: 'github', styleClasses: [ 'text-secondary' ] }"
          />
          <SocialIcon
            href="https://www.xing.com/profile/Ansgar_Lichter"
            :linkDescription="t('socialIcon.xing.linkDescription')"
            :icon="{ prefix: 'fab', name: 'xing', styleClasses: [ 'text-secondary' ] }"
          />
          <SocialIcon
            href="https://www.linkedin.com/in/ansgar-lichter-8532661b1"
            :linkDescription="t('socialIcon.linkedin.linkDescription')"
            :icon="{ prefix: 'fab', name: 'linkedin', styleClasses: [ 'text-secondary' ] }"
          />
          <SocialIcon
            href="mailto:lichteransgar@gmail.com"
            :linkDescription="t('socialIcon.mailTo.linkDescription')"
            :icon="{ prefix: 'fas', name: 'envelope', styleClasses: [ 'text-secondary' ] }"
          />
        </div>
      </div>

      <div
        class="flex flex-col justify-center items-center sm:items-center w-1/2 md:w-1/3"
      >
        <div
          class="flex flex-row mr-24 sm:mr-4 text-secondary text-center whitespace-pre"
        >
          <div class="cursor-pointer" @click="showImprint">
            {{ t("footer.imprint") }}
            <Imprint ref="imprint" />
          </div>
          |
          <div class="cursor-pointer" @click="showPrivacyPolicy">
            {{ t("footer.privacyPolicy") }}
            <PrivacyPolicy ref="privacyPolicy" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

import { useI18n } from "vue-i18n";

import Imprint from "@/components/Imprint.vue";
import PrivacyPolicy from "@/components/PrivacyPolicy.vue";
import SocialIcon from "@/components/SocialIcon.vue";

const { t } = useI18n();

const currentYear = ref(new Date().getFullYear());
const imprint = ref();
const privacyPolicy = ref();

const showImprint = () => {
  imprint.value.open();
};

const showPrivacyPolicy = () => {
  privacyPolicy.value.open();
};
</script>
