<template>
  <div id="header" class="fixed inset-x-0 top-0">
    <b-navbar
      class="bg-bg-grey"
      id="navigationbar"
      toggleable="lg"
      type="dark"
      fixed
    >
      <b-navbar-brand href="#" class="flex flex-row">
        <img
          src="@/assets/images/tabicon.png"
          class=" h-12 w-12 sm:mr-6 sm:ml-8"
          alt="Ansgar Lichter"
        />
        <div class="flex flex-col justify-center text-white text-lg">
          {{$t("general.name")}}
        </div>
      </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto" v-b-scrollspy:content>
          <b-nav-item href="#intro">{{ $t("navigation.intro") }}</b-nav-item>
          <b-nav-item href="#about">{{ $t("navigation.about") }}</b-nav-item>
          <b-nav-item href="#experiences">{{ $t("navigation.experiences") }}</b-nav-item>
          <b-nav-item href="#projects">{{
            $t("navigation.projects")
          }}</b-nav-item>
          <b-nav-item href="#contact">{{
            $t("navigation.contact")
          }}</b-nav-item>
          <b-nav-item v-if="this.$i18n.locale === 'en'" @click="switchLocale">
            <img class="h-6 w-12" src="@/assets/images/GB.png" />
          </b-nav-item>
          <b-nav-item v-if="this.$i18n.locale === 'de'" @click="switchLocale">
            <img class="h-6 w-12" src="@/assets/images/de.png" />
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "Header",
  data: function () {
    return {};
  },
  mounted() {
    setInterval(this.updateScroll, 1);
    this.$i18n.locale = "de";
  },
  methods: {
    switchLocale() {
      this.$i18n.locale === "de"
        ? (this.$i18n.locale = "en")
        : (this.$i18n.locale = "de");
    },
  },
};
</script>
