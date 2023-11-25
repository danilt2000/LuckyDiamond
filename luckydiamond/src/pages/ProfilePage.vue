<template>
  <div class="content__grid-profile">
    <aside-bar-component></aside-bar-component>

    <chat-component></chat-component>

    <header-component></header-component>

    <div class="profile">

    </div>

    <div class="payments">

    </div>
  </div>
</template>

<script>
import AsideBarComponent from "@/components/AsidebarComponent.vue";
import ChatComponent from "@/components/ChatComponent.vue";
import HeaderComponent from "@/components/HeaderComponent.vue";

export default {
  components: { HeaderComponent, AsideBarComponent, ChatComponent }

}
</script>