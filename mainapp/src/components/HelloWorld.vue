<!--
 * @Descripttion: 
 * @version: 1.0
 * @Author: mipaifu328
 * @Date: 2021-09-16 09:28:41
 * @LastEditors: mipaifu328
 * @LastEditTime: 2021-09-16 10:55:13
-->
<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
