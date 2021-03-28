import Vue from 'vue';
import Vuex from 'vuex';
import users from '.modules/users'

Vue.use(Vuex);

let store = new Vuex.Store({
    modules: {
        users
    }
})

export default store