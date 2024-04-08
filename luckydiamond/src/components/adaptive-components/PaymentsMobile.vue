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
        <input type="number" v-model="amount" class="input-mobile__number">
        <div class="payments-modal__btns-mobile">
          <ul class="button-style__mobile">
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
        <div class="payments-modal__card input-style__mobile" v-if="payments.paymentsView === false">
          <h2>Номер карты</h2>
          <input type="text" v-model="card" class="input-mobile__number">
        </div>
      </div>
      <div class="payments-modal__promocode input-style__mobile" v-if="payments.paymentsView === true">
        <input type="text" placeholder="Введите промокод">
      </div>
      <div class="payments-modal__agree checkbox-styles">
        <input v-if="!payments.paymentsView" type="checkbox" @click="agreeUser = !agreeUser">
        <input v-else type="checkbox" @click="agreeUserDonate = !agreeUserDonate">
        <h3>Я согласен с пользовательским соглашением.</h3>
      </div>
      <captcha-component class="captcha-mobile" @captchatokendata="claimCaptchaToken" :showcaptcha="agreeUser"></captcha-component>
      <div class="payments-modal__submit">
        <p>Вы подтверждаете правильность введенных данных при создании вывода.</p>
        <button @click="clickBtn()">{{ payments.paymentsView ? 'Пополнить' : 'Вывод' }}</button>
      </div>
    </div>
  </div>
</template>

<script>
import PaymentsModalNumbers from "@/mocks/PaymentsModalNumbers";
import CaptchaComponent from "@/components/CaptchaComponent.vue";

import {
  GettingMoneyOperation,
  WithdrawMoneyOperation,
} from "@/assets/js/moneyoperation/Claimmoney";
import { eventBus } from "@/main";

import { useVuelidate } from "@vuelidate/core";
import {
  minValue,
  required,
  numeric,
  integer,
  minLength,
  maxLength,
} from "@vuelidate/validators";

import { GetCurrentMoney } from "@/assets/js/rest/RestMethods";
import { GetCookie } from "@/assets/js/storage/CookieStorage";
// import { ApplyPromoCode } from "@/assets/js/rest/RestMethods.js"; // Замените на правильный путь к файлу с функцией ApplyPromoCode

import '@/assets/css/ComponentsStyles/AdaptiveStyles/payments-modalmobile.css'

export default {
  components: { CaptchaComponent },
  props: [ 'payments' ],
  data() {
    return {
      PaymentsModalNumbers,
      agreeUser: false,
      agreeUserDonate: false,
      amount: 0,
      card: '',
      captchaToken: null,
      url: '',
      clickedBtn: "",
    }
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
    }
  },
  setup() {
    return { v$: useVuelidate() };
  },
  validations() {
    return {
      amount: { required, numeric, minValue: minValue(1), integer },
      card: { required, numeric, minLength: minLength(5), maxLength: maxLength(5), integer }
    }
  },
  methods: {
    closeModal() {
      return this.$emit('closemodal')
    },
    clickBtn() {
      this.v$.$touch()

      if (this.payments.paymentsView === true) {

        if (this.v$.amount.$error) {
          console.log('error amount')
        }

        if (this.agreeUserDonate !== true) {
          console.log('agreeuser error')
        }

        if (
            !this.v$.amount.$error &&
            this.agreeUserDonate === true
        ) {
          try {
            GettingMoneyOperation(this.amount).then((response) => {
              this.url = response

              window.location.href = this.url;
            })
          }
          catch (e) {
            console.error(e)
          }
        }

      }
      else if (this.payments.paymentsView === false) {
        this.v$.$touch()

        if (this.v$.amount.$error) {
          console.log('amount error')
        }
        if (this.v$.card.$error) {
          console.log('card error')
        }

        if (this.agreeUser !== true) {
          console.log('agree error')
        }
        if (this.captchaToken === null) {
          console.log('token error')
        }

        let balanceUser = 0
        GetCurrentMoney(GetCookie('AUTHTOKEN'), GetCookie('SearchToken'))
            .then((response) => {
              balanceUser = response.currentMoney
            })

        if (this.amount < balanceUser) {
          console.log('money small balance')
        }

        if (
            !this.v$.amount.$error &&
            !this.v$.card.$error &&
            this.agreeUser === true &&
            this.captchaToken !== null &&
            this.amount >= balanceUser
        ) {
          WithdrawMoneyOperation(
              this.amount,
              this.card.toString(),
              this.captchaToken
          ) .then((response) => {
            try {
              console.log('work', response)
              eventBus.emit('Updatebalance')
              return this.$emit('closemodal')
            }
            catch (e) {
              console.error(e)
            }
          })
        }
      }
    },
    claimCaptchaToken(Token) {
      this.captchaToken = Token
    },
    clickedBtnChoice(index, content) {
      this.clickedBtn = index;
      this.amount = content;
      console.log(index);
    },
  }
}
</script>

<style>

</style>