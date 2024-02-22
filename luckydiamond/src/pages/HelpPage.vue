<template>
  <div class="content-grid--help">
    <aside-bar-component></aside-bar-component>

    <develop-component></develop-component>
    <header-component></header-component>

    <chat-component></chat-component>

    <section class="help">
      <div class="box_help">
        <div class="Heading_p1">
        <div class="heding2"><h3>Заголовок</h3></div>
        <div class="heding2_text">
        <p><b>Какойто текстКакойто текстКакойто
           текстКакойто текстКакойто текстКакойто
            текстКакойто текстКакойто текстКакойто 
            текстКакойто текстКакойто текстКакойто 
            текстКакойто текстКакойто текстКакойто 
            текстКакойто текстКакойто текстКакойто 
            текстКакойто текстКакойто текстКакойто 
            текстКакойто текстКакойто текстКакойто 
            текстКакойто текстКакойто текстКакойто 
            текст(Нашли баг? Eсть свежие идеи? - 
            Вам в наш <a href="" >дискорд)</a></b></p>
          </div>
        </div>
          <div class="Heading_p1">
            <div class="heding2"><h3>Заголовок</h3></div>
            <div class="heding2_text">
            <p><b>Какойто текстКакойто текстКакойто
               текстКакойто текстКакойто текстКакойто
                текстКакойто текстКакойто текстКакойто 
                текстКакойто текстКакойто текстКакойто 
                текстКакойто текстКакойто текстКакойто 
                текстКакойто текстКакойто текстКакойто 
                текстКакойто текстКакойто текстКакойто 
                текстКакойто текстКакойто текстКакойто 
                текстКакойто текстКакойто текстКакойто 
                текст(Нашли баг? Eсть свежие идеи? - 
                Вам в наш <a href="" >дискорд)</a></b></p>
              </div>
            </div>
              <div class="questions">
                <div class="questions_box">
                <h3>Частые вопросы:</h3>
              </div>
                <div class="questions1">
                  <b>Вилкой в глаз, или маму твою ебал?</b>
                  <img src="@\assets\icons-test\lest.png" alt="">
                </div>
                <div class="text_questions">
                 <p><b>Какойто текст Какойто текстКакойто текстКакойто текстКакойто
                   текстКакойто текстКакойто текстКакойто текстКакойто текстКакойто
                    текстКакойто текстКакойто текстКакойто текстКакойто текстКакойто 
                    текстКакойто текстКакойто текстКакойто текстКакойто текстКакойто 
                    текстКакойто текстКакойто текстКакойто текстКакойто текстКакойто 
                    текстКакойто текстКакойто текст</b></p> 
                </div>
                <div class="questions2">
                  <b>Вилкой в глаз, или маму твою ебал?</b>
                  <img src="@\assets\icons-test\lest.png" alt="">
                </div>
                <div class="Social1where">
                  <div class="Social1text">
                    Наши соц-сети:
                  </div>
                  <div class="Social1icons">
                    <a href="https://t.me/Ykropmaha" target="_blank" ><img src="@/assets/icons-developcard/telegram.png" alt=""></a>
                    <a href="https://discordapp.com/users/1126752682183503942" target="_blank" ><img src="@/assets/icons-developcard/discord.png" alt=""></a>
                  </div>
                </div>

              </div>
      </div>
    </section>
  </div>
</template>
  <script>
// import HelpComponent from "@/components/HelpComponent.vue";
import AsideBarComponent from "@/components/AsidebarComponent.vue";
import HeaderComponent from "@/components/HeaderComponent.vue";
import ChatComponent from "@/components/ChatComponent.vue";
import '@/assets/css/ComponentsStyles/Help.css'

export default {
  data() {
    return {
      Object: {
        bg: "value",
        nickname: "value",
        icons: {},
        textTacholgy: { text1: "text2" },
      },
      name: 'HelpPage',
    components: {
      // HelpComponent
    }
    };
    
  },
  components: {
    HeaderComponent,
    AsideBarComponent,
    // HelpComponent,
    ChatComponent,
  },
  
};
</script>