<template>
  <rh-accordion color-palette="darker">
    <rh-accordion-header>
      <h3>{{ title }}</h3>
    </rh-accordion-header>
    <rh-accordion-panel color-palette="darker">
      <div class="pf-v5-l-flex pf-m-space-items-2xl">
        <div class="pf-v5-l-flex">
          <div class="pf-v5-l-flex pf-m-column">
            <div
              v-for="item in currentLinks"
              :key="item.text"
              class="pf-v5-l-flex__item"
            >
              <p>
                <a :href="item.link">{{ item.text }}</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </rh-accordion-panel>
  </rh-accordion>
</template>

<script setup type="module">
  import { computed } from 'vue'
  import { footerLinks } from './linksData.js'

  const props = defineProps({
    // Props for Menu Title
    title: {
      type: String,
      default: '',
    },
  })

  const currentLinks = computed(() => {
    // Case statements for displaying links data according to menu title
    switch (props.title) {
      case 'Quick Links':
        return footerLinks.quickLinks
      case 'Help':
        return footerLinks.helpLinks
      case 'Site Info':
        return footerLinks.siteInfoLinks
      case 'Related Sites':
        return footerLinks.relatedSiteLinks
      case 'About':
        return footerLinks.aboutLinks
      default:
        return []
    }
  })
</script>

<style scoped>
  rh-accordion a {
    color: #fff;
  }
</style>
