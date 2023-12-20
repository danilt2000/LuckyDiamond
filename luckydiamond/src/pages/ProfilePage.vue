<template>
  <profilemobile-page v-if="mobile"></profilemobile-page>
  <div class="content__grid-profile" v-else>
    <aside-bar-component></aside-bar-component>

    <chat-component id="chat-profile"></chat-component>

    <header-component></header-component>

  <section class="profile">
    <div class="profile__content">
      <img class="profile__user--img" :src="imageUrl">
      <div class="profile__card icon-diamond">
        <h1>{{ username }}</h1>
        <h2><img src="@/assets/icons-profile/icon-diamond-ore.png">{{ balance }}</h2>
      </div>
      <div class="profile__btns--payments">
        <a href="#" class="text-btn btn-bg btn-margin btn-display" @click="depositClick"><img class="icon-margin-deposit-withdraw" src="@/assets/icons-profile/icon-deposit.svg"> Пополнить</a>
        <a href="#" class="withdraw text-btn btn-bg btn-display" @click="withdrawClick"><img class="icon-margin-deposit-withdraw" src="@/assets/icons-profile/icon-withdraw.png"> Вывести</a>
      </div>
    </div>
    <div class="payments">
      <div class="payments__content">
        <div class="payments__types">
          <div class="types types-margin types-text">
            <h3>Игрок и вид транзакции</h3>
            <h3>Дата</h3>
            <h3>Сумма</h3>
          </div>
          <div class="types-line"></div>
        </div>
        <div class="payments__history">
          <div class="payments__card" v-for="payment in arrayHistory" :key="payment.id">
            <div class="user-info">
              <img src="@/assets/icons-test/person-icon-profile-userinfo.png">
              <div class="user-name user-name__text">
                <h3>{{ payment.name }}</h3>
                <p>{{ payment.comment }}</p>
              </div>
            </div>
            <div class="data-info data-info__text">
              <h3>{{ payment.data }}</h3>
            </div>
            <div class="transaction-info transaction-info__text" :class="{ 'withdraw-color': payment.amount < 0, 'deposit-color': payment.amount > 0 }">
              <h3>{{ payment.amount }} АР</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
    <payments-modal v-if="openModal" @notifacetionmoney="notification = true" @closemodal="openModal = false" :payments="payments"></payments-modal>
  </div>
</template>

<script>
import AsideBarComponent from "@/components/AsidebarComponent.vue";
import ChatComponent from "@/components/ChatComponent.vue";
import HeaderComponent from "@/components/HeaderComponent.vue";
import PaymentsModal from "@/components/PaymentsModal.vue";
import ProfilemobilePage from "@/pages/adaptive-pages/ProfilemobilePage.vue";
import { GetCookie } from "@/assets/js/storage/CookieStorage";
import '@/assets/css/PagesStyles/profile.css'
import {GetCurrentMoney} from "@/assets/js/rest/RestMethods";

export default {
  components: {ProfilemobilePage, HeaderComponent, AsideBarComponent, ChatComponent, PaymentsModal },
  data() {
    return {
      username: 'Artemka',
      imageUrl: '',
      notification: false,
      balance: 0,
      mobile: false,
      openModal: false,
      payments: true,
      arrayHistory: [],
    }
  },
  mounted() {
    this.checkWindowSize()

    this.AddWindowListener()
  },
  beforeUnmount() {
    this.RemoveWindowListener()
  },
  created() {
    this.username = GetCookie('SpUserName')

    GetCurrentMoney(GetCookie('AUTHTOKEN'), GetCookie('SearchToken'))
        .then((response) => {
          this.balance = response.currentMoney
          console.log('balance in profile', this.balance)
        })
        .catch((error) => {
          console.error('error in profile, get money', error)
        })

    this.imageUrl = `https://visage.surgeplay.com/front/256/${this.username}`
  },
  methods: {
    depositClick() {
      this.openModal = true
      this.payments = true
    },
    withdrawClick() {
      this.openModal = true
      this.payments = false
    },
    // formatNumber(number) {
    //   return number < 10 ? `0${number}` : number;
    // },
    // getCurrentFormattedDate() {
    //   const currentDate = new Date();
    //   return `${this.formatNumber(currentDate.getDate())}.${this.formatNumber(currentDate.getMonth() + 1)}.${currentDate.getFullYear()}, ${this.formatNumber(currentDate.getHours())}:${this.formatNumber(currentDate.getMinutes())}`;
    // },
    // claimDataDeposit(amount) {
    //   const historyPayments = {
    //     name: 'TEST USER',
    //     comment: 'test',
    //     data: this.getCurrentFormattedDate(),
    //     amount: amount
    //   }
    //
    //   this.arrayHistory.unshift(historyPayments)
    // },
    // claimDataWithdraw(amount) {
    //   const historyPayments = {
    //     name: 'TEST USER',
    //     comment: 'test',
    //     data: this.getCurrentFormattedDate(),
    //     amount: -amount
    //   }
    //
    //   this.arrayHistory.unshift(historyPayments)
    // }
  }
}
</script>