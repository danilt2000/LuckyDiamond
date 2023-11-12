<template>
  <aside-bar-element></aside-bar-element>

  <header-element-page></header-element-page>

  <div class="home">
    <h1>test</h1>
  </div>
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