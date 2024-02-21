<template>
  <div class="content-grid--help">
    <aside-bar-component></aside-bar-component>

    <develop-component></develop-component>
    <header-component></header-component>

    <section class="help">
      <h1>gfsdlkgdfk</h1>
    </section>
  </div>
</template>
  <script>
// import HelpComponent from "@/components/HelpComponent.vue";
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
    // HelpComponent,
  },
};
</script>