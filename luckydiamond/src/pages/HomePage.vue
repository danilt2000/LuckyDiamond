<template>
  <aside-bar-element></aside-bar-element>

  <header-element-page></header-element-page>

</template>

<script>
import HeaderElementPage from "@/pages/HeaderElement.vue";
import AsideBarElement from "@/pages/AsidebarElement.vue";
import GameModes from "@/mocks/GameModes";

export default {
  name: 'HomePage',
  components: {AsideBarElement, HeaderElementPage },
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