<template>
  <div class="footer-container">
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
                v-for="item in footerLinks.quickLinks"
                :key="item.text"
              >
                <a :href="item.link">{{ item.text }}</a>
              </div>
            </div>
          </div>
          <div class="pf-v5-l-grid__item pf-m-2-col">
            <div class="pf-v5-l-flex pf-m-column">
              <p class="pf-v5-l-flex__item">Help</p>
              <div
                class="pf-v5-l-flex__item"
                v-for="item in footerLinks.helpLinks"
                :key="item.text"
              >
                <a :href="item.link">{{ item.text }}</a>
              </div>
            </div>
          </div>
          <div class="pf-v5-l-grid__item pf-m-2-col">
            <div class="pf-v5-l-flex pf-m-column">
              <p class="pf-v5-l-flex__item">Site Info</p>
              <div
                class="pf-v5-l-flex__item"
                v-for="item in footerLinks.siteInfoLinks"
                :key="item.text"
              >
                <a :href="item.link">{{ item.text }}</a>
              </div>
            </div>
          </div>
          <div class="pf-v5-l-grid__item pf-m-2-col">
            <div class="pf-v5-l-flex pf-m-column">
              <p class="pf-v5-l-flex__item">Related Sites</p>
              <div
                class="pf-v5-l-flex__item"
                v-for="item in footerLinks.relatedSiteLinks"
                :key="item.text"
              >
                <a :href="item.link">{{ item.text }}</a>
              </div>
            </div>
          </div>
          <div class="pf-v5-l-grid__item pf-m-2-col">
            <div class="pf-v5-l-flex pf-m-column">
              <p class="pf-v5-l-flex__item">About</p>
              <div
                class="pf-v5-l-flex__item"
                v-for="item in footerLinks.aboutLinks"
                :key="item.text"
              >
                <a :href="item.link">{{ item.text }}</a>
              </div>
            </div>
          </div>
        </div>
        <div class="all-systems-container">
          <i class="fa fa-check-circle"></i>
          <p>All Systems Operational</p>
        </div>
      </div>
      <div class="footer-accordion-container">
        <div class="pf-v5-l-flex pf-m-column">
          <div class="pf-v5-l-flex__item accordion-item">
            <AccordionItem title="Quick Links" />
            <AccordionItem title="Help" />
            <AccordionItem title="Site Info" />
            <AccordionItem title="Related Sites" />
            <AccordionItem title="About" />
          </div>
        </div>
      </div>
    </div>
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
  </div>
</template>

<script setup>
import "@patternfly/elements/pf-icon/pf-icon.js";
import { footerLinks } from "@/components/footer/linksData";
import AccordionItem from "@/components/footer/AccordionItem.vue";
</script>

<style scoped>
.footer-container {
  width: 100%;
  position: absolute;
  bottom: 0;
  height: auto;
}

.footer-top-container {
  background-color: #1f1f1f;
  color: #fff;
  width: 100%;
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

.footer-accordion-container {
  display: none;
}

.footer-bottom-container {
  width: 100%;
  background-color: #151515;
  color: #fff;
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
  .footer-accordion-container {
    display: block;
  }

  .accordion-item {
    padding: 16px 24px;
  }

  .footer-links-container {
    display: none;
  }

  .footer-bottom-container hr {
    display: block;
    border-color: #404040;
    margin: 20px 0px;
  }
}
</style>
