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
        <a href="#" class="text-btn btn-bg btn-margin btn-display">Пополнить <img class="deposit-icon" src="@/assets/icons-profile/icon-deposit.svg"></a>
        <a href="#" class="withdraw text-btn btn-bg btn-display">Вывести <img class="withdraw-icon" src="@/assets/icons-profile/icon-withdraw.svg"></a>
      </div>
    </div>
    <div class="payments">
      <div class="payments__content">

      </div>
    </div>
  </section>
  </div>
</template>

<script>
import AsideBarComponent from "@/components/AsidebarComponent.vue";
import ChatComponent from "@/components/ChatComponent.vue";
import HeaderComponent from "@/components/HeaderComponent.vue";
import '@/assets/css/PagesStyles/profile.css'

export default {
  components: { HeaderComponent, AsideBarComponent, ChatComponent },
  data() {
    return {
      username: 'Artemka',
      balance: 25000
    }
  }

}
</script>