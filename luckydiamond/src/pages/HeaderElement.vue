<template>
  <header class="header">
    <div class="header__content">
      <div class="header__logo">
        <img src="../assets/logo.svg" alt="LuckyDiamond">
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
  user-select: none;
}
.header__content {
  padding: 10px;
}
</style>