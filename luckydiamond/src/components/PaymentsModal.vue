<template>
  <div class="payment-modal">
    <div class="payments-modal__content close-modal__icon text-styles__margin">
      <h1>{{ payments ? 'Пополнить' : 'Вывод' }}</h1>
      <img @click="closeModal" src="@/assets/icons-other/icon-payments-modal-close.svg">
    </div>
    <div v-if="payments" class="payments-modal__deposit">
      <div class="deposit-input deposit-text deposit-icon-diamond deposit-icon__input">
        <h3>Сумма пополнения</h3>
        <img src="@/assets/icons-games/saper-game/icon-diamond-ore-saper.png">
        <input type="number">
        <div class="deposit-btns">

        </div>
      </div>
    </div>
    <div v-else class="payments-modal__withdraw payments__input--color payments__margin payments__button">
      <div class="count-withdraw">
        <label>Введите сумму для снятия</label>
        <input v-model="amount" type="number">
      </div>
      <div class="number-card">
        <label>Введите номер карты</label>
        <input v-model="card" type="number">
      </div>
      <div class="payments-modal__content--btn">
        <button type="submit" @click="detectorMethod('with')">Подтвердить</button>
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
      amount: 1,
      card: 0,
    }
  },
  methods: {
    closeModal() {
      return this.$emit('closemodal')
    },
    detectorMethod(method) {
      this.closeModal()
      if (method === 'dep') {
        return this.$emit('deposit', this.amount)
      }
      else if (method === 'with') {
        return this.$emit('withdraw', this.amount, this.card)
      }
      else {
        console.log('Произошла ошибка при взаимодействие')
        return
      }
    }
  }
}
</script>