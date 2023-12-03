import { createRouter, createWebHistory } from "vue-router";

import HomePage from "../pages/HomePage.vue";
import ProfilePage from "@/pages/ProfilePage.vue";
import SapergamePage from "@/pages/games-pages/SapergamePage.vue";

export default createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: HomePage, name: 'home' },
        { path: '/profile', component: ProfilePage, name: 'profile' },
        { path: '/game/saper', component: SapergamePage, name: 'saper' }
    ]
})