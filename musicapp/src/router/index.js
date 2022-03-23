import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import ListView from '../views/ListView.vue'
import Search from '../views/Search.vue'
import personalCenter from '../views/PersonalCenter.vue'
import Login from '../views/Login.vue'
import store from '@/store/index.js'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/login',
        name: 'Login',
        component: Login,
    },
    {
        path: '/personalCenter',
        name: 'PersonalCenter',
        beforeEnter: (to, from, next) => {
            console.log(store.state.user)
            if (store.state.user.Login) {
                next()
            } else {
                next('/login')
            }
        },
        component: personalCenter,
    },
    {
        path: '/listview',
        name: 'listview',
        component: ListView,
    },
    {
        path: '/searchview',
        name: 'searchview',
        component: Search,
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})

export default router
