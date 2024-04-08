<template>
  <div class="payment-modal withdraw-modal">
    <div class="payments-modal__content close-modal__icon text-styles__margin">
      <h1>{{ payments ? "Пополнить" : "Вывод" }}</h1>
      <img
        @click="closeModal"
        src="@/assets/icons-other/icon-payments-modal-close.svg"
      />
    </div>
    <div v-if="payments" class="payments-modal__deposit">
      <div class="error-deposit" v-if="errorDeposit">
        <h2>Ошибка с суммой депозита</h2>
      </div>
      <div
        class="deposit-input deposit-text deposit-icon-diamond deposit-icon__input"
      >
        <h3>Сумма пополнения</h3>
        <img src="@/assets/icons-games/saper-game/icon-diamond-ore-saper.png" />
        <input
          :class="{ 'animate-start-btn': errorDeposit }"
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
        <div v-if="showPromocodeStatus" class="error-promocode">
          <h2 v-if="errorPromocode" class="error-text__promocode">
            {{ promoResponse }}
          </h2>
          <h2 v-else class="correct-text__promocode">
            Промокод успешно применён
          </h2>
        </div>
        <div class="deposit-promocode deposit-promocode__padding--input">
          <h3>Промокод</h3>
          <div class="promokods">
            <input
              @focusout="checkValidationPromocode"
              v-model="promocode"
              class="promo-input"
              type="text"
            />
            <button class="vvod_promocoda" @click="handleApplyPromoCode">
              Ввод
            </button>
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
          <button type="submit" @click="RedirectedMethodDep">Пополнить</button>
          <p>
            Перед пополнение прочитайте политику конфиденциальности и
            пользовательское соглашение.
          </p>
        </div>
      </div>
    </div>
    <div v-else class="payments-modal__withdraw deposit-text withdraw-input">
      <div class="error-deposit" v-if="errorDeposit">
        <h2>Ошибка с суммой депозита</h2>
      </div>
      <div class="count-withdraw deposit-icon-diamond">
        <h3>Сумма вывода</h3>
        <img src="@/assets/icons-games/saper-game/icon-diamond-ore-saper.png" />
        <input
          :class="{ 'animate-start-btn': errorDeposit }"
          class="with-input"
          v-model="amountWithdraw"
          type="number"
        />
      </div>
      <div class="error-card" v-if="errorCard">
        <h2>Ошибка с вводом карты</h2>
      </div>
      <div class="number-card deposit-promocode__padding--input">
        <h3>Введите номер карты</h3>
        <input
          :class="{ 'animate-start-btn': errorCard }"
          class="with-input"
          v-model="card"
          type="text"
        />
      </div>
      <div class="error-checkbox" v-if="errorAgree">
        <h2>Подтвердите согласие!</h2>
      </div>
      <div class="withdraw-checkbox checkbox-styles">
        <input @click="agreeUser = !agreeUser" type="checkbox" />
        <h3>Я согласен <a href="https://docs.google.com/document/d/1lU_zTWJdD1lcMlIAFDIVz-DlZAoq3a-OFkoO8WBIkzo/edit?usp=sharing">пользовательским соглашением</a></h3>
      </div>
      <div class="error-captcha" v-if="errorCaptcha && agreeUser === true">
        <h2>Пройдите проверку!</h2>
      </div>
      <captcha-component
        @captchatokendata="claimCaptchaToken"
        :showcaptcha="agreeUser"
      ></captcha-component>
      <!-- <captcha-component @captchatokendata="claimCaptchaToken" :showcaptcha="agreeUser" @captchadata="closeModal"></captcha-component> -->
      <div
        class="btn-withdraw btn-text-style btn-display-deposit btn-style-payments"
      >
        <p>
          Вы подтверждаете правильность введенных данных при создании вывода.
        </p>
        <button type="submit" @click="RedirectedMethodTransferMoneyToSp">
          Вывод
        </button>
        <p>
          Перед выводом прочитайте политику конфиденциальности и
          пользовательское соглашение.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import "@/assets/css/ComponentsStyles/payments-modal.css";
import PaymentsModalNumbers from "@/mocks/PaymentsModalNumbers";
import {
  GettingMoneyOperation,
  WithdrawMoneyOperation,
} from "@/assets/js/moneyoperation/Claimmoney";
import CaptchaComponent from "@/components/CaptchaComponent.vue";

import { eventBus } from "@/main";

import { useVuelidate } from "@vuelidate/core";
import {
  maxValue,
  minValue,
  required,
  numeric,
  integer,
  minLength,
  maxLength,
} from "@vuelidate/validators";
import { GetCurrentMoney } from "@/assets/js/rest/RestMethods";
import { GetCookie } from "@/assets/js/storage/CookieStorage";
import { ApplyPromoCode } from "@/assets/js/rest/RestMethods.js"; // Замените на правильный путь к файлу с функцией ApplyPromoCode

