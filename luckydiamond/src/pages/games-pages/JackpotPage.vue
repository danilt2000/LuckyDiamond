<template>
  <div class="content-grid--jackpot">
    <aside-bar-component></aside-bar-component>

    <chat-component></chat-component>

    <header-component></header-component>
    <div class="bg-gradient-left"></div>
    <!-- <div class="bootstrap-wrapper">
      <div class="container">
          <div class="row hidden-sm-down"> 
              <div class="col-md-1">.</div>
              <div class="col-md-1">.col-</div>
              <div class="col-md-1">.col-</div>
              <div class="col-md-1">.col-</div>
              <div class="col-md-1">.col-</div>
              <div class="col-md-1">.col-</div>
              <div class="col-md-1">.col-</div>
              <div class="col-md-1">.col-</div>
              <div class="col-md-1">.col-</div>
              <div class="col-md-1">.col-</div>
              <div class="col-md-1">.col-</div>
              <div class="col-md-1">.col-</div>
              <div class="col-md-1">.col-</div>
          </div>
      </div>
  </div> -->
    <!-- <section class="crash-game"> -->

    <!-- <div class="jackpot-main-elements"> -->
    <!-- <div class="bootstrap-wrapper">
        <div class="container">
          <div class="row hidden-sm-down">
            <div class="col-md-1">.</div>
            <div class="col-md-1">.col-</div>
            <div class="col-md-1">.col-</div>
            <div class="col-md-1">.col-</div>
          </div>
        </div>
      </div> -->
    <section class="jackpot">
      <div class="jackpot-start">
        <div
          class="jackpot-start__content title-saper padding-elements-jackpot"
        >
          <h2>Джекпот</h2>
          <p>Больше ставь, больше побеждай!</p>

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
              @click="clickPlayButton"
            >
              Начать игру
            </button>
            <!-- <button class="btn-claim" v-if="winningAmount === 0">Забрать {{ winningAmount }} АР</button>
          <button class="btn-claim" @click="claimWinningAmount()" v-else>Забрать {{ winningAmount.toFixed(2) }} АР</button> -->
          </div>
        </div>
      </div>
      <!-- <div><h1>gfdgfd</h1></div>
      <div><h1>gfdgfd</h1></div>
       -->
      <div class="jackpot-game">
        <div class="bootstrap-wrapper">
          <div class="container">
            <div class="row">
              <div class="col-md-10">
                <div class="jackpot-loading-bar">
                  <div class="bank-container">
                    <div class="bank-info">
                      <div class="bank-value">3500</div>
                      <div class="bank-name">БАНК</div>
                    </div>
                    <div class="shield">
                      <img
                        src="@/assets/icons-header/diamond-ore-icon.png"
                        alt="Shield"
                      />
                    </div>
                  </div>

                  <div class="progress-bar">
                    <div
                      class="progress"
                      :style="{ width: progressBarWidth + '%' }"
                    >
                      <span class="progress-text">{{
                        remainingSeconds >= 0 ? remainingSeconds + " " : ""
                      }}</span>
                      <!-- remainingSeconds >= 0 ? remainingSeconds + " СЕК" : "" -->
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-2">
                <div class="jackpot-last-game-bar">
                  <div
                    class="bootstrap-wrapper jackpot-last-game-bar-container"
                  >
                    <div class="container">
                      <div class="row">
                        <div class="col-md-2">
                          <img
                            src="@/assets/icons-gamemodes/last-game-icon.svg"
                          />
                        </div>
                        <div
                          class="col-md-8 jackpot-last-game-bar-container-text"
                        >
                          <h2>Последняя игра</h2>
                        </div>
                        <div class="jackpot-player-info">
                          <div class="jackpot-player-avatar">
                            <img
                              src="https://avatar.spworlds.ru/face/55/Hepatir.png"
                              alt="Player Avatar"
                            />
                          </div>
                          <div class="jackpot-player-data">
                            <div class="jackpot-player-gems">
                              500
                              <span class="jackpot-gems-icon"
                                ><img
                                  src="@/assets/icons-games/saper-game/icon-diamond-ore-saper.png"
                              /></span>
                            </div>
                            <div class="jackpot-player-name">FUpir</div>
                          </div>
                        </div>
                        <div class="jackpot-player-chance">
                          ШАНС <span class="jackpot-chance-value">15.55%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-12">
                <div class="jackpot-carousel">
                  <div class="carousel-arrow">▲</div>
                  <Carousel
                    @slide-start="handleSlideStart"
                    ref="carousel"
                    :itemsToShow="10"
                    :autoplay="autoplay"
                    :transition="150"
                    :wrapAround="true"
                    class="no-pointer-events"
                  >
                    <Slide v-for="(slide, index) in slides" :key="index">
                      <div class="carousel__item">
                        <img :src="slide.img" alt="Голова" />
                      </div>
                    </Slide>
                  </Carousel>
                </div>
              </div>

              <div class="col-md-12">
                <div class="jackpot-useringame-list">
                  <div class="jackpot-carousel-user">
                    <div class="jackpot-banner">
                      <div class="jackpot-content">
                        <img
                          src="https://avatar.spworlds.ru/face/55/Hepatir.png"
                          alt="Player Avatar"
                          class="jackpot-avatar"
                        />
                        <div class="jackpot-info">
                          <span class="jackpot-name">FUpir</span>
                          <span class="jackpot-gems">500<span class="jackpot-gems-icon"
                            ><img class="jackpot-gems-icon-extension"
                              src="@/assets/icons-games/saper-game/icon-diamond-ore-saper.png"
                          /></span></span>
                        </div>
                      </div>
                      <div class="jackpot-chance">
                        ШАНС <span class="jackpot-percentage">15.55%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>



              
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- </div> -->
    <!-- </section> -->

    <!-- <div class="crash-content"> -->

    <!-- </div> -->
    <!-- <section class="jackpot">


  </section> -->
  </div>
