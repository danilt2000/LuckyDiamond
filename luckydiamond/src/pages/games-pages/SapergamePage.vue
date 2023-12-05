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
              <input type="number">
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
              <input type="number" id="diamonds-input">
              <div class="diamonds__btns btn-style__diamonds">
                <ul class="diamonds-btns__display">
                  <li v-for="(item, index) in SaperNumbers" :key="index">
                    <button :id="item.diamonds === 'max' ? 'max-button' : null" v-if="item.diamonds !== undefined">{{ item.diamonds }}</button>
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
                  <div class="square"></div>
                </li>
              </ul>
            </div>
            <div class="game-default-line">
              <ul class="display-lines margin-lines">
                <li v-for="index in 5" :key="index">
                  <div class="square"></div>
                </li>
              </ul>
            </div>
            <div class="game-default-line">
              <ul class="display-lines margin-lines">
                <li v-for="index in 5" :key="index">
                  <div class="square"></div>
                </li>
              </ul>
            </div>
            <div class="game-default-line">
              <ul class="display-lines margin-lines">
                <li v-for="index in 5" :key="index">
                  <div class="square"></div>
                </li>
              </ul>
            </div>
            <div class="game-default-line">
              <ul class="display-lines margin-lines">
                <li v-for="index in 5" :key="index">
                  <div class="square"></div>
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
      SaperNumbers
    }
  }
}
</script>

<style scoped>

</style>