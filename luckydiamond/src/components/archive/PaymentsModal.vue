<template>
  <div class="payment-modal">
    <div class="payments-modal__content">
      <h1>{{ payments ? 'Пополнить' : 'Вывод' }}</h1>
      <button @click="closeModal">X</button>
    </div>
    <div v-if="payments" class="payments-modal__deposit payments__input--color payments__margin payments__button">
      <label>Введите сумму пополнения</label>
      <input type="number">
      <div class="payments-modal__content--btn">
        <button type="submit">Подтвердить</button>
      </div>
    </div>
    <div v-else class="payments-modal__withdraw payments__input--color payments__margin payments__button">
      <div class="count-withdraw">
        <label>Введите сумму для снятия</label>
        <input type="number">
      </div>
      <div class="number-card">
        <label>Введите номер карты</label>
        <input type="number">
      </div>
      <div class="payments-modal__content--btn">
        <button type="submit">Подтвердить</button>
      </div>
    </div>
  </div>
</template>

<script>
import '@/assets/css/ComponentsStyles/payments-modal.css'

export default {
  props: [
      'payments'
  ],
  data() {
    return {
    }
  },
  methods: {
    closeModal() {
      return this.$emit('closemodal')
    }
  }
}
</script>