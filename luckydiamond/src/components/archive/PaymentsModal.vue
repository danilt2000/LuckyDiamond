<template>
  <div class="payment-modal" :class="{ 'deposit-modal': payments, 'withdraw-modal': !payments }">
    <div class="payments-modal__content">
      <h1>{{ payments ? 'Вывод' : 'Пополнить' }}</h1>
      <button @click="closeModal">X</button>
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