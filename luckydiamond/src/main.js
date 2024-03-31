import { createApp } from 'vue'
import App from './App.vue'

import router from "@/router/router";
import mitt from 'mitt'
import { Mixins } from "@/mixins/mixin";
import {
    ConnectToChat
} from "@/assets/js/chat/ChatLogic.js";
import '@/assets/css/global.css'

export const eventBus = mitt()

const app = createApp(App)

app.config.warnHandler = (msg) => {
    // Intercept specific warning message and suppress it
    if (msg.includes('Property or method "clickedBtn" is not defined on the instance but referenced during render.')) {
      // You can simply return to ignore it, or even better, log it somewhere if you have a logging system
      return;
    }
  
    // Log or handle other warnings as you see fit
  };

app.use(router)
app.mixin(Mixins)

app.mount('#app')
app.provide(eventBus)

ConnectToChat();