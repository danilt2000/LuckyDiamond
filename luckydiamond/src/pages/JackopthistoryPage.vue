t<template>
  <div class="jackpot-history__content-grid">
    <aside-bar-element/>

    <chat-component/>

    <header-element-page/>

    <div class="jackpot-history">
      <div class="jackpot-history__content">
        <ul class="jackpot-history__element">
          <li v-for="(game, index) in historyGame" :key="index">
            <div class="jackpot-history__element">
              <div class="element-info">
                <div class="element-info__icon">
                  <img :src="`https://avatar.spworlds.ru/face/55/${game.winnerUserName}`">
                </div>
                <div class="element-info__user-info">
                  <h2 class="username">{{ game.winnerUserName }}</h2>
                  <h2 class="user-deposit">
                    {{ game.winStake }}
                    <span class="img-width"><img src="@/assets/icons-profile/icon-diamond-ore.png"></span>
                  </h2>
                </div>
              </div>
              <div class="element-chance">
                <h2>
                  Шанс <span class="chance-style">{{ game.winnerPercentage.toFixed(2) }}%</span>
                </h2>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, reactive } from "vue";

import ChatComponent from "@/components/ChatComponent.vue";
import AsideBarElement from "@/components/AsidebarComponent.vue";
import HeaderElementPage from "@/components/HeaderComponent.vue";

import '@/assets/css/PagesStyles/jackpot-history.css'
import {getJackpotHistoryGame} from "@/assets/js/jackpot/JackpotLogic";

export default {
  components: {HeaderElementPage, ChatComponent, AsideBarElement},
  setup() {
    let historyGame = reactive({})

    onMounted(() => {
      getJackpotHistoryGame()
          .then(response => {
            Object.assign(historyGame, response)
          })
    })

    return { historyGame }
  }
}
</script>

<style>

</style>