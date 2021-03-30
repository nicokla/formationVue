import { createWebHistory, createRouter } from "vue-router";

import Login from "../views/Login.vue";
import Register from '../views/Register.vue'
import SubPage1 from '../views/SubPage1.vue'
import SubPage2 from '../views/SubPage2.vue'


const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login,
    children: [
      {
        path: '/subPage1',
        name: 'SubPage1',
        component: SubPage1
      },
      {
        path: '/subPage1',
        name: 'SubPage2',
        component: SubPage2
      }
    ]
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
