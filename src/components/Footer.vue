<template>
  <div class="bg-bg-grey h-12 fixed inset-x-0 bottom-0">
    <div class="flex flex-row h-full">
      <div
        class="flex flex-col justify-center items-center w-1/2 sm:w-1/3 text-white"
      >
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
        <div
          class="flex flex-row mr-4 sm:mr-12 text-white text-center whitespace-pre"
        >
          <div class="cursor-pointer" @click="showImprint">
            {{ $t("footer.imprint") }}
            <!-- <Imprint v-model="openImprint" /> -->
          </div>
          |
          <div class="cursor-pointer" @click="showPrivacyPolicy">
            {{ $t("footer.privacyPolicy") }}
            <!-- <PrivacyPolicy v-model="openPrivacyPolicy" /> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";

//import Imprint from "./Imprint";
//import PrivacyPolicy from "./PrivacyPolicy";
import SocialIcon from "@/components/SocialIcon";

export default {
  name: "Footer",

  components: {
    //Imprint,
    //PrivacyPolicy,
    SocialIcon
  },

  setup() {
    const openImprint = ref(false);
    const openPrivacyPolicy = ref(false);
    const currentYear = ref(new Date().getFullYear());

    return { openImprint, openPrivacyPolicy, currentYear };
  },

  methods: {
    showImprint: function () {
      this.openImprint = true;
    },
    showPrivacyPolicy: function () {
      this.openPrivacyPolicy = true;
    }
  }
};
</script>
