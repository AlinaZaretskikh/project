// Подключение библиотек
import Vue from 'vue';
import VueRouter from 'vue-router';
// Подключение страниц
import MainPage from '../components/pages/MainPage.vue'
import LoginPage from '../components/pages/LoginPage.vue'
import RegisPage from '../components/pages/RegisPage.vue'
import KatalogPage from '../components/pages/KatalogPage.vue'
//import NavBar from '../components/navigation/NavBar.vue'
import ProductsPage from '../components/pages/ProductsPage.vue'
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
        },
        {
            name: 'katalog',
            path: '/katalog',
            component: KatalogPage
        },
        {
            name: 'products',
            path: '/products',
            component: ProductsPage
        }
    ]
})

export default router;