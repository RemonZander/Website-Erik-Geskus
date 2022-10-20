import {createRouter, createWebHistory} from "vue-router/dist/vue-router";
import home from "@/components/Home";

const routes = [
    {
        path: "/", name: "Home", component: home
    }
]

const router = createRouter({
    routes,
    history: createWebHistory()
})

export default router;