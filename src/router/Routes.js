import Vue from "vue";

Vue.use(Router);

const routes = [
    {
        path: "/",
        name: "Home",
        component: "Home",
        meta: {}
    },
];

const router = new Router({
    mode: "history",
    routes
});

export default router;