<template>
  <div class="broadcast-box">
    <div class="broadcast">
      <div class="broadcast-container" :style="{ left: leftNum + 'px' }">
        <div class="broadcast-item">
          <span class="broadcast-text">欢迎乘坐深圳地铁十四号线</span>
          <span>Welcome to Shenzhen Metro</span>
        </div>
        <div class="broadcast-item">
          <span class="broadcast-text">
            {{ weatherInfo.weather }} 温度 {{ weatherInfo.temperture }} 湿度
            {{ weatherInfo.humidity }}
          </span>
          <span>
            Welcome to Shenzhen Metro
          </span>
        </div>
        <div class="broadcast-item">
          <span class="broadcast-text">欢迎乘坐深圳地铁十四号线</span>
          <span>Welcome to Shenzhen Metro</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { GET_WEATHER_INFO } from './../service/api';
export default {
  name: '文字广播',
  data() {
    return {
      leftNum: -500,
      weatherInfo: {}
    };
  },
  mounted() {
    this.scrollScreen();
    // 获取天气情况
    this.getWeatherInfo();
  },
  methods: {
    getWeatherInfo() {
      this.$api
        .get(GET_WEATHER_INFO, {
          deviceId: 1,
          direction: 1,
          station: 1
        })
        .then(res => {
          console.log(res.data);
          this.weatherInfo = res.data.result[0].weather_info;
        });
    },
    scrollScreen() {
      setInterval(() => {
        if (this.leftNum <= -3840) {
          this.leftNum = 0;
        } else {
          this.leftNum = this.leftNum - 2;
        }
      }, 40);
    }
  }
};
</script>

<style scoped lang="scss">
.broadcast-box {
  border-top: 4px solid #00d900;
  position: absolute;
  bottom: 0;
  width: 100%;
  overflow: hidden;
}
.broadcast {
  background: #000;
  color: #fff;
  height: 76px;
  line-height: 80px;
  font-size: 40px;
  border-top: 4px solid #007015;
}
.broadcast-container {
  position: absolute;
  width: 7060px;
  text-align: left;
}
.broadcast-item {
  display: inline-block;
  width: 1920px;
}
.broadcast-text {
  margin-right: 40px;
}
</style>
