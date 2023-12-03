<template>
  <div class="content-grid--saper">
    <aside-bar-element></aside-bar-element>

    <header-element-page></header-element-page>

    <chat-component></chat-component>

    <div class="saper-start">
      <div class="saper-start__content">
        <h2>Сапёр</h2>
        <p>Находи изумруды на поле и избегай кристалы</p>
      </div>
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