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
        <FeaturedProjects />
        <OtherProjects />
      </div>
    </div>

    <Footer />
  </div>
</template>

<script setup lang="ts">
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

import Intro from "@/views/Intro.vue";
import About from "@/views/About.vue";
import FeaturedProjects from "@/views/FeaturedProjects.vue";
import OtherProjects from "@/views/OtherProjects.vue";
import Expieriences from "@/views/Experiences.vue";
</script>

<style>
:root {
  --primary-color: #f2f2f2;
  --primary-color-light: #ffffff;
  --primary-color-dark: #b9baba;
  --secondary-color: #4d4d4d;
  --secondary-color-light: #17191a;
  --secondary-color-dark: #707a80;
  --accent-color: #007fad;
  --background-color: rgba(255, 255, 255, 0.4);
}

:root.dark {
  --primary-color: #000000;
  --primary-color-light: #232324;
  --primary-color-dark: #434445;
  --secondary-color: #c2c2c2;
  --secondary-color-light: #ffffff;
  --secondary-color-dark: #b8c8d9;
  --accent-color: #007fad;
  --background-color: rgba(20, 20, 20, 0.6);
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
