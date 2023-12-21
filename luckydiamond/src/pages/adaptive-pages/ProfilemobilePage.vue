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
            <a href="#" class="deposit-button"><img class="icon-margin-deposit-withdraw" src="@/assets/icons-profile/icon-deposit.svg"> Пополнить</a>
            <a href="#" class="withdraw-button"><img class="icon-margin-deposit-withdraw" src="@/assets/icons-profile/icon-withdraw.png"> Вывести</a>
          </div>
        </div>
      </div>
    </main>

    <section class="payments-mobile">
      <div class="payments-mobile__content_">
        <div class="payments-types__mobile types-margin__mobile types-text__mobile">
          <h3 class="types-start__margin-mobile">Вид транзакции</h3>
          <h3>Дата</h3>
          <h3>Сумма</h3>
        </div>
        <div class="types-line__mobile"></div>
        <div class="payments-history__mobile">
          <div class="payments-card__mobile">
            <div class="user-info">
              <img src="@/assets/icons-test/person-icon-profile-userinfo.png">
              <div class="user-name user-name__text">
                <h3>Artemka</h3>
                <h3>test</h3>
              </div>
            </div>
            <div class="payments-data">
              <div class="data-info data-info__text">
                <h3>5ч назад</h3>
              </div>
              <div class="transaction-info transaction-info__text">
                <h3>99 АР</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

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