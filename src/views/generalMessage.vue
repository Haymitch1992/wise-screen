<template>
  <div>
    <div class="general-top">
      <img
        src="../assets/sreen-logo.png"
        style="width:240px;"
        class="logo-img"
        alt=""
      />
      <ul class="general-tab">
        <li
          :class="currentTab === 1 ? 'active' : ''"
          @click="changeCurrentTab(1)"
        >
          线网信息
        </li>
        <li
          :class="currentTab === 2 ? 'active' : ''"
          @click="changeCurrentTab(2)"
        >
          站内导航
        </li>
        <li
          :class="currentTab === 3 ? 'active' : ''"
          @click="changeCurrentTab(3)"
        >
          周边信息
        </li>
      </ul>
      <a href="javascript:;" @click="modelVisable = true" class="btn">
        <img src="../assets/voice.png" alt="" />
        音视频召援
      </a>
    </div>
    <div class="general-content">
      <div class="general-left">
        <img src="../assets/map-1.png" v-show="currentTab === 1" alt="" />
        <img src="../assets/map-2.png" v-show="currentTab === 2" alt="" />
        <img src="../assets/map-3.png" v-show="currentTab === 3" alt="" />
      </div>
      <div class="general-right" v-if="currentTab === 1 || currentTab === 2">
        <div class="weather">
          <span>{{ weather_info.temperture }}</span>
          <!-- <span class="text-num-1">℃</span> -->
        </div>
        <div style="margin-bottom:10px;font-szie:20px;">
          {{ weather_info.weather }}
        </div>
        <div class="time-item">
          <div class="current-time">
            {{ currentTime1[0] }}年{{ currentTime1[1] }}月{{
              currentTime1[2]
            }}日
          </div>
          <div class="current-time">
            {{ transformCn[currentTime3] }} {{ currentTime2 }}
          </div>
        </div>
        <div class="general-item">
          <div class="current-station-info">
            <p>当前站</p>
            <p class="text">This Station</p>
          </div>
          <div class="current-station">
            <p>肿瘤医院</p>
            <p class="text">Tumour Hospital</p>
          </div>
          <div>
            <div class="subway-status-left">
              <p>开往方向</p>
              <p>Terminus</p>
              <p class="big">岗厦北</p>
              <p>To Gangsha North</p>
            </div>
            <div class="subway-status-right">
              <p>到站剩余</p>
              <p>Next Station</p>
              <p class="big">3 Min</p>
            </div>
          </div>
          <div class="subway-container">
            <div class="subway-left-container">
              <img src="../assets/subway-left-3.png" class="subway-bj" alt="" />
              <img src="../assets/person-3.png" class="person-status" alt="" />
              <span class="temperature">
                <span class="line"></span>
                <span class="point"></span>
                <span class="temperature-num">26℃</span>
              </span>
            </div>
            <div class="subway-middle-container">
              <img
                src="../assets/subway-middle-1.png"
                class="subway-bj"
                alt=""
              />
              <img src="../assets/person-1.png" class="person-status" alt="" />
              <span class="temperature">
                <span class="line"></span>
                <span class="point"></span>
                <span class="temperature-num">26℃</span>
              </span>
            </div>
            <div class="subway-right-container">
              <img
                src="../assets/subway-right-2.png"
                class="subway-bj"
                alt=""
              />
              <img src="../assets/person-2.png" class="person-status" alt="" />
              <span class="temperature">
                <span class="line"></span>
                <span class="point"></span>
                <span class="temperature-num">26℃</span>
              </span>
            </div>
          </div>
          <div style="margin-top:20px;">
            <div class="subway-status-left">
              <p>开往方向</p>
              <p>Terminus</p>
              <p class="big">沙田</p>
              <p>To Shatian</p>
            </div>
            <div class="subway-status-right">
              <p>到站剩余</p>
              <p>Next Station</p>
              <p class="big">3 Min</p>
            </div>
          </div>
          <div class="subway-container">
            <div class="subway-left-container">
              <img src="../assets/subway-left-3.png" class="subway-bj" alt="" />
              <img src="../assets/person-3.png" class="person-status" alt="" />
              <span class="temperature">
                <span class="line"></span>
                <span class="point"></span>
                <span class="temperature-num">26℃</span>
              </span>
            </div>
            <div class="subway-middle-container">
              <img
                src="../assets/subway-middle-1.png"
                class="subway-bj"
                alt=""
              />
              <img src="../assets/person-1.png" class="person-status" alt="" />
              <span class="temperature">
                <span class="line"></span>
                <span class="point"></span>
                <span class="temperature-num">26℃</span>
              </span>
            </div>
            <div class="subway-right-container">
              <img
                src="../assets/subway-right-2.png"
                class="subway-bj"
                alt=""
              />
              <img src="../assets/person-2.png" class="person-status" alt="" />
              <span class="temperature">
                <span class="line"></span>
                <span class="point"></span>
                <span class="temperature-num">26℃</span>
              </span>
            </div>
          </div>
        </div>
        <ul class="crowded-box">
          <li>
            <span class="point-span point-1"></span>
            <div class="crowded-text">
              <p>严重拥挤</p>
              <p class="small">Severe congestion</p>
            </div>
          </li>
          <li>
            <span class="point-span point-2"></span>
            <div class="crowded-text">
              <p>严重拥挤</p>
              <p class="small">Severe congestion</p>
            </div>
          </li>
          <li>
            <span class="point-span point-3"></span>
            <div class="crowded-text">
              <p>严重拥挤</p>
              <p class="small">Severe congestion</p>
            </div>
          </li>
        </ul>
      </div>
      <div class="general-right" v-if="currentTab === 3">
        <div class="car-top">
          <p class="text-1">公交信息</p>
          <p class="text-2">Bus information</p>
        </div>

        <img class="line" src="../assets/line.png" alt="" />
        <div class="car-bottom">
          <img class="station-icon" src="../assets/station-A.png" alt="" />
          <div class="car-text">
            <p>旺民路</p>
            <p class="text">Wangmin Road</p>
          </div>
          <div class="car-information">
            <div v-for="(item, index) in busInfo[0].bus_info" :key="index">
              <img
                class="bus-icon"
                :src="require(`../assets/bus-${index + 1}.png`)"
                alt=""
              />
              {{ item.bus_name }}
            </div>
          </div>
        </div>
        <div class="car-bottom">
          <img class="station-icon" src="../assets/station-B.png" alt="" />
          <div class="car-text">
            <p>腾龙路</p>
            <p class="text">Tenglong Road</p>
          </div>
          <div class="car-information">
            <div v-for="(item, index) in busInfo[0].bus_info" :key="index">
              <img
                class="bus-icon"
                :src="require(`../assets/bus-${index + 1}.png`)"
                alt=""
              />
              {{ item.bus_name }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="model-bg" v-if="modelVisable">
      <div class="model-container">
        <communication
          
          ref="commun"
          @closeDialog="modelVisable = false"
        ></communication>
        <div class="voice-box">
          <img class="voice-img" src="../assets/voice-bj.png" alt="" />
          <div v-if="!this.$store.state.communData.showBtn">
            <p class="p1">连接中 ({{ this.$store.state.communData.num }}s)</p>
            <p class="p2">Connecting</p>
          </div>
          <div v-if="this.$store.state.communData.showBtn">
            <p class="p1">通话中</p>
            <p class="p2">On the Phone</p>
          </div>
          <!-- <span class="closeBtn" @click="closeCommuication">取消</span> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { GET_WEATHER_INFO } from '../service/api';
import { trainInfo, stationInfo } from '../service/user';
import communication from '../components/communication';
export default {
  components: {
    communication
  },
  data() {
    return {
      modelVisable: false,
      currentTab: 1,
      currentTime1: '',
      currentTime2: '',
      timer: '',
      currentTime3: '', // 星期几
      transformCn: [
        '星期一',
        '星期二',
        '星期三',
        '星期四',
        '星期五',
        '星期六',
        '星期日'
      ],
      tarin_state: {
        arrival_state: '未到达',
        arrival_time: 3,
        next_arrival_time: 13
      },
      weather_info: {},
      busInfo: [
        {
          bus_info: [
            { bus_name: '926路' },
            { bus_name: '特快112路' },
            { bus_name: '312路' },
            { bus_name: '快速直达专线160路' }
          ]
        },
        {
          bus_info: [
            { bus_name: '926路' },
            { bus_name: '特快112路' },
            { bus_name: '312路' },
            { bus_name: '快速直达专线160路' }
          ]
        }
      ]
    };
  },
  mounted() {
    this.getCurrentTime();
    this.getBusInfo();
    let num = 0;
    this.timer = setInterval(() => {
      // this.getAtsInfo();
      this.getCurrentTime();
      num++;
      if (num > 4) {
        num = 0;
        this.getBusInfo();
      }
    }, 1000);
  },
  methods: {
    closeCommuication(){
      // 关闭视频弹窗
      // 连接中的 未连接上的

    },
    // 获取公交信息
    getBusInfo() {
      this.$api
        .get(GET_WEATHER_INFO, {
          deviceId: 1,
          direction: 1,
          station: 1
        })
        .then(res => {
          this.busInfo = res.data.result[0].traffic_info;
          this.weather_info = res.data.result[0].weather_info;
          console.log(this.busInfo);
        });
    },
    // 获取车辆的信息
    getAtsInfo() {
      // 上行
      trainInfo(1, 1, 0).then(res => {
        this.tarin_state = res.data.result[0].tarin_state;
      });
    },
    getCurrentTime() {
      let dayjs = require('dayjs');
      let currnet = dayjs();
      this.currentTime1 = currnet.format('YYYY-MM-DD').split('-');
      this.currentTime2 = currnet.format('HH:mm:ss');
      this.currentTime3 = currnet.day();
    },
    changeCurrentTab(val) {
      this.currentTab = val;
    }
  },
  beforeRouteLeave(to, from, next) {
    // 导航离开该组件的对应路由时调用
    // 可以访问组件实例 `this`
    clearInterval(this.timer);
    next();
  }
};
</script>

<style scoped lang="scss">
.closeBtn {
  background: #fff;
  color: #000;
  display: inline-block;
  width: 150px;
  line-height: 50px;
  border-radius: 30px;
  font-size: 24px;
  margin-top: 20px;
}
.model-bg {
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 1920px;
  height: 1080px;
  .model-container {
    margin: 230px auto;
    width: 1000px;
    font-size: 40px;
    color: #fff;
    .small {
      font-size: 34px;
    }
  }
  .voice-box {
    position: absolute;
    top: 400px;
    width: 100%;
    left: 0;
    .p1 {
      font-size: 44px;
      margin-bottom: 10px;
    }
    .p2 {
      font-size: 24px;
    }
  }
  .voice-img {
    display: block;
    margin: 0 auto;
  }
}
.general-top {
  text-align: left;
  padding: 30px 30px;
  .logo-img {
    vertical-align: top;
  }
}
.crowded-box {
  list-style: none;
  text-align: left;
  padding: 30px 20px 0;
  li {
    display: inline-block;
    width: 50%;
    text-align: left;
    padding: 4px 0;

    .point-span {
      display: inline-block;
      width: 12px;
      height: 12px;
      background: #de6173;
      border-radius: 50%;
      vertical-align: top;
      margin-right: 10px;
      margin-top: 8px;
    }
    .point-1 {
      background: #de6173;
    }
    .point-2 {
      background: #ec924b;
    }
    .point-3 {
      background: #61daa2;
    }
  }
  .crowded-text {
    vertical-align: top;
    display: inline-block;
    font-size: 16px;
    .small {
      font-size: 10px;
    }
  }
}
.subway-container {
  padding: 20px 0;
}
.temperature {
  display: inline-block;
  width: 50px;
  height: 40px;
  .line {
    border-left: 2px dashed #ddd;
    display: inline-block;
    height: 30px;
    position: absolute;
    top: 36px;
    left: 44px;
  }
  .point {
    width: 4px;
    height: 4px;
    border-radius: 50%;
    border: 1px solid #26e1ffff;
    display: inline-block;
    background: #fff;
    position: absolute;
    top: 66px;
    left: 42px;
  }
  .temperature-num {
    position: absolute;
    top: 78px;
    left: 26px;
  }
}
.subway-left-container {
  display: inline-block;
  width: 88px;
  height: 80px;
  position: relative;
  vertical-align: top;
}
.subway-middle-container {
  display: inline-block;
  width: 88px;
  height: 80px;
  position: relative;
  vertical-align: top;
}
.subway-right-container {
  display: inline-block;
  width: 88px;
  height: 80px;
  position: relative;
  vertical-align: top;
}
.person-status {
  position: absolute;
  top: 8px;
  left: 40px;
}
.subway-status-left {
  display: inline-block;
  width: 50%;
  text-align: left;
}
.subway-status-right {
  display: inline-block;
  width: 50%;
  text-align: right;
}
.subway-status-left,
.subway-status-right {
  font-size: 14px;
  vertical-align: top;
  .big {
    font-size: 20px;
    padding-top: 10px;
  }
}
.weather {
  padding: 36px 0 14px;
  font-size: 32px;
  img {
    margin: 0 10px;
  }
  .text-num {
    font-size: 14px;
  }
  .text-num-1 {
    font-size: 14px;
    vertical-align: top;
  }
}
.current-station-info {
  font-size: 20px;
  padding: 18px 0 10px;
  line-height: 24px;
  .text {
    font-size: 14px;
  }
}
.current-station {
  width: 100%;
  border: 1px solid #707070;
  border-radius: 6px;
  text-align: center;
  background: #000;
  padding: 10px 0;
  font-size: 20px;
  margin-bottom: 20px;
  .text {
    font-size: 14px;
  }
}
.general-item {
  text-align: left;
  padding: 0 20px;
  font-size: 18px;
}
.time-item {
  font-size: 18px;
  line-height: 30px;
}
.car-bottom {
  text-align: left;
  padding: 40px 30px;
  .car-information {
    margin-top: 10px;
    color: #fff;
    font-size: 20px;
    padding: 20px 0px;
    line-height: 40px;
    border-radius: 10px;
    .bus-icon {
      margin-right: 10px;
      position: relative;
      top: 4px;
    }
  }
}
.car-top {
  padding: 20px 0;
}
.car-text {
  display: inline-block;
  font-size: 26px;
  .text {
    font-size: 14px;
  }
}
.station-icon {
  width: 47px;
  height: 47px;
  margin-right: 20px;
}
.btn {
  background: #d30000;
  height: 64px;
  line-height: 64px;
  width: 310px;
  color: #fff;
  font-size: 32px;
  display: inline-block;
  border-radius: 10px;
  text-decoration: none;
  text-align: center;
  margin-left: 46px;
  img {
    vertical-align: middle;
    margin-right: 10px;
    width: 22px;
    position: relative;
    top: -2px;
  }
}
.general-tab {
  list-style: none;
  display: inline-block;
  text-align: center;
  vertical-align: top;
  margin: 0 236px 0 210px;
  li {
    width: 272px;
    display: inline-block;
    color: #fff;
    border: 1px solid #62d53f;
    height: 57px;
    line-height: 57px;
    box-sizing: border-box;
  }
  li:nth-child(1) {
    position: relative;
    left: 4px;
  }
  li:nth-child(2) {
    border-right: none;
    border-left: none;
  }
  li:nth-child(3) {
    position: relative;
    right: 4px;
  }
  li.active {
    background: url('../assets/tab.png');
    border: none;
  }
}
.general-left {
  width: 1524px;
  height: 918px;
  display: inline-block;
  border: 1px solid #707070;
  border-radius: 20px;
  margin-right: 20px;
  vertical-align: top;
  border-radius: 20px;
  overflow: hidden;
  img {
    height: 100%;
    width: 100%;
  }
}
.general-right {
  width: 310px;
  height: 918px;
  display: inline-block;
  border: 1px solid #707070;
  border-radius: 20px;
  background: #1d1a1b;
  color: #fff;
  vertical-align: top;
  .text-1 {
    font-size: 36px;
  }
  .text-2 {
    font-size: 20px;
  }
  .line {
    display: block;
    width: 100%;
  }
}
</style>
