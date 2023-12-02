<script>
import "@/assets/css/ComponentsStyles/header.css";
// import { GetAuthCodeFromCurrentPath } from '@/assets/js/authentication/LoggingMiddleware.js';
import { LogIn } from "@/assets/js/authentication/AuthService.js";
// import { GetCurrentMoney } from "@/assets/js/rest/RestMethods.js";
import {
  SetCookie,
  GetCookie,
  DeleteAllCookie,
} from "@/assets/js/storage/CookieStorage.js";

export default {
  name: "Header-Element-page",
  methods: {
    logout() {
      this.auth = false;
      DeleteAllCookie();
    },
  },
  data() {
    return {
      balance: 0,
      auth: false,
      imageUrl: "https://visage.surgeplay.com/face/55/",
      userName: "",
    };
  },
  created() {
    try {
      let authCode = this.$route.query.code;

      if (authCode) {
        LogIn(authCode)
          .then((response) => {
            console.log("Auth Data:", response);
            SetCookie("UserId", response.userId);
            SetCookie("SpUserName", response.spUserName);
            SetCookie("AUTHTOKEN", response.authtoken);
            SetCookie("SearchToken", response.searchToken);

            this.imageUrl = this.imageUrl + `${response.spUserName}.png`;
            this.userName = response.spUserName;
            this.auth = true;
          })
          .catch((error) => {
            console.error("Auth Code error:", error);
          });
      } else {
        let currentUserName = GetCookie("SpUserName");

        // let currentMoney = GetCurrentMoney(
        //   "2405bf72008f835c9f5b336a84d3efbd7a742b828ca41fcaab1c40ca842e6425"
        // );
        // let currentMoney = GetCurrentMoney(GetCookie("AuthToken"));

        if (currentUserName) {
          this.imageUrl = this.imageUrl + `${currentUserName}.png`;
          this.auth = true;
          // this.balance = currentMoney;
        } else {
          this.auth = false;
        }
      }
    } catch (error) {
      console.error("Auth Code error:", error);
    }
  },
};
</script>
<template>
  <header class="header">
    <div class="header__content">
      <div class="header__logo">
        <img src="../assets/logo.svg" alt="" />
      </div>
      <div class="header__nav">
        <nav>
          <a href="#" class="header__nav--now">Главная</a>
          <a href="#">Профиль</a>
          <a href="#">Помощь</a>
        </nav>
      </div>
      <div class="header__balance">
        <div class="header__content--balance">
          <div class="header__card--balance">
            <h2>
              <img src="../assets/icons-header/diamond-ore-icon.png" />{{
                balance
              }}
            </h2>
          </div>
          <div class="header__btn--wallet">
            <a href="">кошелёк</a>
          </div>
        </div>
      </div>
      <div class="header__auth--discord">
        <div v-if="auth" class="header__card--discord">
          <div class="discord__card--name">
            <h2>{{ userName }}</h2>
            <a href="#" @click="logout"
              >Выход<span
                ><img src="../assets/icons-header/exit-icon.png" /></span
            ></a>
          </div>
          <img :src="imageUrl" alt="test-ico" />
          <!-- <img src="../assets/icons-test/person-icon.svg" alt="test-ico"> -->
        </div>
        <div v-else class="header__card--auth">
          <!-- <div class="header__card--auth">  -->
          <div class="auth__card--content">
            <a
              href="https://discord.com/api/oauth2/authorize?client_id=1148644854797176932&redirect_uri=https%3A%2F%2Flucky-diamond.vercel.app&response_type=code&scope=identify"
              @click="auth = true"
              ><span
                ><img
                  width="30"
                  height="30"
                  src="../assets/icons-header/discord-icon.svg" /></span
              >Вход</a
            >
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
</style>