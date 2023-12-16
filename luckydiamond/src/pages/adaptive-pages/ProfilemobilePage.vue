<template>
  <div class="content-grid__mobile-profile">
    <header-mobile-component></header-mobile-component>

    <main class="profile-mobile">

    </main>

    <menu-mobile-component></menu-mobile-component>

  </div>
</template>

<script>
import HeaderMobileComponent from "@/components/adaptive-components/HeaderMobileComponent.vue";
import MenuMobileComponent from "@/components/adaptive-components/MenuMobileComponent.vue";
export default {
  components: { HeaderMobileComponent, MenuMobileComponent }
}
</script>

<style scoped>

</style>