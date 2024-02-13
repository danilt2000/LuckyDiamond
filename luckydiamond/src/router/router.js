import { createRouter, createWebHistory } from "vue-router";

import HomePage from "../pages/HomePage.vue";
import ProfilePage from "@/pages/ProfilePage.vue";
import SapergamePage from "@/pages/games-pages/SapergamePage.vue";
import CrashGamePage from "@/pages/games-pages/CrashgamePage.vue";
import JackpotPage from "@/pages/games-pages/JackpotPage.vue";
import SettingsPage from "@/pages/SettingsPage.vue"
import AboutPage from "@/pages/AboutPage.vue"
export default createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: HomePage, name: 'home' },
        { path: '/profile', component: ProfilePage, name: 'profile' },
        { path: '/game/saper', component: SapergamePage, name: 'saper' },
        { path: '/game/crash', component: CrashGamePage, name: 'crash' },
        { path: '/game/jackpot', component: JackpotPage, name: 'jackpot' },
        { path: '/settings', component: SettingsPage, name: 'settings' },
        { path: '/about', component: AboutPage, name: 'about' },
    ]
})
