<template>
  <div id="intro">
    <div class="background">
      <div class="flex flex-row justify-center">
        <div class="flex flex-col w-1/2 self-center text-center text-white">
          <h1 class="text-5xl">{{ $t("general.name") }}</h1>
          <h2 class="text-2xl text-white mt-3">{{ $t("intro.jobTitle") }}</h2>
          <h3 class="text-2xl text-white mt-3">
            {{ $t("intro.studies") }}
          </h3>
          <div class="flex flex-row justify-center mt-4">
            <div class="flex flex-col">
              <a
                class="rounded social-icon p-3"
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
                class="rounded social-icon p-3"
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
                class="rounded social-icon p-3"
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
                class="rounded social-icon p-3"
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
                class="rounded social-icon p-3"
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

.social-icon:hover .fa-github {
  color: hsla(0, 0%, 100%, 0.7);
}

.social-icon:hover .fa-twitter {
  color: #1da1f2;
}

.social-icon:hover .fa-instagram {
  background: radial-gradient(
    circle at 30% 107%,
    #fdf497 0%,
    #fdf497 5%,
    #fd5949 45%,
    #d6249f 60%,
    #285aeb 90%
  );
  background: -webkit-radial-gradient(
    circle at 30% 107%,
    #fdf497 0%,
    #fdf497 5%,
    #fd5949 45%,
    #d6249f 60%,
    #285aeb 90%
  );
}

.social-icon:hover .fa-xing {
  color: #126576;
}

.social-icon:hover .fa-linkedin {
  color: #2867b2;
}
</style>
