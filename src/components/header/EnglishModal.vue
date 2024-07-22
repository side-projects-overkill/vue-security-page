<template>
  <pf-modal
    trigger="english-trigger"
    position="top"
    class="english-modal-container"
  >
    <p>Select Your Language</p>
    <ul>
      <li v-for="item in languages" :key="item.text">{{ item }}</li>
    </ul>
  </pf-modal>
  <pf-button id="english-trigger" @click="toggleModal">
    <i class="fa fa-clock"></i>
    <p class="navigation-item-text">English</p>
  </pf-button>
</template>

<script setup>
const languages = ["English", "Français", "한국어", "日本語", "中文 (中国)"];
</script>

<style scoped>
.english-modal-container::part(dialog) {
  margin-inline: 0;
  color: black;
  margin-top: 120px;
  box-shadow: none;
  width: 170px;
  margin-left: 68%;
}

.english-modal-container::part(overlay) {
  height: 90%;
  top: 120px;
}

.english-modal-container p {
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 20px;
}

.english-modal-container li {
  font-size: 16px;
  color: #06c;
}
</style>
