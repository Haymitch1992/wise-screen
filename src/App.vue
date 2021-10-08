<template>
  <div id="app">
    <router-view />
    <socket-item v-show="false"></socket-item>
  </div>
</template>

<script>
import { agsagsInfo } from '../src/service/user';
import socketItem from './components/socket.vue';
export default {
  data() {
    return {};
  },
  components: {
    socketItem
  },
  mounted() {},
  methods: {}
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
