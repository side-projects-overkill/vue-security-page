<template>
  <!-- <div class="hamburger-menu-accordion-main-continaer">
    <pf-accordion class="hamburger-menu-accordion-header-container">
      <pf-accordion-header class="hamburger-menu-accordion-header">
        <h3>{{ menuTitle }}</h3>
      </pf-accordion-header>
      <pf-accordion-panel class="hamburger-menu-accordion-panel-container">
        <div class="pf-v5-l-grid pf-m-gutter">
          <div class="pf-v5-l-grid__item pf-m-4-col">
            <div class="pf-v5-l-flex pf-m-column">
              <div class="pf-v5-l-flex__item">Flex item</div>
              <div class="pf-v5-l-flex__item">Flex item</div>
              <div class="pf-v5-l-flex__item">Flex item</div>
              <div class="pf-v5-l-flex__item">Flex item</div>
            </div>
          </div>
          <div class="pf-v5-l-grid__item pf-m-4-col">
            <div class="pf-v5-l-flex pf-m-column">
              <div class="pf-v5-l-flex__item">Flex item</div>
              <div class="pf-v5-l-flex__item">Flex item</div>
              <div class="pf-v5-l-flex__item">Flex item</div>
              <div class="pf-v5-l-flex__item">Flex item</div>
            </div>
          </div>
          <div class="pf-v5-l-grid__item pf-m-4-col">
            <div class="pf-v5-l-flex pf-m-column">
              <div class="pf-v5-l-flex__item">Flex item</div>
              <div class="pf-v5-l-flex__item">Flex item</div>
              <div class="pf-v5-l-flex__item">Flex item</div>
              <div class="pf-v5-l-flex__item">Flex item</div>
            </div>
          </div>
        </div>
      </pf-accordion-panel>
    </pf-accordion>
    <hr />
  </div> -->
  <div class="hamburger-menu-accordion-main-container">
    <pf-accordion class="hamburger-menu-accordion-header-container">
      <pf-accordion-header class="hamburger-menu-accordion-header">
        <h3>{{ menuTitle }}</h3>
      </pf-accordion-header>
      <pf-accordion-panel class="hamburger-menu-accordion-panel-container">
        <div class="pf-v5-l-grid pf-m-gutter">
          <div
            v-for="(categoryLinks, categoryKey) in linksData"
            :key="categoryKey"
            class="pf-v5-l-grid__item pf-m-4-col"
          >
            <div class="pf-v5-l-flex pf-m-column">
              <div
                v-for="link in categoryLinks"
                :key="link.text"
                class="pf-v5-l-flex__item"
              >
                <a :href="link.link">{{ link.text }}</a>
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

defineProps({
  menuTitle: String,
  linksData: Object,
});
</script>

<style scoped></style>
