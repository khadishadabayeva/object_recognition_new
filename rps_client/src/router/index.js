import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '../views/login'
import game from '../views/game'


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

export default router