<link rel="stylesheet" href="../assets/css/PagesStyles/home.css">
<template>
  <div class="content-grid">
    <aside-bar-element @animationchange="claimSettings"></aside-bar-element>

    <chat-element></chat-element>

    <header-element-page></header-element-page>

    <main class="main">
      <div class="main__content">
        <h3>онлайн-казино</h3>
        <h1>lucky diamond</h1>
        <h4>minecraft casino - <span :class="{ 'animate__text--main__block': !AnimationOff, 'default__text--main__block': AnimationOff }">spm</span></h4>
      </div>
    </main>

    <section class="gamemode">
      <div class="gamemode__content--text">
        <h2>режимы игры</h2>
        <div></div>
      </div>
      <div class="gamemode__content--card">
        <div class="gamemode__main">
          <ul>
            <li
                v-for="mode in mainGameMode"
                :key="mode.id"
            >
              <div class="line__content">
                <h3>{{ mode.title }}</h3>
                <div class="line__footer">
                  <img src="../assets/icons-gamemodes/bomb-icon.svg">
                  <div class="line__btn--main">
                    <a href="#">play <span>></span></a>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div class="gamemode__firstline">
          <ul>
            <li
                v-for="mode in firstlineGameMode"
                :key="mode.id"
            >
              <div class="line__img">
                <img src="@/assets/icons-gamemodes/case-icon.png">
              </div>
              <div :class="'linecontent-' + mode.id">
                <div class="container">
                  <h1>{{ mode.title }}</h1>
                  <a href="#" class="line__btn">play <span class="line__btn--elm">></span></a>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import HeaderElementPage from "@/components/HeaderComponent.vue";
import AsideBarElement from "@/components/AsidebarComponent.vue";
import ChatElement from "@/components/ChatComponent.vue";
import GameModes from "@/mocks/GameModes";
import '@/assets/css/PagesStyles/home.css'

export default {
  name: 'HomePage',
  components: {AsideBarElement, HeaderElementPage, ChatElement },
  data() {
    return {
      GameModes,
      AnimationOff: false
    }
  },
  methods: {
    claimSettings(value) {
      this.AnimationOff = value
    }
  },
  computed: {
    mainGameMode() {
      return this.GameModes.filter(mode => [1].includes(mode.id))
    },
    firstlineGameMode() {
      return this.GameModes.filter(mode => [2].includes(mode.id))
    },
    twolineGameMode() {
      return this.GameModes.filter(mode => [3, 4].includes(mode.id))
    }
  }
}
</script>

<style scoped>

</style>