<template>
  <div class="content__grid-profile">
    <aside-bar-component></aside-bar-component>

    <chat-component></chat-component>

    <header-component></header-component>

  <section class="profile">
    <div class="profile__content">
      <img class="profile__user--img" src="@/assets/icons-test/person-icon-profile.png">
      <div class="profile__card">
        <h1>{{ username }}</h1>
        <h2><img src="@/assets/icons-profile/icon-diamond-ore.png">{{ balance }}</h2>
      </div>
      <div class="profile__btns--payments">
        <a href="#" class="text-btn btn-bg btn-margin btn-display" @click="withdrawClick">Пополнить <img class="deposit-icon" src="@/assets/icons-profile/icon-deposit.svg"></a>
        <a href="#" class="withdraw text-btn btn-bg btn-display" @click="depositClick">Вывести <img class="withdraw-icon" src="@/assets/icons-profile/icon-withdraw.svg"></a>
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
          <div class="payments__card">
            <div class="user-info">
              <img src="@/assets/icons-test/person-icon-profile-userinfo.png">
              <div class="user-name user-name__text">
                <h3>{{ username }}</h3>
                <p>test</p>
              </div>
            </div>
            <div class="data-info data-info__text">
              <h3>5ч назад</h3>
            </div>
            <div class="transaction-info transaction-info__text">
              <h3>-1 АР</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
    <payments-modal v-if="openModal" @closemodal="openModal = false" :payments="payments"></payments-modal>
  </div>
</template>

<script>
import AsideBarComponent from "@/components/AsidebarComponent.vue";
import ChatComponent from "@/components/ChatComponent.vue";
import HeaderComponent from "@/components/HeaderComponent.vue";
import PaymentsModal from "@/components/archive/PaymentsModal.vue";
import '@/assets/css/PagesStyles/profile.css'

export default {
  components: { HeaderComponent, AsideBarComponent, ChatComponent, PaymentsModal },
  data() {
    return {
      username: 'Artemka',
      balance: 25000,
      openModal: false,
      payments: true
    }
  },
  methods: {
    withdrawClick() {
      this.openModal = true
      this.payments = false
    },
    depositClick() {
      this.openModal = true
      this.payments = true
    }
  }
}
</script>