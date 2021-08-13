import PromptService from "../services/PromptService";

export const namespaced = true;

export const state = {
    isLoading: false,
    allPrompts: [],
    activePrompt: {
        prompt_id: "",
        title: "",
        netid: "",
        text: "",
        prepare_time: "",
        response_time: "",
        transcription: "",
        date_created: "",
        archive: {
            type: "Buffer",
            data: []
        }
    }
};

export const getters = {};

export const actions = {
    async getAllPrompts({ commit }) {
        commit("SET_IS_LOADING", true);
        await PromptService.getAllPrompts()
            .then(res => {
                if (res.data.length) {
                    commit("SET_ALL_PROMPTS", res.data);
                    commit("SET_IS_LOADING", false);
                    return "success";
                }
            })
            .catch(e => {
                commit("SET_IS_LOADING", false);
                return(e);
            })
    },
    async getPromptById({ commit }, id) {
        commit("SET_IS_LOADING", true);
        await PromptService.getPromptById(id)
            .then(res => {
                if (res.data.length) {
                    commit("SET_ACTIVE_PROMPT", res.data[0]);
                    commit("SET_IS_LOADING", false);
                    return "success";
                }
            })
            .catch(e => {
                commit("SET_IS_LOADING", false);
                return e;
            })
    }
};

export const mutations = {
    SET_IS_LOADING (state, value) {
        if (value === undefined) {
            state.isLoading = true;
        }   
        state.isLoading = value;
    },
    SET_ALL_PROMPTS (state, prompts) {
        state.allPrompts = prompts;
    },
    SET_ACTIVE_PROMPT (state, prompt) {
        state.activePrompt = prompt;
    }
};