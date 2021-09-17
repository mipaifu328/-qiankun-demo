<!--
 * @Descripttion: 
 * @version: 1.0
 * @Author: mipaifu328
 * @Date: 2021-09-16 09:28:41
 * @LastEditors: mipaifu328
 * @LastEditTime: 2021-09-17 15:12:46
-->
<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Vue 主程序页面" />
  <div>user.name = {{ user.name }} - <button @click="change">张三</button></div>
  <ul>
    <li @click="onChangePage('/app-vue', $event)">vue微服务</li>
    <li @click="onChangePage('/app-react', $event)">react微服务</li>
  </ul>
  <div id="subView"></div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import store from "./store";
import { computed } from "vue";

export default {
  name: "App",
  components: {
    HelloWorld,
  },
  methods: {
    onChangePage(path, e) {
      this.routerGO(path, e.target.innerText, {
        dataType: "vue",
        state: "offline",
      });
    },
    routerGO(url = "/", title, data = {}) {
      window.history.pushState(data, title, url);
    },
  },
  setup() {
    const user = computed(() => {
      console.log("------");
      return store.getGlobalState().user;
    });
    const change = () => {
      store.setGlobalState({
        user: {
          name: "张三",
        },
      });
    };
    return {
      user,
      change,
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#subView {
  width: 80vw;
  height: 40vh;
  margin: 1rem auto;
  overflow: auto;
  border: 1px solid #ccc;
}
</style>
