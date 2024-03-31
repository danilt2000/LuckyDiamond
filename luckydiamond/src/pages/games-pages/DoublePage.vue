<template>
  <div class="content-grid--double">
    <aside-bar-component></aside-bar-component>
    <chat-component></chat-component>
    <header-component></header-component>
    <div class="bg-gradient-left"></div>
    <section class="double">
      <div class="double-start">
        <div
          class="jackpot-start__content title-saper padding-elements-jackpot"
        >
          <h2>Рулетка</h2>
          <p>Крути, ставь, побеждай!</p>
          <div class="saper-start__choises diamonds diamonds-input__margin">
            <h3>Сумма депозита</h3>

            <div class="diamonds__choises">
              <img
                class="diamond-icon"
                src="@/assets/icons-games/saper-game/icon-diamond-ore-saper.png"
              />
              <input
                v-model="amountDeposit"
                type="number"
                id="diamonds-input"
              />
              <div class="diamonds__btns btn-style__diamonds">
                <ul class="diamonds-btns__display">
                  <li v-for="(item, index) in JackpotNumbers" :key="index">
                    <button
                      @click="clickedBtnChoice(index, item.diamonds)"
                      :class="{
                        'btn-click': clickedBtn === index,
                        [index]: clickedBtn === index,
                      }"
                      :id="item.diamonds === 'max' ? 'max-button' : null"
                      v-if="item.diamonds !== undefined"
                    >
                      {{ item.diamonds }}
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="jackpot-start__btns">
            <div class="error-block" v-if="ErrorClick">
              <h2>Ошибка при заполнении</h2>
            </div>
            <button
              class="btn-start"
              :class="{ 'animate-start-btn': ErrorClick }"
              @click="clickPlayBtn"
            >
              Начать игру
            </button>
            <!-- <button class="btn-claim" v-if="winningAmount === 0">Забрать {{ winningAmount }} АР</button>
                  <button class="btn-claim" @click="claimWinningAmount()" v-else>Забрать {{ winningAmount.toFixed(2) }} АР</button> -->
          </div>
        </div>
      </div>
      <!-- </div> -->
      <div class="jackpot-game">
        <div class="bootstrap-wrapper">
          <div class="container">
            <div class="row">
              <div class="col-md-12 double-game-main-box">
                <div class="double-carousel">
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
              <div class="col-md-12">
                <h1>double</h1>
                <h2 v-if="timeToGame !== null">
                  time to game - {{ timeToGame.toFixed(0) }}
                </h2>
              </div>
              <!-- </div> -->
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import { reactive, ref, onMounted } from "vue";

import AsideBarComponent from "@/components/AsidebarComponent.vue";
import HeaderComponent from "@/components/HeaderComponent.vue";
import ChatComponent from "@/components/ChatComponent.vue";
import JackpotNumbers from "@/mocks/JackpotNumbers";

import { Carousel, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";

import "@/assets/css/PagesStyles/games-pages/jackpot.css";
import "@/assets/css/PagesStyles/games-pages/double.css";
import "@/assets/css/global.css";
import { eventBus } from "@/main";

export default {
  components: {
    HeaderComponent,
    AsideBarComponent,
    ChatComponent,
    Carousel,
    Slide,
  },
  data() {
    return {
      JackpotNumbers,
    };
  },
  setup() {
    const slides = reactive([]);
    let doubleData = reactive({});

    let autoPlay = ref(0);
    let targetColor = ref("");
    let timeToGame = ref(0);
    let endGame = ref(false);

    onMounted(() => {
      if (slides.length == 0) {
        for (let i = 1; i < 29; i++) {
          if (i === 15 || i === 28) {
            slides.push({
              img: require("@/assets/icons-games/double-game/RectangleGreenDouble.png"),
              target: "Green",
            });
          } else {
            if (i % 2 === 0) {
              slides.push({
                img: require("@/assets/icons-games/double-game/RectangleRedDouble.png"),
                target: "Red",
              });
            } else {
              slides.push({
                img: require("@/assets/icons-games/double-game/RectangleBlackDouble.png"),
                target: "Black",
              });
            }
          }
        }
      }

      eventBus.on("doubleGame", (dataDouble) => {
        const dataDoubleParse = JSON.parse(dataDouble);
        doubleData = Object.assign(doubleData, dataDoubleParse);
        console.log(dataDoubleParse);

        timeToGame.value = doubleData.WaitingTime;

        if (dataDoubleParse.Status === "InGame") {
          autoPlay.value = 500;
          targetColor.value = dataDoubleParse.WInColor;
        } else if (dataDoubleParse.Status === "GameEnd") {
          endGame.value = true;
          autoPlay.value = 350;
        }
      });
    });

    function handleStepCarousel(data) {
      try {
        if (targetColor.value !== "") {
          let { currentSlideIndex } = data;

          if (
            slides[currentSlideIndex + 1].target == targetColor.value &&
            endGame.value
          ) {
            stopAutoPlay();
          }
        }
      } catch (error) {
        void error;
      }
    }

    function stopAutoPlay() {
      autoPlay.value = 0;
    }

    return {
      slides,
      autoPlay,
      doubleData,
      targetColor,
      timeToGame,
      handleStepCarousel,
      stopAutoPlay,
    };
  },
};
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