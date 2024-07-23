<template>
  <div>
    <pf-modal
      trigger="search-trigger"
      position="top"
      class="search-modal-container"
    >
      <input
        id="input-box"
        type="text"
        placeholder="Enter your search term"
        class="search-input"
      />
      OR <a href="">Troubleshoot an issue</a>
    </pf-modal>
    <pf-button id="search-trigger">
      <i class="fa fa-search"></i>
      <p class="navigation-item-text">Search</p>
    </pf-button>
  </div>
</template>

<script></script>

<style scoped>
  pf-modal::part(dialog) {
    margin-inline: 0;
    color: black;
    margin-top: 115px;
    box-shadow: none;
    padding-bottom: 130px;
  }

  pf-modal::part(overlay) {
    height: 80%;
    top: 340px;
  }

  pf-modal input {
    width: 100%;
    margin-bottom: 20px;
  }

  pf-modal p,
  a {
    font-size: 17px;
  }
</style>
