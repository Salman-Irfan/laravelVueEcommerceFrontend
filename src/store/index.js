import { createStore } from "vuex";
// import state from "./state";
import * as actions from "./actions";
import * as mutations from "./mutations";

const store = createStore({
    // defining states, which is an object
    state: {
        user: {
            token: sessionStorage.getItem('TOKEN'),
            data: { }
        },
    },
    // getters, object
    getters: {},
    // actions, object
    actions,
    // mutations, object
    mutations,
})

export default store;