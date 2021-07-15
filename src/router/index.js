import { createRouter, createWebHistory } from "vue-router";
import EventList from "../views/EventList.vue";
import About from '../views/About.vue';
import Category from '../views/Category.vue';
import ShowStd from '../views/ShowStd.vue';

const routes = [
  {
    path: "/",
    name: "EventList",
    component: EventList,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/category",
    name: "Category",
    component: Category,
  },
  {
    path: "/showstd",
    name: "ShowStd",
    component: ShowStd,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
