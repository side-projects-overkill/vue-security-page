<template>
  <div>
    <pf-modal :trigger="menuTitle" position="top">
      <div class="pf-v5-l-grid pf-m-gutter">
        <div class="pf-v5-l-grid__item pf-m-2-col"></div>
        <div class="pf-v5-l-grid__item pf-m-8-col">
          <div class="pf-v5-l-grid pf-m-gutter">
            <div
              v-for="(category, key) in headerLinks.support"
              :key="key"
              class="pf-v5-l-grid__item pf-m-4-col"
            >
              <div class="pf-v5-l-flex pf-m-column">
                <div class="pf-v5-l-flex__item">
                  <p>{{ formatTitle(key) }}</p>
                </div>
                <div
                  v-for="item in category"
                  :key="item.text"
                  class="pf-v5-l-flex__item"
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
  import { headerLinks } from './headerLinksData.js'

  defineProps({
    menuTitle: {
      type: String,
      default: '',
    },
    linksData: {
      type: Object,
      default: () => ({}),
    },
  })

  const formatTitle = (key) => {
    return key
      .replace(/([A-Z])/g, ' $1')
      .replace(/^./, (str) => str.toUpperCase())
  }
</script>

<style scoped>
  pf-modal::part(dialog) {
    margin-inline: 0;
    color: black;
    margin-top: 115px;
    box-shadow: none;
    padding-bottom: 50px;
  }

  pf-modal::part(overlay) {
    height: 80%;
    top: 340px;
  }

  pf-modal p {
    font-size: 17px;
    font-weight: 400;
  }

  pf-button {
    --pf-c-button--m-primary--BackgroundColor: transparent;
  }
</style>
