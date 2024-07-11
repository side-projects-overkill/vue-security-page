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
          <ul>
            <a><li>Software supply chain security assurance</li></a>
            <a><li>Security testing process</li></a>
          </ul>
        </div>
        <div class="pf-v5-l-grid__item pf-m-0-col pf-m-2-col-on-lg"></div>
        <div
          class="pf-v5-l-grid__item pf-m-12-col pf-m-4-col-on-lg overview-security-card"
        >
          <h3>About security</h3>
          <ul>
            <p><a>Life Cycle Security Update Policy</a></p>
            <p><a>Product Life Cycles</a></p>
            <p><a>Product Security overview</a></p>
            <p><a>SDL overview</a></p>
            <p><a>Security blog </a></p>
            <p><a>Security glossary</a></p>
          </ul>
        </div>
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
        <div
          class="pf-v5-l-grid__item pf-m-12-col pf-m-4-col-on-lg pf-v5-l-grid overview-security-card"
        >
          <div class="pf-v5-l-grid__item pf-m-6-col">
            <h3>Security updates</h3>
            <ul>
              <p><a>Security advisories</a></p>
              <p><a>Security bulletins</a></p>
              <p><a>Security labs</a></p>
            </ul>
          </div>
          <div class="pf-v5-l-grid__item pf-m-6-col">
            <h3>Vulnerabilities</h3>
            <ul>
              <p><a>CVE database</a></p>
              <p><a>Incident response plan</a></p>
              <p><a>Security data</a></p>
              <p><a>Severity ratings</a></p>
              <p><a>Vulnerability management</a></p>
            </ul>
          </div>
        </div>
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
        <div
          class="pf-v5-l-grid__item pf-m-12-col pf-m-4-col-on-lg overview-security-card"
        >
          <h3>Security and privacy</h3>
          <ul>
            <p><a>Articles on PCI DSS</a></p>
            <p><a>Compliance activities and government standards</a></p>
            <p><a>Red Hat vulnerability scanner certification</a></p>
            <p><a>Trust Red Hat</a></p>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.security-overview > div {
  padding-top: 48px;
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
  font-family: "Red Hat Display", sans-serif;
}
h2 {
  font-weight: 500;
  font-size: 24px;
}
.overview-security-card {
  height: min-content;
  padding: 24px 0px 24px 24px;
  border: 1px solid#D2D2D2;
  border-radius: 3px;
  border-top: 3px solid #0066cc;
}
.overview-security-card ul {
  padding-inline-start: 0;
  margin-inline-start: 0;
}
</style>
