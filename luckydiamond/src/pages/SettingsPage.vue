<template>
  <div class="content__grid-profile">
    <aside-bar-component></aside-bar-component>

    <chat-component></chat-component>

    <header-component></header-component>

    <section class="settings">
      <!-- <div id="volume-control">
    <button id="volume-up" @click="volumeUp">+</button>
    <button id="volume-down" @click="volumeDown">-</button>
  </div>
     -->
      <div class="volume-section">
        <h1 class="volume-text">Звук</h1>
        <input
          id="volumeControl"
          type="range"
          min="0"
          max="10"
          v-model="volume"
          @input="handleVolumeChange"
          ref="volumeControl"
        />
        <h1 class="volume-text--grey">Данная страница находится в разработке, и будет полностью переделанна</h1>

      </div>
    </section>
  </div>
</template>

<script>
import AsideBarComponent from "@/components/AsidebarComponent.vue";
import ChatComponent from "@/components/ChatComponent.vue";
import HeaderComponent from "@/components/HeaderComponent.vue";
import {
  SaveToLocalStorage,
  GetFromLocalStorage,
} from "@/assets/js/storage/LocalStorage";

import "@/assets/css/PagesStyles/settings.css";
export default {
  components: {
    ChatComponent,
    HeaderComponent,
    AsideBarComponent,
  },
  data() {
    return {
      volume: 5, // Значение по умолчанию, на случай, если в LocalStorage ничего нет
    };
  },
  methods: {
    handleVolumeChange() {
      const volume = this.$refs.volumeControl.value;
      SaveToLocalStorage("volume", volume);

      // Транслировать изменение громкости глобально
    },
  },
  created() {
    const storedVolume = GetFromLocalStorage("volume"); // Убедитесь, что этот метод существует и правильно работает
    if (storedVolume !== null) {
      this.volume = storedVolume;
    }
  },
};
</script>