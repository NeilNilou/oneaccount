import Vue from 'vue';
import Router from 'vue-router';
import Greetings from '@/components/Greetings';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Greetings',
      component: Greetings,
    },
  ],
});
