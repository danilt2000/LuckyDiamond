<template>
    <div class="content__grid-profile" >
      <aside-bar-component></aside-bar-component>
  
      <chat-component></chat-component>
  
      <header-component></header-component>
  
    <section class="settings"></section>
      
    </div>
  </template>
  
  <script>
  import AsideBarComponent from "@/components/AsidebarComponent.vue";
  import ChatComponent from "@/components/ChatComponent.vue";
  import HeaderComponent from "@/components/HeaderComponent.vue";

  import '@/assets/css/PagesStyles/SettingsPage.css'
  export default {
    components: {
    ChatComponent,
    HeaderComponent,
    AsideBarComponent
  }

  }
  </script>