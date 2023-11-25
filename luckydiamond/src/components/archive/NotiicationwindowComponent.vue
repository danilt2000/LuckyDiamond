<template>
  <transition name="fade">
    <div class="notification" v-if="isAnimationOn">
      <div class="notification__content">
        <h3>Анимации выключены</h3>
      </div>
    </div>
  </transition>
</template>

<script>
import '@/assets/css/ComponentsStyles/notification.css'

export default {
  props: {
    isAnimationOn: Boolean
  },
  emits: ['animationchange'],
  methods: {
    NotificationsTimer() {
      setTimeout(() => {
        this.$emit('animationchange', false)
      }, 4000)
    }
  },
  watch: {
    isAnimationOn(newVal, oldVal) {
      if (newVal !== oldVal) {
        this.NotificationsTimer()
      }
    }
  }
}
</script>

<style>

</style>