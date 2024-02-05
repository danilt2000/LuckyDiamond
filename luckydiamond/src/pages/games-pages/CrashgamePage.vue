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
            </div>
            <div class="error-block" v-if="ErrorClick">
              <h2>{{ textError }}</h2>
            </div>
            <div class="crash-game-window__btn-start">
              <button v-if="startGame && crashObject.Status !== 'WaitingForPlayers'" @click="clickClaimDep">Забрать</button>
              <button v-else @click="clickPlayBtn" :class="{ 'animate-start-btn': ErrorClick }">Начать игру</button>
            </div>
            <div class="crash-window__line">
              <div class="line-crash">

              </div>
            </div>
          </div>
          <div class="crash-game__graph">
            <crash-graph-component :crashdata="crashObject"></crash-graph-component>
          </div>
        </div>
      </section>

      <section class="crash-game__players" v-if="crashObject && crashObject.Players">
        <div class="crash-game-players__content">
          <ul class="user-list" v-if="crashObject.Players.length">
            <li class="user-crash" v-for="(player, index) in crashObject.Players.sort((a, b) => b.Bid - a.Bid)" :key="index">
              <div class="user-crash-name">
                <img class="user-crash__icon" :src="`https://avatar.spworlds.ru/face/55/${player.UserName}`">
                <h2>{{ player.UserName }}</h2>
              </div>
              <div class="user-crash-status">
                <div class="user-crash-bid">
                  <img src="@/assets/icons-games/saper-game/icon-diamond-ore-saper.png">
                  <h2>{{ player.Bid }}</h2>
                </div>
                <div class="user-crash-game__status">
                  <h2 class="ingame-crash" v-if="crashObject.Status === 'WaitingForPlayers' && player.WinningX <= 0 || crashObject.Status === 'InGame' && player.WinningX <= 0">В&nbsp;игре</h2>
                  <h2 class="lostgame-crash" v-if="crashObject.Status === 'GameEnd' && player.WinningX <= 0">Проиграл</h2>
                  <h2 class="wingame-crash" v-if="player.WinningX >= 1">{{ player.WinningX.toFixed(2) }}x</h2>
                </div>
                <div class="user-crash-game__winmoney" v-if="player.WinningX >= 1">
                  <img src="@/assets/icons-games/saper-game/icon-diamond-ore-saper.png">
                  <h2>{{ player.WinningMoney.toFixed(2) }}</h2>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </div>
    <div class="notification-crash" v-if="notificationShow">
      <h2>{{ notificationText }}</h2>
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
import {ExitAndTakeMoneyFromCrashGame, JoinCrashGame} from "@/assets/js/games/crash/CrashAPI";

export default {
  components: { HeaderComponent, AsideBarComponent, ChatComponent, CrashGraphComponent },
  data() {
    return {
      SaperNumbers,
      clickedBtn: null,
      ErrorClick: false,
      ErrorJoin: false,
      notificationShow: false,
      balance: 0,
      amountDeposit: 0,
      crashObject: '',
      textError: '',
      notificationText: '',
      startGame: false,
    }
  },
  setup() {
    return { v$: useVuelidate() }
  },
  mounted() {
    eventBus.on('crash', (dataCrash) => {
      try {
        const dataCrashParse = JSON.parse(dataCrash)

        this.crashObject = dataCrashParse
        // console.log(this.crashObject)
      }
      catch (e) {
       console.error(e)
      }

      if (this.crashObject.Status === 'GameEnd' && this.startGame === true && this.crashObject.Players.some(player => player.UserName === GetCookie('SpUserName'))) {
        this.startGame = false
        this.updateUserMoney()
      }
      if (
          this.crashObject.Players.some(player => player.UserName === GetCookie('SpUserName')) &&
          this.startGame === false &&
          this.crashObject.Status !== 'GameEnd' &&
          this.crashObject.Players.some(player => player.UserGameState !==  'Win')
      ) {
        this.startGame = true;

        let User = this.crashObject.Players.find(player => player.UserName === GetCookie('SpUserName'))
        console.log(User)
        if (User) {
          this.amountDeposit = User.Bid
          User = null
        }
      }
    })
  },
  validations() {
    return {
      amountDeposit: { required, numeric, minValue: minValue(1), maxValue: maxValue(this.balance), integer },
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
  async created() {
    if (GetCookie('AUTHTOKEN') && GetCookie('SearchToken')) {
      await GetCurrentMoney(GetCookie('AUTHTOKEN'), GetCookie('SearchToken'))
          .then((response) => {
            this.balance = response.currentMoney
          })
    }
  },
  methods: {
    async updateUserMoney() {
      if (GetCookie('AUTHTOKEN') && GetCookie('SearchToken')) {
        await GetCurrentMoney(GetCookie('AUTHTOKEN'), GetCookie('SearchToken'))
            .then((response) => {
              this.balance = response.currentMoney
              return eventBus.emit('Updatebalance')
            })
      }
    },
    async clickPlayBtn() {
      this.v$.$touch()

      if (this.v$.amountDeposit.$error) {
        this.textError = 'Ошибка введении данных'
        this.errorPlayButton()
      }

      if (!this.v$.amountDeposit.$error) {
        const userData = {
          searchToken: GetCookie('SearchToken'),
          authtoken: GetCookie('AUTHTOKEN')
        }

        await JoinCrashGame(userData, this.amountDeposit)
            .then((response) => {
              console.log(this.balance)
              console.log(response)
              if (response === `You can't join to started or ended game` || response === 'Player alredy in the game.') {

                if (response === `You can't join to started or ended game`) {
                  this.textError = 'Игра уже началась или только закончилась!'
                  this.errorPlayButton()
                }
                else if (response === 'Player alredy in the game.') {
                  this.textError = 'Вы уже в игре!'
                  this.errorPlayButton()
                }

                return
              }
              else if (response === 'Success') {
                this.notificationText = 'Успешное добавление в очередь'
                this.notificationShow = true

                setTimeout(() => {
                  this.notificationText = ''
                  this.notificationShow = false
                }, 1000)
              }
              this.startGame = true
            })
      }
    },
    errorPlayButton() {
      this.ErrorClick = true
      setTimeout(() => {
        this.ErrorClick = false
        this.textError = ''
      }, 2000)
    },
    async clickClaimDep() {
      if (this.startGame === true) {
        const userData = {
          searchToken: GetCookie('SearchToken'),
          authtoken: GetCookie('AUTHTOKEN')
        }

        await ExitAndTakeMoneyFromCrashGame(userData)
            .then((response) => {
              console.log(response)
              this.startGame = false

              if (response.startsWith('Win')) {
                this.notificationText = 'Деньги успешно зачислены. Игра покинута.'
                this.notificationShow = true

                setTimeout(() => {
                  this.notificationText = ''
                  this.notificationShow = false
                }, 1500)
              }

              this.updateUserMoney()
            })
      }
    },
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