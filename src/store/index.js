import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex);

import * as types from './types'
const store = new Vuex.Store({
    state: {
        user: ""
    },
    getters: {
        getUser(state){
            return state.user;
        }
    },
    mutations: {
        [types.SET_USER](state, value) {
            state.user = value
        },
        [types.SET_SELECT](state, value) {
            state.options = value
        }
    },
    actions: {
        setUser({ commit }, value){
            setTimeout(()=>{
                commit(types.SET_USER, value)
            },2000)
        }
    }
});

export default store;

