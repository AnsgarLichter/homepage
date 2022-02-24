<template>
  <div class="bg-primaryLight h-12 fixed inset-x-0 bottom-0 border-t-2 border-accent">
    <div class="flex flex-row h-full">
      <div
        class="flex flex-col justify-center items-start md:items-center w-1/2 sm:w-1/3 text-secondary"
      >
        <div class="ml-4 sm:ml-12" bg="dark" variant="dark">&copy; {{ currentYear }}</div>
      </div>

      <div class="hidden sm:flex flex-col justify-center w-1/3">
        <div class="flex flex-row justify-center space-x-3">
          <SocialIcon
            href="https://github.com/AnsgarLichter"
            :linkDescription="t('socialIcon.github.linkDescription')"
            :icon="{ prefix: 'fab', name: 'github' }"
          />
          <SocialIcon
            href="https://www.xing.com/profile/Ansgar_Lichter"
            :linkDescription="t('socialIcon.xing.linkDescription')"
            :icon="{ prefix: 'fab', name: 'xing' }"
          />
          <SocialIcon
            href="https://www.linkedin.com/in/ansgar-lichter-8532661b1"
            :linkDescription="t('socialIcon.linkedin.linkDescription')"
            :icon="{ prefix: 'fab', name: 'linkedin' }"
          />
          <SocialIcon
            href="mailto:lichteransgar@gmail.com"
            :linkDescription="t('socialIcon.mailTo.linkDescription')"
            :icon="{ prefix: 'fas', name: 'envelope' }"
          />
        </div>
      </div>

      <div
        class="flex flex-col justify-center items-center sm:items-center w-1/2 sm:w-1/3"
      >
        <div
          class="flex flex-row mr-4 sm:mr-12 text-secondary text-center whitespace-pre"
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

<script setup>
import { ref } from "@vue/reactivity";

import { useI18n } from "vue-i18n";

import Imprint from "@/components/Imprint";
import PrivacyPolicy from "@/components/PrivacyPolicy";
import SocialIcon from "@/components/SocialIcon";

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
