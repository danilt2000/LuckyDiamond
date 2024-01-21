<template>
  <div class="content-grid--saper">
    <aside-bar-element></aside-bar-element>

    <header-element-page></header-element-page>

    <chat-component id="chat"></chat-component>

    <section class="saper">
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
            <div class="error-block" v-if="ErrorClick === true">
              <h2>Ошибка при заполнении</h2>
            </div>
            <button class="btn-start" :class="{ 'animate-start-btn' : ErrorClick }" @click="clickPlayButton">Начать игру</button>
            <button class="btn-claim">Забрать 15 АР</button>
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
                  <div @click="flipCard(index)" :class="[ 'square', `square-${index}`, { 'square-fliper' : flippedCards.includes(index) } ]"><h2 class="square-text" :class="{ 'hidden' : flippedCards.includes(index) }">ld</h2></div>
                </li>
              </ul>
            </div>
            <div class="game-default-line">
              <ul class="display-lines margin-lines">
                <li v-for="index in 5" :key="index">
                  <div @click="flipCard(index + 5)" :class="[ 'square', `square-${index + 5}`, { 'square-fliper' : flippedCards.includes(index + 5) } ]"><h2 class="square-text" :class="{ 'hidden' : flippedCards.includes(index + 5) }">ld</h2></div>
                </li>
              </ul>
            </div>
            <div class="game-default-line">
              <ul class="display-lines margin-lines">
                <li v-for="index in 5" :key="index">
                  <div @click="flipCard(index + 10)" :class="[ 'square', `square-${index + 10}`, { 'square-fliper' : flippedCards.includes(index + 10) } ]"><h2 class="square-text" :class="{ 'hidden' : flippedCards.includes(index + 10) }">ld</h2></div>
                </li>
              </ul>
            </div>
            <div class="game-default-line">
              <ul class="display-lines margin-lines">
                <li v-for="index in 5" :key="index">
                  <div @click="flipCard(index + 15)" :class="[ 'square', `square-${index + 15}`, { 'square-fliper' : flippedCards.includes(index + 15) } ]"><h2 class="square-text" :class="{ 'hidden' : flippedCards.includes(index + 15) }">ld</h2></div>
                </li>
              </ul>
            </div>
            <div class="game-default-line">
              <ul class="display-lines margin-lines">
                <li v-for="index in 5" :key="index">
                  <div @click="flipCard(index + 20)" :class="[ 'square', `square-${index + 20}`, { 'square-fliper' : flippedCards.includes(index + 20) } ]"><h2 class="square-text" :class="{ 'hidden' : flippedCards.includes(index + 20) }">ld</h2></div>
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
                </div>
              </div>
              <div class="info-crystals">
                <div class="info-crystals__content card-info">
                  <h2>кристаллы</h2>
                  <p>Остерегайся кристаллов, чтобы не проиграть</p>
                  <img src="@/assets/icons-games/saper-game/icon-crystall-info-saper.svg" width="170" height="170">
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
</template>

<script>
import ChatComponent from "@/components/ChatComponent.vue";
import AsideBarElement from "@/components/AsidebarComponent.vue";
import HeaderElementPage from "@/components/HeaderComponent.vue";
import { GetPercentageSteps, GetUserData, ClickCirclePlay } from "@/assets/js/games/saper/SaperAPI";
import { GetCurrentMoney } from "@/assets/js/rest/RestMethods";
import { GetCookie } from "@/assets/js/storage/CookieStorage";

import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import "swiper/css/navigation";
import SwiperCore from 'swiper/core';
import {Navigation } from "swiper/modules";

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
      amountSaveCrystals: 0,
      balance: 0,
      gamesCircle: 0,
      ErrorClick: '',
      gameStart: false,
      offEventPointers: false,
      amountDeposit: 0,
      amountSaveDeposit: 0,
      flippedCards: [],
      PercentageGameSteps: [],
      ValidationPlay: {
        CrystalValidate: false,
        DiamondValidate: false,
        startGame: false,
      },
      modules: [ Navigation ]
    }
  },
  watch: {
    async amountDeposit(DiamondCount) {
      if (DiamondCount >= 1) {
        try {
          await GetCurrentMoney(GetCookie('AUTHTOKEN'), GetCookie('SearchToken'))
              .then((response) => {
                this.balance = response.currentMoney
                console.log(this.balance)
              })
          if (this.balance >= DiamondCount) {
            this.amountSaveDeposit = DiamondCount
            this.ValidationPlay.DiamondValidate = true
          }
        }
        catch (e) {
          console.error('Error amountdep', e)
        }
      }
    },
    async amountCrystals(CrystalsCount) {
      this.PercentageGameSteps = []
      if (CrystalsCount >= 1 && CrystalsCount <= 24) {
        this.amountSaveCrystals = CrystalsCount
        this.ValidationPlay.CrystalValidate = true
        try {
            await GetPercentageSteps(this.amountSaveCrystals)
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
       const maxCircles = 25 - this.amountSaveCrystals

       if (this.gamesCircle < maxCircles) {
         console.log(value)
         // this.offEventPointers = false

         let LimitClicked = this.amountSaveCrystals
         let DepositDiamonds = this.amountSaveDeposit

         const X_Cordinates = value[this.gamesCircle]
         let findIndex, findX, findY

         if (X_Cordinates > 5) {
           findIndex = Math.ceil(X_Cordinates / 5) * 5
           findY = Math.ceil(findIndex / 5)
           findX = X_Cordinates % 5
           console.log(findX, findY)
         }
         else if (X_Cordinates <= 5) {
           findX = X_Cordinates
           findY = 1
         }

         console.log(LimitClicked, DepositDiamonds, X_Cordinates)
         this.gamesCircle = this.gamesCircle + 1
       }
       else {
         this.gameStart = false
         this.offEventPointers = false
         this.flippedCards = []
         this.gamesCircle = 0
         // В будущем - вылазит уведомление, где написано игра закончена, "Продолжить" - клик и обновление страницы
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
            })
      }
      catch (e) {
        console.error('Error in GetData', e)
      }
    }
  },
  methods: {
    clickPlayButton() {
      if(!this.validationCheck()) {
        this.errorPlayButton()
      }
      else {
        this.playNotification()
        this.gameStart = true
        this.offEventPointers = true
      }
    },
    validationCheck() {
      if (this.ValidationPlay.CrystalValidate === true && this.ValidationPlay.DiamondValidate === true) {
        return true
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
        this.flippedCards.splice(this.flippedCards.indexOf(index), 1);
        console.log(index, this.flippedCards)
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
    clickedBtnChoice(index, content) {
      this.clickedBtn = index
      if (content === 'max') {
        setTimeout( async () => {
          await GetCurrentMoney(GetCookie('AUTHTOKEN'), GetCookie('SearchToken'))
              .then((response) => {
                this.amountDeposit = response.currentMoney
              })
        }, 1000)
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