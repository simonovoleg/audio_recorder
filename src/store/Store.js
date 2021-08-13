import Vue from "vue";
import Vuex from "vuex";

//import { clone, cloneDeep } from 'lodash';

// import createPersistedState from "vuex-persistedstate";
// import * as templateStore from "./modules/TemplateStore";
import * as promptStore from "./modules/PropmtStore";

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        // templateStore,
        promptStore
    },
    // plugins: [createPersistedState({ paths: [" variableToKeepInLocalStorage "]})],
    state: {},
    mutations: {},
    actions: {},
})