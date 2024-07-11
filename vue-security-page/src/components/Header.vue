<template>
  <div class="header-container">
    <div class="pf-v5-l-flex header-top-container">
      <div class="pf-v5-l-flex__item  ">Subscriptions</div>
      <hr />
      <div class="pf-v5-l-flex__item ">Downloads</div>
      <hr />
      <div class="pf-v5-l-flex__item ">Red Hat Console</div>
      <hr />
      <div class="pf-v5-l-flex__item ">Get Support</div>
    </div>
    <hr />
    <div class="pf-v5-l-grid pf-m-gutter">
      <div class="pf-v5-l-grid__item pf-m-2-col image-container">
        <img
          src="https://access.redhat.com/chrome_themes/nimbus/img/red-hat-customer-portal.svg"
          alt="Red Hat Logo"
        />
      </div>
      <div class="pf-v5-l-grid__item pf-m-8-col">
        <div class="menu-container">
          <div class="pf-v5-l-flex">
            <div class="pf-v5-l-flex__item menu-item">Products</div>
            <div class="pf-v5-l-flex__item menu-item">Knowledge</div>
            <div class="pf-v5-l-flex__item menu-item">Security</div>
            <div class="pf-v5-l-flex__item menu-item">Support</div>
          </div>
        </div>
      </div>

      <div class="pf-v5-l-grid__item pf-m-2-col">
        <div class="pf-v5-l-flex header-navigation-container">
          <div class="pf-v5-l-flex__item header-navigation-item">
            <i class="fa fa-search"></i>
            <p class="navigation-item-text">Search</p>
          </div>
          <div class="pf-v5-l-flex__item header-navigation-item" >
            <i class="fas fa-pficon-zone"></i>
            <p class="navigation-item-text">English</p>
          </div>
          <div class="pf-v5-l-flex__item header-navigation-item">
            <i class="fa fa-th"></i>
            <p class="navigation-item-text">All Red hat</p>
          </div>
          <div class="pf-v5-l-flex__item header-navigation-item">
            <i class="fa fa-user"></i>
            <p class="navigation-item-text">Log In</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.header-container {
  background-color: #151515;
  color: #fff;
  height: 120px;
  padding: 0 32px;
  align-items: center;
}

.header-top-container {
  padding: 10px;
}

.image-container {
  display: flex;
  justify-content: flex-start;
  margin: 0;
  padding: 10px 16px 10px 0;
}

.menu-container {
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  font-size: 18px;
  padding: 20px 8px;
  color: #f3f3f3;
}

.menu-item:hover{
  border-top: 3px solid #f3f3f3;

}

.header-navigation-container{
  margin-top: 15px;
}

.header-navigation-item{
  display: flex;
  flex-direction: column;
  align-items: center;
}

.navigation-item-text{
  margin-top: 5px;
}
</style>
