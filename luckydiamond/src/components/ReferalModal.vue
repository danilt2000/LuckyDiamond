<template>
    <div class="payment-modal withdraw-modal">
      <div class="payments-modal__content close-modal__icon text-styles__margin">
        <h1>Рефералы</h1>
        <img @click="closeModal" src="@/assets/icons-other/icon-payments-modal-close.svg" />
      </div>
      <div class="payments-modal__deposit">
        <div class="error-deposit" v-if="errorDeposit">
        <h2>Ошибка с суммой депозита</h2>
      </div>
      <div
        class="deposit-input deposit-text referal-icon-diamond deposit-icon__input"
      >
      <br>
      <h3>Ваш реферальный код</h3>
      <input
          :class="{ 'animate-start-btn': errorDeposit }" readonly
          class="deposit-amount__input"
          v-model="amount"
          type="number"
        />
        <br>
        <br>
        <h3>Доступно к выводу</h3>
        <img src="@/assets/icons-games/saper-game/icon-diamond-ore-saper.png" />
        <input
          :class="{ 'animate-start-btn': errorDeposit }" readonly
          class="deposit-amount__input"
          v-model="amount"
          type="number"
        />
        <div class="deposit-btns">
          <ul class="display-btns btns-style-diamonds">
            <li v-for="(number, index) in PaymentsModalNumbers" :key="index">
              <button
                @click="clickedBtnChoice(index, number.diamonds)"
                :class="{
                  'btn-click': clickedBtn === index,
                  [number]: clickedBtn === number,
                }"
              >
                {{ number.diamonds }}
              </button>
            </li>
          </ul>
        </div>
        <div class="deposit-promocode deposit-promocode__padding--input">
          <h3>Всего привели рефералов</h3>
          <div class="promokods">
            <input
          :class="{ 'animate-start-btn': errorDeposit }" readonly
          class="deposit-amount__input"
          v-model="amount"
          type="number"
        />
          </div>
        </div>
        <div class="error-checkbox" v-if="errorAgree">
          <h2>Подтвердите согласие!</h2>
        </div>
        <div class="deposit-checkbox checkbox-styles">
          <input
            @click="agreeUser = !agreeUser"
            type="checkbox"
            :class="{ 'animate-start-btn': errorAgree }"
          />
          <h3>Я согласен с <a href="https://docs.google.com/document/d/1lU_zTWJdD1lcMlIAFDIVz-DlZAoq3a-OFkoO8WBIkzo/edit?usp=sharing">пользовательским соглашением</a></h3>
        </div>
        <div
          class="btn-deposit btn-text-style btn-display-deposit btn-style-payments"
        >
          <p>
            Вы подтверждаете правильность введенных данных при создании вывода.
          </p>
          <button type="submit" @click="RedirectedMethodDep">Вывести</button>
          <p>
            Перед пополнение прочитайте политику конфиденциальности и
            пользовательское соглашение.
          </p>
        </div>
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