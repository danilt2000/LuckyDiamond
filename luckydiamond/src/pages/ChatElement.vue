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
      <div class="card__user">
        <div class="user__icon">
          <img src="@/assets/icons-test/person-icon-chat.png">
        </div>
        <div class="content">
          <h1>User Name</h1>
          <p>msg content</p>
        </div>
      </div>
      <div class="card__user">
        <div class="user__icon">
          <img src="@/assets/icons-test/person-icon-chat.png">
        </div>
        <div class="content">
          <h1>User Name</h1>
          <p>msg content</p>
        </div>
      </div>
      <div class="card__user">
        <div class="user__icon">
          <img src="@/assets/icons-test/person-icon-chat.png">
        </div>
        <div class="content">
          <h1>User Name</h1>
          <p>msg content</p>
        </div>
      </div>
      <div class="card__user">
        <div class="user__icon">
          <img src="@/assets/icons-test/person-icon-chat.png">
        </div>
        <div class="content">
          <h1>User Name</h1>
          <p>msg content</p>
        </div>
      </div>
      <div class="card__user">
        <div class="user__icon">
          <img src="@/assets/icons-test/person-icon-chat.png">
        </div>
        <div class="content">
          <h1>User Name</h1>
          <p>msg content</p>
        </div>
      </div>
      <div class="card__user">
        <div class="user__icon">
          <img src="@/assets/icons-test/person-icon-chat.png">
        </div>
        <div class="content">
          <h1>User Name</h1>
          <p>msg content</p>
        </div>
      </div>
      <div class="card__user">
        <div class="user__icon">
          <img src="@/assets/icons-test/person-icon-chat.png">
        </div>
        <div class="content">
          <h1>User Name</h1>
          <p>msg content</p>
        </div>
      </div>
      <div class="card__user">
        <div class="user__icon">
          <img src="@/assets/icons-test/person-icon-chat.png">
        </div>
        <div class="content">
          <h1>User Name</h1>
          <p>msg content</p>
        </div>
      </div>
      <div class="card__user">
        <div class="user__icon">
          <img src="@/assets/icons-test/person-icon-chat.png">
        </div>
        <div class="content">
          <h1>User Name</h1>
          <p>msg content</p>
        </div>
      </div>
    </div>
    <writechat-component></writechat-component>
  </aside>
</template>

<script>
import '@/assets/css/ElementsStyles/chat.css'
import WritechatComponent from "@/components/WritechatComponent.vue";

export default {
  components: { WritechatComponent }
}
</script>

<style scoped>

</style>