</template>
<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
import AsideBarComponent from "@/components/AsidebarComponent.vue";
import ChatComponent from "@/components/ChatComponent.vue";
import { GetCookie } from "@/assets/js/storage/CookieStorage";
import { GetCurrentMoney } from "@/assets/js/rest/RestMethods";
import "@/assets/css/PagesStyles/games-pages/jackpot.css";
import "@/assets/css/global.css";
import JackpotNumbers from "@/mocks/JackpotNumbers";

import { ConnectToJackpotSocket } from "@/assets/js/jackpot/JackpotLogic.js";

import { Carousel, Slide } from "vue3-carousel";

import "vue3-carousel/dist/carousel.css";

import { eventBus } from "@/main";
export default {
  components: {
    HeaderComponent,
    AsideBarComponent,
    ChatComponent,
    Carousel,
    Slide,
    // Pagination
    // ProgressBar,
  },
  inject: ["eventBus"],
  data() {
    return {
      JackpotNumbers,
      autoplay: 0,
      // slides: [
      //   {
      //     img: "https://avatar.spworlds.ru/face/55/Hepatir.png",
      //     nickname: "Hepatir",
      //   },
      //   {
      //     img: "https://avatar.spworlds.ru/face/55/Hepatir.png",
      //     nickname: "Hepatir",
      //   },
      //   {
      //     img: "https://avatar.spworlds.ru/face/55/Ckutls_.png",
      //     nickname: "Ckutls_",
      //   },
      //   {
      //     img: "https://avatar.spworlds.ru/face/55/Ckutls_.png",
      //     nickname: "Ckutls_",
      //   },
      //   {
      //     img: "https://avatar.spworlds.ru/face/55/Ckutls_.png",
      //     nickname: "Ckutls_",
      //   },
      //   {
      //     img: "https://avatar.spworlds.ru/face/55/Hepatir.png",
      //     nickname: "Hepagfdtir",
      //   },
      //   {
      //     img: "https://avatar.spworlds.ru/face/55/Ckutls_.png",
      //     nickname: "Ckutls_",
      //   },
      //   {
      //     img: "https://avatar.spworlds.ru/face/55/Ckutls_.png",
      //     nickname: "Ckutls_",
      //   },
      //   {
      //     img: "https://avatar.spworlds.ru/face/55/Ckutls_.png",
      //     nickname: "Ckutls_",
      //   },
      //   {
      //     img: "https://avatar.spworlds.ru/face/55/Hepatir.png",
      //     nickname: "Hepgdfatir",
      //   },
      // ],
      slides: [],
      currentSlide: 0,
      value: 0,
      max: 100,
      amountDeposit: 0,
      targetNickname: "",
      isStopButtonPressed: false,
      isGameTimerStarted: false,
      remainingSeconds: 0,
      progressBarWidth: 0,
      idCurrentGame: "",
      lastUserWinerGameId: " ",
      lastUserWinner: "",
      // lastIdGame: "",
    };
  },

  methods: {
    mapPlayersToSlides(players) {
      this.slides = [];
      players.forEach((player) => {
        const numberOfCards = player.WinningPercentage / 10; // Предполагаем, что 10% это 1 карточка
        for (let i = 0; i < numberOfCards; i++) {
          if (i == 0) {
            this.slides.push({
              img: `https://avatar.spworlds.ru/face/55/${player.UserName}.png`, // Предполагаем структуру URL из имени пользователя
              nickname: player.UserName,
            });
          }
          this.slides.push({
            img: `https://avatar.spworlds.ru/face/55/${player.UserName}.png`, // Предполагаем структуру URL из имени пользователя
            nickname: player.UserName,
          });
        }
      });
    },
    checkGameEnd(endGameUtc) {
      const endTime = new Date(endGameUtc).getTime();
      const currentTime = new Date().getTime();
      const timeLeft = endTime - currentTime;

      if (timeLeft > 0) {
        // Устанавливаем таймер, который сработает, когда игра должна закончиться
        setTimeout(() => {
          eventBus.emit("gameEnded"); // Транслируем событие окончания игры
          console.log("Game has ended");
        }, timeLeft);
      } else {
        console.log("Game has already ended");
      }
    },
    resetLoadingBar() {
      const progressBarElement = document.querySelector(".progress");
      if (progressBarElement) {
        const progressText = progressBarElement.querySelector(".progress-text");
        setTimeout(() => {
          progressBarElement.style.width = `1%`; // Устанавливаем ширину в 1%
          if (progressText) {
            progressText.textContent = `0`; // Устанавливаем текст
            // Если вы хотите изменить прозрачность текста, раскомментируйте следующую строку
            // progressText.style.opacity = "1"; // Устанавливаем прозрачность текста
          }
        }, 1500);
      }
    },
    startAutoScroll() {
      this.interval = setInterval(() => {
        this.$refs.carousel.next();
      }, 1);
    },
    startGameTimer(startGameUtc) {
      if (!this.isGameTimerStarted) {
        this.isGameTimerStarted = true;

        const startTime = new Date(startGameUtc).getTime();
        const updateTimer = () => {
          if (this.timerInterval == null) {
            return;
          }
          const currentTime = new Date().getTime();
          const diff = startTime - currentTime;
          this.remainingSeconds = Math.max(0, Math.floor(diff / 1000));
          if (diff <= 0) {
            this.remainingSeconds = 0;
            this.progressBarWidth = 100; // Полный прогресс
            // Действия после окончания таймера, если необходимо
          } else {
            this.remainingSeconds = Math.floor(diff / 1000); // Обновляем оставшееся время в секундах
            const totalDuration = 10; // Допустим, обратный отсчет идет с 10 секунд1
            this.progressBarWidth =
              ((totalDuration - this.remainingSeconds) / totalDuration) * 100;
          }

          const progressBarElement = document.querySelector(".progress");
          if (progressBarElement) {
            const progressText =
              progressBarElement.querySelector(".progress-text");
            if (progressText) {
              progressText.style.opacity = "0";
              setTimeout(() => {
                progressBarElement.style.width = `${this.progressBarWidth}%`;
                if (this.remainingSeconds > 8) {
                  progressText.textContent = `${this.remainingSeconds}`;
                } else {
                  progressText.textContent = `${this.remainingSeconds} СЕК`;
                }
                progressText.style.opacity = "1";
              }, 500); // Задержка должна соответствовать продолжительности анимации
            }
          }
        };

        // Запускаем таймер
        this.timerInterval = setInterval(updateTimer, 1000);
        updateTimer(); // Вызываем сразу для инициализации
      }
    },
    handleSlideStart(data) {
      try {
        let { slidingToIndex, currentSlideIndex } = data;

        if (
          this.slides[slidingToIndex] &&
          this.slides[slidingToIndex].nickname
        ) {
          if (
            this.isStopButtonPressed &&
            this.idCurrentGame == this.lastUserWinerGameId
          ) {
            if (
              this.slides[currentSlideIndex].nickname == this.targetNickname
            ) {
              // this.$refs.carousel.slideTo(this.currentSlideIndex);

              // if (this.slides[this.currentSlideIndex].nickname == this.targetNickname) {

              this.stopAutoplay();
            }
          }
        }
      } catch (error) {
        console.error("Error in handleSlideStart:", error);
      }
    },
    stopCarousel() {
      this.isStopButtonPressed = true;
      this.autoplay = 200;
      setTimeout(() => {
        if (this.isStopButtonPressed) {
          this.autoplay = 500;
        }
      }, 1000);
    },
    stopAutoplay() {
      this.targetNickname = "";
      this.autoplay = 0;
      this.isGameTimerStarted = false;
      this.isStopButtonPressed = false;
      this.lastUserWinerGameId = " ";
      this.idCurrentGame = "";
      this.lastUserWinner = "";
      this.resetLoadingBar();

      clearInterval(this.timerInterval);

      this.timerInterval = null;
    },
    changeLastFiveImages() {
      const newImage = "https://avatar.spworlds.ru/face/55/Hepatir.png";
      console.log(this.slides);
      this.slides[9].img = newImage;
    },
    stopOnTarget(targetNickname) {
      if (this.slides[this.currentSlide].nickname === targetNickname) {
        this.autoplay = 0; // Остановить автопрокрутку
        return true; // Возвращаем true, если нашли нужный слайд
      }
      return false; // Возвращаем false, если нужный слайд не найден
    },
  },
  mounted() {
    ConnectToJackpotSocket();
    eventBus.on("jackpotGameTik", (data) => {
      try {
        if (data) {
          const dataObject = JSON.parse(data);
          console.log(dataObject);

          if (dataObject.CurrentGame.GameState == "WaitingForPlayers") {
            console.log("Waiting for players");
            console.log("Put there earlies cards");
            this.lastUserWinner = dataObject.LastGame.WinnerUserName;
            this.lastUserWinerGameId = dataObject.LastGame.Id;
            if (this.lastUserWinerGameId == this.idCurrentGame) {
              this.targetNickname = this.lastUserWinner;
              this.stopCarousel();
            }
            if (this.idCurrentGame == "") {
              this.mapPlayersToSlides(dataObject.CurrentGame.PlayerList);
            }
          }
          if (dataObject.CurrentGame.GameState == "StartGameTimer") {
            if (!this.isGameTimerStarted) {
              console.log("Set players");
              this.mapPlayersToSlides(dataObject.CurrentGame.PlayerList);
              this.idCurrentGame = dataObject.CurrentGame.Id;
            }
            this.startGameTimer(dataObject.CurrentGame.StartGameUtc);
          }

          if (dataObject.CurrentGame.GameState == "Running") {
            this.autoplay = 20;
          }
        } else {
          // Если данные не определены или пусты, выводим соответствующее сообщение в консоль
          console.log("Received undefined or null data");
        }
        // console.log(dataFromServer);
      } catch (error) {
        console.log(error);
      }
    });
    eventBus.on("gameEnded", () => {
      setTimeout(() => {
        if (!this.isStopButtonPressed) {
          // if (this.idCurrentGame == this.lastUserWinerGameId) {
          this.targetNickname = this.lastUserWinner;
          this.stopCarousel();
          // }
        }
      }, 1000);
    });
  },
  watch: {},
  async created() {
    if (GetCookie("AUTHTOKEN") && GetCookie("SearchToken")) {
      await GetCurrentMoney(
        GetCookie("AUTHTOKEN"),
        GetCookie("SearchToken")
      ).then((response) => {
        this.balance = response.currentMoney;
      });
    }
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
