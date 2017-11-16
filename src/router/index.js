import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Setup from '@/components/Setup';
import About from '@/components/About';
import Account from '@/components/Account';

Vue.use(Router);

export default new Router({
  routes: [
    { path: '/', name: 'Home', component: Home },
    { path: '/setup', name: 'Setup', component: Setup },
    { path: '/about', name: 'About', component: About },
    { path: '/account', name: 'Account', component: Account },
  ],
  mode: 'history',
});
