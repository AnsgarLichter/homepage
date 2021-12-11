import { createRouter, createWebHistory } from "vue-router";
import App from "@/App.vue";

const routes = [
  {
    path: "/",
    name: "Homepage",
    component: App,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
