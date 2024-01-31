<template>
  <aside class="chat">
    <div class="chat__content">
      <div class="chat__container--title">
        <div class="chat__title">
          <h2>Чат</h2>
        </div>
      </div>
    </div>
    <div class="chat__content--users">
      <ul>
        <transition-group name="fade">
          <li v-for="msg in array" :key="msg">
            <div class="card__user" :class="{ 'mention-message': isCurrentUser(msg), 'system-message' : msg.username === '🛠️ System' }">
              <div class="user__icon">
                <img :src="msg.icon" />
              </div>
              <div class="content">
                <h1>{{ msg.username }}</h1>
                <p>{{ msg.msg }}</p>
              </div>
            </div>
          </li>
        </transition-group>
      </ul>
    </div>
    <writechat-component @send="ClaimDatamsg"></writechat-component>
  </aside>
</template>

<script>
import "@/assets/css/ComponentsStyles/chat.css";
import { GetChatHistory } from "@/assets/js/rest/RestMethods.js";
import { GetCookie } from "@/assets/js/storage/CookieStorage";

import WritechatComponent from "@/components/WritechatComponent.vue";
import { SendMessageToChat } from "@/assets/js/chat/ChatLogic.js";
import { eventBus } from "@/main";

export default {
  components: { WritechatComponent },
  inject: ["eventBus"],
  data() {
    return {
      array: [],
      id: 0,
      lastMsgTime: null,
    };
  },
  methods: {
    ScrollToBottom() {
      this.$nextTick(() => {
        const chatContent = this.$el.querySelector(".chat__content--users");
        chatContent.scrollTop = chatContent.scrollHeight;
      });
    },
    isCurrentUser(msg) {
      return msg.msg.includes(GetCookie('SpUserName'))
    },
    ClaimDatamsg(msg) {
      const now = Date.now();
      if (!this.lastMsgTime || now - this.lastMsgTime >= 2000) {
        SendMessageToChat(msg[0]);
        this.lastMsgTime = now;
      } else {
        alert("Вы не можете отправлять сообщения чаще, чем раз в 2 секунды.");
      }
    },
  },
  mounted() {
    eventBus.on("dataChat", (dataFromServer) => {
      try {
        const dataObject = JSON.parse(dataFromServer);
        let imageUrl =
          "https://avatar.spworlds.ru/face/55/" + dataObject.SpUserName;

        const MsgUser = {
          id: this.id + 1,
          msg: dataObject.Message,
          username: dataObject.SpUserName,
          icon: imageUrl,
        };

        if (MsgUser.username === '🛠️ System') {
          MsgUser.icon = 'https://avatar.spworlds.ru/face/55/CONSOLE'
        }

        this.array.push(MsgUser);

        this.ScrollToBottom();
      } catch (error) {
        console.error("Error parsing JSON data:", error);
      }
    });
  },
  created() {
    GetChatHistory().then((response) => {
      if (response && response.length) {
        response.forEach((element) => {
          let imageUrl = "https://avatar.spworlds.ru/face/55/" + element.userName;

          const MsgUser = {
            id: this.id + 1,
            msg: element.message,
            username: element.userName,
            icon: imageUrl,
          };

          if (MsgUser.username === '🛠️ System') {
            MsgUser.icon = 'https://avatar.spworlds.ru/face/55/CONSOLE'
          }

          this.array.push(MsgUser);
        });
        this.ScrollToBottom();
      }
    });
  },
};
</script>

<style scoped>
</style>