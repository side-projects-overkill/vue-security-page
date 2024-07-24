<template>
  <div>
    <SecurityLandingHeader />
    <ProdsecBlogVue />
    <CveTable />
    <ComplianceAndRiskSection />
    <SecurityHelpSection />
    <SecurityLandingFooter />
  </div>
</template>

<script setup>
  import SecurityLandingHeader from './components/header/SecurityLandingHeader.vue'
  import ProdsecBlogVue from './components/blog/ProdsecBlog.vue'
  import CveTable from './components/blog/CveTable.vue'
  import ComplianceAndRiskSection from './components/blog/ComplianceAndRiskSection.vue'
  import SecurityHelpSection from './components/blog/SecurityHelpSection.vue'
  import SecurityLandingFooter from './components/footer/SecurityLandingFooter.vue'
</script>

<style scoped></style>
