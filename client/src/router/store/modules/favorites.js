import axios from 'axios'
export default {
    state: {
        favorites: []
    },
    getters: {
        FAVORITES(state) {
            return state.favorites
        }
    },
    mutations: {
        SET_FAVORITES(state, favorites) {
            state.favorites = favorites;
        }
    },
    actions: {
        GET_FAVORITES({commit}) {
            axios.get('http://localhost:3000/favorites')
            .then(function(result) {
                commit('SET_FAVORITES', result.data)
            })
            .catch(function(error) {
                console.log(error);
            })
        }
    }
}