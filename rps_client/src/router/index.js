import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '../views/login'
import game from '../views/game'
import store from '@/store'


Vue.use(VueRouter)

const routes = [
    {
        path:'/login',
        main:'login',
        component: login
    },
    
    {
        path:'/game',
        main:'game',
        component: game
    },



]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

router.beforeEach((to, from, next) => {
    if (store.getters.loggedIn && to.name == 'login') {
    next('game')
    } else if (! store.getters.loggedIn && to.name != 'login') {
    next('login')
    }
    else {
    next()
    }
    })

export default router

