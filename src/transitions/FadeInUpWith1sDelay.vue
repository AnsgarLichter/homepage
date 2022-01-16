<template>
  <transition
    name="fade-in-up"
    enter-active-class="animate__animated animate__fadeInUp animate__delay-1s"
    appear
  >
    <slot></slot>
  </transition>
</template>
