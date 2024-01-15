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

app.use(router)
app.mixin(Mixins)

app.mount('#app')
app.provide(eventBus)

ConnectToChat();