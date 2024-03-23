<template>
  <div class="content-grid--double">
    <aside-bar-component></aside-bar-component>
    <chat-component></chat-component>
    <header-component></header-component>
    <div class="bg-gradient-left"></div>
    <section class="double">
      <h1>double</h1>
      <div class="jackpot-game">
        <div class="bootstrap-wrapper">
          <div class="container">
            <div class="row">
              <div class="col-md-12">
                <div class="jackpot-carousel">
                  <Carousel
                    ref="carousel"
                    :wrapAround="true"
                    :autoplay="autoPlay"
                    class="no-pointer-events"
                    :transition="150"
                    :itemsToShow="10"
                    @slide-start="handleStepCarousel"
                  >
                    <Slide v-for="(slide, index) in slides" :key="index">
                      <div>
                        <img
                          :src="slide.img"
                          onerror="this.onerror=null;this.src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';"
                        />
                      </div>
                    </Slide>
                  </Carousel>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import { reactive, ref, onMounted } from 'vue'

import AsideBarComponent from "@/components/AsidebarComponent.vue";
import HeaderComponent from "@/components/HeaderComponent.vue";
import ChatComponent from "@/components/ChatComponent.vue";

import {Carousel, Slide} from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";

import "@/assets/css/PagesStyles/games-pages/jackpot.css";
import "@/assets/css/global.css";
import {eventBus} from "@/main";

export default {
  components: {
    HeaderComponent,
    AsideBarComponent,
    ChatComponent,
    Carousel,
    Slide,
  },
  setup() {
    const slides = reactive([
      {
        img: require("@/assets/icons-games/double-game/RectangleBlackDouble.png"),
        target: "Black",
      },
      {
        img: require("@/assets/icons-games/double-game/RectangleBlackDouble.png"),
        target: "Red",
      },
      {
        img: require("@/assets/icons-games/double-game/RectangleGreenDouble.png"),
        target: "Green",
      },
      {
        img: require("@/assets/icons-games/double-game/RectangleRedDouble.png"),
        target: "Red",
      },
      {
        img: require("@/assets/icons-games/double-game/RectangleBlackDouble.png"),
        target: "Black",
      },
      {
        img: require("@/assets/icons-games/double-game/RectangleBlackDouble.png"),
        target: "Red",
      },
    ])
    let autoPlay = ref(0)
    let targetColor = ref('')

    onMounted(() => {
      eventBus.on('doubleGame', (dataDouble) => {
        console.log('data mounted')
        const dataDoubleParse = JSON.parse(dataDouble)
        console.log(dataDoubleParse)

        if (dataDoubleParse.Status === 'InGame') {
          autoPlay.value = 500
          targetColor.value = dataDoubleParse.WInColor
          console.log('213')
        }
        // else if (dataDoubleParse.Status === 'GameEnd') {
        //   targetColor.value = dataDoubleParse.WInColor
        // }
      })
    })

    function handleStepCarousel(data) {
      try {
        if (targetColor.value !== '') {
          let { currentSlideIndex } = data
          console.log(slides[currentSlideIndex].target == targetColor.value)

          if (slides[currentSlideIndex + 1].target == targetColor.value) {
            stopAutoPlay()
          }
        }
      }
      catch (error) {
        console.error(error)
      }
    }

    function stopAutoPlay() {
      autoPlay.value = 0
    }

    return { slides, autoPlay, handleStepCarousel, stopAutoPlay, targetColor }
  },
}
</script>

<style scoped>
.carousel__slide {
  padding: 1px;
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