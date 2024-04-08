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
    <div class="payments-modal-mobile__content margin-mobile___payments">
      <h2>Сумма {{ payments.paymentsView ? 'пополнения' : 'вывода' }}</h2>
      <div class="payments-modal__input input-style__mobile img-style">
        <img src="@/assets/icons-games/saper-game/icon-diamond-ore-saper.png">
        <input type="number" v-model="number" class="input-mobile__number">
        <div class="payments-modal__btns-mobile">
          <ul class="button-style__mobile">
            <li v-for="number in PaymentsModalNumbers" :key="number">
              <button>{{ number.diamonds }}</button>
            </li>
          </ul>
        </div>
      </div>
      <div class="payments-modal__promocode input-style__mobile" v-if="payments.paymentsView === true">
        <input type="text" placeholder="Введите промокод">
      </div>
      <div class="payments-modal__agree checkbox-styles">
        <input v-if="!payments.paymentsView" type="checkbox" v-model="agreeUser">
        <input v-else type="checkbox">
        <h3>Я согласен с пользовательским соглашением.</h3>
      </div>
      <captcha-component class="captcha-mobile" :showcaptcha="agreeUser"></captcha-component>
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
      agreeUser: false,
      number: 0
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