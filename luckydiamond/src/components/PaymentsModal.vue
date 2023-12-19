<template>
  <div class="payment-modal">
    <div class="payments-modal__content close-modal__icon text-styles__margin">
      <h1>{{ payments ? "Пополнить" : "Вывод" }}</h1>
      <img
        @click="closeModal"
        src="@/assets/icons-other/icon-payments-modal-close.svg"
      />
    </div>
    <div v-if="payments" class="payments-modal__deposit">
      <div
        class="deposit-input deposit-text deposit-icon-diamond deposit-icon__input"
      >
        <h3>Сумма пополнения</h3>
        <img src="@/assets/icons-games/saper-game/icon-diamond-ore-saper.png" />
        <input class="deposit-amount__input" v-model="amount" type="number" />
        <div class="deposit-btns">
          <ul class="display-btns btns-style-diamonds">
            <li v-for="number in PaymentsModalNumbers" :key="number">
              <button
                @click="clickedBtnChoice(number, number.diamonds)"
                :class="{
                  'btn-click': clickedBtn === number,
                  [number]: clickedBtn === number,
                }"
              >
                {{ number.diamonds }}
              </button>
            </li>
          </ul>
        </div>
        <div class="deposit-promocode deposit-promocode__padding--input">
          <h3>Промокод</h3>
          <input class="promo-input" type="text" />
        </div>
        <div class="deposit-checkbox checkbox-styles">
          <input @click="agreeUser = !agreeUser" type="checkbox" />
          <h3>Я согласен с пользовательским соглашением.</h3>
        </div>
        <div
          class="btn-deposit btn-text-style btn-display-deposit btn-style-payments"
        >
          <p>
            Вы подтверждаете правильность введенных данных при создании вывода.
          </p>
          <button
            type="submit"
            :disabled="checkOffBtn"
            @click="RedirectedMethodDep"
          >
            Пополнить
          </button>
          <p>
            Перед пополнение прочитайте политику конфиденциальности и
            пользовательское соглашение.
          </p>
        </div>
      </div>
    </div>
    <div v-else class="payments-modal__withdraw deposit-text withdraw-input">
      <div class="count-withdraw deposit-icon-diamond">
        <h3>Сумма вывода</h3>
        <img src="@/assets/icons-games/saper-game/icon-diamond-ore-saper.png" />
        <input class="with-input" v-model="amountWithdraw" type="number" />
      </div>
      <div class="number-card deposit-promocode__padding--input">
        <h3>Введите номер карты</h3>
        <input class="with-input" v-model="card" type="number" />
      </div>
      <div class="withdraw-checkbox checkbox-styles">
        <input @click="agreeUser = !agreeUser; showRecaptcha = true" type="checkbox"/>
        <h3>Я согласен с пользовательским соглашением.</h3>
      </div>
      <captcha-component @captchatokendata="claimCaptchaToken" :showcaptcha="showRecaptcha" @captchadata="closeModal"></captcha-component>
      <div
        class="btn-withdraw btn-text-style btn-display-deposit btn-style-payments"
      >
        <p>
          Вы подтверждаете правильность введенных данных при создании вывода.
        </p>
        <button type="submit" :disabled="checkOffBtn" @click="RedirectedMethodTransferMoneyToSp">
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
import { GettingMoneyOperation } from "@/assets/js/moneyoperation/Claimmoney";
import CaptchaComponent from "@/components/CaptchaComponent.vue";

export default {
  components: { CaptchaComponent },
  props: ["payments"],
  data() {
    return {
      amount: 0,
      amountWithdraw: 0,
      card: 0,
      captchaToken: '',
      clickedBtn: "",
      url: "",
      offBtn: true,
      agreeUser: false,
      showRecaptcha: false,
      PaymentsModalNumbers,
    };
  },
  watch: {
    amount(newAmount) {
      this.offBtn = true;
      if (this.amount > 0 && this.amount !== "") {
        setTimeout(() => {
          try {
            GettingMoneyOperation(newAmount).then((response) => {
              console.log("Payments Modal Working!: ", response);
              this.url = response;
              this.offBtn = false;
            });
          } catch (e) {
            console.error("Error in PaymentModal!", e);
          }
        }, 2000);
      }
    },
    amountWithdraw(newAmount) {
      console.log(newAmount)
    }
  },

  computed: {
    checkOffBtn() {
      return this.checkBtn();
    },
  },
  methods: {
    closeModal() {
      return this.$emit("closemodal");
    },
    claimCaptchaToken(Token) {
      this.captchaToken = Token
    },
    RedirectedMethodDep() {
      console.log(`From /profile to - ${this.url} url`)
      window.location.href = this.url
    },
    RedirectedMethodTransferMoneyToSp() {},

    onVerify: function (response) {
      console.log(response);
    },

    checkBtn() {
      if (this.offBtn === false) {
        if (this.agreeUser !== false) {
          return false;
        }
      }
      return true;
    },
    clickedBtnChoice(index, content) {
      this.clickedBtn = index;
      this.amount = content;
    },
    // detectorMethod(method) {
    //   this.closeModal()
    //   if (method === 'dep') {
    //     return this.$emit('deposit', this.amount)
    //   }
    //   else if (method === 'with') {
    //     return this.$emit('withdraw', this.amount, this.card)
    //   }
    //   else {
    //     console.log('Произошла ошибка при взаимодействие')
    //     return
    //   }
    // },
  },
};
</script>
