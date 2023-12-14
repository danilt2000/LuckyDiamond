<link rel="stylesheet" href="../../assets/css/PagesStyles/adaptive-pages/homemobile.css">
<template>
  <div class="content-grid__mobile-home">
    <header-mobile-component></header-mobile-component>
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
    <menu-mobile-component></menu-mobile-component>
  </div>
</template>

<script>
import '@/assets/css/PagesStyles/adaptive-pages/homemobile.css'
import '@/mocks/GameModes'
import GameModes from "@/mocks/GameModes";

import HeaderMobileComponent from "@/components/adaptive-components/HeaderMobileComponent.vue";
import MenuMobileComponent from "@/components/adaptive-components/MenuMobileComponent.vue";

export default {
  components: { HeaderMobileComponent, MenuMobileComponent },
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