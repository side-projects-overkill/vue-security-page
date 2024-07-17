<template>
  <div class="pf-v5-c-content prodsec-blog">
    <div class="heading">
      <h1 class="headline">Product Security Center</h1>
      <p>
        Red Hat provides the guidance and stability needed to confidently deploy
        your solutions
      </p>
    </div>

    <div class="security-overview">
      <div class="pf-v5-l-grid pf-m-all-6-col-on-md pf-m-gutter">
        <div class="pf-v5-l-grid__item pf-m-12-col pf-m-6-col-on-lg">
          <h2>Red Hat Secure Development Lifecycle practices</h2>
          <p>
            Our industry-aligned Secure Development Lifecycle (SDL) practices
            ensure that Red Hat produces secure, high-quality software to meet
            our customer's business needs. We secure both our code and supply
            chain infrastructure through scans and testing, and utilize threat
            models and weakness patterns to design and build with security as a
            primary objective:
          </p>
          <ul class="sdl-links-list">
            <li><a>Software supply chain security assurance</a></li>
            <li><a>Security testing process</a></li>
          </ul>
        </div>
        <div class="pf-v5-l-grid__item pf-m-0-col pf-m-2-col-on-lg"></div>
        <pf-card
          rounded
          class="pf-v5-l-grid__item pf-m-12-col pf-m-4-col-on-lg overview-security-card"
        >
          <h3 class="card-header">About security</h3>
          <ul>
            <li><a>Life Cycle Security Update Policy</a></li>
            <li><a>Product Life Cycles</a></li>
            <li><a>Product Security overview</a></li>
            <li><a>SDL overview</a></li>
            <li><a>Security blog </a></li>
            <li><a>Security glossary</a></li>
          </ul>
        </pf-card>
      </div>

      <div class="pf-v5-l-grid pf-m-all-6-col-on-md pf-m-gutter">
        <div class="pf-v5-l-grid__item pf-m-12-col pf-m-6-col-on-lg">
          <h2>Red Hat response</h2>
          <p>
            Our Incident Response team manages all security vulnerabilities
            reported or discovered within Red Hat software. We establish the
            baseline on which Red Hat classifies the level of severity for
            vulnerabilities, which drives the risk to Red Hat software, its
            customers, the overall ecosystem, and therefore determines the
            orchestration of efforts necessary to respond to incidents.
          </p>
          <p>
            Red Hat security engineers analyze and track all known
            vulnerabilities. Our security classifications are used to prioritize
            all risks, and we work with each of our engineering teams to resolve
            those risks. We then disclose these risks in an open manner using
            industry formats and standards such as OVAL, CSAF, CVRF, our CVE
            pages, and security API.
          </p>
        </div>
        <div class="pf-v5-l-grid__item pf-m-0-col pf-m-2-col-on-lg"></div>
        <pf-card
          rounded
          class="pf-m-12-col pf-m-4-col-on-lg overview-security-card"
        >
          <div class="pf-v5-l-grid pf-m-all-6-col">
            <div>
              <h3 class="card-header">Security updates</h3>
              <ul>
                <li><a>Security advisories</a></li>
                <li><a>Security bulletins</a></li>
                <li><a>Security labs</a></li>
              </ul>
            </div>
            <div>
              <h3 class="card-header">Vulnerabilities</h3>
              <ul>
                <li><a>CVE database</a></li>
                <li><a>Incident response plan</a></li>
                <li><a>Security data</a></li>
                <li><a>Severity ratings</a></li>
                <li><a>Vulnerability management</a></li>
              </ul>
            </div>
          </div>
        </pf-card>
      </div>

      <div class="pf-v5-l-grid pf-m-all-6-col-on-md pf-m-gutter">
        <div class="pf-v5-l-grid__item pf-m-12-col pf-m-6-col-on-lg">
          <h2>Compliance and risk</h2>
          <p>
            The Compliance and Risk (PSCR) group brings together several
            disparate functions to focus on accelerating security requirement
            implementation and compliance framework achievement. PSCR
            participates in the requirements phase of the traditional Software
            Development Lifecycle (SDLC) and validation of successful
            requirement implementation. They also coordinate the planning of
            security certification efforts across Red Hat service and product
            portfolios. This coordination effort includes attaining security
            certifications across the Global Engineering portfolio to support
            Red Hat’s open hybrid cloud strategy and market success in
            restricted sales markets.
          </p>
          <p>
            PSCR informs security and risk decisions across Product Security and
            Global Engineering by developing tools and solutions that automate
            security and compliance functions, and conducting critical analysis
            functions to inform security and risk decisions across Product
            Security and Global Engineering.
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
            <li><a>Articles on PCI DSS</a></li>
            <li><a>Compliance activities and government standards</a></li>
            <li><a>Red Hat vulnerability scanner certification</a></li>
            <li><a>Trust Red Hat</a></li>
          </ul>
        </pf-card>
      </div>
    </div>
  </div>
</template>

<script setup>
  import '@patternfly/elements/pf-card/pf-card.js'
</script>

<style scoped>
  .overview-security-card {
    border-top: 3px solid #0066cc;
    height: min-content;
  }

  .security-overview > div {
    padding-top: 48px;
  }

  .security-overview li {
    list-style: none;
  }

  .overview-security-card ul {
    padding-inline-start: 0;
    margin-inline-start: 0;
  }

  .card-header {
    padding: 24px 0px 16px 0px;
  }

  .sdl-links-list li {
    list-style: disc;
    color: #06c;
  }

  .prodsec-blog {
    padding: 0px 32px;
  }

  .heading {
    font-weight: 400;
    font-size: 18px;
    padding-top: 48px;
  }

  .headline {
    font-weight: 600;
    font-size: 28px;
    font-family: 'Red Hat Display', sans-serif;
  }

  h2 {
    font-weight: 500;
    font-size: 24px;
  }
</style>
