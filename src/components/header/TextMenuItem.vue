<template>
  <div>
    <pf-modal :trigger="menuTitle" class="modal-container" position="top">
      <div class="pf-v5-l-grid pf-m-gutter">
        <div class="pf-v5-l-grid__item pf-m-2-col"></div>
        <div class="pf-v5-l-grid__item pf-m-8-col">
          <div class="pf-v5-l-grid pf-m-gutter">
            <div
              class="pf-v5-l-grid__item pf-m-4-col"
              v-for="(category, key) in headerLinks.support"
              :key="key"
            >
              <div class="pf-v5-l-flex pf-m-column">
                <div class="pf-v5-l-flex__item">
                  <p>{{ formatTitle(key) }}</p>
                </div>
                <div
                  class="pf-v5-l-flex__item"
                  v-for="item in category"
                  :key="item.text"
                >
                  <a :href="item.link">{{ item.text }}</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="pf-v5-l-grid__item pf-m-2-col"></div>
      </div>
    </pf-modal>
    <pf-button :id="menuTitle"
      ><h3>{{ menuTitle }}</h3></pf-button
    >
  </div>
</template>

<script setup>
import { headerLinks } from "./headerLinksData";

defineProps({
  menuTitle: String,
  uniqueId: String,
});

const formatTitle = (key) => {
  return key
    .replace(/([A-Z])/g, " $1")
    .replace(/^./, (str) => str.toUpperCase());
};
</script>

<style scoped>
.modal-container::part(dialog) {
  margin-inline: 0;
  color: black;
  margin-top: 115px;
  box-shadow: none;
}

.modal-container::part(overlay) {
  height: 80%;
  top: 340px;
}
</style>
