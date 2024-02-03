<template>
  <ul>
    <li v-for="developer in DevelopersOptions" :key="developer.id">
      <div class="developer-card__content" v-if="developer.id > 4">
        <div class="developer-card__width" :style="{ background: developer.background }">
          <div class="developer-card__text">
            <div class="developer-card__about-text">
              <p>{{ developer.userRole }}</p>
              <h1>{{ developer.username }}</h1>
            </div>
            <div v-for="(techText, index) in developer.technologyText" :key="index" class="developer-card__technology">
              <img :src="require(`@/assets/icons-developcard/${developer.technologyIcons[index]}.png`)" :alt="techText">
              <p>{{ techText }}</p>
            </div>
            <div class="developer-card__socials">
              <div v-for="(socialIcon, index) in developer.socialIcons" :key="index" class="social__content">
                <img :src="require(`@/assets/icons-developcard/${developer.socialIcons[index]}.png`)">
              </div>
            </div>
          </div>
          <div class="developer-card__skin">
            <img :src="`https://avatar.spworlds.ru/front/256/${developer.username}`" :alt="developer.username">
          </div>
        </div>
      </div>
      <div class="developer-card__content" v-else>
        <div class="developer-card__height" :style="{ background: developer.background }">
          <div class="developer-card-height__text">
            <div class="developer-card-height__about-text">
              <p>{{ developer.userRole }}</p>
              <h1>{{ developer.username }}</h1>
            </div>
            <div v-for="(techText, index) in developer.technologyText" :key="index" class="developer-card__technology">
              <img :src="require(`@/assets/icons-developcard/${developer.technologyIcons[index]}.png`)" :alt="techText">
              <p>{{ techText }}</p>
            </div>
            <div class="developer-card__socials">
              <div v-for="(socialIcon, index) in developer.socialIcons" :key="index" class="social__content">
                <img :src="require(`@/assets/icons-developcard/${developer.socialIcons[index]}.png`)">
              </div>
            </div>
          </div>
          <div class="developer-card-height__skin">
            <img :src="`https://avatar.spworlds.ru/front/256/${developer.username}`" :alt="developer.username">
          </div>
        </div>
      </div>
    </li>
  </ul>
</template>

<script>
import DevelopersOptions from "@/mocks/DevelopersOptions";
import '@/assets/css/ComponentsStyles/developer.css'

export default {
  data() {
    return {
      DevelopersOptions
    }
  },
  methods: {
    testMethod(developer, username) {
      console.log(developer, username)
    }
  },
  created() {
    console.log(DevelopersOptions)
  }
}
</script>
