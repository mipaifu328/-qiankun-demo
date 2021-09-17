<!--
 * @Descripttion: 
 * @version: 1.0
 * @Author: mipaifu328
 * @Date: 2021-09-16 09:44:00
 * @LastEditors: mipaifu328
 * @LastEditTime: 2021-09-17 15:10:43
-->
<template>
  <div id="app">
    <img class="image" alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="这个是vue子服务系统" />
    <div>
      user.name = {{ user.name }} - <button @click="update">王五</button>
    </div>
    <p>
      <router-link to="/">Go to Home</router-link>
      <router-link to="/about">Go to About</router-link>
    </p>
    <!-- 路由出口 -->
    <!-- 路由匹配到的组件将渲染在这里 -->
    <router-view></router-view>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import { mapState, mapActions } from "vuex";

export default {
  name: "App",
  components: {
    HelloWorld,
  },
  computed: {
    ...mapState("global", {
      user: (state) => state.user, // 获取父应用的user信息
    }),
  },
  methods: {
    ...mapActions("global", ["setGlobalState"]),
    update() {
      this.setGlobalState({ user: { name: "王五" } });
    },
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
.image {
  width: 100px;
  height: 100px;
}
</style>
