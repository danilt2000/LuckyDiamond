<template>
  <div class="write">
    <div class="write__content">
      <input type="text" v-model.trim="msg" placeholder="Напишите сообщение...">
      <button
          :disabled="CheckerforBtn()"
          type="submit"
          @click="SendmsgData"
      >
        <img src="@/assets/icons-chat/sendmsg-icon.png">
      </button>
    </div>
  </div>
</template>

<script>
import ChatHistory from "@/mocks/ChatHistory";

export default {
  data() {
    return {
      msg: '',
      username: 'TEST USER',
      icon: '@/assets/icon-test/person-icon-chat.png'
    }
  },
  methods: {
    CheckerforBtn() {
      return this.msg === ''
    },
    SendmsgData() {
      const object = {
        msg: this.msg,
        username: this.username,
        icon: this.icon
      }

      ChatHistory.push(object)
      console.log(ChatHistory)

      this.msg = ''

      return this.$emit('dataclaim')
    }
  }
}
</script>

<style>

</style>