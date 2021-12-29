<template>
  <div class="bg-bg-grey h-12 fixed inset-x-0 bottom-0">
    <div class="flex flex-row h-full">
      <div class="flex flex-col justify-center items-center w-1/2 sm:w-1/3 text-white">
        <div class="ml-4 sm:ml-12" bg="dark" variant="dark">
          &copy; Ansgar Lichter {{ this.currentYear }}
        </div>
      </div>

      <div class="hidden sm:flex flex-col justify-center w-1/3">
        <div class="flex flex-row justify-center space-x-3">
          <SocialIcon
            href="https://github.com/AnsgarLichter"
            :icon="{ prefix: 'fab', name: 'github' }"
          />
          <SocialIcon
            href="https://twitter.com/ansgarlichter"
            :icon="{ prefix: 'fab', name: 'twitter' }"
          />
          <SocialIcon
            href="https://www.instagram.com/_ansgar_l/"
            :icon="{ prefix: 'fab', name: 'instagram' }"
          />
          <SocialIcon
            href="https://www.xing.com/profile/Ansgar_Lichter"
            :icon="{ prefix: 'fab', name: 'xing' }"
          />
          <SocialIcon
            href="https://www.linkedin.com/in/ansgar-lichter-8532661b1/"
            :icon="{ prefix: 'fab', name: 'linkedin' }"
          />
          <SocialIcon
            href="mailto:lichteransgar@gmail.com"
            :icon="{ prefix: 'fas', name: 'envelope' }"
          />
        </div>
      </div>

      <div
        class="flex flex-col justify-center items-center sm:items-center w-1/2 sm:w-1/3"
      >
        <div class="flex flex-row mr-4 sm:mr-12 text-white text-center whitespace-pre">
          <div class="cursor-pointer" @click="showImprint">
            {{ $t("footer.imprint") }}
            <Imprint ref="imprint" />
          </div>
          |
          <div class="cursor-pointer" @click="showPrivacyPolicy">
            {{ $t("footer.privacyPolicy") }}
            <PrivacyPolicy ref="privacyPolicy" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

import { ref } from "@vue/reactivity";

import Imprint from "@/components/Imprint";
import PrivacyPolicy from "@/components/PrivacyPolicy";
import SocialIcon from "@/components/SocialIcon";

export default defineComponent({
  name: "Footer",

  components: {
    Imprint,
    PrivacyPolicy,
    SocialIcon,
  },

  setup() {
    const currentYear = ref(new Date().getFullYear());
    const imprint = ref();
    const privacyPolicy = ref();

    return { currentYear, imprint, privacyPolicy };
  },

  methods: {
    showImprint: function () {
      this.imprint.open();
    },
    showPrivacyPolicy: function () {
      this.privacyPolicy.open();
    },
  },
});
</script>
