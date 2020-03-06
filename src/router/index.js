import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: {
      name: "Home"
    }
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/login.vue")
  },
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/Profile",
    name: "Profile",
    component: () => import("../views/Profile.vue")
  },
  {
    path: "/History",
    name: "History",
    component: () => import("../views/History.vue")
  },
  {
    path: "/HistoryDone",
    name: "HistoryDone",
    component: () => import("../views/HistoryDone.vue")
  },
  {
    path: "/HistoryUndone",
    name: "HistoryUndone",
    component: () => import("../views/HistoryUndone.vue")
  },
  {
    path: "/HistoryDetail",
    name: "HistoryDetail",
    component: () => import("../views/HistoryDetail.vue")
  },
  {
    path: "/Assignment",
    name: "Assignment",
    component: () => import("../views/Assignment.vue")
  },
  {
    path: "/AssignmentMapel",
    name: "AssignmentMapel",
    component: () => import("../views/AssignmentMapel.vue")
  },
  {
    path: "/AssignmentDetail",
    name: "AssignmentDetail",
    component: () => import("../views/AssignmentDetail.vue")
  },
  {
    path: "/AssignmentCollect",
    name: "AssignmentCollect",
    component: () => import("../views/AssignmentCollect.vue")
  },
  {
    path: "/AssignmentNilai",
    name: "AssignmentNilai",
    component: () => import("../views/AssignmentNilai.vue")
  },
  {
    path: "/CreateAssigment",
    name: "CreateAssigment",
    component: () => import("../views/CreateAssigment.vue")
  },
  {
    path: "/Class",
    name: "Class",
    component: () => import("../views/Class.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
