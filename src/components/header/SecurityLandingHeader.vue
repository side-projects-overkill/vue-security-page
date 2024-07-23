<template>
  <div class="header-container">
    <div class="pf-v5-l-flex header-top-container">
      <div
        v-for="item in headerTopItems"
        :key="item"
        class="pf-v5-l-flex__item header-top-item"
      >
        <p>{{ item }}</p>
      </div>
    </div>
    <hr />
    <div class="pf-v5-l-grid pf-m-gutter-on-sm">
      <div
        class="pf-v5-l-grid__item pf-m-9-col pf-m-4-col-on-sm pf-m-3-col-on-md pf-m-3-col-on-lg pf-m-2-col-on-xl"
      >
        <div class="pf-v5-l-flex__item">
          <img
            src="https://access.redhat.com/chrome_themes/nimbus/img/red-hat-customer-portal.svg"
            alt="Red Hat Logo"
          />
        </div>
      </div>
      <div
        class="pf-v5-l-grid__item pf-m-1-col pf-m-4-col-on-sm pf-m-3-col-on-md pf-m-5-col-on-lg pf-m-7-col-on-xl"
      >
        <div class="pf-v5-l-flex menu-container">
          <div
            v-for="item in textMenuItems"
            :key="item"
            class="pf-v5-l-flex__item menu-item"
          >
            <TextMenuItem :menu-title="item" />
          </div>
          <div class="pf-v5-l-grid hamburger-menu">
            <HamburgerMenuModal />
          </div>
        </div>
      </div>

      <div
        class="pf-v5-l-grid__item pf-m-2-col pf-m-4-col-on-sm pf-m-6-col-on-md pf-m-4-col-on-lg pf-m-3-col-on-xl"
      >
        <div class="pf-v5-l-flex pf-m-justify-content-flex-end">
          <div class="pf-v5-l-flex__item header-navigation-item menu-item">
            <SearchModal />
          </div>
          <div class="pf-v5-l-flex__item header-navigation-item menu-item">
            <EnglishModal />
          </div>
          <div class="pf-v5-l-flex__item header-navigation-item menu-item">
            <AllRedHatModal />
          </div>
          <div class="pf-v5-l-flex__item header-navigation-item menu-item">
            <i class="fa fa-user"></i>
            <p>
              <a href="#" class="navigation-item-text">Log In</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import TextMenuItem from './TextMenuItem.vue'
  import SearchModal from './SearchModal.vue'
  import HamburgerMenuModal from './HamburgerMenuModal.vue'
  import EnglishModal from './EnglishModal.vue'
  import AllRedHatModal from './AllRedHatModal.vue'

  const headerTopItems = [
    'Subscriptions',
    'Downloads',
    'Red Hat Console',
    'Get Support',
  ]

  const textMenuItems = ['Product', 'Knowledge', 'Security', 'Support']
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

  .header-container hr {
    border-color: #404040;
  }

  .header-container img {
    padding: 15px 16px 10px 0;
    height: 65px;
    width: 260px;
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

  .menu-container {
    font-size: 16px;
  }

  .menu-item {
    border-top: 3px solid #151515;
    border-radius: 3px;
    padding: 22px 2px;
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

  .header-navigation-item a {
    color: #fff;
    text-decoration: none;
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
