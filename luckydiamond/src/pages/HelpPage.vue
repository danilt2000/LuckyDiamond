<template>
    <div class="content-grid--help">
      <aside-bar-component></aside-bar-component>
  
      <section class="help">
  
      <develop-component></develop-component>
  
      </section>
      <header-component></header-component>
  
    </div>
  </template>
  <script>
  import HelpComponent from "@/components/HelpComponent.vue";
  import AsideBarComponent from "@/components/AsidebarComponent.vue";
  import HeaderComponent from "@/components/HeaderComponent.vue";
  
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
    },
  };
  </script>