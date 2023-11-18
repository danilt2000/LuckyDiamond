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

    <div class="gamemode">
      <div class="gamemode__content--text">
        <h2>Режимы игры</h2>
      </div>
      <div class="gamemode__content--card">
        <div class="gamemode__main">
            <ul>
              <li
                  v-for="mode in mainGameMode"
                  :key="mode.id"
              >
                <div class="line__content" style="margin: 16px 38px 0px 0px" :id="'maincard-' + mode.id">
                  <h1>{{ mode.title }}</h1>
                  <img src="../assets/icons-gamemode/diamond-icon-main.png">
                  <div class="line__players--main">
                    <h4><span><img src="../assets/icons-gamemode/players-icon.png"></span>{{ mode.players }} player</h4>
                  </div>
                  <div class="line__btn--main">
                    <a href="#">play ></a>
                  </div>
                </div>
              </li>
            </ul>
        </div>
        <div class="gamemode__line--first">
          <ul>
            <li
                v-for="mode in firstlineGameMode"
                :key="mode.id"
            >
              <div class="line__content" style="margin: 16px 38px 20px 0px" :id="'linefirst-' + mode.id">
                <div class="line__header">
                  <h2><span><img src="../assets/icons-gamemode/players-icon.png"></span>{{ mode.players }} player</h2>
                  <img v-if="mode.id === 2" src="../assets/icons-gamemode/doublegame-icon.png">
                  <img  v-else src="../assets/icons-gamemode/crashgame-icon.png">
                </div>
                <div class="line__footer">
                  <h2>{{ mode.title }}<br>game</h2>
                  <div class="line__btn">
                    <a href="#">play ></a>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div class="gamemode__line--two">
          <ul>
            <li
                v-for="mode in twolineGameMode"
                :key="mode.id"
            >
              <div class="line__content" style="margin: 16px 38px 20px 0px" :id="'linetwo-' + mode.id">
                <div class="line__header">
                  <h2><span><img src="../assets/icons-gamemode/players-icon.png"></span>{{ mode.players }} player</h2>
                  <img v-if="mode.id === 4" src="../assets/icons-gamemode/jackoptgame-icon.png">
                  <img  v-else src="../assets/icons-gamemode/minesgame-icon.png">
                </div>
                <div class="line__footer">
                  <h2>{{ mode.title }}<br>game</h2>
                  <div class="line__btn">
                    <a href="#">play ></a>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>

  </section>
</template>

<script>
import HeaderElementPage from "@/pages/HeaderElement.vue";
import AsideBarElement from "@/pages/AsidebarElement.vue";
import GameModes from "@/mocks/GameModes";

export default {
  name: 'HomePage',
  components: {AsideBarElement, HeaderElementPage },
  data() {
    return {
      GameModes
    }
  },
  computed: {
    mainGameMode() {
      return this.GameModes.filter(mode => [1].includes(mode.id))
    },
    firstlineGameMode() {
      return this.GameModes.filter(mode => [2,3].includes(mode.id))
    },
    twolineGameMode() {
      return this.GameModes.filter(mode => [4,5].includes(mode.id))
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
  z-index: 1;
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
  margin-top: 62px;
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
  font-family: Montserrat;
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
  font-family: Montserrat;
  font-weight: 700;
  text-transform: uppercase;
}
.home__banner--paragraph h3 {
  text-transform: uppercase;
  text-align: center;
  font-size: 24px;
  color: #ffb400;
  font-family: Montserrat;
  font-weight: 700;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
.home__banner--content img {
  position: relative;
  float: right;
  left: 39%;
  bottom: 83%;
}

.gamemode {
  position: relative;
  z-index: 1;
}
.gamemode__content--text {
  display: flex;
  margin: 2% 0 0 14.5%;
  color: #fff;
  font-size: 20px;
  font-family: Montserrat;
  font-weight: 400;
}
.gamemode__content--card {
  display: flex;
  justify-content: center;
}
.gamemode__main .line__content {
  width: 400px;
  height: 438px;
  background: #fff;
}
.line__content {
  width: 400px;
  height: 212px;
  background: #d5d5d5;
}
.gamemode__main #maincard-1 {
  background: url("../assets/bg-gamemode/bg-main.png");
}
.gamemode__line--first #linefirst-2 {
  background: url("../assets/bg-gamemode/bg-dg.png");
}
.gamemode__line--first #linefirst-3 {
  background: url("../assets/bg-gamemode/bg-cg.png");
}
.gamemode__line--two #linetwo-4 {
  background: url("../assets/bg-gamemode/bg-jg.png");
}
.gamemode__line--two #linetwo-5 {
  background: url("../assets/bg-gamemode/bg-mg.png");
}

.gamemode__main .line__content  {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding-top: 5px;
}
.gamemode__main .line__content img {
  user-select: none;
}
.gamemode__main .line__content h1 {
  text-shadow: 6px 12px 9px rgba(0, 0, 0, 0.25);
  font-family: 'Press Start 2P';
  font-size: 64px;
  color: #FFB400;
  text-transform: uppercase;
}
.gamemode__main .line__players--main {
  position: relative;
}
.gamemode__main .line__players--main h4 {
  margin-top: -50px;
  display: flex;
  align-items: center;
  text-align: center;
  font-family: Montserrat;
  color: #FFB400;
  font-weight: 700;
  font-size: 20px;
  text-shadow: 1px 5px 6px rgba(0, 0, 0, 0.25);
}
.gamemode__main .line__btn--main {
  padding: 20px 0px 20px 0px;
}
.gamemode__main .line__btn--main a {
  font-size: 36px;
  color: #000;
  font-family: Montserrat;
  font-weight: 700;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 21px 21px;
  border-radius: 21px;
  background: #FFB400;
  box-shadow: 0px 4px 40px 1px #FFB400;
  text-transform: uppercase;
  text-decoration: none;
}

.line__header {
  display: flex;
  justify-content: space-between;
}
.line__header h2 {
  padding: 14px 0px 0px 14px;
  display: flex;
  align-items: center;
  color: #FFB400;
  font-size: 20px;
  font-family: Montserrat;
  text-shadow: 1px 5px 6px rgba(0, 0, 0, 0.25);
  font-weight: 700;
}
.line__header img {
  padding: 2px 6px 0px 0px;
}

.line__footer {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  height: 55%;
}
.line__footer h2 {
  padding-left: 12px;
  font-family: 'Press Start 2P';
  font-weight: 400;
  font-size: 30px;
  color: #FFB400;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  text-transform: uppercase;
}
.line__footer .line__btn {
  padding-right: 14px;
}
.line__footer .line__btn a {
  font-size: 24px;
  font-family: Montserrat;
  font-weight: 700;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  color: #000;
  text-decoration: none;
  text-transform: uppercase;
  padding: 16px 16px;
  background: #FFB400;
  border-radius: 21px;
  box-shadow: 0px 4px 40px 1px #FFB400;
}
</style>