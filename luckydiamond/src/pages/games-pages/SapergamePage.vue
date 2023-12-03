<template>
  <div class="content-grid--saper">
    <aside-bar-element></aside-bar-element>

    <header-element-page></header-element-page>

    <chat-component></chat-component>

    <div class="saper">
      <h1>123</h1>
    </div>
  </div>
</template>

<script>
import ChatComponent from "@/components/ChatComponent.vue";
import AsideBarElement from "@/components/AsidebarComponent.vue";
import HeaderElementPage from "@/components/HeaderComponent.vue";

export default {
  components: {ChatComponent, HeaderElementPage, AsideBarElement }

}
</script>

<style scoped>

</style>