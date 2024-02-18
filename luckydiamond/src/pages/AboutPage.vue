<template>
  <div class="content-grid--about">
    <aside-bar-component></aside-bar-component>

    <section class="about">

    <develop-component></develop-component>

    </section>
    <header-component></header-component>

  </div>
</template>
<script>
import DevelopComponent from "@/components/DevelopComponent.vue";
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
    DevelopComponent,
  },
};
</script>