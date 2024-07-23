<template>
  <div>
    <ProdsecBlogVue />
    <CveTable />
    <ComplianceAndRiskSection />
    <SecurityHelpSection />
  </div>
</template>

<script setup>
  import ProdsecBlogVue from './components/blog/ProdsecBlog.vue'
  import CveTable from './components/blog/CveTable.vue'
  import SecurityHelpSection from './components/blog/SecurityHelpSection.vue'
  import ComplianceAndRiskSection from './components/blog/ComplianceAndRiskSection.vue'
</script>

<style scoped></style>
