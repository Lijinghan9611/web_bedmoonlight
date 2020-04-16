import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import h5page from "../views/h5page.vue";
import pcpage from "../views/pcpage.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      title: "BedMoonlight" // 标题设置
    }
  },
  {
    path: "/about",
    name: "About",
    component: About
  },
  {
    path: "/h5page/:id",
    name: "h5page",
    component: h5page
  },
  {
    path: "/pcpage/:id",
    name: "pcpage",
    component: pcpage
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
