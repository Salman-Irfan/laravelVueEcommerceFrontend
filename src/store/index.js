import { createStore } from "vuex";

const store = createStore({
    // defining states, which is an object
    state: {
        user:{
            token: "1234",
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