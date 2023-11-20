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

    <section style="margin-top: 200px;" class="gamemode">
      <div class="gamemode__content">
        <h1>GAMEMODE</h1>
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
      return this.GameModes.filter(mode => [2,3].includes(mode.id))
    },
    twolineGameMode() {
      return this.GameModes.filter(mode => [4,5].includes(mode.id))
    }
  }
}
</script>

<style scoped>

</style>