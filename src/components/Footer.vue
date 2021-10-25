<template>
  <div class="bg-bg-grey h-12 fixed inset-x-0 bottom-0">
    <div class="flex flex-row h-full">
      <div
        class="
          flex 
          flex-col
          justify-center
          items-center
          w-1/2
          sm:w-1/3
          text-white
        "
      >
        <div class="ml-4 sm:ml-12" bg="dark" variant="dark">
          &copy; Ansgar Lichter {{ new Date().getFullYear() }}
        </div>
      </div>

      <div class="hidden sm:flex flex-col justify-center w-1/3">
        <div class="flex flex-row justify-center space-x-3">
          <a
            class="social-icon"
            href="https://github.com/AnsgarLichter"
            target="_blank"
            rel="noopener noreferrer"
          >
            <font-awesome-icon
              class="fa-lg"
              :icon="['fab', 'github']"
              color="white"
            />
          </a>
          <a
            class="social-icon"
            href="https://twitter.com/ansgarlichter"
            target="_blank"
            rel="noopener noreferrer"
          >
            <font-awesome-icon
              class="fa-lg"
              :icon="['fab', 'twitter']"
              color="white"
            />
          </a>
          <a
            class="social-icon"
            href="https://www.instagram.com/_ansgar_l/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <font-awesome-icon
              class="fa-lg"
              :icon="['fab', 'instagram']"
              color="white"
            />
          </a>
          <a
            class="social-icon"
            href="https://www.xing.com/profile/Ansgar_Lichter"
            target="_blank"
            rel="noopener noreferrer"
          >
            <font-awesome-icon
              class="fa-lg"
              :icon="['fab', 'xing']"
              color="white"
            />
          </a>
          <a
            class="social-icon"
            href="https://www.linkedin.com/in/ansgar-lichter-8532661b1/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <font-awesome-icon
              class="fa-lg"
              :icon="['fab', 'linkedin']"
              color="white"
            />
          </a>
          <a
            class="social-icon"
            href="mailto:lichteransgar@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <font-awesome-icon
              class="fa-lg"
              :icon="['fas', 'envelope']"
              color="white"
            />
          </a>
        </div>
      </div>

      <div
        class="
          flex 
          flex-col
          justify-center
          items-center
          sm:items-center
          w-1/2
          sm:w-1/3
        "
      >
        <div class="flex flex-row mr-4 sm:mr-12 text-white text-center whitespace-pre">
          <div @click="showImprint">
            {{ $t("footer.imprint") }}
            <Imprint v-model="openImprint" />
          </div>
          |
          <div @click="showPrivacyPolicy">
            {{ $t("footer.privacyPolicy") }}
            <PrivacyPolicy v-model="openPrivacyPolicy" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Imprint from "./Imprint.vue";
import PrivacyPolicy from "./PrivacyPolicy.vue";

export default {
  name: "Footer",

  data() {
    return {
      openImprint: false,
      openPrivacyPolicy: false,
    };
  },

  methods: {
    showImprint: function () {
      this.openImprint = true;
    },
    showPrivacyPolicy: function () {
      this.openPrivacyPolicy = true;
    },
  },

  components: {
    Imprint,
    PrivacyPolicy,
  },
};
</script>
