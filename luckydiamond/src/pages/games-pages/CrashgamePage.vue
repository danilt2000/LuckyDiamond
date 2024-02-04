<template>
  <div class="grid-crash">

    <aside-bar-component></aside-bar-component>

    <chat-component></chat-component>

    <header-component></header-component>

    <section class="crash-game">
      <div class="crash-game__content">
        <div class="crash-game__start-window">

        </div>
        <div class="crash-game__graph">
          <crash-graph-component></crash-graph-component>
        </div>
      </div>
    </section>

    <section class="crash-game__players">
      <div class="crash-game-players__content">

      </div>
    </section>

  </div>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
import AsideBarComponent from "@/components/AsidebarComponent.vue";
import ChatComponent from "@/components/ChatComponent.vue";
import CrashGraphComponent from "@/components/games-components/CrashGraphComponent.vue";

export default {
  components: { HeaderComponent, AsideBarComponent, ChatComponent, CrashGraphComponent }
}
</script>