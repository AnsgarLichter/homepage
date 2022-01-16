<template>
  <transition
    name="bounce-in-down-with-3s-delay"
    enter-active-class="animate__animated animate__bounceInDown animate__delay-3s"
    appear
  >
    <slot></slot>
  </transition>
</template>
