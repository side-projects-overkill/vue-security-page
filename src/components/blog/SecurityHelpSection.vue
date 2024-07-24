<template>
  <div class="shl-mainContainer pf-v5-c-content">
    <h1>Secrity help and learning</h1>
    <div class="security-dropdown-container">
      <h2>Security Guides</h2>
      <pf-select
        id="security-dropdown"
        placeholder="Select a product"
        accessible-label="Red Hat Enterprise Linux"
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
          <a href="https://www.redhat.com/wapps/ugc/protected/notif.html"
            >Notification preferences</a
          >
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
          <a href="https://access.redhat.com/security/team/contact/">
            Contacting Product Security
          </a>
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
          <a href="https://www.redhat.com/en/trust/RFC-2350"
            >Contacting Information Security
          </a>
        </rh-cta>
      </rh-card>
    </div>
    <div class="insights-section">
      <rh-card>
        <img
          src="../../assets/rh-icon-graph-arrow-up.svg"
          alt="graph-icon"
          width="64"
          height="64"
        />
        <p class="graph-lable">Red Hat Insights</p>
        <p>
          Give your business the ability to predict and prevent problems before
          they occur
        </p>
        <a href="https://access.redhat.com/products/red-hat-insights/"
          >GET STARTED</a
        >
      </rh-card>
    </div>
  </div>
</template>

<script setup>
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
</script>

<style scoped>
  .shl-mainContainer {
    max-width: 1440px;
    margin: auto;
    padding: 0px 32px;
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

  .insights-section {
    text-align: center;
  }

  .insights-section rh-card::part(container) {
    min-height: auto;
    background: url('https://access.redhat.com/chrome_themes/nimbus/img/hero-corporate-pattern.png');
    background-color: #37424a;
    color: white;
  }

  .insights-section rh-card > img {
    filter: invert(100%);
  }

  .insights-section p {
    font-size: 20px;
  }

  .insights-section a {
    font-weight: 700;
    background-color: white;
    padding: 9px 40px;
  }

  .graph-lable {
    font-weight: 600;
  }
</style>
