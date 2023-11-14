<template>
  <aside-bar-element></aside-bar-element>

  <header-element-page></header-element-page>

  <section class="home">
    <div class="home__content">
      <div class="home__banner">
        <h1>123</h1>
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
.home__content {
  margin-top: 200px;
}
.home__banner {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 1276px;
  height: 299px;
  background: radial-gradient(circle at center, #DF85FF99, #7000FF);
}
</style>