<template>
  <div class="content-grid--double">
    <aside-bar-component></aside-bar-component>
    <chat-component></chat-component>
    <header-component></header-component>
    <div class="bg-gradient-left"></div>

    <!-- <double-component></double-component> -->
    <section class="double">
      <h1>gdfgf</h1>

      <!-- v-bind="settings" :breakpoints="breakpoints" -->
      <Carousel
      ref="carousel"
      :wrapAround="true"
      
      :itemsToShow="10"

      >
        <!-- <Slide v-for="slide in 10" :key="slide">
          <div class="carousel__item">{{ slide }}</div>
        </Slide> -->

        <Slide v-for="(slide, index) in slides" :key="index">
          <div >
            <img
              :src="slide.img"
              onerror="this.onerror=null;this.src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';"
            />
          </div>
        </Slide>

        <!-- <template #addons>
          <Navigation />
        </template> -->
      </Carousel>

      <!-- <Carousel
                    ref="carousel"
                    :itemsToShow="10"
                    :autoplay="10"
                    :transition="150"
                    :wrapAround="true"
                    class="no-pointer-events"
                  >
                    <Slide v-for="(slide, index) in slides" :key="index">
                      <div class="carousel__item">
                        <img
                          :src="slide.img"
                          onerror="this.onerror=null;this.src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';"
                        />
                      </div>
                    </Slide>
                  </Carousel> -->
    </section>
  </div>
</template>
  <script>
import AsideBarComponent from "@/components/AsidebarComponent.vue";
import HeaderComponent from "@/components/HeaderComponent.vue";
import ChatComponent from "@/components/ChatComponent.vue";
import { Carousel, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
import "@/assets/css/PagesStyles/games-pages/jackpot.css";
import "@/assets/css/global.css";

export default {
  data: () => ({
    // carousel settings
    // slides: [],
    slides: [
      {
        img: "@/assets/icons-games/double-game/RectangleRedDouble.svg",
        nickname: "Hepatir",
      },
      {
        img: "@/assets/icons-games/double-game/RectangleGreenDouble.svg",
        nickname: "Hepatir",
      },
      {
        img: "@/assets/icons-games/double-game/RectangleBlackDouble.svg",
        nickname: "Ckutls_",
      }
      // ,
      // {
      //   img: "https://avatar.spworlds.ru/face/55/Ckutls_.png",
      //   nickname: "Ckutls_",
      // },
      // {
      //   img: "https://avatar.spworlds.ru/face/55/Ckutls_.png",
      //   nickname: "Ckutls_",
      // },
      // {
      //   img: "https://avatar.spworlds.ru/face/55/Hepatir.png",
      //   nickname: "Hepagfdtir",
      // },
      // {
      //   img: "https://avatar.spworlds.ru/face/55/Ckutls_.png",
      //   nickname: "Ckutls_",
      // },
      // {
      //   img: "https://avatar.spworlds.ru/face/55/Ckutls_.png",
      //   nickname: "Ckutls_",
      // },
      // {
      //   img: "https://avatar.spworlds.ru/face/55/Ckutls_.png",
      //   nickname: "Ckutls_",
      // },
      // {
      //   img: "https://avatar.spworlds.ru/face/55/Hepatir.png",
      //   nickname: "Hepgdfatir",
      // },
    ],
    settings: {
      itemsToShow: 1,
      snapAlign: "center",
    },
    // breakpoints are mobile first
    // any settings not specified will fallback to the carousel settings
    breakpoints: {
      // 700px and up
      700: {
        itemsToShow: 3.5,
        snapAlign: "center",
      },
      // 1024 and up
      1024: {
        itemsToShow: 5,
        snapAlign: "start",
      },
    },
  }),
  name: "HelpPage",
  components: {
    HeaderComponent,
    AsideBarComponent,
    ChatComponent,
    Carousel,
    Slide,
  },
};
</script>

<style scoped>
.carousel__slide {
  padding: 5px;
}

.carousel__viewport {
  perspective: 2000px;
}

.carousel__track {
  transform-style: preserve-3d;
}

.carousel__slide--sliding {
  transition: 0.5s;
}

.carousel__slide {
  opacity: 0.9;
  transform: rotateY(-20deg) scale(0.9);
}

.carousel__slide--active ~ .carousel__slide {
  transform: rotateY(20deg) scale(0.9);
}

.carousel__slide--prev {
  opacity: 1;
  transform: rotateY(-10deg) scale(0.95);
}

.carousel__slide--next {
  opacity: 1;
  transform: rotateY(10deg) scale(0.95);
}

.carousel__slide--active {
  opacity: 1;
  transform: rotateY(0) scale(1.1);
}
</style>