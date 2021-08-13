import axios from "axios";

const baseUrl = "http://localhost:3000/"

export default {
    // API calls go here
    async getAllPrompts() {
        return axios.get(baseUrl + `prompts`);
    },
    async getPromptById(id) {
        return axios.get(baseUrl + `prompt?promptId=${id}`);
    }
};