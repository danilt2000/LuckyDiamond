<template>
  <aside-bar-element></aside-bar-element>

  <header-element-page></header-element-page>

  <section class="home">
    <div class="home__content">
      <div class="home__banner">

      </div>
    </div>
  </section>
</template>

<script>
import HeaderElementPage from "@/pages/HeaderElement.vue";
import AsideBarElement from "@/pages/AsidebarElement.vue";
export default {
  name: 'HomePage',
  components: {AsideBarElement, HeaderElementPage }
}
</script>

<style scoped>
.home {
  margin-top: 60px;
  padding: 20px;
}
</style>