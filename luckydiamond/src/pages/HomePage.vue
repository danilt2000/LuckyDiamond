<template>
  <div class="content-grid">
    <aside-bar-element></aside-bar-element>

    <chat-element></chat-element>

    <header-element-page></header-element-page>

    <main class="main">
      <div class="main__content">
        <h1>MAIN</h1>
      </div>
    </main>

    <section class="gamemode">
      <div class="gamemode__content">
        <h1>GAMEMODE</h1>
      </div>
    </section>
  </div>
</template>

<script>
import HeaderElementPage from "@/pages/HeaderElement.vue";
import AsideBarElement from "@/pages/AsidebarElement.vue";
import ChatElement from "@/pages/ChatElement.vue";
import GameModes from "@/mocks/GameModes";

export default {
  name: 'HomePage',
  components: {AsideBarElement, HeaderElementPage, ChatElement },
  data() {
    return {
      GameModes
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