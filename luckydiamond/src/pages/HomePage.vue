<template>
  <homemobile-page v-if="mobile"></homemobile-page>
  <div class="content-grid" v-if="!mobile">
    <aside-bar-component></aside-bar-component>

    <chat-component></chat-component>

    <header-component></header-component>

    <main class="main">
      <div class="main__content">
        <h3>онлайн-казино</h3>
        <h1>lucky diamond</h1>
        <h4>minecraft casino - <span :class="{ 'animate__text--main__block': !AnimationOff, 'default__text--main__block': AnimationOff }">spm</span></h4>
      </div>
    </main>

    <section class="gamemode">
      <div class="gamemode__content--text">
        <h2>режимы игры</h2>
        <div></div>
      </div>
      <div class="gamemode__content--card">
        <div class="gamemode__main bg-card">
          <ul>
            <li
                v-for="mode in mainGameMode"
                :key="mode.id"
            >
              <div class="line__content">
                <h3 class="title-firstline">{{ mode.title }}</h3>
                <div class="line__footer">
                  <img src="../assets/icons-gamemodes/bomb-icon.svg">
                  <div class="line__btn--main">
                    <a href="#" class="line__btn">play <span class="line__btn--elm">></span></a>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div class="gamemode__lines">
          <div class="gamemode__firstline bg-card">
            <ul>
              <li
                  v-for="mode in firstlineGameMode"
                  :key="mode.id"
              >
                <div class="line__img">
                  <img src="@/assets/icons-gamemodes/case-icon.png">
                </div>
                <div :class="'linecontent-' + mode.id">
                  <div class="container">
                    <h1 class="title-firstline">{{ mode.title }}</h1>
                    <a href="#" class="line__btn">play <span class="line__btn--elm">></span></a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div class="gamemode__twolines">
            <div class="gamemode__twoline--first__element bg-card">
              <ul>
                <li
                    v-for="mode in twolinefirstelementGameMode"
                    :key="mode"
                >
                  <div :class="'linecontent-' + mode.id">
                    <h3 class="title-twoline">{{ mode.title }}</h3>
                  </div>
                  <div class="container">
                    <a href="#" class="line__btn">play <span class="line__btn--elm ">></span></a>
                    <img src="@/assets/icons-gamemodes/slots-icon.png">
                  </div>
                </li>
              </ul>
            </div>
            <div class="gamemode__twoline--two__element bg-card">
              <ul>
                <li
                    v-for="mode in twolinetwoelementGameMode"
                    :key="mode.id"
                >
                  <div :class="'linecontent-' + mode.id">
                    <h3 class="title-twoline">{{ mode.title }}</h3>
                  </div>
                  <div class="container">
                    <a href="#" class="line__btn">play <span class="line__btn--elm">></span></a>
                    <img src="@/assets/icons-gamemodes/crush-icon.svg">
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        </div>
    </section>
  </div>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
import AsideBarComponent from "@/components/AsidebarComponent.vue";
import ChatComponent from "@/components/ChatComponent.vue";
import HomemobilePage from "@/pages/adaptive-pages/HomemobilePage.vue";
import GameModes from "@/mocks/GameModes";
import '@/assets/css/PagesStyles/home.css'

export default {
  name: 'HomePage',
  components: { AsideBarComponent, HeaderComponent, ChatComponent, HomemobilePage },
  data() {
    return {
      GameModes,
      AnimationOff: false,
      mobile: false,
      currentPage: 'Desktop'
    }
  },
  methods: {
    // claimSettings(value) {
    //   this.AnimationOff = value
    // },
    checkWindowSize() {
      this.mobile = window.innerWidth <= 600

      this.currentPage = this.mobile ? 'Mobile' : 'Desktop'
    }
  },
  mounted() {
    this.checkWindowSize()

    window.addEventListener('resize', this.checkWindowSize)
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.checkWindowSize)
  },
  computed: {
    mainGameMode() {
      return this.GameModes.filter(mode => [1].includes(mode.id))
    },
    firstlineGameMode() {
      return this.GameModes.filter(mode => [2].includes(mode.id))
    },
    twolinefirstelementGameMode() {
      return this.GameModes.filter(mode => [3].includes(mode.id))
    },
    twolinetwoelementGameMode() {
      return this.GameModes.filter(mode => [4].includes(mode.id))
    }
  }
}
</script>

<style scoped>

</style>