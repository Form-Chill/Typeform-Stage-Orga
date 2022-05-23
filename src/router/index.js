import {createWebHistory, createRouter } from "vue-router"; 

import Home from "@/views/Home.vue";
import Login from "@/views/Login.vue";
import SignIn from "@/views/SignIn.vue";
import Sondages from "@/views/Sondages.vue";
import About from "@/views/About.vue";
import WIP from "@/views/WIP.vue";
import NotFound from "@/views/NotFound.vue";
import Dashboard from "@/views/Dashboard.vue";
import Bookmarks from "@/views/Bookmarks.vue";
import MyPolls from "@/views/MyPolls.vue";
import Profile from "@/views/Profile.vue"



const routes = [{
    path: "/",
    name: "Home",
    component: Home,
},
{
    path: "/login",
    name: "Login",
    component: Login,
},
{
    path: "/signin",
    name: "SignIn",
    component: SignIn,
},
{
    path: "/sondages",
    name: "Sondages",
    component: Sondages,
},
{
    path: "/about",
    name: "About",
    component: About,
},
{
    path: "/wip",
    name: "WIP",
    component: WIP,
},
{
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
},
{
    path: "/Profile",
    name: "Profile",
    component: Profile,
},
{
    path: "/Bookmarks",
    name: "Bookmarks",
    component: Bookmarks,
},
{
    path: "/MyPolls",
    name: "MyPolls",
    component: MyPolls,
},
{
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: NotFound,
},
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;