export default {
  components: { CaptchaComponent },
  props: ["payments"],
  data() {
    return {
      amount: 0,
      amountWithdraw: 0,
      balance: 0,
      card: "",
      promocode: "",
      promocodeBase: ["ANTI-GRIF"],
      errorPromocode: false,
      showPromocodeStatus: false,
      errorAgree: false,
      errorDeposit: false,
      errorCard: false,
      errorCaptcha: false,
      captchaToken: null,
      clickedBtn: "",
      url: "",
      completeValidtaion: {
        amountsaving: true,
        cardsaving: false,
        agreesaving: false,
        captchatokensaving: false,
      },
      agreeUser: false,
      PaymentsModalNumbers,
    };
  },
  created() {
    GetCurrentMoney(GetCookie("AUTHTOKEN"), GetCookie("SearchToken")).then(
      (response) => {
        this.balance = response.currentMoney;
      }
    );
  },
  setup() {
    return { v$: useVuelidate() };
  },
  validations() {
    return {
      amount: { required, numeric, minValue: minValue(1), integer },
      amountWithdraw: {
        required,
        numeric,
        minValue: minValue(1),
        maxValue: maxValue(this.balance),
        integer,
      },
      card: {
        required,
        numeric,
        minLength: minLength(5),
        maxLength: maxLength(5),
        integer,
      },
    };
  },
  watch: {
    amount(DepositCount) {
      console.log(DepositCount);
      if (![1, 5, 10, 50, 100, 1000].includes(DepositCount)) {
        this.clickedBtn = null;
      } else {
        let index;
        switch (DepositCount) {
          case 1:
            index = 0;
            break;
          case 5:
            index = 1;
            break;
          case 10:
            index = 2;
            break;
          case 50:
            index = 3;
            break;
          case 100:
            index = 4;
            break;
          case 1000:
            index = 5;
            break;
        }
        this.clickedBtnChoice(index, DepositCount);
      }
    },
    completeValidtaion: {
      handler() {
        this.completeValidationCheck();
      },
      deep: true,
    },
  },
  methods: {
    closeModal() {
      return this.$emit("closemodal");
    },
    // checkValidationPromocode() {
    //   this.errorPromocode = !this.promocodeBase.includes(this.promocode);
    //   this.showPromocodeStatus = true
    // },
    completeValidationCheck() {
      this.offBtn = true;

      if (
        this.completeValidtaion.amountsaving &&
        this.completeValidtaion.cardsaving &&
        this.completeValidtaion.agreesaving &&
        this.completeValidtaion.captchatokensaving
      ) {
        this.offBtn = false;
      }
    },
    claimCaptchaToken(Token) {
      this.captchaToken = Token;
      this.completeValidtaion.captchatokensaving = true;
    },
    async handleApplyPromoCode() {
      const authToken = GetCookie("AUTHTOKEN");
      const searchToken = GetCookie("SearchToken");

      try {
        const response = await ApplyPromoCode(
          authToken,
          searchToken,
          this.promocode
        );

        console.log(response);

        if (response === "Promo dont exist.") {
          this.showPromocodeStatus = true;
          this.errorPromocode = true;
          this.promoResponse = "Промокод не найден";
        } else if (response === "promotional code has expired") {
          this.showPromocodeStatus = true;
          this.errorPromocode = true;
          this.promoResponse = "Не действителен";
        } else if (response === "User is alredy use the promo") {
          this.showPromocodeStatus = true;
          this.errorPromocode = true;
          this.promoResponse = "Уже использован";
        } else {
          this.showPromocodeStatus = true;
          this.errorPromocode = false;
          this.promoResponse = response;
        }
      } catch (error) {
        console.error("Ошибка при применении промокода:", error);
      }
    },
    async RedirectedMethodDep() {
      this.v$.$touch();

      if (this.v$.amount.$error) {
        this.errorDeposit = true;

        setTimeout(() => {
          this.errorDeposit = false;
        }, 1500);
      }
      if (this.agreeUser !== true) {
        this.errorAgree = true;
        setTimeout(() => {
          this.errorAgree = false;
        }, 1500);
      }
      if (!this.v$.amount.$error && this.agreeUser === true) {
        try {
          GettingMoneyOperation(this.amount).then((response) => {
            console.log("Payments Modal Working!: ", response);
            this.url = response;
            this.offBtn = false;

            window.location.href = this.url;
          });
        } catch (e) {
          console.error("Error in PaymentModal!", e);
        }
      }
    },
    async RedirectedMethodTransferMoneyToSp() {
      this.v$.$touch();

      if (this.v$.amountWithdraw.$error) {
        this.errorDeposit = true;

        setTimeout(() => {
          this.errorDeposit = false;
        }, 1500);
      }
      if (this.v$.card.$error) {
        this.errorCard = true;

        setTimeout(() => {
          this.errorCard = false;
        }, 1500);
      }
      if (this.agreeUser !== true) {
        this.errorAgree = true;

        setTimeout(() => {
          this.errorAgree = false;
        }, 1500);
      }
      if (this.captchaToken === null) {
        this.errorCaptcha = true;

        setTimeout(() => {
          this.errorCaptcha = false;
        }, 1500);
      }
      if (
        !this.v$.amountWithdraw.$error &&
        !this.v$.card.$error &&
        this.agreeUser === true &&
        this.captchaToken !== null
      ) {
        WithdrawMoneyOperation(
          this.amountWithdraw,
          this.card.toString(),
          this.captchaToken
        ).then(async (response) => {
          try {
            console.log("work", response);
          } catch (e) {
            console.error(e);
          }
          await this.$emit("notifacetionmoney");
          eventBus.emit("Updatebalance");
        });
      }
    },
    clickedBtnChoice(index, content) {
      this.clickedBtn = index;
      this.amount = content;
      console.log(index);
    },
  },
};
</script>