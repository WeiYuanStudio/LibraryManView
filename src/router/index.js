import Vue from 'vue'
import Router from 'vue-router'

import PageHome from '@/views/PageHome'
import Discover from '@/views/PageDiscover'
import PageFavorite from '@/views/PageFavorite'
import User from '@/views/PageUser'

import PageSearch from '@/views/PageSearch'
import PageLogin from '@/views/PageLogin'
import PageRegister from '@/views/PageRegister'

Vue.use(Router)

export default new Router({
    routes: [
        { path: '/', component: PageHome },
        { path: '/discover', component: Discover },
        { path: '/favorite', component: PageFavorite },
        { path: '/user', component: User },
        { path: '/books', component: PageSearch },
        { path: '/login', component: PageLogin},
        { path: '/register', component: PageRegister}
    ]
})
