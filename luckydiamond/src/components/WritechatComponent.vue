<template>
  <div class="write">
    <div class="write__content">
      <input
        type="text"
        @keyup.enter="sendmsgDataEnter"
        v-model.trim="msg"
        placeholder="Напишите сообщение..."
        maxlength="200"
      />
      <button :disabled="CheckerforBtn()" type="submit" @click="SendmsgData">
        <img src="@/assets/icons-chat/sendmsg-icon.png" />
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "",
      username: "TEST USER",
      icon: require("../assets/icons-test/person-icon-chat.png"),
    };
  },
  methods: {
    CheckerforBtn() {
      return this.msg === "";
    },
    sendmsgDataEnter() {
      if (this.msg !== "") {
        this.SendmsgData();
      }
    },
    SendmsgData() {
      const formattedWord = this.InsertSpaceEvery24Chars(this.msg);
      this.$emit("send", [formattedWord, this.username, this.icon]);
      this.msg = "";
    },
    
    InsertSpaceEvery24Chars(word) {
      let result = "";
      for (let i = 0; i < word.length; i += 24) {
        result += word.substring(i, i + 24) + " ";
      }
      return result.trim();
    },
  },
};
</script>

<style>
</style>