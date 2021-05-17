<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import { agsagsInfo } from '../src/service/user';
export default {
  data() {
    return {};
  },
  mounted() {
    // setInterval(() => {
    //   this.getDangerInfo();
    // }, 1000);
  },
  methods: {
    // 监听紧急状态
    getDangerInfo() {
      agsagsInfo(1).then(res => {
        cosnole.log(res);
      });
      // 定时获取
    }
  }
};
</script>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 1920px;
  height: 1080px;
  background: #000 url('../src/assets/bj.png') repeat;
  position: relative;
}
p {
  margin: 0;
  padding: 0;
}
ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
</style>
