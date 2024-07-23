<template>
  <div class="pf-v5-c-content container">
    <div class="prodsec-blog">
      <div class="heading">
        <h1 class="headline">Product Security Center</h1>
        <p>
          Red Hat provides the guidance and stability needed to confidently
          deploy your solutions
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
              models and weakness patterns to design and build with security as
              a primary objective:
            </p>
            <ul class="sdl-links-list">
              <li>
                <a
                  href="https://access.redhat.com/articles/software%20_supply_chain_security_assurance"
                  >Software supply chain security assurance</a
                >
              </li>
              <li>
                <a
                  href="https://access.redhat.com/security_testing_sdl_practice"
                  >Security testing process</a
                >
              </li>
            </ul>
          </div>
          <div class="pf-v5-l-grid__item pf-m-0-col pf-m-2-col-on-lg"></div>
          <pf-card
            rounded
            class="pf-v5-l-grid__item pf-m-12-col pf-m-4-col-on-lg overview-security-card"
          >
            <h3 class="card-header">About security</h3>
            <ul>
              <li>
                <a
                  href="https://access.redhat.com/security/lifecycle-security-update-policy"
                  >Life Cycle Security Update Policy</a
                >
              </li>
              <li>
                <a
                  href="https://access.redhat.com/product-life-cycles/update_policies"
                  >Product Life Cycles</a
                >
              </li>
              <li>
                <a href="https://access.redhat.com/security/overview/"
                  >Product Security overview</a
                >
              </li>
              <li>
                <a href="https://access.redhat.com/articles/red_hat_sdl"
                  >SDL overview</a
                >
              </li>
              <li>
                <a href="https://www.redhat.com/en/blog/channel/security"
                  >Security blog
                </a>
              </li>
              <li>
                <a href="https://access.redhat.com/security/glossary"
                  >Security glossary</a
                >
              </li>
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
              vulnerabilities. Our security classifications are used to
              prioritize all risks, and we work with each of our engineering
              teams to resolve those risks. We then disclose these risks in an
              open manner using industry formats and standards such as OVAL,
              CSAF, CVRF, our CVE pages, and security API.
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
                  <li>
                    <a
                      href="https://access.redhat.com/security/security-updates/security-advisories"
                      >Security advisories</a
                    >
                  </li>
                  <li>
                    <a href="https://access.redhat.com/security/vulnerabilities"
                      >Security bulletins</a
                    >
                  </li>
                  <li>
                    <a
                      href="https://access.redhat.com/security/security-updates/security-labs"
                      >Security labs</a
                    >
                  </li>
                </ul>
              </div>
              <div>
                <h3 class="card-header">Vulnerabilities</h3>
                <ul>
                  <li>
                    <a
                      href="https://access.redhat.com/security/security-updates/cve"
                      >CVE database</a
                    >
                  </li>
                  <li>
                    <a
                      href="https://access.redhat.com/articles/understanding_irp"
                      >Incident response plan</a
                    >
                  </li>
                  <li>
                    <a href="https://access.redhat.com/security/data"
                      >Security data</a
                    >
                  </li>
                  <li>
                    <a
                      href="https://access.redhat.com/security/updates/classification/"
                      >Severity ratings</a
                    >
                  </li>
                  <li>
                    <a
                      href="https://access.redhat.com/security/vulnerability-management"
                      >Vulnerability management</a
                    >
                  </li>
                </ul>
              </div>
            </div>
          </pf-card>
        </div>

        <CveTable />
      </div>
      <SecurityHelpSection />
    </div>
  </div>
</template>

<script setup>
  import '@patternfly/elements/pf-card/pf-card.js'
</script>

<style scoped>
  ::-webkit-scrollbar-thumb {
    background: transparent;
  }

  .container {
    width: 100%;
  }

  .prodsec-blog {
    padding: 0px 32px;
    max-width: 1440px;
    margin: auto;
  }
  .overview-security-card {
    border-top: 3px solid #0066cc;
    height: min-content;
  }

  .security-overview > div {
    margin-top: 64px;
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
    font-size: 20px;
    font-weight: 500;
  }

  .sdl-links-list li {
    list-style: disc;
    color: #06c;
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
</style>
