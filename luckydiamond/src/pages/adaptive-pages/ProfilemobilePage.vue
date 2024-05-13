<template>
  <div class="content-mobile__profile">
    <header-mobile-component></header-mobile-component>

    <main class="profile-mobile" :class="{ 'header-off' : payments.paymentsWindow }">
      <div class="profile-mobile__content">
        <div class="macroinfo-profile text-default-mobile img-margin">
          <h2>Профиль</h2>
          <img :src="this.imageUrl">
        </div>
        <div class="info-profile">
          <h3 class="text-nickname-user">{{this.userName}}</h3>
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
import { GetCurrentMoney } from "@/assets/js/rest/RestMethods";
import { GetCookie } from "@/assets/js/storage/CookieStorage";
import HeaderMobileComponent from "@/components/adaptive-components/HeaderMobileComponent.vue";
import MenuMobileComponent from "@/components/adaptive-components/MenuMobileComponent.vue";
import PaymentsMobile from "@/components/adaptive-components/PaymentsMobile.vue";
import {eventBus} from "@/main"
import '@/assets/css/PagesStyles/adaptive-pages/profilemobile.css'

export default {
  
  methods: {
    paymetsCall(view) {
      this.payments.paymentsWindow = true
      this.payments.paymentsView = view === 'dep'
    },
    paymentsClose() {
      this.payments.paymentsWindow = false
    },
  },
  data() {
    return {
      balance: 0,
      auth: false,
      authtoken: "",
      imageUrl: "https://avatar.spworlds.ru/face/55/",
      userName: "",
      payments: {
        paymentsWindow: false,
        paymentsView: false
      },
    };
  },
  mounted() {
    eventBus.on("Updatebalance", () => {
      this.updateBalanceMethod();
    });
  },
  created() {
        let currentUserName = GetCookie("SpUserName");
        GetCurrentMoney(GetCookie("AUTHTOKEN"), GetCookie("SearchToken"))
          .then((response) => {
            this.balance = response.currentMoney;
          })
          .catch((error) => {
            // Обработка ошибки
            console.error(error);
          });

        if (currentUserName) {
          this.imageUrl = this.imageUrl + `${currentUserName}.png`;
          this.userName = GetCookie("SpUserName");
          this.auth = true;
          this.authtoken = GetCookie("AUTHTOKEN");
        } else {
          this.auth = false;
          this.balance = 0;
        }
      
  },
  components: { HeaderMobileComponent, MenuMobileComponent, PaymentsMobile },
}
</script>

<style scoped>

</style>