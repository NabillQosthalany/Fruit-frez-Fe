// router.js
import {createRouter, createWebHistory} from 'vue-router';

import Login from '../view/Auth.vue'
import Dashboard from '../view/dashboard.vue'
import Alert from '../components/Auth/Alert/Alert.vue'
import Product from '../view/Product/Product.vue'

const routes = [
    {
        path: '/',
        name: 'Login',
        component: Login,
        meta: {guest: true}
    },
    {
        path: '/Dashboard',
        name: 'Dashboard',
        component: Dashboard,
    },
    {
        path: '/Product',
        name: 'Product',
        component: Product,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    const authentication = localStorage.getItem('token')
    if (to.path !== '/' && !authentication) {
        next({ path: '/', query: { message: 'unauthenticated' } });
    } else if (to.path === '/' && authentication) {
        next('/dashboard')
    } else {
        next()
    }
})

export default router;
