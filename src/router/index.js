import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Menu from '../views/Menu.vue';
import Cart from '../views/Cart.vue';
import OrderConfirmation from '../views/OrderConfirmation.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/menu', component: Menu },
  { path: '/cart', component: Cart },
  { path: '/order-confirmation', component: OrderConfirmation },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
