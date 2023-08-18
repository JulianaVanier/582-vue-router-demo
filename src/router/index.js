import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ListStudentView from "../views/ListStudentView.vue";
import StudentView from "../views/StudentView.vue";
import TestCompView from "../views/TestCompView.vue";
import StudentViewBefore from "../views/StudentViewBefore.vue";
import ListStudentViewBefore from "../views/ListStudentViewBefore.vue";
import DemoPostBeforeView from "../views/DemoPostBeforeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/liststudents",
    name: "liststudents",
    component: ListStudentView,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () =>
    //   import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/student/:id",
    name: "studentId",
    component: StudentView,
    props: true,
  },
  {
    path: "/student",
    name: "student",
    component: StudentView,
  },
  {
    path: "/testcomp",
    name: "testcomp",
    component: TestCompView,
  },
  {
    path: "/studentIdbefore/:id",
    name: "studentIdbefore",
    component: StudentViewBefore,
    props: true,
  },
  {
    path: "/studentbefore",
    name: "studentbefore",
    component: StudentViewBefore,
  },
  {
    path: "/liststudentsbefore",
    name: "liststudentsbefore",
    component: ListStudentViewBefore,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () =>
    //   import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },

  // {
  //   path: "*",
  //   name: "notfound",
  //   component: NotFoundView,
  // },
  {
    path: "/demopostbefore/:id",
    name: "demopostbefore",
    component: DemoPostBeforeView,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

const isAuthenticated = true;

router.beforeEach((to, from, next) => {
  if (to.name !== "home" && !isAuthenticated) next({ name: "home" });
  else next();
});

export default router;
