/*
 * @Descripttion:
 * @version: 1.0
 * @Author: mipaifu328
 * @Date: 2021-09-16 09:44:00
 * @LastEditors: mipaifu328
 * @LastEditTime: 2021-09-17 15:30:32
 */
import Vue from "vue";
import App from "./App.vue";
import "./public-path";
import VueRouter from "vue-router";
import routes from "./router";
import store from "./store/index";
import globalRegister from "./store/global-register";

Vue.config.productionTip = false;

let router = null;
let instance = null;
function render(props = {}) {
  const { container } = props;
  router = new VueRouter({
    base: window.__POWERED_BY_QIANKUN__ ? "/app-vue/" : "/",
    mode: "history",
    routes,
  });

  instance = new Vue({
    router,
    store,
    render: (h) => h(App),
  }).$mount(container ? container.querySelector("#app") : "#app");
}

// 独立运行时
if (!window.__POWERED_BY_QIANKUN__) {
  globalRegister(store);
  // 存储用户信息到global module
  const userInfo = { name: "单独运行李四" };
  store.commit("global/setGlobalState", { user: userInfo });
  render();
}

export async function bootstrap() {
  console.log("[vue] vue app bootstraped");
}
export async function mount(props) {
  console.log("[vue] props from main framework", props);
  globalRegister(store, props);
  props.onGlobalStateChange((state, prev) => {
    console.log("数据变化，来自子程序");
    console.log(state, prev);
  });
  render(props);
}
export async function unmount() {
  instance.$destroy();
  instance.$el.innerHTML = "";
  instance = null;
  router = null;
}
