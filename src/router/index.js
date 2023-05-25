import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Cards from '../views/Cards.vue'



const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/cards',
    name: 'Cards',
    component: Cards,
  },
];

// 創建 Vue Router 實例
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
