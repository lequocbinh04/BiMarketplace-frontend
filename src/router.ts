import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: () => import("@/components/layout/LayoutHome.vue"),
      children: [
        {
          path: "",
          component: () => import("@/pages/Home.vue"),
        },
      ],
    },
  ],
});

export default router;
