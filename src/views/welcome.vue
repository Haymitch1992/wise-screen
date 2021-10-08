<template>
  <div class="welcome-bg">
    <div class="welcome-text" v-html="this.$store.state.welcomeText"></div>
  </div>
</template>

<script>
export default {
  name: 'welcome',
  data() {
    return {
      welcomeText: '欢迎北京市交通委员会领导<br />莅临考察调研'
    };
  }
};
</script>

<style>
.welcome-bg {
  display: block;
  width: 1920px;
  height: 1080px;
  background: url('../assets/welcome.jpg') no-repeat 0 0;
  background-size: 1920px 1080px;
  position: relative;
}
.welcome-text {
  color: yellow;
  font-size: 130px;
  position: absolute;
  top: 50%;
  width: 100%;
  transform: translateY(-60%);
}
</style>
