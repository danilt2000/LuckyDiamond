<template>
  <footer class="footer-mobile">
    <div class="footer-mobile__content">
      <div class="footer-mobile__icons icons-size">
        <a class="icon-center" href="#"><img @click="$router.push({ name: 'home' })" src="@/assets/icons-adaptive/home-adaptive/icon-home-menu.png"></a>
        <a class="icon-center" href="#" @click="$router.push({ name: 'profile' })"><img src="@/assets/icons-adaptive/home-adaptive/icon-wallet-menu.svg"></a>
        <a class="icon-center" href="#"><img src="@/assets/icons-adaptive/home-adaptive/icon-chat-menu.png"></a>
        <a class="icon-center" href="#"><img src="@/assets/icons-adaptive/home-adaptive/icon-info-menu.png"></a>
        <a class="icon-center" href="#"><img src="@/assets/icons-adaptive/home-adaptive/icon-menu.png"></a>
      </div>
    </div>
  </footer>
</template>

<script>
import '@/assets/css/ComponentsStyles/AdaptiveStyles/menumobile.css'
export default {

}
</script>

<style scoped>

</style>