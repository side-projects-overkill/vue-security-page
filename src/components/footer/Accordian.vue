<template>
  <div class="accordian-main-continaer">
    <pf-accordion class="accordian-header-container">
    <pf-accordion-header class="accordian-header">
      <h3>Quick Links</h3>
    </pf-accordion-header>
    <pf-accordion-panel class="accordian-panel-container">
      <p>Downloads</p>
    </pf-accordion-panel>
  </pf-accordion>
  <hr/>
  </div>
  
</template>

<script setup>
import "@patternfly/elements/pf-accordion/pf-accordion.js";
import { footerLinks } from "./linksData";
</script>

<style scoped>
.accordian-main-continaer{
  padding-top: 10px;
}

.accordian-main-continaer hr {
  border-color: #707070;
}

.toggle, .toggle:before, .toggle:after {
    background-color: #151515;
}

.accordian-header-container {
  --pf-c-accordion--BackgroundColor: #1f1f1f;
}

.accordian-header::part(text) {
  color: #ffffff;
  font-size: 17px;
  font-weight: 500;
}

.accordian-panel-container {
  --pf-c-accordion__panel-body--before--BackgroundColor: red;
  & p {
    color: #ffffff;
    font-size: 17px;
  }
}

</style>
