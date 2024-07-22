<template>
  <pf-modal trigger="english-trigger" position="top">
    <p>Select Your Language</p>
    <div v-for="item in languages" :key="item.text" class="pf-v5-l-flex">
      {{ item }}
    </div>
  </pf-modal>
  <pf-button id="english-trigger">
    <i class="fa fa-clock"></i>
    <p class="navigation-item-text">English</p>
  </pf-button>
</template>

<script setup>
const languages = ["English", "Français", "한국어", "日本語", "中文 (中国)"];
</script>

<style scoped>
pf-modal::part(dialog) {
  margin-inline: 0;
  color: black;
  margin-top: 120px;
  box-shadow: none;
  width: 170px;
  margin-left: 68%;
}

pf-modal::part(overlay) {
  height: 90%;
  top: 120px;
}

pf-modal p {
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 20px;
  text-align: start;
}

pf-modal div {
  font-size: 16px;
  color: #06c;
}
</style>
