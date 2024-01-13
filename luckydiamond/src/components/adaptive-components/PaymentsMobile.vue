<template>
  <div class="root-mobile">
    <div class="payments-modal-mobile text-style-mobile padding-elements__mobile">
      <h1>{{ payments.paymentsView ? 'Пополнить' : 'Вывод' }}</h1>
      <img
          src="@/assets/icons-other/icon-payments-modal-close.svg"
          class="icon-close__mobile"
          @click="closeModal()"
      >
    </div>
    <div class="payments-modal-mobile__content">
      <h2>Сумма {{ payments.paymentsView ? 'пополнения' : 'вывода' }}</h2>
      <div class="payments-modal__input">
        <input type="text">
        <div class="payments-modal__btns-mobile">
          <ul>
            <li v-for="number in PaymentsModalNumbers" :key="number">
              <button>{{ number.diamonds }}</button>
            </li>
          </ul>
        </div>
      </div>
      <div class="payments-modal__promocode" v-if="payments.paymentsView === true">
        <input type="text">
      </div>
      <div class="payments-modal__agree checkbox-styles">
        <input type="checkbox" v-model="agreeUser">
        <h3>Я согласен с пользовательским соглашением.</h3>
      </div>
      <captcha-component :showcaptcha="agreeUser"></captcha-component>
      <div class="payments-modal__submit">
        <p>Вы подтверждаете правильность введенных данных при создании вывода.</p>
        <button @click="closeModal()">{{ payments.paymentsView ? 'Пополнить' : 'Вывод' }}</button>
      </div>
    </div>
  </div>
</template>

<script>
import PaymentsModalNumbers from "@/mocks/PaymentsModalNumbers";
import CaptchaComponent from "@/components/CaptchaComponent.vue";

import '@/assets/css/ComponentsStyles/AdaptiveStyles/payments-modalmobile.css'

export default {
  components: { CaptchaComponent },
  props: [ 'payments' ],
  data() {
    return {
      PaymentsModalNumbers,
      agreeUser: false
    }
  },
  methods: {
    closeModal() {
      return this.$emit('closemodal')
    }
  }
}
</script>

<style>

</style>