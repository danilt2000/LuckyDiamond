<template>
  <footer class="footer-mobile">
    <div class="footer-mobile__content">
      <div class="footer-mobile__block chat-icon">
        <a href="#">
          <img src="@/assets/icons-adaptive/home-adaptive/icon-chat.svg">
        </a>
      </div>
      <div class="footer-mobile__block home-icon">
        <a href="#" @click="$router.push({ name: 'home' })">
          <img src="@/assets/icons-adaptive/home-adaptive/icon-home.svg">
        </a>
      </div>
      <div class="footer-mobile__block settings-icon">
        <a href="#">
          <img width="" src="@/assets/icons-adaptive/home-adaptive/icon-settings.png">
        </a>
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