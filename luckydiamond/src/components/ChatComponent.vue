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
          <li
              v-for="msg in array"
              :key="msg"
          >
            <div class="card__user">
              <div class="user__icon">
                <img :src="msg.icon">
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
import '@/assets/css/ComponentsStyles/chat.css'

import WritechatComponent from "@/components/WritechatComponent.vue";
import { SendMessageToChat } from "@/assets/js/chat/ChatLogic.js";
import {eventBus} from "@/main";

export default {
  components: { WritechatComponent },
  inject: [ 'eventBus' ],
  data() {
    return {
      array: [],
      id: 0,
    }
  },
  methods: {
    ClaimDatamsg(msg) {

      SendMessageToChat(msg[0]);

      // if(this.array.length > 7) {
      //   this.array.shift()
      // }
    }
  },
  mounted() {
    eventBus.on('dataChat', (dataFromServer) => {
      try {
      // Attempt to parse the JSON string
      const dataObject = JSON.parse(dataFromServer);
      let imageUrl = "https://avatar.spworlds.ru/face/55/" + dataObject.SpUserName;

      const MsgUser = {
        id: this.id + 1,
        msg: dataObject.Message,
        username: dataObject.SpUserName,
        icon: imageUrl
      };

      this.array.push(MsgUser);
    } catch (error) {
      console.error('Error parsing JSON data:', error);
    }
    })
  }
}
</script>

<style scoped>

</style>