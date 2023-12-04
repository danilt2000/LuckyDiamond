
<script>
import "@/assets/css/ComponentsStyles/header.css";
// import { GetAuthCodeFromCurrentPath } from '@/assets/js/authentication/LoggingMiddleware.js';
import { LogIn } from "@/assets/js/authentication/AuthService.js";
import { GetCurrentMoney } from "@/assets/js/rest/RestMethods.js";
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
      this.balance = 0;
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
            GetCurrentMoney(GetCookie("AUTHTOKEN"), GetCookie("SearchToken"))
              .then((response) => {
                this.balance = response.currentMoney;
                console.log(response);
              })
              .catch((error) => {
                console.error(error);
              });
          })
          .catch(() => {
            let currentUserName = GetCookie("SpUserName");
            GetCurrentMoney(GetCookie("AUTHTOKEN"), GetCookie("SearchToken"))
              .then((response) => {
                this.balance = response.currentMoney;
                console.log(response);
              })
              .catch((error) => {
                console.error(error);
              });

            if (currentUserName) {
              this.imageUrl = this.imageUrl + `${currentUserName}.png`;
              this.userName = GetCookie("SpUserName");
              this.auth = true;
            } else {
              this.auth = false;
              this.balance = 0;
            }
          });
      } else {
        let currentUserName = GetCookie("SpUserName");
        GetCurrentMoney(GetCookie("AUTHTOKEN"), GetCookie("SearchToken"))
          .then((response) => {
            this.balance = response.currentMoney;
            console.log(response);
          })
          .catch((error) => {
            // Обработка ошибки
            console.error(error);
          });

        if (currentUserName) {
          this.imageUrl = this.imageUrl + `${currentUserName}.png`;
          this.userName = GetCookie("SpUserName");
          this.auth = true;
        } else {
          this.auth = false;
          this.balance = 0;
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
          <a href="#" @click="$router.push({ name: 'home' })" :class="{ 'header__nav--now' : $route.name === 'home' }">Главная</a>
          <a href="#" @click="$router.push({ name: 'profile' })" :class="{ 'header__nav--now' : $route.name === 'profile' }">Профиль</a>
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