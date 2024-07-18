<template>
  <pf-modal
    trigger="usage-trigger"
    position="top"
    class="search-modal-container"
  >
    <input id="input-box" type="text" placeholder="Enter your search term" />
    <a>troubleshoot an issue</a>
  </pf-modal>
  <pf-button id="usage-trigger"
    ><i class="fa fa-search"></i>
    <p class="navigation-item-text">Search</p></pf-button
  >
</template>

<script>

</script>

<style>
.search-modal-container::part(dialog) {
  margin-inline: 0;
  color: black;
  margin-top: 115px;
  box-shadow: none;
}

.search-modal-container::part(overlay) {
  height: 80%;
  top: 340px;
}
</style>
