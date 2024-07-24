<template>
  <div
    class="pf-v5-l-grid pf-m-all-6-col-on-md pf-m-gutter pf-v5-c-content container"
  >
    <div class="pf-v5-l-grid__item pf-m-12-col pf-m-6-col-on-lg">
      <h2>Compliance and risk</h2>
      <p>
        The Compliance and Risk (PSCR) group brings together several disparate
        functions to focus on accelerating security requirement implementation
        and compliance framework achievement. PSCR participates in the
        requirements phase of the traditional Software Development Lifecycle
        (SDLC) and validation of successful requirement implementation. They
        also coordinate the planning of security certification efforts across
        Red Hat service and product portfolios. This coordination effort
        includes attaining security certifications across the Global Engineering
        portfolio to support Red Hat’s open hybrid cloud strategy and market
        success in restricted sales markets.
      </p>
      <p>
        PSCR informs security and risk decisions across Product Security and
        Global Engineering by developing tools and solutions that automate
        security and compliance functions, and conducting critical analysis
        functions to inform security and risk decisions across Product Security
        and Global Engineering.
      </p>
      <p>
        This work differentiates Red Hat from other open-source vendors by
        including requirements definitions for products and improvements in
        security metadata.
      </p>
    </div>
    <div class="pf-v5-l-grid__item pf-m-0-col pf-m-2-col-on-lg"></div>
    <pf-card
      rounded
      class="pf-v5-l-grid__item pf-m-12-col pf-m-4-col-on-lg overview-security-card"
    >
      <h3 class="card-header">Security and privacy</h3>
      <ul>
        <li>
          <a
            href="https://access.redhat.com/search/?q=pci-dss&p=1&sort=relevant&scoped=false"
            >Articles on PCI DSS</a
          >
        </li>
        <li>
          <a
            href="https://access.redhat.com/articles/compliance_activities_and_gov_standards"
            >Compliance activities and government standards</a
          >
        </li>
        <li>
          <a
            href="https://connect.redhat.com/en/partner-with-us/red-hat-vulnerability-scanner-certification"
            >Red Hat vulnerability scanner certification</a
          >
        </li>
        <li>
          <a href="https://www.redhat.com/en/trust">Trust Red Hat</a>
        </li>
      </ul>
    </pf-card>
  </div>
</template>

<script setup></script>

<style scoped>
  .container {
    max-width: 1440px;
    margin: auto;
    margin-top: 64px;
    padding: 0px 32px;
  }

  .overview-security-card {
    border-top: 3px solid #0066cc;
    height: min-content;
  }

  .overview-security-card li {
    list-style: none;
  }

  .overview-security-card ul {
    padding-inline-start: 0;
    margin-inline-start: 0;
  }

  .card-header {
    padding: 24px 0px 16px 0px;
    font-size: 20px;
    font-weight: 500;
  }

  h2 {
    font-weight: 500;
    font-size: 24px;
  }
</style>
