<template>
  <div class="box">websocket</div>
</template>
<script>
import { agsagsInfo } from '../../src/service/user';
// import { GETSTAIONINFO, GETTRAININFO } from '../services/user';
// import { mapMutations } from 'vuex';
const heartCheck = {
  timeout: 60 * 1000,
  timer: null,
  serverTimer: null,
  reset() {
    this.timer && clearTimeout(this.timer);
    this.serverTimer && clearTimeout(this.serverTimer);
  },
  start(ws) {
    this.reset();
    this.timer = setTimeout(() => {
      // console.log('发送心跳,后端收到后，返回一个心跳消息')
      // onmessage拿到返回的心跳就说明连接正常
      ws.send(JSON.stringify({ heart: 1 }));
      this.serverTimer = setTimeout(() => {
        // 如果超过一定时间还没响应(响应后触发重置)，说明后端断开了
        ws.close();
      }, this.timeout);
    }, this.timeout);
  }
};
export default {
  // 获取车辆信息
  // 获取车站信息
  name: 'Websocket',
  data() {
    return {
      // wsuri: 'ws://172.51.215.158:8081/api/v1/device/platform_ats/connection',
      // ws wssws:10.252.187.11:80
      //  wss:10.252.187.11:443
      // wsuri: 'wss://172.51.215.158:30082/api/v1/device/platform_ws/connection',
      wsuri: 'wss:10.252.187.11:443/api/v1/device/platform_ws/connection',
      lockReconnect: false, // 连接失败不进行重连
      maxReconnect: 5, // 最大重连次数，若连接失败
      socket: null
    };
  },
  mounted() {
    this.initWebSocket();
  },
  methods: {
    reconnect() {
      console.log('尝试重连');
      if (this.lockReconnect || this.maxReconnect <= 0) {
        return;
      }
      setTimeout(() => {
        // this.maxReconnect-- // 不做限制 连不上一直重连
        this.initWebSocket();
      }, 60 * 1000);
    },
    initWebSocket() {
      try {
        if ('WebSocket' in window) {
          this.socket = new WebSocket(this.wsuri);
        } else {
          console.log('您的浏览器不支持websocket');
        }
        this.socket.onopen = this.websocketonopen;
        this.socket.onerror = this.websocketonerror;
        this.socket.onmessage = this.websocketonmessage;
        this.socket.onclose = this.websocketclose;
      } catch (e) {
        this.reconnect();
      }
    },
    websocketonopen() {
      console.log('WebSocket连接成功', this.socket.readyState);
      heartCheck.start(this.socket);
      // this.socket.send('发送数据')
      this.websocketsend();
    },
    websocketonerror(e) {
      console.log('WebSocket连接发生错误', e);
      this.reconnect();
    },
    websocketonmessage(e) {
      console.log(e.data);
      if (e.data === 'alive') {
        return;
      }
      let obj = JSON.parse(e.data);
      if (obj.scene === 'welcome_scene') {
        // 保存欢迎词
        this.$goWelcome();
        this.$store.commit('setWelcomeText', obj.msg);
      } else if (obj.scene === 'service_scene') {
        if (obj.msg) {
          this.$store.commit('changeShowTips', true);
        } else {
          this.$goPage();
        }
      } else if (obj.scene === 'emergency_fire') {
        setTimeout(() => {
          agsagsInfo(1).then(res => {
            // 如果返回值 那么页面进行跳转至应急页面
            if (res.data.result.page_type) {
              this.routerUrl = `danger-${res.data.result.page_type}`;
              this.$router.push(this.routerUrl);
            }
          });
        }, 2000);
      } else if (obj.scene === 'emergency_flood') {
        this.$goPage();
      }
      // console.log('可以渲染网页数据...');
      // 消息获取成功，重置心跳
      heartCheck.start(this.socket);
    },
    websocketclose(e) {
      console.log('connection closed (' + e.code + ')');
      this.reconnect();
    },
    websocketsend() {
      let data = { id: 'start' };
      this.socket.send(JSON.stringify(data));
    }
  },
  unmounted() {
    this.socket.close();
  }
};
</script>
