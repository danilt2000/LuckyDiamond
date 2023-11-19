<template>
  <aside class="chat">
    <div class="chat__content">
      <div class="chat__container--title">
        <div class="chat__title">
          <h2>Чат</h2>
        </div>
        <div class="chat__icon">
          <img src="@/assets/icons-chat/chat-icon.png">
        </div>
      </div>
    </div>
    <div class="chat__content--users" @dataclaim="ClaimDatamsg">
      <ul>
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
      </ul>
    </div>
    <writechat-component></writechat-component>
  </aside>
</template>

<script>
import '@/assets/css/ElementsStyles/chat.css'
import ChatHistory from "@/mocks/ChatHistory";
import WritechatComponent from "@/components/WritechatComponent.vue";

export default {
  components: { WritechatComponent },
  data() {
    return {
      array: ChatHistory
    }
  },
  methods: {
    ClaimDatamsg() {
      this.array = ChatHistory
    }
  }
}
</script>

<style scoped>

</style>