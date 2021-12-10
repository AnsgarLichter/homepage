<template>
  <div>
    <div id="header">
      <Header />
    </div>

    <div id="content">
      <Intro />
      <About />
      <Expieriences />
      <Projects />
    </div>

    <div id="footer">
      <Footer />
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

import Intro from "@/views/Intro.vue";
import About from "@/views/About.vue";
import Projects from "@/views/Projects.vue";
import Expieriences from "@/views/Experiences.vue";

export default {
  name: "App",
  components: {
    Header,
    Footer,
    Intro,
    About,
    Projects,
    Expieriences,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
