import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'MainMenu',
      component: () => import('./views/mainMenu/MainMenu.vue')
    },
    {
      path: '/alphabet',
      name: 'Alphabet',
      component: () => import('./views/alphabet/Alphabet.vue')
    },
    {
      path: '/numbers',
      name: 'Numbers',
      component: () => import('./views/numbers/Numbers.vue')
    },
    {
      path: '/adding',
      name: 'Adding',
      component: () => import('./views/adding/Adding.vue')
    },
    {
      path: '/*',
      redirect: '/'
    }
  ]
})
