<template>
  <footer class="footer-mobile">
    <div class="footer-mobile__content">
      <div class="footer-mobile__icons icons-size">
        <a class="icon-center" @click="$router.push({ name: 'home' })" href="#"><img src="@/assets/icons-adaptive/home-adaptive/icon-home-menu.png"></a>
        <a :class="{ 'disabled': cokiehave }" @click="$router.push({ name: 'profile' })" class="icon-center" href="#"><img src="@/assets/icons-adaptive/home-adaptive/icon-wallet-menu.svg"></a>
        <a class="icon-center" href="#"><img src="@/assets/icons-adaptive/home-adaptive/icon-chat-menu.png"></a>
        <a class="icon-center" href="#"><img src="@/assets/icons-adaptive/home-adaptive/icon-info-menu.png"></a>
        <a class="icon-center" href="#"><img src="@/assets/icons-adaptive/home-adaptive/icon-menu.png"></a>
      </div>
    </div>
  </footer>
</template>

<script>
import '@/assets/css/ComponentsStyles/AdaptiveStyles/menumobile.css'
import { GetCookie } from "@/assets/js/storage/CookieStorage";

export default {
  data() {
    return {
      cokiehave: true
    }
  },
  created() {
    const auth = GetCookie('AUTHTOKEN')
    const search = GetCookie('SearchToken')

    if (auth && search) {
      this.cokiehave = false
    }
  }
}
</script>

<style scoped>
</style>
