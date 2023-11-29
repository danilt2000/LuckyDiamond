<link rel="stylesheet" href="../../assets/css/PagesStyles/adaptive-pages/homemobile.css">
<template>
  <div class="content-grid__mobile-home">
    <header class="header-mobile">
      <div class="header-mobile__content">
        <div class="header-mobile__logo">
          <img src="@/assets/icons-adaptive/home-adaptive/logo.svg" alt="LuckyDiamond Play Now">
        </div>
        <div class="header-mobile__balance">
          <div class="header-mobile__balance--content">
            <div class="header-mobile__card card-display card-text card-img">
              <h2><img src="@/assets/icons-adaptive/home-adaptive/icon-diamond-ore.png">999</h2>
            </div>
            <div class="header-mobile__btn--balance btn-card btn-card__margin">
              <a href="#"><img src="@/assets/icons-adaptive/home-adaptive/icon-deposit.png"></a>
            </div>
          </div>
        </div>
      </div>
    </header>
    <main class="main-mobile">
      <div class="main-mobile__content">
        <div class="main-mobile__first-line">
          <div class="card-mobile__content bg-mobile card-first card-game__text" v-for="mode in firstlineGameMode" :key="mode">
            <h2>{{ mode.title }}</h2>
            <div class="card-mobile__btn">
              <a href="#">Play <span>></span></a>
            </div>
          </div>
        </div>
        <div class="main-mobile__two-line">
          <div class="card-mobile__content bg-mobile card-two card-game__text" v-for="mode in twolineGameMode" :key="mode">
            <h2>{{ mode.title }}</h2>
            <div class="card-mobile__btn">
              <a href="#">Play <span>></span></a>
            </div>
          </div>
        </div>
      </div>
    </main>
    <footer class="footer-mobile">
      <h1>footer</h1>
    </footer>
  </div>
</template>

<script>
import '@/assets/css/PagesStyles/adaptive-pages/homemobile.css'
import '@/mocks/GameModes'
import GameModes from "@/mocks/GameModes";

export default {
  data() {
    return {
      GameModes
    }
  },
  computed: {
    firstlineGameMode() {
      return this.GameModes.filter(mode => [1, 2].includes(mode.id))
    },
    twolineGameMode() {
      return this.GameModes.filter(mode => [3, 4].includes(mode.id))
    }
  }
}
</script>

<style>

</style>