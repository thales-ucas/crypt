import { createRouter, createWebHashHistory, createWebHistory, RouteRecordRaw } from "vue-router";
import Base from './children/base';

const routes: Array<RouteRecordRaw> = [
  ...Base
];
const router = createRouter({
  // history: createWebHistory(import.meta.env.BASE_URL),
  history: createWebHashHistory(),
  
  routes
});
router.beforeEach((to, _from, next) => {
  if (to.meta.title) {
    document.title = `rsa | ${to.meta.title}`;
  }
  next();
});

export default router;
