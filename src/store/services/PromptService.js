import axios from "axios";

const baseUrl = "http://localhost:3000/"

export default {
    // API calls go here
    async getAllPrompts() {
        return await axios.get(baseUrl + `prompts`);
    },
    async getPromptById(id) {
        return await axios.get(baseUrl + `prompts/byid?promptId=${id}`);
    },
    async getPromptByNetid(id) {
        return await axios.get(baseUrl + `prompts/bynetid?netid=${id}`);
    }
};