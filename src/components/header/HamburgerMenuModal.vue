<template>
  <pf-modal trigger="hamburgermenu-trigger" position="top">
    <HamburgerAccordian menuTitle="Product" :linksData="headerLinks.product" />
    <HamburgerAccordian
      menuTitle="Knowledge"
      :linksData="headerLinks.knowledge"
    />
    <HamburgerAccordian
      menuTitle="Security"
      :linksData="headerLinks.security"
    />
    <HamburgerAccordian menuTitle="Support" :linksData="headerLinks.support" />
  </pf-modal>
  <pf-button id="hamburgermenu-trigger">
    <i class="fa fa-bars"></i>
    <p class="navigation-item-text">Menu</p>
  </pf-button>
</template>

<script setup>
import { headerLinks } from "./headerLinksData.js";
import HamburgerAccordian from "./HamburgerAccordian.vue";
</script>

<style scoped>
pf-modal::part(dialog) {
  margin-inline: 0;
  color: black;
  margin-top: 115px;
  box-shadow: none;
}

pf-modal::part(overlay) {
  height: 80%;
  top: 340px;
}
</style>
