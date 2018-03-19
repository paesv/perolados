import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

// Import Components
import Game from '../app/Game/Game'
import Home from '../app/Home/Home'
import Register from '../app/Register/Register'
import Dashboard from '../app/Dashboard/Dashboard'
// import

const router = new VueRouter({
    base: __dirname,
    mode: 'hash',
    routes: [
        { path: '/', component: Home },
        { path: '/game', component: Game },  
        { path: '/registrar', component: Register },     
        { path: '/dashboard', component: Dashboard },     
    ]
})

export default router