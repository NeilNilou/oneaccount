import Vue from 'vue';
import Router from 'vue-router';
import Homepage from '@/components/Homepage';
import Setup from '@/components/Setup';
import About from '@/components/About';

Vue.use(Router);

export default new Router({
  routes: [
    { path: '/', name: 'Homepage', component: Homepage },
    { path: '/setup', name: 'Setup', component: Setup },
    { path: '/about', name: 'About', component: About },
  ],
  mode: 'history',
});
