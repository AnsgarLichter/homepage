<template>
  <div id="intro">
    <div class="background">
      <div class="flex flex-row justify-center">
        <div class="flex flex-col w-1/2 self-center text-center text-white">
          <div class="flex flex-row justify-center">
            <div
              class="bg-blue-700 rounded-t-full rounded-br-full px-4 py-2 text-2xl text-white"
            >
              {{ $t("intro.hello") }}
            </div>
          </div>
          <div id="name" class="text-5xl mt-6  typewriter">
            <p class="pb-3">{{ $t("general.name") }}</p>
          </div>
          <div id="job" class="text-2xl text-white typewriter">
            <p>{{ $t("intro.jobTitle") }}</p>
          </div>
          <div id="studies" class="text-2xl text-white mt-3 typewriter">
            <p>{{ $t("intro.studies") }}</p>
          </div>
          <div class="flex flex-row justify-center mt-4">
            <div class="flex flex-col">
              <a
                class="rounded social-icon p-3 animate__animated animate__bounceInDown animate__delay-3s"
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
            </div>
            <div class="flex flex-col">
              <a
                class="rounded social-icon p-3 animate__animated animate__bounceInDown animate__delay-3s"
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
            </div>
            <div class="flex flex-col">
              <a
                class="rounded social-icon p-3 animate__animated animate__bounceInDown animate__delay-3s"
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
            </div>
            <div class="flex flex-col">
              <a 
                class="rounded social-icon p-3 animate__animated animate__bounceInDown animate__delay-3s"
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
            </div>
            <div class="flex flex-col">
              <a
                class="rounded social-icon p-3 animate__animated animate__bounceInDown animate__delay-3s"
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
            </div>
          </div>
        </div>
        <div class="flex flex-col w-1/2 py-16">
          <img
            class="rounded-full h-96 w-96 lg:h-174 md:w-174 object-cover"
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
export default {
  name: "Intro",
};
</script>

<style scoped>
.background {
  background-image: url("~@/assets/images/code.png");
}

.background > div {
  background-color: rgba(255, 255, 255, 0.5);
}

.social-icon:hover {
  background-color: black;
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
