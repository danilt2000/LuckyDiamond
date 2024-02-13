<template>
        <div class="content-grid--jackpot" >
  <aside-bar-component></aside-bar-component>

  <chat-component></chat-component>

  <header-component></header-component>
  <!-- <div class="grid-crash"> -->
  <!-- <div class="grid-crash">
    <h1>Test</h1>
  </div> -->
        </div>
</template>
<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
import AsideBarComponent from "@/components/AsidebarComponent.vue";
import ChatComponent from "@/components/ChatComponent.vue";
import {GetCookie} from "@/assets/js/storage/CookieStorage";
import {GetCurrentMoney} from "@/assets/js/rest/RestMethods";


// import '@/assets/css/PagesStyles/games-pages/jackpot.css'
export default {
  components: { HeaderComponent, AsideBarComponent, ChatComponent },
  data() {
    return {
      //   SaperNumbers,
      //   clickedBtn: null,
      //   ErrorClick: false,
      //   ErrorJoin: false,
      //   balance: 0,
      //   amountDeposit: 0,
      //   crashObject: '',
      //   textError: '',
      //   startGame: false,
      //   offBtn: false
    };
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
