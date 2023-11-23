<template>
  <div class="write">
    <div class="write__content">
      <input type="text" v-model.trim="msg" placeholder="Напишите сообщение..." maxlength="22">
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
    SendmsgData() {
      this.$emit('send', [this.msg, this.username, this.icon])
      this.msg = ''
    }
  }
}
</script>

<style>

</style>