<template>
  <div class="content__grid-profile" >
    <aside-bar-component></aside-bar-component>

    <chat-component></chat-component>

    <header-component></header-component>

  <section class="settings">
    
     <!-- <div id="volume-control">
    <button id="volume-up" @click="volumeUp">+</button>
    <button id="volume-down" @click="volumeDown">-</button>
  </div>
     -->
    

  </section>
    
  </div>
</template>

<script>
import AsideBarComponent from "@/components/AsidebarComponent.vue";
import ChatComponent from "@/components/ChatComponent.vue";
import HeaderComponent from "@/components/HeaderComponent.vue";

import '@/assets/css/PagesStyles/settings.css'
export default {
  components: {
    ChatComponent,
    HeaderComponent,
    AsideBarComponent
  },
  methods: {
    volumeUp() {
      var volume = document.getElementById("volume-indicator").value;
      if (volume) {
        volume += 10;

        if (volume > 100) {
          volume = 100;
        }

        document.getElementById("volume-indicator").value = volume;
      } else {
        console.error("Element with id 'volume-indicator' not found or does not have a value property.");
      }
    },
    // остальной код метода volumeDown()
  
    volumeDown() {
      // Получить текущий уровень громкости
      var volume = document.getElementById("volume-indicator").value;

      // Уменьшить уровень громкости на 10%
      volume -= 10;

      // Убедиться, что уровень громкости не ниже 0%
      if (volume < 0) {
        volume = 0;
      }

      // Установить новый уровень громкости
      document.getElementById("volume-indicator").value = volume;
    },
  },
}
</script>