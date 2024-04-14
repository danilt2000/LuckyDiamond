<template>
  <div class="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {},
  metaInfo: {
    title: 'LUCKY DIAMOND',
    meta: [
      { property: 'og:title', content: 'LUCKY DIAMOND' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://yourwebsite.com' }, // Замените на ваш URL
      { property: 'og:image', content: 'https://link.to.your/image.jpg' }, // Замените на URL вашего изображения
      { property: 'og:description', content: 'MINECRAFT CASINO - SPM' }
      // Добавьте другие мета-теги Open Graph по вашему выбору
    ]
  }
}
</script>

<style>
/* Ваши стили здесь */
</style>
