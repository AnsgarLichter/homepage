/* eslint-env node */
import "@rushstack/eslint-patch/modern-module-resolution";

export default {
  "root": true,
  "extends": [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/eslint-config-typescript/recommended"
  ],
  "env": {
    "vue/setup-compiler-macros": true
  }
};