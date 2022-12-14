import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const history = createWebHistory()
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('@/views/home/index.vue'),
  },
  {
    path: '/lazy',
    name: 'lazy',
    component: () => import('@/views/lazy/lazy.vue'),
  },
  {
    path: '/d3three',
    name: 'd3three',
    component: () => import('@/views/d3three/index.vue'),
  },
  {
    path: '/code',
    name: 'code',
    component: () => import('@/views/code/index.vue'),
  },
  {
    path: '/d3three2',
    name: 'd3three2',
    component: () => import('@/views/d3three/index.vue'),
  },
  {
    path: '/upload',
    name: 'upload',
    component: () => import('@/views/upload/index.vue'),
  },
  {
    path: '/echarts',
    name: 'echarts',
    component: () => import('@/views/echarts/index.vue'),
  },
  {
    path: '/liucheng',
    name: 'liucheng',
    component: () => import('@/views/G6/liucheng.vue'),
  },
];
const router = createRouter({
  history,
  routes,
})
export default router
