import Vue from "vue";
import Vuex from "vuex";

import { clone, cloneDeep } from 'lodash';

// import createPersistedState from "vuex-persistedstate";
// import * as templateStore from "./modules/TemplateStore";

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        // templateStore,
    },
    // plugins: [createPersistedState({ paths: [" variableToKeepInLocalStorage "]})],
    state: {},
    mutations: {},
    actions: {},
})