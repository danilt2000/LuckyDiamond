<template>
  <aside class="menu">
    <div class="menu__content">
      <div class="menu__btn--home">
        <a href="#"><img width="73" height="73" src="../assets/icons-home/home-icon.svg"></a>
      </div>
      <div class="menu__btns--gamemodes">
        <div class="menu__content--gamemodes">
          <a href="#"><img src="../assets/icons-home/slots-icon.svg"></a>
          <a href="#"><img src="../assets/icons-home/crush-icon.svg"></a>
          <a href="#"><img src="../assets/icons-home/case-icon.png"></a>
          <a href="#"><img src="../assets/icons-home/bomb-icon.svg"></a>
        </div>
      </div>
      <div class="menu__btn--settings">
        <div class="menu__content--settings">
          <a href="#"><img  src="../assets/icons-home/settings-icon.svg"></a>
        </div>
      </div>
    </div>
  </aside>
</template>


<script>
import '@/assets/css/ElementsStyles/asidebar.css'

export default {
  name: 'AsideBar-Element'
}
</script>

<style scoped>

</style>
