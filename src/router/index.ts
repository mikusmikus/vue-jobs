import { createWebHistory, createRouter } from 'vue-router';
import home from '../pages/home.vue';
import about from '../pages/job.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: home,
  },
  {
    path: '/job/:id',
    name: 'job',
    component: about,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
