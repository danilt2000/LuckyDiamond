<template>
  <header class="header-mobile">
    <div class="header-mobile__content">
      <div class="header-mobile__logo">
        <img src="@/assets/icons-adaptive/home-adaptive/logo.svg" alt="LuckyDiamond Play Now">
      </div>
      <div class="header-mobile__end">
        <div class="header-mobile__balance">
          <div class="header-mobile__balance--content">
            <div class="header-mobile__card card-display card-text card-img">
              <h2><img src="@/assets/icons-adaptive/home-adaptive/icon-diamond-ore.png">{{ this.balance}}</h2>
            </div>
            <div class="header-mobile__btn--balance btn-card btn-card__margin">
              <a href="#" @click="$router.push({ name: 'profile' })"><img src="@/assets/icons-adaptive/home-adaptive/icon-wallet.svg"></a>
            </div>
          </div>
        </div>
        <div class="header-mobile__user-icon user-icon">
          <img :src="this.imageUrl">
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import '@/assets/css/ComponentsStyles/AdaptiveStyles/headermobile.css'
import { LogIn } from "@/assets/js/authentication/AuthService.js";
import { GetCurrentMoney } from "@/assets/js/rest/RestMethods.js";

import { eventBus } from "@/main";

import {
  SetCookie,
  GetCookie,
  DeleteAllCookie,
} from "@/assets/js/storage/CookieStorage.js";
export default {
  methods: {
    logout() {
      this.auth = false;
      this.balance = 0;
      this.authtoken = "";
      DeleteAllCookie();
    },
    updateBalanceMethod() {
      GetCurrentMoney(GetCookie("AUTHTOKEN"), GetCookie("SearchToken")).then(
        (response) => {
          this.balance = response.currentMoney;
        }
      );
      eventBus.emit("Updatebalance-saper");
    },
  },
  data() {
    return {
      balance: 0,
      auth: false,
      authtoken: "",
      imageUrl: "https://avatar.spworlds.ru/face/55/",
      userName: "",
    };
  },
  mounted() {
    eventBus.on("Updatebalance", () => {
      this.updateBalanceMethod();
    });
  },
  created() {
    try {
      let authCode = this.$route.query.code;

      if (authCode) {
        LogIn(authCode)
          .then((response) => {
            SetCookie("UserId", response.userId);
            SetCookie("SpUserName", response.spUserName);
            SetCookie("AUTHTOKEN", response.authtoken);
            SetCookie("SearchToken", response.searchToken);

            this.imageUrl = this.imageUrl + `${response.spUserName}.png`;
            this.userName = response.spUserName;
            this.auth = true;
            this.authtoken = response.authtoken;
            GetCurrentMoney(GetCookie("AUTHTOKEN"), GetCookie("SearchToken"))
              .then((response) => {
                this.balance = response.currentMoney;
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
              this.authtoken = GetCookie("AUTHTOKEN");
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
          })
          .catch((error) => {
            // Обработка ошибки
            console.error(error);
          });

        if (currentUserName) {
          this.imageUrl = this.imageUrl + `${currentUserName}.png`;
          this.userName = GetCookie("SpUserName");
          this.auth = true;
          this.authtoken = GetCookie("AUTHTOKEN");
        } else {
          this.auth = false;
          this.balance = 0;
        }
      }
    } catch (error) {
      console.error("Auth Code error:", error);
    }
  },
}
</script>

<style scoped>

</style>