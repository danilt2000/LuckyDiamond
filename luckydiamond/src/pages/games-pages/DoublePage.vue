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
      <div class="double-game">
        <div class="bootstrap-wrapper">
          <div class="container">
            <div class="row">
              <div class="col-md-12 double-game-main-box">
                <div class="double-carousel">
                  <div class="double-carousel-arrow">▲</div>
                  <div class="double-carousel-arrow-upper">▲</div>
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
              <div class="col-md-12 double-game-history-main-box">
                <div class="container-double-history-text">
                  <span class="double-history-text">история</span>
                </div>

                <div class="double--history-carousel">
                  <Carousel
                    ref="carouselHistory"
                    class="no-pointer-events"
                    :transition="150"
                    :itemsToShow="24"
                  >
                    <Slide v-for="(slide, index) in slidesHistory" :key="index">
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
              <div class="col-md-4" style="padding-left: 0px">
                <div class="double-members-ingame-red">
                  <div class="double-members-flex-container">
                    <div class="double-red-box">RED X2</div>
                    <div class="double-user-icon">
                      <span class="double-user-icon-span"></span>
                      <span class="double-number-color">0</span>
                    </div>
                  </div>
                  <h1>fds</h1>
                  <div>
                    <div v-for="user in users" :key="user.id" class="double-user-icon">
                      <img :src="user.image" alt="User Icon" class="double-user-icon-img" />
                      <span class="double-user-name">{{ user.name }}</span>
                      <span class="double-number-color">{{ user.amount }}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-4" style="padding-left: 0px">
                <div class="double-members-ingame-green">
                  <div class="double-members-flex-container">
                    <div class="double-green-box">GREEN X20</div>
                    <div class="double-user-icon">
                      <span class="double-user-icon-span"></span>
                      <span class="double-number-color">0</span>
                    </div>
                  </div>
                  <h1>fds</h1>
                  <h1>fds</h1>
                  <h1>fds</h1>
                </div>
              </div>
              <div
                class="col-md-4"
                style="padding-left: 0px; padding-right: 0px"
              >
                <div class="double-members-ingame-black">
                  <div class="double-members-flex-container">
                    <div class="double-white-box">BLACK X2</div>
                    <div class="double-user-icon">
                      <span class="double-user-icon-span"></span>
                      <span class="double-number-color">0</span>
                    </div>
                  </div>
                  <h1>fds</h1>
                  <h1>fds</h1>
                  <h1>fds</h1>
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
import { reactive, ref, onMounted } from "vue";

import AsideBarComponent from "@/components/AsidebarComponent.vue";
import HeaderComponent from "@/components/HeaderComponent.vue";
import ChatComponent from "@/components/ChatComponent.vue";
import JackpotNumbers from "@/mocks/JackpotNumbers";
import { GetNewestDoubleGames } from "@/assets/js/games/double/DoubleApi";

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
      users: []
    };
  },
  async created() {},
  setup() {
    const slides = reactive([
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
        img: require("@/assets/icons-games/double-game/RectangleRedDouble.png"),
        target: "Red",
      },
      {
        img: require("@/assets/icons-games/double-game/RectangleBlackDouble.png"),
        target: "Black",
      },
      {
        img: require("@/assets/icons-games/double-game/RectangleGreenDouble.png"),
        target: "Green",
      },
      {
        img: require("@/assets/icons-games/double-game/RectangleBlackDouble.png"),
        target: "Black",
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
        img: require("@/assets/icons-games/double-game/RectangleRedDouble.png"),
        target: "Red",
      },
    ]);

    // const slides = reactive([]);
    const slidesHistory = reactive([]);

    let doubleData = reactive({});

    let autoPlay = ref(0);
    let targetColor = ref("");
    let timeToGame = ref(0);
    let endGame = ref(false);

    onMounted(() => {
      loadGameHistory();
      
      this.users = this.fetchUsers();
      // if (slides.length == 0) {
      //   for (let i = 1; i < 29; i++) {
      //     if (i == 15 || i == 28) {
      //       slides.push({
      //         img: require("@/assets/icons-games/double-game/RectangleGreenDouble.png"),
      //         target: "Green",
      //       });
      //     } else {
      //       if (i % 2 == 0) {
      //         slides.push({
      //           img: require("@/assets/icons-games/double-game/RectangleRedDouble.png"),
      //           target: "Red",
      //         });
      //       } else {
      //         slides.push({
      //           img: require("@/assets/icons-games/double-game/RectangleBlackDouble.png"),
      //           target: "Black",
      //         });
      //       }
      //     }
      //   }
      // }

      eventBus.on("doubleGame", (dataDouble) => {
        const dataDoubleParse = JSON.parse(dataDouble);
        // doubleData = Object.assign(doubleData, dataDoubleParse);

        // timeToGame.value = doubleData.WaitingTime;
        if (endGame.value != true) {
          if (dataDoubleParse.Status == "InGame") {
            autoPlay.value = 20;
            targetColor.value = dataDoubleParse.WInColor;
          }
          if (dataDoubleParse.Status == "GameEnd") {
            targetColor.value = dataDoubleParse.WInColor;
            endGame.value = true;
            autoPlay.value = 150;
          }
        }
      });
    });

    function handleStepCarousel(data) {
      try {
        if (endGame.value == true) {
          let { currentSlideIndex } = data;
          if (
            slides[currentSlideIndex + 1].target == targetColor.value &&
            endGame.value == true
          ) {
            stopAutoPlay();
            setTimeout(() => {
              loadGameHistory();
            }, 2000);
          }
        }
      } catch (error) {
        void error;
      }
    }

    async function loadGameHistory() {
      try {
        await GetNewestDoubleGames()
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            slidesHistory.value = [];
            slidesHistory.length = 0;
            for (let i = 0; i < 25; i++) {
              // doubleData = Object.assign(doubleData, dataDoubleParse);

              // timeToGame.value = doubleData.WaitingTime;
              if (data[i].winColor == "Red") {
                slidesHistory.push({
                  img: require("@/assets/icons-games/double-game/HistoryRectangleRedDouble.png"),
                  target: "Red",
                });
              }
              if (data[i].winColor == "Black") {
                slidesHistory.push({
                  img: require("@/assets/icons-games/double-game/HistoryRectangleBlackDouble.png"),
                  target: "Black",
                });
              }
              if (data[i].winColor == "Green") {
                slidesHistory.push({
                  img: require("@/assets/icons-games/double-game/HistoryRectangleGreenDouble.png"),
                  target: "Green",
                });
              }
            }

            console.log(data);
          })
          .catch((error) => {
            void error;
          });
      } catch (error) {
        void error;
      }
    }

    function stopAutoPlay() {
      autoPlay.value = 0;
      endGame.value = false;
      targetColor.value = "";
    }

    return {
      slides,
      slidesHistory,
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
.double--history-carousel {
  opacity: 1 !important;
  transform: rotateY(0) scale(1) !important;
}
.double--history-carousel .carousel__slide--active ~ .carousel__slide,
.double--history-carousel .carousel__slide--prev,
.double--history-carousel .carousel__slide--next,
.double--history-carousel .carousel__slide--active {
  opacity: 1;
  transform: rotateY(0) scale(1);
}
</style>