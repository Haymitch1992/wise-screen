<template>
  <div>
    <headerbox :showTime="true"></headerbox>
    <broadcast></broadcast>
    <entrance :stationType="stationType" :fullScreen="true"></entrance>
  </div>
</template>

<script>
import broadcast from '../components/broadcast.vue';
import headerbox from '../components/headerbox.vue';
import entrance from '../components/entrance.vue';
import { weatherInfoApi } from '../service/user';
export default {
  name: 'jinzhan',
  components: {
    broadcast,
    headerbox,
    entrance
  },
  data() {
    return {
      stationType: {
        text1: '进站检票',
        text2: 'Entrance Gate'
      },
      timer:''
    };
  },
  methods: {
    // 降级页面监听接口 如果有数据 跳转回之前的
    getWeatherInfo() {
      weatherInfoApi(1, 1, 1).then(res => {
        this.$goPage();
      });
    }
  },
  mounted() {
    clearInterval(this.timer);
    this.timer = setInterval(() => {
      this.getWeatherInfo();
    }, this.intervalNum);
  }
};
</script>

<style></style>
