import Vue from "vue";
import Router from "vue-router";

import Home from "@/components/Home.vue";
import Prompt from "@/components/Prompt.vue";

Vue.use(Router);

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
        meta: {}
    },
    // {
    //     path: "/:promptId",
    //     name: "HomeWithId",
    //     component: Home,
    //     props: {
    //         default: 2,
    //         props: route => ({ query: route.query.promptId })

    //     },
    //     meta: {}
    // },
    {
        path: "/Prompt",
        name: "Prompt",
        component: Prompt,
        meta: {}
    }
];

const router = new Router({
    mode: "history",
    routes
});

export default router;