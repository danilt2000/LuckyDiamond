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
            <a href=""></a>
          </div>
        </div>
      </div>
      <div class="header__auth--discord">
        <div class="header__card--discord">
          <h2>test</h2>
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
      balance: 25000
    }
  }
}
</script>

<style scoped>

</style>