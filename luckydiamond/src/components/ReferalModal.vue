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
  :class="{ 'animate-start-btn': errorDeposit }"
  readonly
  class="deposit-amount__input"
  v-if="referralData.referralCode"
  :value="referralData.referralCode"
/>
      <br>
      <br>
      <h3>Доступно к выводу</h3>
      <img src="@/assets/icons-games/saper-game/icon-diamond-ore-saper.png" />
      <input
      :class="{ 'animate-start-btn': errorDeposit }"
      readonly
      class="deposit-amount__input"
      v-if="referralData.avalibleAmount !== 0"
      :value="referralData.avalibleAmount" 
    />
    <input
      :class="{ 'animate-start-btn': errorDeposit }"
      readonly
      class="deposit-amount__input"
      v-else 
      :value="'0'"
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
      :class="{ 'animate-start-btn': errorDeposit }"
      readonly
      class="deposit-amount__input"
      v-if="referralData.activationsAmount !== 0" 
      :value="referralData.activationsAmount" 
    />
    <input
      :class="{ 'animate-start-btn': errorDeposit }"
      readonly
      class="deposit-amount__input"
      v-else 
      :value="'0'"
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
        <h3>Я согласен с <a href="https://docs.google.com/document/d/1ytKHnXr67o7mu5TKqlpgRjO8DEvQDRHNnaphhzbr_sg/edit?usp=sharing">пользовательским соглашением</a></h3>
      </div>
      <div
        class="btn-deposit btn-text-style btn-display-deposit btn-style-payments"
      >
        <p>
          Вы подтверждаете правильность введенных данных при создании вывода.
        </p>
        <button type="submit" @click="handleWithdraw">Вывести</button>
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
import { GetReferralData } from "@/assets/js/Profile/Referrals";
import { WithdrawReferralMoney } from "@/assets/js/Profile/Referrals";
import { eventBus } from "@/main";

export default {
  data() {
    return {
      referralData: {},
      errorDeposit: false,
      errorAgree: false,
      agreeUser: false,
      amount: 0,
      PaymentsModalNumbers: [],
    };
  },
  props: ["payments"],
  async created() {
    this.referralData = await GetReferralData();
  },
  computed: {
    avalibleAmountValue() {
      return this.referralData.avalibleAmount !== 0 ? this.referralData.avalibleAmount : '0';
    },
    activationsAmountValue() {
      return this.referralData.activationsAmount !== 0 ? this.referralData.activationsAmount : '0';
    }
  },
  methods: {
    async handleWithdraw() {
      try {
        if (!this.agreeUser) {
          this.errorAgree = true;
          setTimeout(() => {
            this.errorAgree = false;
          }, 1500);
          return;
        }

        if (this.referralData.avalibleAmount == 0) {
          window.alert("У вас нет денег на вывод :(");
          return;
        }

        await WithdrawReferralMoney().then(async (response) => {
          try {
            console.log("work", response);
          } catch (e) {
            console.error(e);
          }
          await this.$emit("notifacetionmoney");
          eventBus.emit("Updatebalance");
          this.$emit("closemodal");
        });
      } catch (error) {
        console.error("Error withdrawing referral money:", error);
      }
    },
    closeModal() {
      this.$emit("closemodal");
    },
  },
};
</script>
