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
        <input v-model="amount" type="number">
        <div class="deposit-btns">
          <ul class="display-btns btns-style-diamonds">
            <li v-for="number in PaymentsModalNumbers" :key="number">
              <button>{{ number.diamonds }}</button>
            </li>
          </ul>
        </div>
        <div class="deposit-promocode deposit-promocode__padding--input">
          <h3>Промокод</h3>
          <input type="text">
        </div>
        <div class="btn-deposit btn-style-payments">
          <button type="submit" @click="detectorMethod('dep')">Пополнить</button>
        </div>
      </div>
    </div>
    <div v-else class="payments-modal__withdraw deposit-text withdraw-input">
      <div class="count-withdraw deposit-icon-diamond">
        <h3>Сумма вывода</h3>
        <img src="@/assets/icons-games/saper-game/icon-diamond-ore-saper.png">
        <input v-model="amount" type="number">
      </div>
      <div class="number-card deposit-promocode__padding--input">
        <h3>Введите номер карты</h3>
        <input v-model="card" type="number">
      </div>
      <div class="btn-withdraw btn-style-payments">
        <button type="submit" @click="detectorMethod('with')">Вывод</button>
      </div>
    </div>
  </div>
</template>

<script>
import '@/assets/css/ComponentsStyles/payments-modal.css'
import PaymentsModalNumbers from "@/mocks/PaymentsModalNumbers";

export default {
  props: [
      'payments'
  ],
  data() {
    return {
      amount: 1,
      card: 0,
      PaymentsModalNumbers
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