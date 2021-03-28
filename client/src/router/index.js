// Подключение библиотек
import Vue from 'vue';
import VueRouter from 'vue-router';
// Подключение страниц
import MainPage from '../components/pages/MainPage.vue'
import LoginPage from '../components/pages/LoginPage.vue'
import RegisPage from '../components/pages/RegisPage.vue'
//import NavBar from '../components/navigation/NavBar.vue'
Vue.use(VueRouter);

let router = new VueRouter({
    routes: [
        {
            name: 'main',
            path: '/',
            component: MainPage
        },
        {
            name: 'login',
            path: '/login',
            component: LoginPage
        },
        {
            name: 'regis',
            path: '/regis',
            component: RegisPage
        }
    ]
})

export default router;