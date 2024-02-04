<template>
  <div class="grid-crash">

    <aside-bar-component></aside-bar-component>

    <chat-component></chat-component>

    <header-component></header-component>

    <div class="crash-content">
      <section class="crash-game">
        <div class="crash-game__content">
          <div class="crash-game__start-window">
            <h2 class="crash__game-name">Краш</h2>
            <p>Жди момента и забирай выигрыш</p>
            <div class="crash-game-window__inputs">
              <div class="crash-deposit">
                <h3 class="crash-label">Сумма депозита</h3>
                <div class="crash-input-deposit">
                  <img class="diamond-icon" src="@/assets/icons-games/saper-game/icon-diamond-ore-saper.png">
                  <input class="input-style-crash input-style-crash__text diamond-input-crash" type="number" v-model="amountDeposit">
                  <div class="diamonds__btns btn-style__diamonds">
                    <ul class="diamonds-btns__display">
                      <li v-for="(item, index) in SaperNumbers" :key="index">
                        <button @click="clickedBtnChoice(index, item.diamonds)" :class="{ 'btn-click': clickedBtn === index, [index]: clickedBtn === index }" :id="item.diamonds === 'max' ? 'max-button' : null" v-if="item.diamonds !== undefined">{{ item.diamonds }}</button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="crash-ratio">
                <h3 class="crash-label">Автовывод</h3>
                <div class="crash-input-ratio">
                  <input class="input-style-crash input-style-crash__text" type="number" v-model="autoRatio" placeholder="Введите коэффициент">
                </div>
              </div>
            </div>
            <div class="crash-game-window__btn-start">
              <button>Начать игру</button>
            </div>
            <div class="crash-window__line">
              <div class="line-crash">

              </div>
            </div>
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

  </div>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
import AsideBarComponent from "@/components/AsidebarComponent.vue";
import ChatComponent from "@/components/ChatComponent.vue";
import CrashGraphComponent from "@/components/games-components/CrashGraphComponent.vue";

import { useVuelidate } from '@vuelidate/core'
import { maxValue, minValue, required, numeric, integer } from "@vuelidate/validators";


import '@/assets/css/PagesStyles/games-pages/crash.css'
import SaperNumbers from "@/mocks/SaperNumbers";
import {GetCurrentMoney} from "@/assets/js/rest/RestMethods";
import {GetCookie} from "@/assets/js/storage/CookieStorage";
import {eventBus} from "@/main";

export default {
  components: { HeaderComponent, AsideBarComponent, ChatComponent, CrashGraphComponent },
  data() {
    return {
      SaperNumbers,
      amountDeposit: 0,
      autoRatio: 0,
      timerGame: ''
    }
  },
  setup() {
    return { v$: useVuelidate() }
  },
  mounted() {
    eventBus.on('crash', (dataCrash) => {
      try {
        const dataCrashParse = JSON.parse(dataCrash)

        this.timerGame = dataCrashParse.WaitingTime
        console.log(this.timerGame)
      }
      catch (e) {
       console.error(e)
      }
    })
  },
  validations() {
    return {
      amountDeposit: { required, numeric, minValue: minValue(1), maxValue: maxValue(100), integer },
      autoRatio: { numeric, minValue: minValue(1.01) }
    }
  },
  watch: {
    amountDeposit(DepositCount) {
      if (![1, 5, 10, 50, 100, parseInt(this.balance)].includes(DepositCount)) {
        this.clickedBtn = null
      }
      else {
        let index
        switch (DepositCount) {
          case 1:
            if (parseInt(this.balance) === DepositCount) {
              index = 5
            }
            else {
              index = 0
            }
            break
          case 5:
            if (parseInt(this.balance) === DepositCount) {
              index = 5
            }
            else {
              index = 1
            }
            break
          case 10:
            if (parseInt(this.balance) === DepositCount) {
              index = 5
            }
            else {
              index = 2
            }
            break
          case 50:
            if (parseInt(this.balance) === DepositCount) {
              index = 5
            }
            else {
              index = 3
            }
            break
          case 100:
            if (parseInt(this.balance) === DepositCount) {
              index = 5
            }
            else {
              index = 4
            }
            break
          case parseInt(this.balance):
            index = 5
            break
        }

        this.clickedBtnChoice(index, DepositCount)
      }
    },
  },
  methods: {
    async clickedBtnChoice(index, content) {
      this.clickedBtn = index
      if (content === 'max') {
        await GetCurrentMoney(GetCookie('AUTHTOKEN'), GetCookie('SearchToken'))
            .then((response) => {
              console.log(response.currentMoney, this.balance)
              const responseBalance = response.currentMoney

              if (responseBalance === this.balance) {
                this.amountDeposit = parseInt(responseBalance)
              }
            })
      }
      else {
        this.amountDeposit = content
      }
    },
  }
}
</script>