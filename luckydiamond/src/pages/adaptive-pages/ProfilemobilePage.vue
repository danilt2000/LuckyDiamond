<template>
  <div class="content-mobile__profile">
    <header-mobile-component></header-mobile-component>

    <main class="profile-mobile" :class="{ 'header-off' : payments.paymentsWindow }">
      <div class="profile-mobile__content">
        <div class="macroinfo-profile text-default-mobile img-margin">
          <h2>Профиль</h2>
          <img src="@/assets/icons-test/person-icon-profile-userinfo.png">
        </div>
        <div class="info-profile">
          <h3 class="text-nickname-user">Artmeka</h3>
          <h3 class="balance-border balance-display balance-text"><img src="@/assets/icons-profile/icon-diamond-ore.png">999</h3>
          <div class="profile-mobile__btns-payments">
            <a href="#" @click="paymetsCall('dep')" class="deposit-button"><img class="icon-margin-deposit-withdraw" src="@/assets/icons-profile/icon-deposit.svg"> Пополнить</a>
            <a href="#" @click="paymetsCall('with')" class="withdraw-button"><img class="icon-margin-deposit-withdraw" src="@/assets/icons-profile/icon-withdraw.png"> Вывести</a>
          </div>
        </div>
      </div>
    </main>
    <menu-mobile-component></menu-mobile-component>
    <payments-mobile @closemodal="paymentsClose" :payments="payments" v-if="payments.paymentsWindow"></payments-mobile>
  </div>
</template>

<script>
import HeaderMobileComponent from "@/components/adaptive-components/HeaderMobileComponent.vue";
import MenuMobileComponent from "@/components/adaptive-components/MenuMobileComponent.vue";
import PaymentsMobile from "@/components/adaptive-components/PaymentsMobile.vue";
import {GetUserData } from "@/assets/js/games/saper/SaperAPI";
import { GetCookie } from "@/assets/js/storage/CookieStorage";
// import { GetCurrentMoney } from "@/assets/js/rest/RestMethods.js";

import '@/assets/css/PagesStyles/adaptive-pages/profilemobile.css'

export default {
  components: { HeaderMobileComponent, MenuMobileComponent, PaymentsMobile },
  data () {
    return {
      payments: {
        paymentsWindow: false,
        paymentsView: false
      },
    }
  },
  created() {
    // const AUTHTOKEN = GetCookie('AUTHTOKEN')
    // const SEARCHTOKEN = GetCookie('SearchToken')


    GetUserData(GetCookie("AUTHTOKEN"), GetCookie("SearchToken"))
            .then(response => {
              console.log(response)
            })
            .catch((error) => {
                console.error(error);
              });

            // GetCurrentMoney(GetCookie("AUTHTOKEN"), GetCookie("SearchToken"))
            //   .then((response) => {
            //     this.balance = response.currentMoney;
            //     console.log(response);
            //   })
            //   .catch((error) => {
            //     console.error(error);
            //   });

  },

  methods: {
    paymetsCall(view) {
      this.payments.paymentsWindow = true
      this.payments.paymentsView = view === 'dep'
    },
    paymentsClose() {
      this.payments.paymentsWindow = false
    }
  }
}
</script>

<style scoped>

</style>