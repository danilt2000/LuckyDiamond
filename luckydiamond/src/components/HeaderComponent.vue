<template>
  <header class="header">
    <div class="header__content">
      <div class="header__logo">
        <img src="../assets/logo.svg" alt="">
      </div>
      <div class="header__nav">
        <nav>
          <a href="#" @click="$router.push({ name: 'home' })" :class="{ 'header__nav--now' : route === 'home' }">Главная</a>
          <a href="#" @click="$router.push({ name: 'profile' })" :class="{ 'header__nav--now' : route === 'profile' }">Профиль</a>
          <a href="#">Помощь</a>
        </nav>
      </div>
      <div class="header__balance">
        <div class="header__content--balance">
          <div class="header__card--balance">
            <h2><img src="../assets/icons-header/diamond-ore-icon.png">{{ balance }}</h2>
          </div>
          <div class="header__btn--wallet">
            <a href="">кошелёк</a>
          </div>
        </div>
      </div>
      <div class="header__auth--discord">
        <div v-if="auth" class="header__card--discord">
          <div class="discord__card--name">
            <h2>Artemka</h2>
            <a href="#" @click="auth = false">Выход<span><img src="../assets/icons-header/exit-icon.png"></span></a>
          </div>
          <img src="../assets/icons-test/person-icon.svg" alt="test-ico">
        </div>
        <div v-else class="header__card--auth">
          <div class="auth__card--content">
            <a href="#" @click="auth = true"><span><img width="30" height="30" src="../assets/icons-header/discord-icon.svg"></span>Вход</a>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import '@/assets/css/ComponentsStyles/header.css'

export default {
  name: 'Header-Element-page',
  data() {
    return {
      balance: 25000,
      auth: false,
      route: ''
    }
  },
  mounted() {
    this.route = this.$route.name
  }
}
</script>

<style scoped>

</style>