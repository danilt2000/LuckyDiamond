<template>
  <div class="content-grid--saper">
    <aside-bar-element></aside-bar-element>

    <header-element-page></header-element-page>

    <chat-component></chat-component>

    <section class="saper" :class="{ 'game-end' : ValidationPlay.endGame }">
      <div class="bg"></div>
      <div class="bg-two"></div>
      <div class="saper-start" :class="{ 'game-start__menu-off' : gameStart }">
        <div class="saper-start__content title-saper padding-elements">
          <h2>Сапёр</h2>
          <p>Находи изумруды на поле и избегай кристалы</p>
          <div class="saper-start__choises crystals">
            <h3>Количество кристалов</h3>
            <div class="crystals__choises crystals-input__margin crystals-btns__choices">
              <img class="crystal-icon" width="25" height="25" src="@/assets/icons-games/saper-game/icon-crystall-saper.svg">
              <input v-model="amountCrystals" type="number">
              <ul class="crystals-btns__display">
                <li v-for="(item, index) in SaperNumbers" :key="index">
                  <button @click="clickedBtnCrystals(index, item.crystals)" :class="{ 'btn-click': clickedBtnCrystal === index, [index]: clickedBtnCrystal === index }" :id="item.crystals === 'max' ? 'max-button' : null" v-if="item.crystals !== undefined">{{ item.crystals }}</button>
                </li>
              </ul>
            </div>
          </div>
          <div class="saper-start__choises diamonds diamonds-input__margin">
            <h3>Сумма депозита</h3>
            <div class="diamonds__choises">
              <img class="diamond-icon" src="@/assets/icons-games/saper-game/icon-diamond-ore-saper.png">
              <input v-model="amountDeposit" type="number" id="diamonds-input">
              <div class="diamonds__btns btn-style__diamonds">
                <ul class="diamonds-btns__display">
                  <li v-for="(item, index) in SaperNumbers" :key="index">
                    <button @click="clickedBtnChoice(index, item.diamonds)" :class="{ 'btn-click': clickedBtn === index, [index]: clickedBtn === index }" :id="item.diamonds === 'max' ? 'max-button' : null" v-if="item.diamonds !== undefined">{{ item.diamonds }}</button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="saper-start__btns">
            <div class="error-block" v-if="ErrorClick">
              <h2>Ошибка при заполнении</h2>
            </div>
            <button class="btn-start" :class="{ 'animate-start-btn' : ErrorClick }" @click="clickPlayButton">Начать игру</button>
            <button class="btn-claim" v-if="winningAmount === 0">Забрать {{ winningAmount }} АР</button>
            <button class="btn-claim" @click="claimWinningAmount()" v-else>Забрать {{ winningAmount.toFixed(2) }} АР</button>
          </div>
          <div class="saper-start__steps btns-style__steps">
            <swiper v-if="PercentageGameSteps.length" :key="PercentageGameSteps[0]" :spaceBetween="30" :slides-per-view="4" :centeredSlides="false" :navigation="true" :modules="modules">
              <template v-for="(item, index) in PercentageGameSteps" :key="index">
                <swiper-slide>
                  <div class="steps-btns__display">
                    <button>x{{ item.toFixed(2) }} <span>{{ index + 1 }} {{ stepsEndOfWord(index + 1) }}</span></button>
                  </div>
                </swiper-slide>
              </template>
            </swiper>
          </div>
        </div>
      </div>
      <div class="saper-game">
        <div class="saper-game__content">
          <div class="game" :class="{ 'game-start' : offEventPointers }">
            <div class="circles__content">
              <img src="@/assets/icons-games/saper-game/circles.png" class="circles circles-1">
              <img src="@/assets/icons-games/saper-game/circles.png" class="circles circles-2">
              <img src="@/assets/icons-games/saper-game/circles.png" class="circles circles-3">
              <img src="@/assets/icons-games/saper-game/circles.png" class="circles circles-4">
            </div>
            <div class="game-firstline">
              <ul class="display-lines margin-lines">
                <li class="firstline" v-for="index in 5" :key="index">
                  <div @click="flipCard(index)" :class="[ 'square', `square-${index}`, { 'square-fliper' : flippedCards.includes(index) } ]">
                    <h2 class="square-text" :class="{ 'hidden' : flippedCards.includes(index) }">ld</h2>
                    <img class="img-style-click" v-if="CorrectsClick.includes(index)" src="@/assets/icons-games/saper-game/icon-emeralds-saper.svg" alt>
                    <img class="img-style-click crystal-img" v-if="unCorrectClick.includes(index)" src="@/assets/icons-games/saper-game/icon-crystall-info-saper.svg" alt>
                  </div>
                </li>
              </ul>
            </div>
            <div class="game-default-line">
              <ul class="display-lines margin-lines">
                <li v-for="index in 5" :key="index">
                  <div @click="flipCard(index + 5)" :class="[ 'square', `square-${index + 5}`, { 'square-fliper' : flippedCards.includes(index + 5) } ]">
                    <h2 class="square-text" :class="{ 'hidden' : flippedCards.includes(index + 5) }">ld</h2>
                    <img class="img-style-click" v-if="CorrectsClick.includes(index + 5)" src="@/assets/icons-games/saper-game/icon-emeralds-saper.svg" alt>
                    <img class="img-style-click crystal-img" v-if="unCorrectClick.includes(index + 5)" src="@/assets/icons-games/saper-game/icon-crystall-info-saper.svg" alt>
                  </div>
                </li>
              </ul>
            </div>
            <div class="game-default-line">
              <ul class="display-lines margin-lines">
                <li v-for="index in 5" :key="index">
                  <div @click="flipCard(index + 10)" :class="[ 'square', `square-${index + 10}`, { 'square-fliper' : flippedCards.includes(index + 10) } ]">
                    <h2 class="square-text" :class="{ 'hidden' : flippedCards.includes(index + 10) }">ld</h2>
                    <img class="img-style-click" v-if="CorrectsClick.includes(index + 10)" src="@/assets/icons-games/saper-game/icon-emeralds-saper.svg" alt>
                    <img class="img-style-click crystal-img" v-if="unCorrectClick.includes(index + 10)" src="@/assets/icons-games/saper-game/icon-crystall-info-saper.svg" alt>
                  </div>
                </li>
              </ul>
            </div>
            <div class="game-default-line">
              <ul class="display-lines margin-lines">
                <li v-for="index in 5" :key="index">
                  <div @click="flipCard(index + 15)" :class="[ 'square', `square-${index + 15}`, { 'square-fliper' : flippedCards.includes(index + 15) } ]">
                    <h2 class="square-text" :class="{ 'hidden' : flippedCards.includes(index + 15) }">ld</h2>
                    <img class="img-style-click" v-if="CorrectsClick.includes(index + 15)" src="@/assets/icons-games/saper-game/icon-emeralds-saper.svg" alt>
                    <img class="img-style-click crystal-img" v-if="unCorrectClick.includes(index + 15)" src="@/assets/icons-games/saper-game/icon-crystall-info-saper.svg" alt>
                  </div>
                </li>
              </ul>
            </div>
            <div class="game-default-line">
              <ul class="display-lines margin-lines">
                <li v-for="index in 5" :key="index">
                  <div @click="flipCard(index + 20)" :class="[ 'square', `square-${index + 20}`, { 'square-fliper' : flippedCards.includes(index + 20) } ]">
                    <h2 class="square-text" :class="{ 'hidden' : flippedCards.includes(index + 20) }">ld</h2>
                    <img class="img-style-click" v-if="CorrectsClick.includes(index + 20)" src="@/assets/icons-games/saper-game/icon-emeralds-saper.svg" alt>
                    <img class="img-style-click crystal-img" v-if="unCorrectClick.includes(index + 20)" src="@/assets/icons-games/saper-game/icon-crystall-info-saper.svg" alt>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div class="game-info">
            <div class="game-info__content text-style__subtitle text-style__comment">
              <div class="info-emeralds">
                <div class="info-emeralds__content card-info">
                  <h2>Изумруды</h2>
                  <p>Открывай ячейки с изумрудами</p>
                  <img src="@/assets/icons-games/saper-game/icon-emeralds-saper.svg" width="170" height="170">
                  <div class="info-crystals__count card-style-count emeralds-bg" :class="{ 'on-element-card' : gameStart === true }">
                    <h3>{{ this.emeraldsAmount }}</h3>
                  </div>
                </div>
              </div>
              <div class="info-crystals">
                <div class="info-crystals__content card-info">
                  <h2>кристаллы</h2>
                  <p>Остерегайся кристаллов, чтобы не проиграть</p>
                  <img src="@/assets/icons-games/saper-game/icon-crystall-info-saper.svg" width="170" height="170">
                  <div class="info-crystals__count card-style-count crystals-bg" :class="{ 'on-element-card' : gameStart === true }">
                    <h3>{{ this.amountCrystals }}</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  <div class="start-game" v-if="ValidationPlay.startGame === true">
    <h2>Игра началась!</h2>
  </div>
  <div class="start-game" v-if="ValidationPlay.endGame === true">
    <h2>Вы подорвались! Игра закончена</h2>
  </div>
  <div class="start-game" v-if="ValidationPlay.winGame === true">
    <h2>Игра успешно закончена! Приз забран.</h2>
  </div>
