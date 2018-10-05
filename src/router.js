import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'MainMenu',
      component: () => import('./views/MainMenu.vue')
    },
    {
      path: '/alphabet',
      name: 'Alphabet',
      component: () => import('./views/Alphabet.vue')
    },
    {
      path: '/numbers',
      name: 'Numbers',
      component: () => import('./views/Numbers.vue')
    },
    {
      path: '/adding',
      name: 'Adding',
      component: () => import('./views/Adding.vue')
    },
  ]
})
