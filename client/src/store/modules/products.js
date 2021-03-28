import axios from 'axios'
export default {
    state: {
        products: []
    },
    getters: {
        PRODUCTS(state) {
            return state.products
        }
    },
    mutations: {
        SET_PRODUCTS(state, products) {
            state.products = products;
        }
    },
    actions: {
        GET_PRODUCTS({commit}) {
            axios.get('http://localhost:3000/products')
            .then(function(result) {
                commit('SET_PRODUCTS', result.data)
            })
            .catch(function(error) {
                console.log(error);
            })
        }
    }
}