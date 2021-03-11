<template>
  <div id="app">
    <Header />

    <perfect-scrollbar id="content">
      <Intro />
      <About />
      <Expieriences />
      <Projects />
      <Contact />
    </perfect-scrollbar>

    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header.vue";

import Intro from "./views/Intro.vue";
import About from "./views/About.vue";
import Projects from "./views/Projects.vue";
import Expieriences from "./views/Experiences.vue";
import Contact from "./views/Contact.vue";

import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Header,
    Intro,
    About,
    Projects,
    Expieriences,
    Contact,
    Footer,
  },
};
</script>

<style>
html,
body,
#app {
  width: 100%;
  height: 100%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  overflow: hidden;
}
#content {
  top: 74px;
  position: relative;
  width: 100%;
  height: calc(100% - 74px - 48px);
  overflow-y: scroll;
}
</style>
