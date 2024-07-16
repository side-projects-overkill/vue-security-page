<template>
  <div class="header-container">
    <div class="pf-v5-l-flex header-top-container">
      <div
        class="pf-v5-l-flex__item header-top-item"
        v-for="item in headerTopItems"
        :key="item"
      >
        <p>{{ item }}</p>
      </div>
    </div>
    <hr class="header-hr" />
    <div class="pf-v5-l-grid pf-m-gutter-on-sm">
      <div
        class="pf-v5-l-grid__item pf-m-9-col pf-m-4-col-on-sm pf-m-3-col-on-md pf-m-3-col-on-lg pf-m-2-col-on-xl"
      >
        <div class="pf-v5-l-flex__item">
          <img
            src="https://access.redhat.com/chrome_themes/nimbus/img/red-hat-customer-portal.svg"
            alt="Red Hat Logo"
            class="red-hat-logo-image"
          />
        </div>
      </div>
      <div
        class="pf-v5-l-grid__item pf-m-1-col pf-m-4-col-on-sm pf-m-3-col-on-md pf-m-5-col-on-lg pf-m-7-col-on-xl"
      >
        <div class="menu-container pf-v5-l-flex">
          <div
            class="pf-v5-l-flex__item menu-item"
            v-for="item in menuItems"
            :key="item"
          >
            <p>{{ item }}</p>
          </div>
          <div class="pf-v5-l-grid hamburger-menu">
            <i class="fa fa-bars"></i>
            <p class="navigation-item-text">Menu</p>
          </div>
        </div>
      </div>

      <div
        class="pf-v5-l-grid__item pf-m-2-col pf-m-4-col-on-sm pf-m-6-col-on-md pf-m-4-col-on-lg pf-m-3-col-on-xl"
      >
        <div class="pf-v5-l-flex pf-m-justify-content-flex-end">
          <div class="pf-v5-l-flex__item header-navigation-item menu-item">
            <i class="fa fa-search"></i>
            <p class="navigation-item-text">Search</p>
          </div>
          <div class="pf-v5-l-flex__item header-navigation-item menu-item">
            <i class="fa fa-clock"></i>
            <p class="navigation-item-text">English</p>
          </div>
          <div class="pf-v5-l-flex__item header-navigation-item menu-item">
            <i class="fa fa-th"></i>
            <p class="navigation-item-text">All Red hat</p>
          </div>
          <div class="pf-v5-l-flex__item header-navigation-item menu-item">
            <i class="fa fa-user"></i>
            <p class="navigation-item-text">Log In</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const headerTopItems = ref([
  "Subscriptions",
  "Downloads",
  "Red Hat Console",
  "Get Support",
]);

const menuItems = ref(["Products", "Knowledge", "Security", "Support"]);
</script>

<style scoped>
.header-container {
  font-size: 14px;
  background-color: #151515;
  color: #fff;
  height: 120px;
  padding: 0 32px;
  align-items: center;
}

.header-top-container {
  padding: 10px;
}

.header-top-container div {
  border-right: 1px solid #404040;
  padding-right: 20px;
}

.header-top-container div:hover {
  text-decoration: underline;
  cursor: pointer;
}

.header-hr {
  border-color: #404040;
}

.red-hat-logo-image {
  padding: 15px 16px 10px 0;
  height: 65px;
  width: 260px;
}

.menu-container {
  height: 70px;
  font-size: 18px;
  color: #f3f3f3;
}

.menu-item {
  border-top: 3px solid #151515;
  border-radius: 3px;
  padding-top: 22px;
}

.menu-item:hover {
  border-top: 3px solid #e00;
  cursor: pointer;
}

.hamburger-menu {
  display: none;
  text-align: center;
  padding-top: 13px;
  font-size: 14px;
}

.header-navigation-item {
  text-align: center;
  padding-top: 10px;
}

@media screen and (max-width: 1199px) {
  .hamburger-menu {
    display: block;
  }
  .menu-container .menu-item {
    display: none;
  }
}

@media screen and (max-width: 767px) {
  .header-container {
    height: 70px;
  }

  .header-top-container {
    display: none;
  }

  .header-navigation-item {
    display: none;
  }

  .header-navigation-item:last-child {
    display: block;
  }
}
</style>
