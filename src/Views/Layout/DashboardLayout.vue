<template>
  <div class="wrapper">
    <!-- <notifications></notifications> -->
    <side-bar v-if="!$route.meta.hideSidebar">
      <template v-slot:links>

        <!-- <sidebar-item :link="{
          name: 'Dashboards',
          icon: 'ni ni-shop text-primary',
          path:'/dashboards'
        }">
        <sidebar-item/>
       </sidebar-item> -->

        <!--  <sidebar-item :link="{
          name: 'Distributor',
          icon: 'ni ni-ungroup text-orange',
          path:'/distributor'
        }">
        <sidebar-item />
        </sidebar-item>

        <sidebar-item :link="{
          name: 'Support System',
          icon: 'ni ni-ui-04 text-info',
          path:'suport_system'
        }">
        <sidebar-item />
        </sidebar-item>

        <sidebar-item :link="{
          name: 'Customers',
          icon: 'ni ni-single-copy-04 text-pink',
          path:'customers'
        }">
          <sidebar-item/>
        </sidebar-item>

        <sidebar-item :link="{
          name: 'Delevery Agents',
          icon: 'ni ni-align-left-2 text-default',
          path:'delevery_agent'
        }">
        <sidebar-item />
        </sidebar-item>

        <sidebar-item :link="{
          name: 'Products',
          icon: 'ni ni-map-big text-primary',
          path:'products'
        }">
        <sidebar-item />
        </sidebar-item> -->


        <sidebar-item :link="{
          name: 'Dashboards',
          icon: 'ni ni-shop text-primary',
          path: '/dashboards',
        }">
        </sidebar-item>

        <sidebar-item :link="{
          name: 'Distributor',
          icon: 'ni ni-ungroup text-orange',
          path: '/distributor'
        }">
        </sidebar-item>

        <sidebar-item :link="{
          name: 'Support System',
          icon: 'ni ni-ui-04 text-info',
          path: 'suport_system'
        }">
        </sidebar-item>

        <sidebar-item :link="{
          name: 'Customers',
          icon: 'ni ni-single-copy-04 text-pink',
          path: 'customers'
        }">
        </sidebar-item>

        <sidebar-item :link="{
          name: 'Delevery Agents',
          icon: 'ni ni-align-left-2 text-default',
          path: 'delevery_agent'
        }">
        </sidebar-item>

        <sidebar-item :link="{
          name: 'Products',
          icon: 'ni ni-map-big text-primary',
          path: 'products'
        }">
        </sidebar-item>

        <sidebar-item :link="{
          name: 'Manage Admins',
          icon: 'ni ni-archive-2 text-green',
          path: '/widgets',
        }">
        </sidebar-item>

        <sidebar-item :link="{
          name: 'Zones',
          icon: 'ni ni-chart-pie-35 text-info',
          path: '/zones',
        }">
        </sidebar-item>

        <sidebar-item :link="{
          name: 'Transaction',
          icon: 'ni ni-calendar-grid-58 text-red',
          path: '/transaction',
        }">
        </sidebar-item>

        <sidebar-item :link="{
          name: 'Reports',
          icon: 'ni ni-single-copy-04 text-black',
          path: '/reports',
        }">
        </sidebar-item>

      </template>

      <template v-slot:links-after>
        <hr class="my-3" />
        <h6 class="navbar-heading p-0 text-muted">Documentation</h6>

        <ul class="navbar-nav mb-md-3">
          <li class="nav-item">
            <a class="nav-link" href="https://demos.creative-tim.com/vue-argon-dashboard-pro/documentation"
              target="_blank">
              <i class="ni ni-spaceship"></i>
              <span class="nav-link-text">Setting</span>
            </a>
          </li>
        </ul>
      </template>
    </side-bar>
    <!-- <div class="main-content">
      <dashboard-navbar :type="$route.meta.navbarType"></dashboard-navbar>

      <div @click="$sidebar.displaySidebar(false)">
        <router-view></router-view>
      </div> -->
    <!-- <content-footer v-if="!$route.meta.hideFooter"></content-footer> -->
    <!-- </div>  -->
  </div>
</template>
<script>
/* eslint-disable no-new */
import PerfectScrollbar from "perfect-scrollbar";
import "perfect-scrollbar/css/perfect-scrollbar.css";

function hasElement(className) {
  return document.getElementsByClassName(className).length > 0;
}

function initScrollbar(className) {
  if (hasElement(className)) {
    new PerfectScrollbar(`.${className}`);
  } else {
    // try to init it later in case this component is loaded async
    setTimeout(() => {
      initScrollbar(className);
    }, 100);
  }
}

// import DashboardNavbar from "./DashboardNavbar.vue";
// import ContentFooter from "./ContentFooter.vue";

export default {
  components: {
    // DashboardNavbar,
    // ContentFooter,
  },
  methods: {
    initScrollbar() {
      let isWindows = navigator.platform.startsWith("Win");
      if (isWindows) {
        initScrollbar("sidenav");
      }
    },
  },
  mounted() {
    this.initScrollbar();
  },
};
</script>
<style lang="scss"></style>