</template>

<script>
import ChatComponent from "@/components/ChatComponent.vue";
import AsideBarElement from "@/components/AsidebarComponent.vue";
import HeaderElementPage from "@/components/HeaderComponent.vue";
import { GetPercentageSteps, GetUserData, ClickCirclePlay, GetWinningAmount } from "@/assets/js/games/saper/SaperAPI";
import { GetCurrentMoney } from "@/assets/js/rest/RestMethods";
import { GetCookie } from "@/assets/js/storage/CookieStorage";

import { Howl } from 'howler';
import {eventBus} from "@/main";

import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import "swiper/css/navigation";
import SwiperCore from 'swiper/core';
import {Navigation } from "swiper/modules";

import { useVuelidate } from '@vuelidate/core'
import { maxValue, minValue, required, numeric, integer } from "@vuelidate/validators";

SwiperCore.use([Navigation]);

import '@/assets/css/PagesStyles/games-pages/saper.css'
import SaperNumbers from "@/mocks/SaperNumbers";

export default {
  components: {ChatComponent, HeaderElementPage, AsideBarElement, Swiper, SwiperSlide },
  data() {
    return {
      SaperNumbers,
      clickedBtn: '',
      clickedBtnCrystal : '',
      amountCrystals: 0,
      emeraldsAmount: 0,
      balance: 0,
      winningAmount: 0,
      gamesCircle: 0,
      gameTurn: 0,
      ErrorClick: '',
      gameStart: false,
      offEventPointers: false,
      amountDeposit: 0,
      flippedCards: [],
      PercentageGameSteps: [],
      CorrectsClick: [],
      unCorrectClick: [],
      ValidationPlay: {
        startGame: false,
        endGame: false,
        winGame: false,
      },
      modules: [ Navigation ]
    }
  },
  setup () {
    return{ v$: useVuelidate() }
  },
  validations() {
    return {
      amountCrystals: { required, numeric, minValue: minValue(1), maxValue: maxValue(24), integer },
      amountDeposit: { required, numeric, minValue: minValue(1), maxValue: maxValue(this.balance), integer }
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
    async amountCrystals(CrystalsCount) {
      this.PercentageGameSteps = []
      if (![1, 5, 10, 24].includes(CrystalsCount)) {
        this.clickedBtnCrystal = null
      }
      else {
        let index
        switch (CrystalsCount) {
          case 1:
            index = 0
            break
          case 5:
            index = 1
            break
          case 10:
            index = 2
            break
          case 24:
            index = 3
            break
        }
        this.clickedBtnCrystals(index, CrystalsCount)
      }

      if (CrystalsCount >= 1 && CrystalsCount <= 24) {
        try {
            await GetPercentageSteps(this.amountCrystals)
              .then((response) => {
                response.forEach((item) => {
                  if (item !== 'Infinity' && item !== '-Infinity') {
                    this.PercentageGameSteps.push(Number(item))
                  }
                })
              })
        }
        catch (e) {
            console.error('Error in Percantage', e)
        }
      }
    },
    flippedCards: {
     async handler(value) {
       if (value.length < 1 || this.ValidationPlay.endGame === true) return
       const maxCircles = 25 - this.amountCrystals - this.gameTurn
       console.log(`MAXCIRLES - ${maxCircles} VALUE: ${value} GAMECIRCLE - ${this.gamesCircle}`)

       if (this.gameStart !== false) {
         this.offEventPointers = false
         let AnswerServer

         let LimitClicked = this.amountCrystals
         let DepositDiamonds = this.amountDeposit

         const X_Cordinates = value[this.gamesCircle]
         let findIndex, findX, findY

         if (X_Cordinates > 5) {
           findIndex = Math.ceil(X_Cordinates / 5) * 5
           findY = Math.ceil(findIndex / 5) - 1
           findX = X_Cordinates - findIndex + 4
         }
         else if (X_Cordinates <= 5) {
           findX = X_Cordinates - 1
           findY = 0
         }

         const UserObject = {
           PuttedMoney: DepositDiamonds,
           MinesCount: this.amountCrystals,
           SearchToken: GetCookie('SearchToken'),
           AUTHTOKEN: GetCookie('AUTHTOKEN')
         }
         const ClickedSquare = {
           X: findX,
           Y: findY
         }

         try {
           await ClickCirclePlay(UserObject, ClickedSquare)
               .then(response => {
                 AnswerServer = response
                 this.winningAmount = response.Item1.WinningMoney
               })
         }
         catch (e) {
           console.error(e)
         }

         console.log('---------ANSWER SERVER-----------', AnswerServer)
         console.log(LimitClicked, DepositDiamonds, X_Cordinates)
         this.gamesCircle = this.gamesCircle + 1
         this.offEventPointers = true
         if (AnswerServer === 'You dead') {
           this.unCorrectClick.push(X_Cordinates)
           this.offEventPointers = false
           this.gameStart = false
           this.gamesCircle = 0
           this.winningAmount = 0
           const SoundCorrect = new Howl({
             src: ['/sounds/incorrect-sound.mp3'],
             volume: 0.5
           })

           SoundCorrect.play()

           this.ValidationPlay.endGame = true
           setTimeout(() => {
             this.ValidationPlay.endGame = false
           }, 1200)
           return eventBus.emit('Updatebalance')
         }
         const SoundUncorrect = new Howl({
           src: ['/sounds/correct-click.mp3'],
           volume: 0.5
         })
         this.CorrectsClick.push(X_Cordinates)

         SoundUncorrect.play()
         this.emeraldsAmount--
       }
       if (this.gamesCircle === maxCircles) {
         this.offEventPointers = false
         this.gameStart = false
         this.gamesCircle = 0

         this.claimWinningAmount()

         this.ValidationPlay.winGame = true

         setTimeout(() => {
           this.ValidationPlay.winGame = false
         }, 1500)
       }
      },
      deep: true
    }
  },
   created() {
    const AUTHTOKEN = GetCookie('AUTHTOKEN')
    const SEARCHTOKEN = GetCookie('SearchToken')

    if (AUTHTOKEN !== null && SEARCHTOKEN !== null) {
      try {
         GetUserData(AUTHTOKEN, SEARCHTOKEN)
            .then(response => {
              console.log(response)
              if (response) {
                this.gameStart = true
                this.offEventPointers = true

                this.ValidationPlay.startGame = true

                this.amountCrystals = response.MinesCount
                this.amountDeposit = response.PuttedMoney
                this.winningAmount = response.WinningMoney
                this.emeraldsAmount = 25 - this.amountCrystals - response.CurrentUserTurn
                this.gameTurn = response.CurrentUserTurn

                const soundStartGame = new Howl({
                  src: ['/sounds/start-game.mp3'],
                  volume: 5.0
                })

                soundStartGame.play()
                console.log(this.flippedCards.length)
                setTimeout(() => {
                  this.ValidationPlay.startGame = false
                }, 2000)
              }
            })
        this.getBalanceUser()
      }
      catch (e) {
        console.error('Error in GetData', e)
      }
    }
  },
  mounted() {
    eventBus.on('Updatebalance-saper', () => {
      GetCurrentMoney(GetCookie("AUTHTOKEN"), GetCookie("SearchToken"))
          .then(response => {
            this.balance = response.currentMoney
          })
    })
  },
  methods: {
    clickPlayButton() {
      this.v$.$touch()

      if (this.v$.amountDeposit.$error) {
        this.errorPlayButton()
      }
      if (this.v$.amountCrystals.$error) {
        this.errorPlayButton()
      }
      if (!this.v$.amountCrystals.$error && !this.v$.amountDeposit.$error) {
        this.flippedCards = []
        this.unCorrectClick = []
        this.CorrectsClick = []
        this.playNotification()
        this.gameStart = true
        this.offEventPointers = true
        const soundStartGame = new Howl({
          src: ['/sounds/start-game.mp3'],
          volume: 5.0
        })

        soundStartGame.play()
        this.emeraldsAmount = 25 - this.amountCrystals
      }
    },
    getBalanceUser() {
      try {
        GetCurrentMoney(GetCookie('AUTHTOKEN'), GetCookie('SearchToken'))
            .then(response => {
              this.balance = response.currentMoney
            })
      }
      catch (e) {
        console.error(e)
      }
    },
    async claimWinningAmount() {
      if (this.winningAmount >= 1) {
        try {
          this.offEventPointers = false
          this.gameStart = false
          this.gamesCircle = 0
          await GetWinningAmount({ SearchToken: GetCookie('SearchToken'), AuthToken: GetCookie('AUTHTOKEN') })
          this.winningAmount = 0

          this.ValidationPlay.winGame = true
          setTimeout(() => {
            this.ValidationPlay.winGame = false
          }, 1500)

          return eventBus.emit('Updatebalance')
        }
        catch (e) {
          console.error(e)
        }
      }
    },
    playNotification() {
      this.ValidationPlay.startGame = true
      setTimeout(() => {
        this.ValidationPlay.startGame = false
      }, 1500)
    },
    errorPlayButton() {
      this.ErrorClick = true
      setTimeout(() => {
        this.ErrorClick = false
      }, 2000)
    },
    flipCard(index) {
      if (this.flippedCards.includes(index)) {
        return eventBus.emit('Updatebalance')
      } else {
        this.flippedCards.push(index);
      }
    },
    stepsEndOfWord(index) {
      const indexString = String(index)
      let lastNumber = indexString
      if (indexString >= 10) {
        lastNumber = indexString.slice(1)
      }
      return this.checkLastNumber(lastNumber)
    },
    checkLastNumber(number) {
      let word = ''
      if (number === '1') {
        word = 'шаг'
      }
      else if (['2', '3', '4'].includes(number)) {
        word = 'шага'
      }
      else {
        word = 'шагов'
      }
      return word
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
    clickedBtnCrystals(index, content) {
      this.clickedBtnCrystal = index
      this.amountCrystals = content
    },
  },
}
</script>

<style scoped>

</style>