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
            <div
              class="card__user"
              :class="{
                'mention-message': isCurrentUser(msg),
                'system-message': msg.username === '🛠️ System',
              }"
            >
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
    <!-- <div class="chat__mute-button">
      <button @click="muteChat">Mute</button>
    </div> -->
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
      return msg.msg.includes(GetCookie("SpUserName"));
    },
    ClaimDatamsg(msg) {
  const now = Date.now();
  if (!this.lastMsgTime || now - this.lastMsgTime >= 1000) {
    const processedMsg = this.processMessage(msg[0]);

    SendMessageToChat(processedMsg);
    this.lastMsgTime = now;
  } else {
    alert("Вы не можете отправлять сообщения так часто");
  }
},
processMessage(message) {
  const maxLength = 5; // Тут макс допустимых символов писать
  const processedMessage = [];
  let currentSymbol = "";
  let count = 0;

  for (let i = 0; i < message.length; i++) {
    if (message[i] === currentSymbol) {
      count++;
    } else {
      currentSymbol = message[i];
      count = 1;
    }

    if (count <= maxLength) {
      processedMessage.push(message[i]);
    }
  }

  return processedMessage.join("");
},
    muteChat() {
      // Mute the chat by disabling the event listener for incoming messages.
      this.eventBus.$off("dataChat");
    },
  },
  mounted() {
    eventBus.on("dataChat", (dataFromServer) => {
      try {
        const dataObject = JSON.parse(dataFromServer);

        let imageUrl =
          "https://avatars.spworlds.ru/face/" + dataObject.SpUserName+"?w=55"

        const MsgUser = {
          id: this.id + 1,
          msg: dataObject.Message,
          username: dataObject.SpUserName,
          icon: imageUrl,
        };

        if (MsgUser.username === "🛠️ System") {
          MsgUser.icon = "https://avatars.spworlds.ru/face/CONSOLE?w=55";
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
        let imageUrl =
          "https://avatars.spworlds.ru/face/" + element.userName + "?w=55";

        const processedMsg = this.processMessage(element.message); // Process the message

        const MsgUser = {
          id: this.id + 1,
          msg: processedMsg, // Use the processed message
          username: element.userName,
          icon: imageUrl,
        };

        if (MsgUser.username === "🛠️ System") {
          MsgUser.icon = "https://avatars.spworlds.ru/face/CONSOLE?w=55";
        }

        this.array.push(MsgUser);
      });
      this.ScrollToBottom();
    }
  });
},
processMessage(message) {
  const maxLength = 5; // Тут макс допустимых символов писать
  const processedMessage = [];
  let currentSymbol = "";
  let count = 0;

  for (let i = 0; i < message.length; i++) {
    if (message[i] === currentSymbol) {
      count++;
    } else {
      currentSymbol = message[i];
      count = 1;
    }

    if (count <= maxLength) {
      processedMessage.push(message[i]);
    }
  }

  return processedMessage.join("");
},
};
</script>

<style scoped>
</style>
