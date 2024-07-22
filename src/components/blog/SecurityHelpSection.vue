<template>
  <div class="shl-mainContainer">
    <h1>Secrity help and learning</h1>
    <div class="security-dropdown-container">
      <h2>Security Guides</h2>
      <pf-spinner v-if="!spinnerTime" diameter="40px">Loading...</pf-spinner>
      <pf-select
        v-show="spinnerTime"
        id="security-dropdown"
        placeholder="Select a product"
      >
        <pf-option-group key="group1" label="Red Hat Enterprise Linux">
          <pf-option><a>Hardening Guide</a></pf-option>
          <pf-option><a>SELinux Guide</a></pf-option>
        </pf-option-group>
        <hr />
        <pf-option-group key="group2" label="Red Hat Openstack Platform">
          <pf-option><a>Security Hardening Guide</a></pf-option>
        </pf-option-group>
        <pf-option-group key="group3" label="Red Hat OpenShift Platform">
          <pf-option><a>Security and Compliance</a></pf-option>
        </pf-option-group>
        <pf-option-group
          key="group4"
          label="Red Hat JBoss Enterprise Application Platform"
        >
          <pf-option><a>Security Architecture</a></pf-option>
          <pf-option><a>Server Security Configuration</a></pf-option>
          <pf-option><a>Identity Management Configuration</a></pf-option>
        </pf-option-group>
      </pf-select>
    </div>
    <div class="knowledgebase-container">
      <h2>Latest Knowledgebase content</h2>
      <div class="pf-v5-l-grid pf-m-gutter">
        <div
          v-for="data in latestKnowledgeData"
          :key="data.heading"
          class="knowledge-cases pf-v5-l-grid__item pf-m-12-col pf-m-6-col-on-sm"
        >
          <h3 class="knowledge-cases-heading">
            <a>{{ data.heading }}</a>
          </h3>
          <p class="knowledge-cases-update">{{ data.latestUpdate }}</p>
          <p>{{ data.platform }}</p>
        </div>
      </div>
    </div>
    <div class="pf-v5-l-grid pf-m-gutter">
      <rh-card class="pf-v5-l-grid__item pf-m-12-col pf-m-4-col-on-lg">
        <h3 slot="header" class="report-card-header">Notifications</h3>
        <p>
          Receive email notifications of security updates, bug fixes, and
          enhancements, also known as errata.
        </p>
        <p>
          Errata notifications are controlled based on your method of
          subscription management.
        </p>
        <rh-cta slot="footer">
          <a>Notification preferences</a>
        </rh-cta>
      </rh-card>
      <rh-card class="pf-v5-l-grid__item pf-m-12-col pf-m-4-col-on-lg">
        <h3 slot="header" class="report-card-header">
          Report a new vulnerability
        </h3>
        <p>
          Suspected security vulnerabilities in a Red Hat product or service
          should be sent to secalert@redhat.com.
        </p>
        <p>
          Your correspondence with us will be kept in the strictest confidence.
        </p>
        <rh-cta slot="footer">
          <a> Contacting Product Security </a>
        </rh-cta>
      </rh-card>
      <rh-card class="pf-v5-l-grid__item pf-m-12-col pf-m-4-col-on-lg">
        <h3 slot="header" class="report-card-header">
          Report a new Information Security incident
        </h3>
        <p>Incident reports should be sent to infosec@redhat.com.</p>
        <p>
          Your correspondence with us will be kept in the strictest confidence.
        </p>
        <rh-cta slot="footer">
          <a>Contacting Information Security </a>
        </rh-cta>
      </rh-card>
    </div>
  </div>
</template>

<script setup>
  import '@patternfly/elements/pf-select/pf-select.js'
  import '@patternfly/elements/pf-select/pf-option-group.js'
  import { ref } from 'vue'

  const latestKnowledgeData = [
    {
      heading: "Data Gathered and Used by Red Hat's subscription services",
      latestUpdate: 'Last Updated 19 hours ago',
      platform: 'Red Hat Insights,+2',
    },
    {
      heading:
        'Is Red Hat Enterprise Linux affected by Apache HTTP Server vulnerabilities (CVE-2024-39573,CVE-2024-38473,CVE-2024-38474,CVE-2024-38475,CVE-2024-38476, CVE-2024-38477)?',
      latestUpdate: 'Last Updated 2 days ago',
      platform: 'Red Hat Enterprise Linux',
    },
    {
      heading:
        'Compliance Operator shows INCONSISTENT scan result with worker node.',
      latestUpdate: 'Last Updated 3 days ago',
      platform: 'Red Hat OpenShift Container Platform',
    },
    {
      heading: "Data Gathered and Used by Red Hat's subscription services",
      latestUpdate: 'Last Updated 3 days ago',
      platform: 'Microsoft Azure Red Hat OpenShift',
    },
  ]

  const spinnerTime = ref(false)

  let pfSelectgroup
  setTimeout(() => {
    spinnerTime.value = true
    pfSelectgroup = document.getElementById('security-dropdown')
    pfSelectgroup.shadowRoot.getElementById('toggle').style.border = 'none'
    pfSelectgroup.shadowRoot.getElementById('placeholder').style.display =
      'none'
    pfSelectgroup.shadowRoot.getElementById('toggle-button').style.maxWidth =
      '546px'
    pfSelectgroup.shadowRoot.getElementById('toggle-button').style.border =
      '1px solid black'
    pfSelectgroup.shadowRoot.getElementById(
      'listbox-container',
    ).style.maxHeight = '400px'
    pfSelectgroup.shadowRoot.getElementById(
      'listbox-container',
    ).style.overflowY = 'scroll'
    pfSelectgroup.shadowRoot.getElementById('listbox-container').style.padding =
      '8px'
    pfSelectgroup.shadowRoot.getElementById(
      'listbox-container',
    ).style.boxShadow = '0px 3px 10px rgba(0,0,0,.2),0px 3px 8px rgba(0,0,0,.2)'
  }, 1000)
</script>

<style scoped>
  .shl-mainContainer {
    margin-top: 64px;
  }

  .shl-mainContainer > div {
    margin-top: 64px;
  }

  #security-dropdown {
    max-width: 642px;
  }

  .knowledge-cases {
    background-color: #f3f3f3;
    padding: 24px;
  }

  .knowledge-cases-heading {
    font-weight: 500;
    font-size: 18px;
  }

  .knowledge-cases-update {
    color: #6a6e73;
  }

  rh-card {
    box-sizing: border-box;
  }

  rh-card::part(container) {
    min-height: 300px;
    text-overflow: clip;
    border-top: 3px solid #0066cc;
    margin-bottom: 32px;
  }

  rh-card::part(header) {
    font-size: 20px;
    margin-block-start: 24px;
    margin-inline: 24px;
  }

  rh-card::part(body) {
    margin-block-start: 24px;
    margin-inline: 24px;
  }

  rh-card::part(footer) {
    margin-block-end: 32px;
    margin-inline: 24px;
  }

  .report-card-header {
    font-size: 20px;
    font-weight: 500;
  }
</style>
