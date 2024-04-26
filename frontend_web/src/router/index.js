import {createRouter,createWebHistory } from "vue-router";
import ShopView from "@/views/ShopView.vue";

const routes = [
    {
        path: "/",
        name: "ShopMain",
        component: ShopView,
    },
    {
        path: "/Cart",
        name: "CartShop",
        component: () => import("@/views/CartShop.vue"),
    },
    {
        path: "/Thank",
        name: "Thank",
        component: () => import("@/views/Thank.vue"),
    },
    {
        path: "/login",
        name: "login",
        component: () => import("@/views/LoginUser.vue"),
    },
    {
        path: "/logup",
        name: "Logup",
        component: () => import("@/views/Logup.vue"),
    },
    {
        path: "/details/:id",
        name: "details",
        component: () => import("@/views/DetailsProduct.vue"),
    },
    {
        path: "/addproduct",
        name: "addproduct",
        component: () => import("@/views/Add.vue"),
    },
    {
        path: "/editproduct/:id",
        name: "editproduct",
        component: () => import("@/views/Edit.vue"),
    },
    {
        path: "/profile",
        name: "profile",
        component: () => import("@/views/UserProfile.vue"),
    },
    {
        path: "/admin",
        name: "admin",
        component: () => import("@/views/Adminview.vue"),
    },
    {
        path: "/:pathMatch(.*)*",
        name: "NotFound",
        component: () => import("@/views/NotFound.vue"),
    },
    {
        path: "/ListKH",
        name: "ListUser",
        component: () => import("@/views/ListKH.vue"),
    },
    {
        path: "/ListSP",
        name: "ListProduct",
        component: () => import("@/views/ListSP.vue"),
    },
    {
        path: "/New",
        name: "New",
        component: () => import("@/views/New.vue"),
    },
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;