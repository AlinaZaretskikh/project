// Подключение библиотек
import Vue from 'vue';
import VueRouter from 'vue-router';
// Подключение страниц
import MainPage from '../components/pages/MainPage.vue'
import LoginPage from '../components/pages/LoginPage.vue'
import RegisPage from '../components/pages/RegisPage.vue'
Vue.use(VueRouter);

let router = new VueRouter({
    routes: [
        {
            name: 'login',
            path: '/',
            component: LoginPage
        },
        {
            name: 'main',
            path: '/main',
            component: MainPage
        },
        {
            name: 'regis',
            path: '/regis',
            component: RegisPage
        }
    ]
})

export default router;