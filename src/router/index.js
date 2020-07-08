import Vue from 'vue';
import Router from 'vue-router';

const Home = () => import('../views/Home');

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }
  ]
});

export default router;
