<template>
  <div class="bg-bg-grey h-12 fixed inset-x-0 bottom-0">
    <div class="flex flex-row h-full">
      <div class="flex flex-col w-1/3 justify-center text-white">
        <p class="ml-12" bg="dark" variant="dark">
          &copy; Ansgar Lichter {{ new Date().getFullYear() }}
        </p>
      </div>

      <div class="flex flex-col justify-center w-1/3">
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
        </div>
      </div>

      <div class="flex flex-col justify-center w-1/3">
        <div class="flex flex-row justify-end mr-12 text-white">
          <div>{{$t("footer.imprint")}}</div>
          <div>{{$t("footer.delimiter")}}</div>
          <div>{{$t("footer.privacyPolicy")}}</div>
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
