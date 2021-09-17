/*
 * @Descripttion:
 * @version: 1.0
 * @Author: mipaifu328
 * @Date: 2021-09-16 09:28:41
 * @LastEditors: mipaifu328
 * @LastEditTime: 2021-09-17 11:02:46
 */
import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";

import { registerMicroApps, setDefaultMountApp, start } from "qiankun";
let apps = [
  {
    name: "vueApp",
    entry: "//127.0.0.1:9091",
    container: "#subView",
    activeRule: "/app-vue",
    props: {
      data: "msg from vue",
      getGlobalState: store.getGlobalState,
    },
  },
  {
    name: "reactApp",
    entry: "//127.0.0.1:9092",
    container: "#subView",
    activeRule: "/app-react",
    props: {
      data: "msg from react",
    },
  },
];
registerMicroApps(apps, {
  beforeLoad: [
    (app) => {
      console.log(app, "beforeLoad");
    },
  ],
  beforeMount: [
    (app) => {
      console.log(app, "beforeMount");
    },
  ],
  afterMount: [
    (app) => {
      console.log(app, "afterMount");
    },
  ],
});

// 设置默认进入的子应用
setDefaultMountApp("/app-vue");

// 启动 qiankun
start({ sandbox: { strictStyleIsolation: true } });

createApp(App).mount("#app");
