<template>
  <div class="content-grid--saper">
    <aside-bar-element></aside-bar-element>

    <header-element-page></header-element-page>

    <chat-component id="chat"></chat-component>

    <section class="saper">
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
          <div class="saper-start__btns btn-start btn-claim">
            <button>Начать игру</button>
            <button>Забрать 15 АР</button>
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