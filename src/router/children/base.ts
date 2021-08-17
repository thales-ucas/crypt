import { RouteRecordRaw } from 'vue-router';
import NotFound from '@/pages/404.vue';
import index from '@/pages/index.vue';

const routes: Array<RouteRecordRaw> = [
  {
    name: 'index',
    path: '/',
    component: index,
    meta: { title: '首页' }
  },
  {
    name: '404',
    path: '/404',
    component: NotFound
  },
  {
    path: '/:catchAll(.*)', // 此处需特别注意至于最底部
    redirect: '/404'
  }
]
export default routes;