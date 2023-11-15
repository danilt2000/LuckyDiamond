<template>
  <aside class="bar">
    <div class="bar__content">
      <div class="bar__blurry-bg"></div>
      <div class="bar__buttons">
        <a href="#" class="bar__button--home"> <img src="../assets/icons/icon-home-button.png"> </a>
        <div class="bar__settings">
          <a href="#" class="bar__button--settings"> <img src="../assets/icons/icon-settings-button.png"> </a>
        </div>
      </div>
    </div>
  </aside>
</template>

<script>
export default {
  name: 'AsideBar-Element'
}
</script>

<style>
.bar {
  width: 88px;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  user-select: none;
  overflow: hidden;
  z-index: 1000;
}
.bar__content {
  padding-top: 26px;
  justify-content: center;
  background: #1D202B;
  display: flex;
  align-items: flex-start;
  text-align: center;
  position: relative;
  z-index: 1;
  height: 100%;
}
.bar__blurry-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #051B53;
  filter: blur(39px);
  z-index: -1;
}
.bar__buttons {
  z-index: 2;
}
.bar__settings {
  position: absolute;
  bottom: 0;
}
.bar__settings .bar__button--settings img {
  margin-bottom: 15px;
}
</style>
