<template>
  <div>
    <pf-modal trigger="all-red-hat-trigger" position="top">
      <div class="pf-v5-l-grid pf-m-gutter">
        <div class="pf-v5-l-grid__item pf-m-3-col">
          <img
            src="https://1000logos.net/wp-content/uploads/2020/09/Red-Hat-Logo-2019.png"
          />
        </div>
        <div class="pf-v5-l-grid__item pf-m-3-col">
          <img
            src="https://developers.redhat.com/sites/default/files/styles/article_floated/public/redhat_openshift.png?itok=zEbB5tQG"
          />
        </div>
        <div class="pf-v5-l-grid__item pf-m-3-col">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs3gRkGiblQd6X7KX1t-LldsXfiQRJO_8AmA&s"
          />
        </div>
        <div class="pf-v5-l-grid__item pf-m-3-col">
          <img
            src="https://connect.redhat.com/themes/custom/rhc_ui/src/images/assets/red-hat-partner-connect-logo-1200x630.png"
          />
        </div>
      </div>
    </pf-modal>
    <pf-button id="all-red-hat-trigger">
      <i class="fa fa-th"></i>
      <p class="navigation-item-text">All Red Hat</p>
    </pf-button>
  </div>
</template>

<script setup></script>

<style scoped>
  pf-modal::part(dialog) {
    margin-inline: 0;
    color: black;
    margin-top: 115px;
    box-shadow: none;
    padding-bottom: 100px;
  }

  pf-modal::part(overlay) {
    height: 80%;
    top: 340px;
  }

  pf-modal img {
    width: 80%;
    padding: 5px 15px;
    height: 107px;
    border: 1px solid #d2d3d5;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  pf-button {
    --pf-c-button--m-primary--BackgroundColor: transparent;
  }
</style>
