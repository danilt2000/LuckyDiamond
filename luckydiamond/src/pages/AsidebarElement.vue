<template>
  <aside class="bar">
    <div class="bar__content">
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
  background: #1D202B;
  position: fixed;
  top: 0;
  left: 0;
  user-select: none;
}
.bar__content  {
  padding-top: 26px;
  justify-content: center;
  display: flex;
  align-items: center;
  text-align: center;
}
.bar__settings {
  position: absolute;
  bottom: 0;
}
.bar__settings .bar__button--settings img {
  margin-bottom: 15px;
}
</style>