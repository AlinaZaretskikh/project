import axios from 'axios'
export default {
    state: {
        categories: []
    },
    getters: {
        categories(state) {
            return state.categories
        }
    },
    mutations: {
        SET_CATEGORIES(state, categories) {
            state.categories = categories;
        }
    },
    actions: {
        GET_CATEGORIES({commit}) {
            axios.get('http://localhost:3000/categories')
            .then(function(result) {
                commit('SET_CATEGORIES', result.data)
            })
            .catch(function(error) {
                console.log(error);
            })
        }
    }
}