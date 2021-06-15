import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Class from "./views/Class.vue";
import Teachers from "./views/Teachers.vue";
import Teacher from "./views/Teacher.vue";

import { authGuard } from "./auth/authGuard";

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    },
    {
      path: "/classes",
      name: "classes",
      component: Class,
      beforeEnter: authGuard
    },
    {
      path: "/teachers",
      name: "teachers",
      component: Teachers,
      beforeEnter: authGuard
    },
    {
      path: "/teacher/:id",
      name: "teacher",
      component: Teacher,
      beforeEnter: authGuard
    }
  ]
});
