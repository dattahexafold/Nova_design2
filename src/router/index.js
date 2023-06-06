import { createRouter, createWebHashHistory } from "vue-router";

import DashboardLayout from "@/Views/Layout/DashboardLayout";

const routes = [
  {
    path: "/",
    redirect: "/dashboard",
    component: DashboardLayout,
    name: "Dashboards",
    children: [
      {
        path: "/dashboard",
        name: "Dashboard",
        components: { default: DashboardLayout },
      },
      {
        path: "/alternative",
        name: "Alternative",
        components: { default:  DashboardLayout },
        meta: {
          navbarType: "light",
        },
      },
      {
        path: "/widgets",
        name: "Widgets",
        components: { default:  DashboardLayout },
      },
      {
        path: "/charts",
        name: "Charts",
        components: { default:  DashboardLayout },
      },
      {
        path: "/calendar",
        name: "Calendar",
        components: { default:  DashboardLayout },
      },
      {
        path: "/pages/user",
        name: "Profile",
        components: { default:  DashboardLayout },
      },
      {
        path: "/pages/timeline",
        name: "Timeline",
        components: { default:  DashboardLayout },
      },
    ],
  },
  

];

const router = createRouter({
  history: createWebHashHistory(),
  linkActiveClass: "active",
  routes,
});

export default router;
