<template>
  <div id="app">
    <Header />

    <perfect-scrollbar id="content">
      <About />
      <Projects />
      <Skills />
      <Contact />
    </perfect-scrollbar>

    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header.vue";

import About from "./components/About.vue";
import Projects from "./components/Projects.vue";
import Skills from "./components/Skills.vue";
import Contact from "./components/Contact.vue";

import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Header,
    About,
    Projects,
    Skills,
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
