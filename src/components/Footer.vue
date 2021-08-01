<template>
  <div class="bg-bg-grey h-12 fixed inset-x-0 bottom-0">
    <div class="flex flex-row h-full">
      <div class="flex flex-col w-3/4 sm:w-1/3 justify-center text-white items-start sm:items-center">
        <p class="ml-4 sm:ml-12" bg="dark" variant="dark">
          &copy; Ansgar Lichter {{ new Date().getFullYear() }}
        </p>
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

      <div class="flex flex-col justify-center items-end sm:items-center w-1/4 sm:w-1/3">
        <div class="flex flex-row mr-4 sm:mr-12 text-white">
          <div>{{$t("footer.imprint")}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>
