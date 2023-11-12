import { createRouter, createWebHistory } from "vue-router";

import homePage from "../pages/HomePage.vue";
export default createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: homePage, name: 'home' }
    ]
})