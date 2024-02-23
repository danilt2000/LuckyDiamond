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
                    <div class="progress" style="width: 70%">15.00 СЕК</div>
                  </div>
                </div>
                
              </div>
              <div class="col-md-2">
                <div class="jackpot-loading-bar"></div>
              </div>

              <div class="col-md-12">
                <div class="jackpot-carousel">
                  <div class="carousel-arrow">▲</div>
                  <Carousel
                    ref="carousel"
                    :itemsToShow="15"
                    :wrapAround="true"
                    :transition="400"
                    class="no-pointer-events"
                  >
                    <Slide v-for="slide in 10" :key="slide">
                      <div class="carousel__item">
                        <img
                          src="https://avatar.spworlds.ru/face/55/Hepatir.png"
                          alt="Голова"
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

import { Carousel, Slide } from "vue3-carousel";

import "vue3-carousel/dist/carousel.css";

// import ProgressBar from "vue-bulma-progress-bar";

// import '@/assets/css/PagesStyles/games-pages/jackpot.css'
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
  data() {
    return {
      JackpotNumbers,
      //   clickedBtn: null,
      //   ErrorClick: false,
      //   ErrorJoin: false,
      //   balance: 0,
      value: 0,
      max: 100,
      amountDeposit: 0,

      //   crashObject: '',
      //   textError: '',
      //   startGame: false,
      //   offBtn: false
    };
  },
  methods: {
    startAutoScroll() {
      this.interval = setInterval(() => {
        this.$refs.carousel.next();
      }, 1);
    },
  },
  mounted() {
    this.startAutoScroll();
  },
  watch: {
    amountDeposit(DepositCount) {
      if (![1, 5, 10, 50, 100, parseInt(this.balance)].includes(DepositCount)) {
        this.clickedBtn = null;
      } else {
        let index;
        switch (DepositCount) {
          case 1:
            if (parseInt(this.balance) === DepositCount) {
              index = 5;
            } else {
              index = 0;
            }
            break;
          case 5:
            if (parseInt(this.balance) === DepositCount) {
              index = 5;
            } else {
              index = 1;
            }
            break;
          case 10:
            if (parseInt(this.balance) === DepositCount) {
              index = 5;
            } else {
              index = 2;
            }
            break;
          case 50:
            if (parseInt(this.balance) === DepositCount) {
              index = 5;
            } else {
              index = 3;
            }
            break;
          case 100:
            if (parseInt(this.balance) === DepositCount) {
              index = 5;
            } else {
              index = 4;
            }
            break;
          case parseInt(this.balance):
            index = 5;
            break;
        }

        this.clickedBtnChoice(index, DepositCount);
      }
    },
  },
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
