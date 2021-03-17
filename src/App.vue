<template>
  <div class="font-sans" id="app">
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
  /*font-family: Avenir, Helvetica, Arial, sans-serif;*/
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
