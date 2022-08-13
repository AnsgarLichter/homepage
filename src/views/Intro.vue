<template>
  <div class="w-full h-full">
    <div class="background w-full h-full">
      <div class="w-full h-full flex flex-col items-center justify-center md:flex-row">
        <div
          class="flex flex-col mt-4 sm:mt-20 md:mt-0 sm:w-1/2 sm:self-center text-center text-white"
        >
          <div class="flex flex-row justify-center">
            <div
              class="bg-primaryLight rounded-t-full rounded-br-full px-4 py-2 text-sm sm:text-2xl text-secondary"
            >
              {{ t("intro.hello") }}
            </div>
          </div>
          <div id="name" class="text-2xl sm:text-5xl mt-2 sm:mt-6 typewriter">
            <p class="pb-1 sm:pb-3">{{ t("general.name") }}</p>
          </div>
          <div id="job" class="text-lg sm:text-2xl text-text mt-2 sm:mt-3 typewriter">
            <p>{{ t("intro.jobTitle") }}</p>
          </div>
          <div id="studies" class="text-lg sm:text-2xl text-text mt-2 sm:mt-3 typewriter">
            <p>{{ t("intro.studies") }}</p>
          </div>
          <div class="flex flex-row justify-center mt-4">
            <BounceInDown>
              <SocialIcon
                href="https://github.com/AnsgarLichter"
                :linkDescription="t('socialIcon.github.linkDescription')"
                :icon="{
                  prefix: 'fab',
                  name: 'github',
                }"
              />
            </BounceInDown>
            <BounceInDown>
              <SocialIcon
                href="https://www.xing.com/profile/Ansgar_Lichter"
                :linkDescription="t('socialIcon.xing.linkDescription')"
                :icon="{ prefix: 'fab', name: 'xing' }"
              />
            </BounceInDown>
            <BounceInDown>
              <SocialIcon
                href="https://www.linkedin.com/in/ansgar-lichter-8532661b1"
                :linkDescription="t('socialIcon.linkedin.linkDescription')"
                :icon="{ prefix: 'fab', name: 'linkedin' }"
              />
            </BounceInDown>
            <BounceInDown>
              <SocialIcon
                href="mailto:lichteransgar@gmail.com"
                :linkDescription="t('socialIcon.mailTo.linkDescription')"
                :icon="{ prefix: 'fas', name: 'envelope' }"
              />
            </BounceInDown>
          </div>
        </div>
        <div class="flex flex-col py-8 sm:py-16">
          <Image
            :styleClasses="[
              'rounded-full',
              'h-36',
              'w-36',
              'object-cover',
              'md:h-72',
              'md:w-72',
              'lg:h-96',
              'lg:w-96',
              'xl:h-128',
              'xl:w-128',
            ]"
            :src=MeUrl
            :alt="t('general.name')"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts" lang="ts">
import { useI18n } from "vue-i18n";

import SocialIcon from "@/components/SocialIcon.vue";
import Image from "@/components/Image.vue";

import BounceInDown from "@/transitions/BounceInDownWith3sDelay.vue";

import MeUrl from "@/assets/images/me.webp";

const { t } = useI18n();
</script>

<style scoped>
.background {
  background-image: url("src/assets/images/code.webp");
  background-repeat: no-repeat;
  background-size: cover;
}

.background > div {
  background-color: rgba(255, 255, 255, 0.5);
}

.typewriter > p {
  white-space: nowrap;
  overflow: hidden;
  margin: 0 auto;
  animation: typing 2s steps(40, end);
  animation-fill-mode: forwards;
}

.typewriter:nth-child(2) > p {
  opacity: 0;
  animation-delay: 0.4s;
}

.typewriter:nth-child(3) > p {
  opacity: 0;
  animation-delay: 1s;
}

.typewriter:nth-child(4) > p {
  opacity: 0;
  animation-delay: 2s;
}

@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
  1% {
    opacity: 1;
  }
  100% {
    opacity: 1;
  }
}
</style>
