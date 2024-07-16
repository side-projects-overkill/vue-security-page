<template>
  <!-- Top Section of footer component -->
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
        <div class="pf-v5-l-grid__item pf-m-4-col"></div>
      </div>
    </div>
    <hr />
    <div class="footer-links-container">
      <div class="pf-v5-l-grid pf-m-gutter">
        <div class="pf-v5-l-grid__item pf-m-2-col">
          <div class="pf-v5-l-flex pf-m-column">
            <p class="pf-v5-l-flex__item">Quick Links</p>
            <div
              class="pf-v5-l-flex__item"
              v-for="link in footerLinks.quickLinks"
              :key="link.text"
            >
              <a :href="link.link">{{ link.text }}</a>
            </div>
          </div>
        </div>
        <div class="pf-v5-l-grid__item pf-m-2-col">
          <div class="pf-v5-l-flex pf-m-column">
            <p class="pf-v5-l-flex__item">Help</p>
            <div
              class="pf-v5-l-flex__item"
              v-for="link in footerLinks.helpLinks"
              :key="link.text"
            >
              <a :href="link.link">{{ link.text }}</a>
            </div>
          </div>
        </div>
        <div class="pf-v5-l-grid__item pf-m-2-col">
          <div class="pf-v5-l-flex pf-m-column">
            <p class="pf-v5-l-flex__item">Site Info</p>
            <div
              class="pf-v5-l-flex__item"
              v-for="link in footerLinks.siteInfoLinks"
              :key="link.text"
            >
              <a :href="link.link">{{ link.text }}</a>
            </div>
          </div>
        </div>
        <div class="pf-v5-l-grid__item pf-m-2-col">
          <div class="pf-v5-l-flex pf-m-column">
            <p class="pf-v5-l-flex__item">Related Sites</p>
            <div
              class="pf-v5-l-flex__item"
              v-for="link in footerLinks.relatedSiteLinks"
              :key="link.text"
            >
              <a :href="link.link">{{ link.text }}</a>
            </div>
          </div>
        </div>
        <div class="pf-v5-l-grid__item pf-m-2-col">
          <div class="pf-v5-l-flex pf-m-column">
            <p class="pf-v5-l-flex__item">About</p>
            <div
              class="pf-v5-l-flex__item"
              v-for="link in footerLinks.aboutLinks"
              :key="link.text"
            >
              <a :href="link.link">{{ link.text }}</a>
            </div>
          </div>
        </div>
      </div>
      <div class="all-systems-container">
        <i class="fa fa-check-circle"></i>
        <p>All Systems Operational</p>
      </div>
    </div>
    <div class="footer-accordian-container">
      <div class="pf-v5-l-flex pf-m-column">
        <div class="pf-v5-l-flex__item accordian-item">
          <Accordian />
          <Accordian />
          <Accordian />
          <Accordian />
        </div>
      </div>
    </div>
  </div>

  <!-- Bottom Section of footer Component -->
  <div class="footer-bottom-container">
    <div class="pf-v5-l-flex">
      <div
        class="pf-v5-l-flex__item footer-bottom-text"
        v-for="link in footerLinks.infoLinks"
        :key="link.text"
      >
        <a :href="link.link">{{ link.text }}</a>
      </div>
    </div>
    <hr />
    <div class="pf-v5-l-flex">
      <p class="pf-v5-l-flex__item footer-bottom-text">© 2024 Red Hat, Inc</p>
    </div>
    <div class="pf-v5-l-flex">
      <div
        class="pf-v5-l-flex__item footer-bottom-text"
        v-for="link in footerLinks.privacyLinks"
        :key="link.text"
      >
        <a :href="link.link">{{ link.text }}</a>
      </div>
    </div>
  </div>
</template>

<script setup>
import "@patternfly/elements/pf-icon/pf-icon.js";
import { footerLinks } from "@/components/footer/linksData";
import Accordian from "@/components/footer/Accordian.vue";
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

.footer-top-container hr {
  border-color: #404040;
}

.red-hat-logo-img {
  width: auto;
  height: 40px;
}

.footer-logo-container {
  padding-bottom: 20px;
}

.footer-links-container {
  padding-bottom: 32px;
  padding-top: 32px;
}

.footer-links-container a {
  color: #fff;
  font-size: 14px;
}

.all-systems-container {
  width: 220px;
  height: 50px;
  border-radius: 5px;
  margin-top: 30px;
  padding: 0px 10px;
  background-color: #383838;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.all-systems-container i {
  color: #008000;
}

.footer-accordian-container {
  display: none;
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

.footer-bottom-container hr {
  display: none;
}

.footer-bottom-container p {
  font-size: 12px;
}

.footer-bottom-container a {
  font-size: 12px;
  color: #fff;
}

@media screen and (max-width: 991px) {
  .footer-accordian-container {
    display: block;
  }

  .accordian-item {
    padding: 16px 24px;
  }

  .footer-links-container {
    display: none;
  }

  .footer-top-container {
    height: 700px;
  }

  .footer-bottom-container {
    height: 250px;
  }

  .footer-bottom-container hr {
    display: block;
    border-color: #404040;
    margin: 20px 0px;
  }
}
</style>
