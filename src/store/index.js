import { createStore } from "vuex";
import state from "./state";
import * as actions from "./actions";
import * as mutations from "./mutations";

const store = createStore({
    // defining states, which is an object
    state,
    // getters, object
    getters: {},
    // actions, object
    actions,
    // mutations, object
    mutations,
})

export default store;