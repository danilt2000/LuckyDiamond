import { createRouter, createWebHistory } from "vue-router";

import HomePage from "../pages/HomePage.vue";
import ProfilePage from "@/pages/ProfilePage.vue";

export default createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: HomePage, name: 'home' },
        { path: '/profile', component: ProfilePage, name: 'profile' }
    ]
})