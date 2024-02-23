import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/homePage.vue";

const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    component: Home,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;
