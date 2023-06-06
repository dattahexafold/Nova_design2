import { createRouter, createWebHashHistory } from "vue-router";

import DashboardLayout from "@/Views/Layout/DashboardLayout";
// import performance from "@/Views/Components/performance.vue"
const routes = [
  {
    path:"/",
    name:"DashboardLayout",
    component:DashboardLayout
  },
  // {
  //   path: "/",
  //   redirect: "/dashboard",
  //   component: performance,
  //   name: "Dashboards",
  //   children: [
  //     {
  //       path: "/dashboard",
  //       name: "Dashboard",
  //       components: { default: DashboardLayout },
  //     },
  //     {
  //       path: "/alternative",
  //       name: "Alternative",
  //       components: { default:  DashboardLayout },
  //       meta: {
  //         navbarType: "light",
  //       },
  //     },
  //     {
  //       path: "/widgets",
  //       name: "Widgets",
  //       components: { default:  DashboardLayout },
  //     },
  //     {
  //       path: "/charts",
  //       name: "Charts",
  //       components: { default:  DashboardLayout },
  //     },
  //     {
  //       path: "/calendar",
  //       name: "Calendar",
  //       components: { default:  DashboardLayout },
  //     },
  //     {
  //       path: "/pages/user",
  //       name: "Profile",
  //       components: { default:  DashboardLayout },
  //     },
  //     {
  //       path: "/pages/timeline",
  //       name: "Timeline",
  //       components: { default:  DashboardLayout },
  //     },
  //   ],
  // },
  

];

const router = createRouter({
  history: createWebHashHistory(),
  // linkActiveClass: "active",
  routes,
});

export default router;
