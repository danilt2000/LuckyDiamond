<template>
  <div class="write">
    <div class="write__content">
      <input type="text" @keyup.enter="sendmsgDataEnter" v-model.trim="msg" placeholder="Напишите сообщение..." maxlength="100">
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

export default {
  data() {
    return {
      msg: '',
      username: 'TEST USER',
      icon: require('../assets/icons-test/person-icon-chat.png'),
    }
  },
  methods: {
    CheckerforBtn() {
      return this.msg === ''
    },
    sendmsgDataEnter() {
      if (this.msg !== '') {
        this.SendmsgData()
      }
    },
    SendmsgData() {
      this.$emit('send', [this.msg, this.username, this.icon])
      this.msg = ''
    }
  }
}
</script>

<style>

</style>