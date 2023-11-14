<template>
  <aside-bar-element></aside-bar-element>

  <header-element-page></header-element-page>

  <section class="home">
    <div class="home__content">
      <div class="home__banner">
        <div class="home__banner--content">
          <div class="home__banner--subtitle">
            <h2>онлайн-казино</h2>
          </div>
          <div class="home__banner--title">
            <h1>lucky diamond</h1>
          </div>
          <div class="home__banner--paragraph">
            <h3>minecraft casino - spm</h3>
          </div>
          <img src="../assets/person-banner-img.png">
        </div>
      </div>
    </div>
  </section>

  <section class="gamemode">
    <div class="gamemode__content">
      <div class="gamemode__main">
        <ul>
          <li
              v-for="mode in mainGameMode"
              :key="mode.id"
          >
            {{ mode.title }}
          </li>
        </ul>
      </div>
      <div class="gamemode__line--first">
        <ul>
          <li
              v-for="mode in firstlineGameMode"
              :key="mode.id"
          >
            {{ mode.title }}
          </li>
        </ul>
      </div>
      <div class="gamemode__line--two">
        <ul>
          <li
              v-for="mode in TwolineGameMode"
              :key="mode.id"
          >
            {{ mode.title }}
          </li>
        </ul>
      </div>
    </div>
  </section>

</template>

<script>
import HeaderElementPage from "@/pages/HeaderElement.vue";
import AsideBarElement from "@/pages/AsidebarElement.vue";
import gameModes from "@/mocks/GameModes";

export default {
  name: 'HomePage',
  components: {AsideBarElement, HeaderElementPage },
  data() {
    return {
      gameModes
    }
  },
  computed: {
    mainGameMode() {
      return this.gameModes.filter(mode => [1].includes(mode.id))
    },
    firstlineGameMode() {
      return this.gameModes.filter(mode => [2,4].includes(mode.id))
    },
    TwolineGameMode() {
      return this.gameModes.filter(mode => [3,5].includes(mode.id))
    }
  }
}
</script>

<style scoped>
.home {
  margin-top: 60px;
  padding: 20px;
  width: 100%;
  position: relative;
  top: 0;
  z-index: -1;
  overflow: hidden;
}
.home::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 50%;
  height: 100%;
  border-radius: 40px;
  background: #DF85FF99;
  filter: blur(405px);
  z-index: -1;
}
.home::after {
  content: '';
  position: absolute;
  top: 0;
  left: 50%;
  width: 100%;
  height: 50%;
  border-radius: 40px;
  background: #7000FF;
  filter: blur(465px);
  z-index: -1;
}
.home__content {
  margin-top: 70px;
}
.home__banner {
  user-select: none;
  display: flex;
  margin: 0 auto;
  width: 1276px;
  height: 299px;
  background: linear-gradient(60deg, #DF85FF99, #7000FF);
  border-radius: 27px;
  box-shadow: 10px 10px 8px 0px rgba(0, 0, 0, 0.25);
}
.home__banner--content {
  margin-left: 36px;
}
.home__banner--subtitle h2 {
  font-size: 32px;
  color: #ffb400;
  font-family: Montserrat Alternates;
  font-weight: 700;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin-top: 42px;
  text-align: center;
  position: relative;
  top: 20px;
}
.home__banner--title h1 {
  color: #ffb400;
  font-size: 91px;
  font-family: Montserrat Alternates;
  font-weight: 700;
  text-transform: uppercase;
}
.home__banner--paragraph h3 {
  text-transform: uppercase;
  text-align: center;
  font-size: 24px;
  color: #ffb400;
  font-family: Montserrat Alternates;
  font-weight: 700;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
.home__banner--content img {
  position: relative;
  float: right;
  left: 35%;
  bottom: 83%;
}
</style>