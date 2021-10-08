import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    communData: {
      num: 20,
      showBtn:true
    },
    pageStatus: 'service_scene',
    welcomeText: '欢迎北京市交通委员会领导<br />莅临考察调研',
    showTips:false
  },
  mutations: {
    setCommunData (state, obj) {
      state.communData = obj
    },
    setPageStatus(state, str) {
      state.pageStatus = str
    },
    setWelcomeText(state, str) {
      state.welcomeText = str
    },
    changeShowTips(state, str) {
      state.showTips = str
    }
  },
  actions: {
  },
  modules: {
  },
});
