import { createStore } from "vuex";

const store = createStore({
    // defining states, which is an object
    state: {
        // user dummy data
        user:{
            token: null,
            data: {}
        },
    },
    // getters, object
    getters: {},
    // actions, object
    actions: {},
    // mutations, object
    mutations: {},
})

export default store;