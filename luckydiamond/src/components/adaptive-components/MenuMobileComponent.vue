<template>
  <footer class="footer-mobile">
    <div class="footer-mobile__content">
      <div class="footer-mobile__icons icons-size">
        <a href="#" @click="$router.push({ name: 'home' })"><img class="icon-start" src="@/assets/icons-adaptive/home-adaptive/icon-home-menu.png"></a>
        <a href="#" @click="$router.push({ name: 'profile' })"><img class="icon-center" src="@/assets/icons-adaptive/home-adaptive/icon-wallet-menu.svg"></a>
        <a href="#" @click="this.chatOpened = !this.chatOpened"><img class="icon-center" src="@/assets/icons-adaptive/home-adaptive/icon-chat-menu.png"></a>
        <a href="#" @click="$router.push({ name: 'about'})"><img class="icon-center" src="@/assets/icons-adaptive/home-adaptive/icon-info-menu.png"></a>


        <a href="#" @click="this.menuOpened = !this.menuOpened"><img class="icon-end" src="@/assets/icons-adaptive/home-adaptive/icon-menu.png"></a>
      </div>
      <notiicationwindow-component @notificationremove="NotificationMethod" :notification="menuOpened == true" :text="Тест"></notiicationwindow-component>
      <div class="chat-component" v-if="chatOpened == true">
        <chat-component></chat-component>
      </div>  
    </div>
  </footer>
</template>

<script>
import '@/assets/css/ComponentsStyles/AdaptiveStyles/menumobile.css'
export default {
  data() {
    return {
      chatOpened: false,
      menuOpened: false
    }
  }
}
</script>

<style scoped>

</style>