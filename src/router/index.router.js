export default [
  {
    path: "/",
    component: () => import("@/views/Home.vue"),
  },
  {
    path: "*",
    component: () => import("@/views/404.vue"),
  },
];
