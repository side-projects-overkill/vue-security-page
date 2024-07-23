<template>
  <div>
    <SecurityLandingHeader />
    <ProdsecBlogVue />
    <SecurityLandingFooter />
  </div>
</template>

<script setup>
  import SecurityLandingHeader from './components/header/SecurityLandingHeader.vue'
  import SecurityLandingFooter from './components/footer/SecurityLandingFooter.vue'
  import ProdsecBlogVue from './components/blog/ProdsecBlog.vue'
  import '@patternfly/elements/pf-modal/pf-modal.js'
  import '@rhds/elements/rh-accordion/rh-accordion.js'
</script>

<style scoped></style>
