import { createRouter, createWebHashHistory } from "vue-router";
import { getUserState } from "@/firebase";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/Home.vue"),
    meta: { requiresTitle: true }
  },
  {
    path: "/windows",
    name: "windows",
    component: () => import("@/views/windows.vue"),
    meta: { requiresTitle: true }
  },
  {
    path: "/xp",
    name: "xp",
    component: () => import("@/views/xp.vue"),
    meta: { requiresTitle: false }
  },
  {
    path: "/win7",
    name: "win7",
    component: () => import("@/views/win7.vue"),
    meta: { requiresTitle: false }
  },
  {
    path: "/win8",
    name: "win8",
    component: () => import("@/views/win8.vue"),
    meta: { requiresTitle: false }
  },
  {
    path: "/win11",
    name: "win11",
    component: () => import("@/views/win11.vue"),
    meta: { requiresTitle: false }
  },
  {
    path: "/deepin",
    name: "deepin",
    component: () => import("@/views/deepin.vue"),
    meta: { requiresTitle: false }
  },
  {
    path: "/auth/login",
    name: "Login",
    component: () => import("@/views/Login.vue"),
    meta: { noAuth: true ,requiresTitle: true }
  },
  {
    path: "/auth/signup",
    name: "SignUp",
    component: () => import("@/views/SignUp.vue"),
    meta: { noAuth: true,requiresTitle: true  }
  },
  {
    path: "/auth/forgot-password",
    name: "ForgotPassword",
    component: () => import("@/views/ForgotPassword.vue"),
    meta: { noAuth: true ,requiresTitle: true }
  },
  {
    path: "/database",
    name: "Database",
    component: () => import("@/views/Database.vue"),
    meta: { requiresTitle: false }
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () => import("@/views/404.vue"),
    meta: { requiresTitle: true }
  }
];

const router = createRouter({
  // history: createWebHistory(import.meta.env.BASE_URL),
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes
});

router.beforeEach(async (to, from, next) => {
  const notRequiresTitle = to.matched.some(record => record.meta.notRequiresTitle);
  const noAuth = to.matched.some(record => record.meta.noAuth);

  const isAuth = await getUserState();

  if (notRequiresTitle&&!isAuth) next({ name: "Login" });
  else if (noAuth && isAuth) next({ name: "Home" });
  else next();
});

export default router;
