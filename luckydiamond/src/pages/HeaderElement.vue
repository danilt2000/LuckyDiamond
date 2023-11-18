<template>
  <header class="header">
    <div class="header__content">
      <div class="header__logo">
        <img src="@/assets/logo.svg" alt="">
      </div>
      <div class="header__nav">
        <nav>
          <a href="#" class="header__nav--now">Главная</a>
          <a href="#">Профиль</a>
          <a href="#">Помощь</a>
        </nav>
      </div>
      <div class="header__balance">
        <div class="header__content--balance">
          <div class="header__card--balance">
            <h2><img src="@/assets/icons-header/diamond-ore-icon.png">{{ balance }}</h2>
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
            <a href="#">Выход<span><img src="@/assets/icons-header/exit-icon.png"></span></a>
          </div>
          <img src="@/assets/icons-test/person-icon.svg" alt="test-ico">
        </div>
        <div class="header__card--auth">
          <h2>discord</h2>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import '@/assets/css/ElementsStyles/header.css'

export default {
  name: 'Header-Element-page',
  data() {
    return {
      balance: 25000,
      auth: true
    }
  }
}
</script>

<style scoped>

</style>