<template>
  <div id="about" class="flex flex-row mt-24 mr-44 ml-44">
    <div class="flex flex-col w-1/2 justify-center">
      <div class="flex flex-row justify-center">
        <img class="h-96 w-96" src="@/assets/images/aboutme.png" />
      </div>
    </div>
    <div class="flex flex-col w-1/2 mt-16 pr-64">
      <h1 class="text-5xl font-sans">{{ $t("about.title") }}</h1>
      <div class="text-left font-sans text-base mt-6">
        {{ $t("about.description-1") }}<br />
        {{ $t("about.description-2") }}
        {{ $t("about.description-3") }}<br /><br />
        {{ $t("about.description-4") }}
      </div>
      <div class="mt-10">
        <div class="relative pt-1">
          <div class="flex mb-2 items-center justify-between">
            <span
              class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-white bg-bg-grey"
            >
              SAP EWM
            </span>
          </div>
          <div
            class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200"
          >
            <div
              class="w-6/10 shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-bg-red"
            ></div>
          </div>
        </div>
        <div class="relative pt-1">
          <div class="flex mb-2 items-center justify-between">
            <span
              class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-white bg-bg-grey"
            >
              SAPUI5
            </span>
          </div>
          <div
            class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200"
          >
            <div
              class="w-8/10 shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-bg-blue"
            ></div>
          </div>
        </div>

        <div class="relative pt-1">
          <div class="flex mb-2 items-center justify-between">
            <span
              class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-white bg-bg-grey"
            >
              ABAP
            </span>
          </div>
          <div
            class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200"
          >
            <div
              class="w-8/10 shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-bg-orange"
            ></div>
          </div>
        </div>

        <div class="relative pt-1">
          <div class="flex mb-2 items-center justify-between">
            <span
              class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-white bg-bg-grey"
            >
              Java Script
            </span>
          </div>
          <div
            class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200"
          >
            <div
              class="w-7/10 shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-bg-yellow"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "About",
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
