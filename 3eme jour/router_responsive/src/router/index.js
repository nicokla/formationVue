import { createWebHistory, createRouter } from "vue-router";

import Login from "../views/Login.vue";
import Register from '../views/Register.vue'

import Page from "../views/Page.vue";
import Songs from "../views/Songs.vue";
import Song from '../views/Song.vue'
import Truc1 from '../views/Truc1.vue'
import Truc2 from '../views/Truc2.vue'
import Truc3 from '../views/Truc3.vue'

const routes = [
  { path: '/', redirect: { name: 'Login' }},
  {
    path: '/',
    component: Page,
    // name: 'Page',
    children: [
      {
        path: 'songs',
        component: Songs,
        name: 'Songs',
      },
      {
        path: 'song/:id',
        name: 'Song',
        component: Song
      },
      {
        path: 'truc1',
        component: Truc1,
        name: 'Truc1',
      },
      {
        path: 'truc2',
        component: Truc2,
        name: 'Truc2',
      },
      {
        path: 'truc3',
        component: Truc3,
        name: 'Truc3',
      },
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
