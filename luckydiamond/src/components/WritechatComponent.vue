<template>
  <div class="write">
    <div class="write__content">
      <!-- <input
        type="text"
        @keyup.enter="sendmsgDataEnter"
        v-model.trim="msg"
        placeholder="Напишите сообщение..."
        maxlength="200"
      /> -->

      <textarea
        @keyup.enter="sendmsgDataEnter"
        v-model.trim="msg"
        placeholder="Напишите сообщение..."
        maxlength="200"
        rows="3"
      ></textarea>
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

    InsertSpaceEvery24Chars(text) {
      let result = "";
      for (let i = 0; i < text.length; i++) {
        if (i > 0 && i % 24 === 0) {
          result += " ";
        }
        result += text[i];
      }
      return result;
    },
  },
};
</script>

<style>
</style>