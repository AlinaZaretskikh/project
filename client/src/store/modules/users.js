import axios from 'axios'
export default {
    state: {
        userId: 0
    },
    getters: {
        USER_ID(state){
            return state.userId
        }
    },
    mutations: {
        SET_USER_ID(state, userId) {
            state.userId = userId;
        }
    },
    actions: {
        LOGIN ({commit}, params) {
            axios.post('http://localhost:3000/users/login', params)
            .then(function(result){
                commit('SET_USER_ID', result.data.id)
            })
            .catch(function(error) {
                console.log(error);
            })
        },
        REGISTRATION(_, params) {
            axios.post('http://localhost:3000/users', params)
            .catch(function(error) {
                console.log(error);
            })
        }
    }
}