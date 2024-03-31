t<template>
  <div class="jackpot-history__content-grid">
    <aside-bar-element/>

    <chat-component/>

    <header-element-page/>

    <div class="jackpot-history">
      <div class="jackpot-history__content">
<!--   TEMPLATE     -->

        <div class="jackpot-history__element">
          <div class="element-info">
            <div class="element-info__icon">
              <img src="@/assets/icons-test/user-icon-test.png">
            </div>
            <div class="element-info__user-info">
              <h2 class="username">FUpir</h2>
              <h2 class="user-deposit">
                1000
                <span class="img-width"><img src="@/assets/icons-profile/icon-diamond-ore.png"></span>
              </h2>
            </div>
          </div>
          <div class="element-chance">
            <h2>
              Шанс <span class="chance-style">15.55%</span>
            </h2>
          </div>
        </div>

<!--   TEMPLATE     -->
      </div>
    </div>
  </div>
</template>

<script>
import ChatComponent from "@/components/ChatComponent.vue";
import AsideBarElement from "@/components/AsidebarComponent.vue";
import HeaderElementPage from "@/components/HeaderComponent.vue";

import '@/assets/css/PagesStyles/jackpot-history.css'

export default {
  components: {HeaderElementPage, ChatComponent, AsideBarElement}

}
</script>

<style>

</style>