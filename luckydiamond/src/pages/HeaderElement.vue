<template>
  <header class="header">
    <div class="header__content">
      <div class="header__logo">
        <img src="../assets/logo.svg" alt="LuckyDiamond">
      </div>
      <div class="header__nav">
          <nav>
            <a href="#">Главная</a>
            <a href="#">Профиль</a>
            <a href="#">Помощь</a>
          </nav>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header-Element-page'
}
</script>

<style scoped>
.header {
  margin-left: 88px;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1;
  overflow: hidden;
}
.header::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #DF85FF99;
  filter: blur(115px);
  z-index: -1;
}
.header::after {
  content: '';
  position: absolute;
  top: 0;
  left: 22%;
  width: 60%;
  height: 100%;
  background: #7000FF;
  filter: blur(190px);
  z-index: -2;
}
.header__content {
  display: flex;
  align-items: center;
  position: relative;
  z-index: 1;
}
.header__nav {
  flex-grow: 0.69;
  display: flex;
  justify-content: center;
}
.header__logo {
  padding: 26px 58px;
  user-select: none;
}

</style>