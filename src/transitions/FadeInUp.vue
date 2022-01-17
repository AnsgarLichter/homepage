<template>
  <transition
    name="fade-in-up"
    enter-active-class="animate__animated animate__fadeInUp"
    appear
  >
    <slot></slot>
  </transition>
</template>
