<template>
  <div>
    <pf-modal trigger="hamburgermenu-trigger" position="top">
      <HamburgerAccordian
        menu-title="Product"
        :links-data="headerLinks.product"
      />
      <HamburgerAccordian
        menu-title="Knowledge"
        :links-data="headerLinks.knowledge"
      />
      <HamburgerAccordian
        menu-title="Security"
        :links-data="headerLinks.security"
      />
      <HamburgerAccordian
        menu-title="Support"
        :links-data="headerLinks.support"
      />
    </pf-modal>
    <pf-button id="hamburgermenu-trigger">
      <i class="fa fa-bars"></i>
      <p class="navigation-item-text">Menu</p>
    </pf-button>
  </div>
</template>

<script setup>
  import { headerLinks } from './headerLinksData.js'
  import HamburgerAccordian from './HamburgerAccordian.vue'
</script>

<style scoped>
  pf-modal::part(dialog) {
    margin-inline: 0;
    color: black;
    margin-top: 115px;
    box-shadow: none;
    padding-bottom: 60px;
  }

  pf-modal::part(overlay) {
    height: 80%;
    top: 340px;
  }

  pf-button {
    --pf-c-button--m-primary--BackgroundColor: transparent;
  }
</style>
