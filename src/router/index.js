import Vue from 'vue'
import Router from 'vue-router'

import PageHome from '@/components/PageHome'
import Discover from '@/components/PageDiscover'
import PageFavorite from '@/components/PageFavorite'
import User from '@/components/PageUser'

import PageSearch from '@/components/PageSearch'

Vue.use(Router)

export default new Router({
    routes: [
        { path: '/', component: PageHome },
        { path: '/discover', component: Discover },
        { path: '/favorite', component: PageFavorite },
        { path: '/user', component: User },
        { path: '/books', component: PageSearch }
    ]
})
