import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
import Services from "../pages/Services.vue";
import Portfolio from "../pages/Portfolio.vue";
import AboutUs from "../pages/AboutUs.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/services",
    name: "services",
    component: Services,
  },
  {
    path: "/portfolio",
    name: "portfolio",
    component: Portfolio,
  },
  {
    path: "/about",
    name: "about",
    component: AboutUs,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;
