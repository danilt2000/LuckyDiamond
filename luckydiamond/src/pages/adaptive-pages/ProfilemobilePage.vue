<template>
  <div class="content-grid__mobile-profile">
    <header-mobile-component></header-mobile-component>

    <main class="profile-mobile">
      <div class="profile-mobile__content">
        <div class="macroinfo-profile text-default-mobile img-margin">
          <h2>Профиль</h2>
          <img src="@/assets/icons-test/person-icon-profile-userinfo.png">
        </div>
        <div class="info-profile">
          <h3 class="text-nickname-user">Artmeka</h3>
          <h3 class="balance-border balance-display balance-text"><img src="@/assets/icons-profile/icon-diamond-ore.png">999</h3>
          <div class="profile-mobile__btns-payments">
            <a href="#"><img class="icon-margin-deposit-withdraw" src="@/assets/icons-profile/icon-deposit.svg"> Пополнить</a>
            <a href="#"><img class="icon-margin-deposit-withdraw" src="@/assets/icons-profile/icon-withdraw.png"> Вывести</a>
          </div>
        </div>
      </div>
    </main>

    <menu-mobile-component></menu-mobile-component>

  </div>
</template>

<script>
import HeaderMobileComponent from "@/components/adaptive-components/HeaderMobileComponent.vue";
import MenuMobileComponent from "@/components/adaptive-components/MenuMobileComponent.vue";

import '@/assets/css/PagesStyles/adaptive-pages/profilemobile.css'

export default {
  components: { HeaderMobileComponent, MenuMobileComponent }
}
</script>

<style scoped>

</style>