<template>
    <profilemobile-page v-if="mobile"></profilemobile-page>
    <div class="content__grid-profile" v-else>
      <aside-bar-component></aside-bar-component>
  
      <chat-component></chat-component>
  
      <header-component></header-component>
  
    <section class="profile"></section>
      <payments-modal v-if="openModal" @notifacetionmoney="NotificationEventListener" @closemodal="openModal = false" :payments="payments"></payments-modal>
      <notiicationwindow-component @notificationremove="NotificationMethod" :notification="notification"></notiicationwindow-component>
    </div>
  </template>
  
  <script>
  import AsideBarComponent from "@/components/AsidebarComponent.vue";
  import ChatComponent from "@/components/ChatComponent.vue";
  import HeaderComponent from "@/components/HeaderComponent.vue";
  import PaymentsModal from "@/components/PaymentsModal.vue";
  import ProfilemobilePage from "@/pages/adaptive-pages/ProfilemobilePage.vue";
  import NotiicationwindowComponent from "@/components/NotiicationwindowComponent.vue";
  
  import { GetCookie } from "@/assets/js/storage/CookieStorage";
  import '@/assets/css/PagesStyles/SettingsPage.css'
  import {GetCurrentMoney} from "@/assets/js/rest/RestMethods";
  
  export default {
    components: {ProfilemobilePage, HeaderComponent, AsideBarComponent, ChatComponent, PaymentsModal, NotiicationwindowComponent },
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
    emits: ['notificationremove'],
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
  
      this.imageUrl = `https://avatar.spworlds.ru/front/256/${this.username}`
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
      NotificationEventListener() {
        this.notification = true
        this.openModal = false
      },
      NotificationMethod() {
        this.notification = false
      }
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