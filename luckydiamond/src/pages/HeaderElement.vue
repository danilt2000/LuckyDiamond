<template>
  <header class="header">
    <div class="header__content">
      <div class="header__logo">
        <img src="../assets/logo.svg" alt="LuckyDiamond">
      </div>
      <div class="header__nav">
          <nav>
            <a href="#" id="btn--now">Главная</a>
            <a href="#">Профиль</a>
            <a href="#">Помощь</a>
          </nav>
      </div>
      <div class="header__balance">
        <div class="header__balance--content">
          <div class="count__card">
            <div class="balance__count">
              <h2><img src="../assets/icons/icon-deepslate_diamond_ore.png">{{ balance }}</h2>
            </div>
          </div>
          <div class="wallet__card">
            <div class="balance__wallet">
              <h2>кошелёк</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header-Element-page',
  data() {
    return {
      balance: 25000
    }
  }
}
</script>

<style scoped>
.header {
  margin-left: 88px;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 2;
  overflow: hidden;
}
.header::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 50%;
  height: 100%;
  background: #DF85FF99;
  filter: blur(125px);
  z-index: -1;
}
.header::after {
  content: '';
  position: absolute;
  top: 0;
  left: 50%;
  width: 100%;
  height: 100%;
  background: #7000FF;
  filter: blur(125px);
  z-index: -1;
}
.header__content {
  display: flex;
  align-items: center;
  position: relative;
  z-index: 1;
}
.header__logo {
  padding: 2% 1.5%;
  user-select: none;
}
.header__nav {
  flex-grow: 0.69;
  display: flex;
  justify-content: center;
}
.header__nav nav a {
  text-decoration: none;
  font-size: 19px;
  margin-right: 75px;
  color: #fff;
  font-family: Montserrat;
  font-weight: 700;
}
#btn--now {
  color: #ffb400;
  font-family: Montserrat;
  font-weight: 700;
  position: relative;
}
#btn--now::before {
  position: absolute;
  content: '';
  width: 100%;
  height: 2px;
  background: #ffb400;
  bottom: -7px;
  left: 0;
}
.header__balance--content {
  display: flex;
  align-items: center;
}
.balance__count {
  border-radius: 9px;
  padding: 10px 16px;
  background: #22252F;
  box-shadow: 4px 4px 4px 0px rgba(0, 0, 0, 0.25);
  flex-shrink: 0;
}
.balance__count h2 {
  display: flex;
  align-items: center;
  color: #fff;
  font-family: Montserrat;
  font-weight: 700;
  font-size: 18px;
}
.balance__count h2 img {
  margin-right: 6px;
  user-select: none;
}
.balance__wallet {
  border-radius: 13px;
  padding: 18px 23px 21px 23px;
  background: #ffb400;
  box-shadow: 4px 4px 4px 0px rgba(0, 0, 0, 0.25);
  flex-shrink: 0;
  margin-left: -15px;
}
.balance__wallet h2 {
  text-transform: uppercase;
  font-family: Montserrat;
  font-weight: 600;
  font-size: 16px;
}
</style>