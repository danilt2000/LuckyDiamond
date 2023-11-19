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
    <div class="chat__content--users">
      <ul>
        <transition-group name="fade" mode="out-in">
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
import '@/assets/css/ElementsStyles/chat.css'
import WritechatComponent from "@/components/WritechatComponent.vue";

export default {
  components: { WritechatComponent },
  data() {
    return {
      array: [],
      id: 0,
    }
  },
  methods: {
    ClaimDatamsg(msg) {
      const MsgUser = {
        id: this.id + 1,
        msg: msg[0],
        username: msg[1],
        icon: msg[2]
      }

      this.array.push(MsgUser)

      if(this.array.length > 7) {
        this.array.shift()
      }
    }
  }
}
</script>

<style scoped>

</style>