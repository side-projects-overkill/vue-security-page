<template>
  <div class="footer-top-container">
    <div class="footer-logo-container">
      <div class="pf-v5-l-grid pf-m-gutter">
        <div class="pf-v5-l-grid__item pf-m-8-col">
          <img
            src="https://static.redhat.com/libs/redhat/brand-assets/2/corp/logo--on-dark.svg"
            alt="Redhat Logo"
            class="red-hat-logo-img"
          />
        </div>
        <div class="pf-v5-l-grid__item pf-m-4-col">
          <pf-icon icon="twitter" set="far"></pf-icon>
        </div>
      </div>
    </div>
    <hr />
    <div class="footer-links-container">
      <div class="pf-v5-l-grid pf-m-gutter">
        <div class="pf-v5-l-grid__item pf-m-2-col">
          <div class="pf-v5-l-flex pf-m-column">
            <div class="pf-v5-l-flex__item">Quick Links</div>
            <div class="pf-v5-l-flex__item">Downloads</div>
            <div class="pf-v5-l-flex__item">Subscriptions</div>
            <div class="pf-v5-l-flex__item">Support Cases</div>
            <div class="pf-v5-l-flex__item">Customer Service</div>
            <div class="pf-v5-l-flex__item">Product Documentation</div>
          </div>
        </div>
        <div class="pf-v5-l-grid__item pf-m-2-col">
          <div class="pf-v5-l-flex pf-m-column">
            <div class="pf-v5-l-flex__item">Help</div>
            <div class="pf-v5-l-flex__item">Contact Us</div>
            <div class="pf-v5-l-flex__item">Customer Portal FAQ</div>
            <div class="pf-v5-l-flex__item">Log-in Assistance</div>
          </div>
        </div>
        <div class="pf-v5-l-grid__item pf-m-2-col">
          <div class="pf-v5-l-flex pf-m-column">
            <div class="pf-v5-l-flex__item">Site Info</div>
            <div class="pf-v5-l-flex__item">Trust Red Hat</div>
            <div class="pf-v5-l-flex__item">Browser Support Policy</div>
            <div class="pf-v5-l-flex__item">Accessibility</div>
            <div class="pf-v5-l-flex__item">Awards and Recognition</div>
            <div class="pf-v5-l-flex__item">Colophon</div>
          </div>
        </div>
        <div class="pf-v5-l-grid__item pf-m-2-col">
          <div class="pf-v5-l-flex pf-m-column">
            <div class="pf-v5-l-flex__item">Related Sites</div>
            <div class="pf-v5-l-flex__item">redhat.com</div>
            <div class="pf-v5-l-flex__item">developers.redhat.com</div>
            <div class="pf-v5-l-flex__item">connect.redhat.com</div>
            <div class="pf-v5-l-flex__item">cloud.redhat.com</div>
          </div>
        </div>
        <div class="pf-v5-l-grid__item pf-m-2-col">
          <div class="pf-v5-l-flex pf-m-column">
            <div class="pf-v5-l-flex__item">About</div>
            <div class="pf-v5-l-flex__item">Red Hat Subscription Value</div>
            <div class="pf-v5-l-flex__item">About Red Hat</div>
            <div class="pf-v5-l-flex__item">Red Hat Jobs</div>
          </div>
        </div>
      </div>
      <div class="all-systems-container">
        <p>All Systems Operational</p>
      </div>
    </div>
  </div>
  <div class="footer-bottom-container">
    <div class="pf-v5-l-flex">
      <div class="pf-v5-l-flex__item footer-bottom-text">About Red Hat</div>
      <div class="pf-v5-l-flex__item footer-bottom-text">Jobs</div>
      <div class="pf-v5-l-flex__item footer-bottom-text">Events</div>
      <div class="pf-v5-l-flex__item footer-bottom-text">Locations</div>
    </div>
    <div class="pf-v5-l-flex">
      <div class="pf-v5-l-flex__item footer-bottom-text">
        © 2024 Red Hat, Inc
      </div>
    </div>
    <div class="pf-v5-l-flex">
      <div class="pf-v5-l-flex__item footer-bottom-text">Privacy statement</div>
      <div class="pf-v5-l-flex__item footer-bottom-text">Terms of use</div>
      <div class="pf-v5-l-flex__item footer-bottom-text">
        All policies and guidelines
      </div>
      <div class="pf-v5-l-flex__item footer-bottom-text">
        Digital accessibility
      </div>
      <div class="pf-v5-l-flex__item footer-bottom-text">
        Cookie preferences
      </div>
    </div>
  </div>
</template>

<script setup>
import "@patternfly/elements/pf-icon/pf-icon.js";
import { ref } from "vue";

const quickLinks = ref([
  "Quick Links",
  "Downloads",
  "Subscriptions",
  "Support Cases",
  "Customer Service",
  "Product Documentation",
]);
</script>

<style scoped>
.footer-top-container {
  background-color: #1f1f1f;
  color: #fff;
  width: 100%;
  height: 550px;
  position: absolute;
  bottom: 0;
  padding: 32px;
}

.red-hat-logo-img {
  width: auto;
  height: 40px;
}

.footer-logo-container {
  padding-bottom: 20px;
  padding-top: 20px;
}

.footer-links-container {
  padding-bottom: 32px;
  padding-top: 32px;
}

.all-systems-container {
  width: 200px;
  height: 50px;
  border-radius: 5px;
  margin-top: 30px;
  background-color: #383838;
  display: flex;
  justify-content: center;
  align-items: center;
}

.footer-bottom-container {
  width: 100%;
  background-color: #151515;
  color: #fff;
  height: 100px;
  position: absolute;
  bottom: 0;
  padding: 20px 32px 25px 32px;
}

.footer-bottom-text {
  font-size: 12px;
}
</style>
