<template>
  <div class="hamburger-menu-accordion-main-container">
    <pf-accordion>
      <pf-accordion-header>
        <h3>{{ menuTitle }}</h3>
      </pf-accordion-header>  
      <pf-accordion-panel>
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

<style scoped>
.hamburger-menu-accordion-main-container {
  margin-top: 15px 0px;
}
</style>
