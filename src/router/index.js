import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/entranceGate',
    name: 'entranceGate',
    component: () => import('../views/entranceGate.vue'),
  },
  {
    path: '/entranceGateDemotion',
    name: 'entranceGateDemotion',
    component: () => import('../views/entranceGateDemotion.vue'),
  },
  {
    path: '/exitGate',
    name: 'exitGate',
    component: () => import('../views/exitGate.vue'),
  },
  {
    path: '/exitGateDemotion',
    name: 'exitGateDemotion',
    component: () => import('../views/exitGateDemotion.vue'),
  },
  {
    path: '/noEntry',
    name: 'noEntry',
    component: () => import('../views/noEntry.vue'),
  },
  {
    path: '/noExit',
    name: 'noExit',
    component: () => import('../views/noExit.vue'),
  },
  {
    path: '/screenA',
    name: 'screenA',
    component: () => import('../views/screenA.vue'),
  },
  {
    path: '/screenADemotion',
    name: 'screenADemotion',
    component: () => import('../views/screenADemotion.vue'),
  },
  {
    path: '/screenB',
    name: 'screenB',
    component: () => import('../views/screenB.vue'),
  },
  {
    path: '/screenC',
    name: 'screenC',
    component: () => import('../views/screenC.vue'),
  },
  {
    path: '/screenD',
    name: 'screenD',
    component: () => import('../views/screenD.vue'),
  },
  {
    path: '/screenE',
    name: 'screenE',
    component: () => import('../views/screenE.vue'),
  },
  {
    path: '/screenEDemotion',
    name: 'screenEDemotion',
    component: () => import('../views/screenEDemotion.vue'),
  },
  {
    path: '/screenF',
    name: 'screenF',
    component: () => import('../views/screenF.vue'),
  },
  {
    path: '/screenFDemotion',
    name: 'screenFDemotion',
    component: () => import('../views/screenFDemotion.vue'),
  },
  {
    path: '/generalMessage',
    name: 'generalMessage',
    component: () => import('../views/generalMessage.vue'),
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
