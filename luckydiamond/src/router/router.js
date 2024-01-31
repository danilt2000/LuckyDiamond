import { createRouter, createWebHistory } from "vue-router";

import HomePage from "../pages/HomePage.vue";
import ProfilePage from "@/pages/ProfilePage.vue";
import SapergamePage from "@/pages/games-pages/SapergamePage.vue";
import SettingsPage from "@/pages/SettingsPage.vue"
import AboutPage from "@/pages/AboutPage.vue"
export default createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: HomePage, name: 'home' },
        { path: '/profile', component: ProfilePage, name: 'profile' },
        { path: '/game/saper', component: SapergamePage, name: 'saper' },
        { path: '/settings', component: SettingsPage, name: 'settings' },
        { path: '/about', component: AboutPage, name: 'about' },
    ]
})
