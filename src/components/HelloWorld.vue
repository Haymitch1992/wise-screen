<template>
  <div class="hello">
    <ul>
      <li>
        <router-link class="link-tag" to="/entranceGate">
          001
        </router-link>
      </li>
      <li>
        <router-link class="link-tag" to="/entranceGateDemotion">
          001-降级
        </router-link>
      </li>
      <li>
        <router-link class="link-tag" to="/noExit">
          002
        </router-link>
      </li>
      <li>
        <router-link class="link-tag" to="/screenA">
          003
        </router-link>
      </li>
      <li>
        <router-link class="link-tag" to="/screenADemotion">
          003-降级
        </router-link>
      </li>
      <li>
        <router-link class="link-tag" to="/noEntry">
          004
        </router-link>
      </li>
      <li>
        <router-link class="link-tag" to="/exitGate">
          005
        </router-link>
      </li>
      <li>
        <router-link class="link-tag" to="/exitGateDemotion">
          005-降级
        </router-link>
      </li>
      <li>
        <router-link class="link-tag" to="/ScreenB">
          006
        </router-link>
      </li>

      <li>
        <router-link class="link-tag" to="/ScreenC">
          007
        </router-link>
      </li>
      <li>
        <router-link class="link-tag" to="/ScreenF">
          008
        </router-link>
      </li>
      <li>
        <router-link class="link-tag" to="/ScreenFDemotion">
          008-降级
        </router-link>
      </li>
      <li>
        <router-link class="link-tag" to="/ScreenD">
          009
        </router-link>
      </li>
      <li>
        <router-link class="link-tag" to="/ScreenE">
          010
        </router-link>
      </li>
      <li>
        <router-link class="link-tag" to="/ScreenEDemotion">
          010-降级
        </router-link>
      </li>
      <li>
        <router-link class="link-tag" to="/ScreenC">
          011
        </router-link>
      </li>
      <li>
        <router-link class="link-tag" to="/danger-1">
          danger-1
        </router-link>
      </li>
      <li>
        <router-link class="link-tag" to="/danger-2">
          danger-2
        </router-link>
      </li>
      <li>
        <router-link class="link-tag" to="/danger-3">
          danger-3
        </router-link>
      </li>
      <li>
        <router-link class="link-tag" to="/danger-4">
          danger-4
        </router-link>
      </li>
      <li>
        <router-link class="link-tag" to="/danger-5">
          danger-5
        </router-link>
      </li>
      <li>
        <router-link class="link-tag" to="/danger-6">
          danger-6
        </router-link>
      </li>
      <li>
        <router-link class="link-tag" to="/danger-7">
          danger-7
        </router-link>
      </li>
      <li>
        <router-link class="link-tag" to="/danger-8">
          danger-8
        </router-link>
      </li>
      <li>
        <router-link class="link-tag" to="/generalMessage">
          综合信息
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { screenSetting } from '../service/user';
export default {
  mounted() {
    this.decidePageNum();
  },
  methods: {
    decidePageNum() {
      screenSetting().then(res => {
        let currentPage = '';
        // 判断是否有
        if (localStorage.getItem('currentPage')) {
          currentPage = localStorage.getItem('currentPage');
        } else {
          currentPage = res.data.currentPage;
        }
        this.$router.push(res.data.screenSetting[currentPage].router_url);
        localStorage.setItem(
          'device_id',
          res.data.screenSetting[currentPage].device_id
        );
        localStorage.setItem(
          'current',
          JSON.stringify(res.data.screenSetting[currentPage])
        );
        localStorage.setItem(
          'allRouter',
          JSON.stringify(res.data.screenSetting)
        );
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.lint-tag {
  display: block !important;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
  width: 1300px;
  margin: 0 auto;
}
li {
  display: inline-block;
  margin: 10px;
  font-size: 40px;
  text-align: center;
  width: 300px;
  border: 1px solid #ddd;
  height: 100px;
  line-height: 100px;
  vertical-align: top;
}
a {
  color: #42b983;
}
</style>
