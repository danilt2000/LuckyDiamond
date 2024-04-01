<template>
    <div class="payment-modal withdraw-modal">
      <div class="payments-modal__content close-modal__icon text-styles__margin">
        <h1>Рефералы</h1>
        <img @click="closeModal" src="@/assets/icons-other/icon-payments-modal-close.svg" />
      </div>
      <div v-if="payments" class="payments-modal__deposit">
      </div>
      <div v-else class="payments-modal__withdraw deposit-text withdraw-input">
        <div class="btn-withdraw btn-text-style btn-display-deposit btn-style-payments">
          <h1>В РАЗРАБОТКЕ</h1>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import "@/assets/css/ComponentsStyles/payments-modal.css";
  export default {
    props: ["payments"],
    methods: {
      closeModal() {
        return this.$emit("closemodal");
      },
    },
  };
  </script>
  