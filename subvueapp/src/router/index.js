/*
 * @Descripttion:
 * @version: 1.0
 * @Author: mipaifu328
 * @Date: 2021-09-16 10:21:58
 * @LastEditors: mipaifu328
 * @LastEditTime: 2021-09-16 15:46:52
 */
import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);
const routes = [
  {
    name: "Home",
    path: "/",
    component: () => import("../components/Home.vue"),
  },
  {
    name: "About",
    path: "/about",
    component: () => import("../components/About.vue"),
  },
];
export default routes;
