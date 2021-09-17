import PromptService from "../services/PromptService";

export const namespaced = true;

export const state = {
    isLoading: false,
    allPrompts: [],
    emptyPrompt: {
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
    },
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
    },
    isRecording: false,
    isPreparing: false,
    hasRecorded: false,
    micOk: false,
    responseTime: {
        minutes: 0,
        seconds: 0
    },
    prepTime: {
        minutes: 0,
        seconds: 0
    },
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
    async getPromptById({ commit, state }, id) {
        commit("SET_IS_LOADING", true);
        await PromptService.getPromptById(id)
            .then(res => {
                if (res.data.length) {
                    commit("SET_ACTIVE_PROMPT", res.data[0]);
                    commit("SET_PREP_TIME", state.activePrompt.prepare_time);
                    commit("SET_RESPONSE_TIME", state.activePrompt.response_time);
                    commit("SET_IS_LOADING", false);
                    console.log(`Prompt #${state.activePrompt.prompt_id} has been set`)
                    return "success";
                } else if (res.status == 204) {
                    commit("SET_ACTIVE_PROMPT", state.emptyPrompt);
                    commit("SET_IS_LOADING", false);
                    return "no data";
                }
            })
            .catch(e => {
                commit("SET_IS_LOADING", false);
                return e;
            });
    },
    micCheck({ commit }, value) {
        commit("SET_MIC_OK", value);
    },
    setIsRecording({ commit }, value) {
        commit("SET_IS_RECORDING", value);
    },
    setHasRecorded({ commit }, value) {
        commit("SET_HAS_RECORDED", value);
    },
    resetRecorder({ commit }) {
        commit("SET_IS_RECORDING", false);
        commit("SET_HAS_RECORDED", false);
    },
    setIsPreparing({ commit }, value) {
        commit("SET_IS_PREPARING", value);
    },
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
    },
    SET_MIC_OK (state, value) {
        state.micOk = value;
    },
    SET_IS_RECORDING (state, value) {
        state.isRecording = value;
    },
    SET_HAS_RECORDED (state, value) {
        state.hasRecorded = value;
    },
    SET_PREP_TIME (state, value) {
        state.prepTime.minutes = Math.floor((value / 60));
        state.prepTime.seconds = value % 60;
    },
    SET_RESPONSE_TIME (state, value) {
        state.responseTime.minutes = Math.floor((value / 60));
        state.responseTime.seconds = value % 60;
    },
    SET_IS_PREPARING (state, value) {
        state.isPreparing = value;
    },
};