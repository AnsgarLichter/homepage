<template>
  <div>
    <div id="content">
      <Intro />
      <About />
      <Expieriences />
      <Projects />
      <Contact />
    </div>
  </div>
</template>

<script>
import Intro from "./views/Intro.vue";
import About from "./views/About.vue";
import Projects from "./views/Projects.vue";
import Expieriences from "./views/Experiences.vue";
import Contact from "./views/Contact.vue";

export default {
  name: "App",
  components: {
    Intro,
    About,
    Projects,
    Expieriences,
    Contact,
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
