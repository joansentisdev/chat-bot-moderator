import Vue from 'vue';
import Router from 'vue-router';

import Chat from './views/Chat/Chat.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'chat',
      component: Chat,
    },
  ],
});
