<template>
  <div class="content-grid--saper">
    <aside-bar-element></aside-bar-element>

    <header-element-page></header-element-page>

    <chat-component id="chat"></chat-component>

    <section class="saper">
      <div class="bg"></div>
      <div class="bg-two"></div>
      <div class="saper-start">
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
                  <button v-if="item.crystals !== undefined">{{ item.crystals }}</button>
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
            <button class="btn-start">Начать игру</button>
            <button class="btn-claim">Забрать 15 АР</button>
          </div>
          <div class="saper-start__steps btns-style__steps">
            <ul class="steps-btns__display">
              <li v-for="(item, index) in SaperNumbers" :key="index">
                <button v-if="item.steps !== undefined">{{ item.steps }}</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="saper-game">
        <div class="saper-game__content">
          <div class="game">
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
</template>

<script>
import ChatComponent from "@/components/ChatComponent.vue";
import AsideBarElement from "@/components/AsidebarComponent.vue";
import HeaderElementPage from "@/components/HeaderComponent.vue";
import '@/assets/css/PagesStyles/games-pages/saper.css'
import SaperNumbers from "@/mocks/SaperNumbers";

export default {
  components: {ChatComponent, HeaderElementPage, AsideBarElement },
  data() {
    return {
      SaperNumbers,
      clickedBtn: '',
      amountCrystals: 5,
      balance: 1000,
      amountDeposit: 5,
      flippedCards: []
    }
  },
  methods: {
    flipCard(index) {
      if (this.flippedCards.includes(index)) {
        this.flippedCards.splice(this.flippedCards.indexOf(index), 1);
        console.log(index, this.flippedCards)
      } else {
        this.flippedCards.push(index);
      }
    },
    clickedBtnChoice(index, content) {
      this.clickedBtn = index
      if (content === 'max') {
        this.amountDeposit = this.balance
      }
      else {
        this.amountDeposit = content
      }
    }
  },
}
</script>

<style scoped>

</style>