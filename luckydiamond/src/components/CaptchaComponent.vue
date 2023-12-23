<template>
  <vue-recaptcha class="captcha-withdraw" v-show="showcaptcha" sitekey="6LcuUDQpAAAAAPz8007pFD2FigaSh6InnUq_MEd8"
                 size="normal"
                 theme="dark"
                 hl="tr"
                 :loading-timeout="loadingTimeout"
                 @verify="recaptchaVerified"
                 @expire="eventCloseModal"
                 @fail="eventCloseModal"
                 @error="eventCloseModal"
                 ref="vueRecaptcha">
  </vue-recaptcha>
</template>

<script>
import vueRecaptcha from 'vue3-recaptcha2';

export default {
  name: 'app',
  components: {
    vueRecaptcha
  },
  props: {
    showcaptcha: Boolean,
  },
  data() {
    return {
      loadingTimeout: 30000,
      captchaToken: ''
    }
  },
  methods: {
    recaptchaVerified(vueRecaptcha) {
      this.captchaToken = vueRecaptcha

      return this.$emit('captchatokendata', this.captchaToken)
    },
    eventCloseModal() {
      setTimeout(() => {
        return this.$emit("captchadata");
      }, 1000)
    }
  }
};
</script>