<template>
    <!-- <roll /> -->
    <div class="d-flex align-items-center justify-content-center">
      <double />
      <double-component2></double-component2>
      <tutorial-page></tutorial-page>
    </div>
  </template>
  
  <script>
  // import Roll from '../components/Roll.vue';
  import DoubleComponent2 from "@/components/DoubleComponent2.vue";
//   import TutorialPage from '@/pages/games-pages/TutorialPage.vue';
  
  export default {
    name: 'DoubleComponent22',
    components: {
      // Roll
      DoubleComponent2,
    //   TutorialPage
    }
  }
  </script>
  
  <style scoped>
  .d-flex {
    margin-left: 20vh;
  }
</style>