import { createApp } from 'vue'
import App from './App.vue'

const SiteOff = {
    template: `<div style="text-align: center; margin-top: 20%;">
                   <h1>Site is currently unavailable.</h1>
                   <p>We are currently performing maintenance. We will be back shortly!</p>
               </div>`
};
const siteIsOff = false; 

import router from "@/router/router";
import mitt from 'mitt'
import { Mixins } from "@/mixins/mixin";
import {
    ConnectToChat
} from "@/assets/js/chat/ChatLogic.js";
import '@/assets/css/global.css'

export const eventBus = mitt()

// const app = createApp(App)
const app = createApp(siteIsOff ? SiteOff : App);

if (!siteIsOff) {
    app.use(router);
    app.mixin(Mixins);
    app.provide(eventBus);
    // ConnectToChat(); // Uncomment if chat should also be disabled when the site is off.
}

// app.use(router)
// app.mixin(Mixins)

app.mount('#app')
// app.provide(eventBus)

ConnectToChat();