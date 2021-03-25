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
    path: '/exitGate',
    name: 'exitGate',
    component: () => import('../views/exitGate.vue'),
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
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
