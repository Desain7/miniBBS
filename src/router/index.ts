import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../pages/home/HomePage.vue";
import Games from "../pages/games/GamesPage.vue";
import Community from "../pages/community/CommunityPage.vue";
import Personal from "../pages/personal/PersonalPage.vue";

const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    // {
    //     path: "/home",
    //     name: "Home",
    //     component: Home,
    // },
    {
        path: "/community",
        name: "Community",
        component:Community,
    },
    {
        path: "/games",
        name: "Games",
        component: Games,
    },
    {
        path: "/personal",
        name: "Personal",
        component: Personal,
    },
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;
