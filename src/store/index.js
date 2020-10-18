import Vue from "vue";
import Vuex from "vuex";
import actions from "./action";
import state from "./state";
import mutations from "./mutations";

const debug = process.env.NODE_ENV !== "production";
Vue.use(Vuex);

export default new Vuex.Store({
    actions,
    state,
    mutations,
    strict:debug
});