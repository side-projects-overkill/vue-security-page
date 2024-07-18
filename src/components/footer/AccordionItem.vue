<template>
  <div class="accordion-main-continaer">
    <pf-accordion class="accordion-header-container">
      <pf-accordion-header class="accordion-header">
        <h3>{{ title }}</h3>
      </pf-accordion-header>
      <pf-accordion-panel class="accordion-panel-container">
        <div class="pf-v5-l-flex pf-m-space-items-2xl">
          <div class="pf-v5-l-flex">
            <div class="pf-v5-l-flex pf-m-column">
              <div
                class="pf-v5-l-flex__item"
                v-for="item in currentLinks"
                :key="item.text"
              >
                <p>
                  <a :href="item.link">{{ item.text }}</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </pf-accordion-panel>
    </pf-accordion>
    <hr />
  </div>
</template>

<script setup>
import "@patternfly/elements/pf-accordion/pf-accordion.js";
import { footerLinks } from "./linksData";
import { computed } from "vue";

const props = defineProps({
  title: String,
});

const currentLinks = computed(() => {
  switch (props.title) {
    case "Quick Links":
      return footerLinks.quickLinks;
    case "Help":
      return footerLinks.helpLinks;
    case "Site Info":
      return footerLinks.siteInfoLinks;
    case "Related Sites":
      return footerLinks.relatedSiteLinks;
    case "About":
      return footerLinks.aboutLinks;
    default:
      return [];
  }
});
</script>

<style scoped>
.accordion-main-continaer {
  padding-top: 10px;
}

.accordion-main-continaer hr {
  border-color: #707070;
}

.toggle,
.toggle:before,
.toggle:after {
  background-color: #151515;
}

.accordion-header-container {
  --pf-c-accordion--BackgroundColor: #1f1f1f;
}

.accordion-header::part(text) {
  color: #ffffff;
  font-size: 17px;
  font-weight: 500;
}

.accordion-panel-container {
  --pf-c-accordion__panel-body--before--BackgroundColor: red;
  & a {
    color: #ffffff;
    font-size: 15px;
  }
}
</style>
