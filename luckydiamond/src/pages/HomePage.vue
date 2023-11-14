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
  width: 100%;
  position: relative;
  top: 0;
  z-index: -1;
  overflow: hidden;
}
.home::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 50%;
  height: 100%;
  border-radius: 40px;
  background: #DF85FF99;
  filter: blur(405px);
  z-index: -1;
}
.home::after {
  content: '';
  position: absolute;
  top: 0%;
  left: 50%;
  width: 100%;
  height: 50%;
  border-radius: 40px;
  background: #7000FF;
  filter: blur(465px);
  z-index: -1;
}
</style>