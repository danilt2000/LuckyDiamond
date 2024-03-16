<template>
    <div class="content-grid--double">
      <aside-bar-component></aside-bar-component>
      <chat-component></chat-component>
      <section class="double">
  
      
  
      </section>
      <header-component></header-component>
    <double-component></double-component>
    </div>
  </template>
  <script>
  import DoubleComponent from "@/components/DoubleComponent.vue";
  import AsideBarComponent from "@/components/AsidebarComponent.vue";
  import HeaderComponent from "@/components/HeaderComponent.vue";
  import ChatComponent from "@/components/ChatComponent.vue";
  
  export default {
    data() {
      return {
        Object: {
          bg: "value",
          nickname: "value",
          icons: {},
          textTacholgy: { text1: "text2" },
        },
      };
    },
    name: "HelpPage",
    components: {
      HeaderComponent,
      AsideBarComponent,
      DoubleComponent,
      ChatComponent,
    },
  };
  </script>