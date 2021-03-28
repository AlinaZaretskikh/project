import Vue from 'vue';
import Vuex from 'vuex';
import users from './modules/users'
import products from './modules/products'
import categories from './modules/categories'

Vue.use(Vuex);

let store = new Vuex.Store({
    modules: {
        users,
        products,
        categories
    }
})

export default store