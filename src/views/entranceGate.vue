<template>
  <div>
    <headerbox></headerbox>
    <broadcast :weatherInfo="weatherInfo"></broadcast>
    <rightinfo></rightinfo>
    <entrance :stationType="stationType"></entrance>
  </div>
</template>

<script>
import broadcast from '../components/broadcast.vue';
import headerbox from '../components/headerbox.vue';
import rightinfo from '../components/rightinfo.vue';
import entrance from '../components/entrance.vue';
import { weatherInfoApi } from '../service/user';
export default {
  name: 'jinzhanjianpiao', // 进站检票
  components: {
    broadcast,
    headerbox,
    rightinfo,
    entrance
  },
  data() {
    return {
      stationType: {
        text1: '进站检票',
        text2: 'Entrance Gate'
      },
      weatherInfo: {},
      timer: ''
    };
  },
  methods: {
    // 获取天气信息 传递给子组件
    getWeatherInfo() {
      weatherInfoApi(1, 1, 1)
        .then(res => {
          this.weatherInfo = res.data.result[0].weather_info;
        })
        .catch(() => {
          this.$goBack();
        });
    }
  },
  mounted() {
    this.getWeatherInfo();
    clearInterval(this.timer);
    this.timer = setInterval(() => {
      this.getWeatherInfo();
    }, this.intervalNum);
  },
    beforeRouteLeave(to, from, next) {
    // 导航离开该组件的对应路由时调用
    // 可以访问组件实例 `this`
    clearInterval(this.timer);
    next();
  }
};
</script>

<style></style>
