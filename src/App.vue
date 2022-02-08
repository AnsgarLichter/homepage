<template>
  <div class="bg-primary">
    <Header />

    <div class="content a-scroll-container">
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
    </div>

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
:root {
  --primary-color: #0a192f;
  --primary-color-light: #112240;
  --primary-color-dark: #020c1b;
  --secondary-color: #8892b0;
  --secondary-color-light: #a8b2d1;
  --secondary-color-dark: #495670;
  --accent-color: #88ffff;

  /* --text-and-icons: #ffffff;
  --primary-text: #ccd6f6;
  --secondary-text: #a8b2d1;
  --divider-color: #bdbdbd; */
}
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
  overflow-x: hidden;
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
  color: hsla(0, 0%, 100%, 0.7);
}
</style>
