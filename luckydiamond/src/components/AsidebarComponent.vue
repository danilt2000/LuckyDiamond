<template>
  <aside class="menu">
    <div class="menu__content">
      <div class="menu__btn--home">
        <a href="#" @click="$router.push({ name: 'home' })"><img width="73" height="73" src="../assets/icons-menu/home-icon.svg"></a>
      </div>
      <div class="menu__btns--gamemodes">
        <div class="menu__content--gamemodes">
          <!-- <div class="fotosloti"><a href="#"><img  src="../assets/icons-menu/slots-icon.svg" ></a></div> -->
          <a href="#" @click="$router.push({ name: 'jackpot' })"><img  class="menu__content--jackpot-icon" src="../assets/icons-menu/jackpot-icon.svg"></a>
          <a href="#" @click="$router.push({ name: 'crash' })"><img  class="menu__content--cruch-icon" src="../assets/icons-menu/crush-icon.svg"></a>
          <a href="#"><img class="menu__content--chest-icon" src="../assets/icons-menu/case-icon.png"></a>
           <!-- <a href="#" @click="$router.push({ name: 'saper' })"><img  class="menu__content--bomb-icon" src="../assets/icons-menu/bomb-icon.svg"></a> -->
          <a href="#" @click="$router.push({ name: 'saper' })"><img  class="menu__content--bomb-icon" src="../assets/icons-menu/bomb-icon.svg"></a>
        </div>
      </div>
      <div class="menu__btn--settings">
        <a @click="$router.push({ name: 'settings' })" href="#"><img width="73" height="73" src="../assets/icons-menu/settings-icon.svg"></a>
      </div>
    </div>
  </aside>
  
</template>


<script>
// import NotiicationwindowComponent from "@/components/NotiicationwindowComponent.vue";
import '@/assets/css/ComponentsStyles/asidebar.css'
export default {
  name: 'AsideBar-Element',
 
  // emits: ['animationchange'],
  methods: {
    ChangeAnimation() {
      this.AnimationOff = !this.AnimationOff
      return this.$emit('animationchange', this.AnimationOff)
    },
    // NotificationRemove(value) {
    //   this.AnimationOff = value
    // }
  }
}
</script>

<style scoped>

</style>
