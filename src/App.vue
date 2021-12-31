<template>
  <div>
    <Header />

    <perfect-scrollbar class="content">
      <div id="intro" class="w-full h-full">
        <Intro />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="experiences">
        <Expieriences />
      </div>
      <div id="projects">
        <Projects />
      </div>
    </perfect-scrollbar>

    <Footer />
  </div>
</template>

<script setup>
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import Intro from "@/views/Intro.vue";
import About from "@/views/About.vue";
import Projects from "@/views/Projects.vue";
import Expieriences from "@/views/Experiences.vue";
</script>

<style>
html {
  overflow: hidden;
}

html,
body,
#app,
#app > div {
  width: 100%;
  height: 100%;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

.content {
  position: relative;
  top: 74px;
  bottom: 48px;
  height: calc(100% - 74px - 48px);
  overflow-y: auto;
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

.social-icon:hover .fa-envelope {
  color: #495057;
}
</style>
