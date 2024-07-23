<template>
  <div>
    <rh-accordion>
      <rh-accordion-header>
        <p>{{ menuTitle }}</p>
      </rh-accordion-header>
      <rh-accordion-panel>
        <div class="pf-v5-l-grid pf-m-gutter">
          <div
            v-for="(categoryLinks, categoryKey) in linksData"
            :key="categoryKey"
            class="pf-v5-l-grid__item pf-m-4-col"
          >
            <div class="pf-v5-l-flex pf-m-column">
              <div class="pf-v5-l-flex">
                <p>{{ formatTitle(categoryKey) }}</p>
              </div>
              <div
                v-for="link in categoryLinks"
                :key="link.text"
                class="pf-v5-l-flex"
              >
                <a :href="link.link">{{ link.text }}</a>
              </div>
            </div>
          </div>
        </div>
      </rh-accordion-panel>
    </rh-accordion>
  </div>
</template>

<script setup>
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

  const formatTitle = (categoryKey) => {
    return categoryKey
      .replace(/([A-Z])/g, ' $1')
      .replace(/^./, (str) => str.toUpperCase())
  }
</script>

<style scoped>
  rh-accordion {
    margin-top: 15px 0px;
  }

  rh-accordion p {
    font-size: 17px;
    font-weight: 500;
    text-align: start;
  }

  rh-accordion a {
    text-align: start;
  }

  rh-accordion-panel::part(container) {
    --pf-c-accordion__panel-body--before--BackgroundColor: #ee0000;
  }
</style>
