<template>
  <div class="content-grid--help">
    <aside-bar-component></aside-bar-component>

    
    <header-component></header-component>

    <section class="help">

      <Help-component></Help-component>

    </section>

    <chat-component></chat-component>

    
  </div>
</template>
  <script>
import HelpComponent from "@/components/HelpComponent.vue";
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
  components: {
    HeaderComponent,
    AsideBarComponent,
    HelpComponent,
    ChatComponent,
  },
  
};
</script>