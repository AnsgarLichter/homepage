<template>
  <div id="intro" class="w-full h-full">
    <div class="background w-full h-full">
      <div
        class="
          w-full
          h-full
          flex flex-col
          md:flex-row
          items-center
          md:justify-center
        "
      >
        <div
          class="
            flex flex-col
            mt-4
            sm:mt-20
            md:mt-0
            sm:w-1/2 sm:self-center
            text-center text-white
          "
        >
          <div class="flex flex-row justify-center">
            <div
              class="
                bg-blue-700
                rounded-t-full rounded-br-full
                px-4
                py-2
                text-sm
                sm:text-2xl
                text-white
              "
            >
              {{ $t("intro.hello") }}
            </div>
          </div>
          <div id="name" class="text-2xl sm:text-5xl mt-2 sm:mt-6 typewriter">
            <p class="pb-1 sm:pb-3">{{ $t("general.name") }}</p>
          </div>
          <div
            id="job"
            class="text-lg sm:text-2xl text-white mt-2 sm:mt-3 typewriter"
          >
            <p>{{ $t("intro.jobTitle") }}</p>
          </div>
          <div
            id="studies"
            class="text-lg sm:text-2xl text-white mt-2 sm:mt-3 typewriter"
          >
            <p>{{ $t("intro.studies") }}</p>
          </div>
          <div class="flex flex-row justify-center mt-4">
            <SocialIcon
              href="https://github.com/AnsgarLichter"
              :icon="{ prefix: 'fab', name: 'github' }"
              :customClasses="[
                'animate__animated animate__bounceInDown animate__delay-3s',
              ]"
            />
            <SocialIcon
              href="https://twitter.com/ansgarlichter"
              :icon="{ prefix: 'fab', name: 'twitter' }"
              :customClasses="[
                'animate__animated animate__bounceInDown animate__delay-3s',
              ]"
            />
            <SocialIcon
              href="https://www.instagram.com/_ansgar_l/"
              :icon="{ prefix: 'fab', name: 'instagram' }"
              :customClasses="[
                'animate__animated animate__bounceInDown animate__delay-3s',
              ]"
            />
            <SocialIcon
              href="https://www.xing.com/profile/Ansgar_Lichter"
              :icon="{ prefix: 'fab', name: 'xing' }"
              :customClasses="[
                'animate__animated animate__bounceInDown animate__delay-3s',
              ]"
            />
            <SocialIcon
              href="https://www.linkedin.com/in/ansgar-lichter-8532661b1/"
              :icon="{ prefix: 'fab', name: 'linkedin' }"
              :customClasses="[
                'animate__animated animate__bounceInDown animate__delay-3s',
              ]"
            />
            <SocialIcon
              href="mailto:lichteransgar@gmail.com"
              :icon="{ prefix: 'fas', name: 'envelope' }"
              :customClasses="[
                'animate__animated animate__bounceInDown animate__delay-3s',
              ]"
            />
          </div>
        </div>
        <div class="flex flex-col py-8 sm:py-16">
          <img
            class="
              rounded-full
              h-36
              w-36
              object-cover
              md:h-72 md:w-72
              lg:h-96 lg:w-96
              xl:h-128 xl:w-128
            "
            src="@/assets/images/me.jpg"
            alt="Ansgar Lichter"
            data-holder-rendered="true"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SocialIcon from "../components/SocialIcon";

export default {
  name: "Intro",
  components: {
    SocialIcon,
  },
};
</script>

<style scoped>
.background {
  background-image: url("~@/assets/images/code.png");
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

/* The typing effect */
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
