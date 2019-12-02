import Vue from 'vue'
import Router from 'vue-router'
import PageHome from '@/components/PageHome'
import Discover from '@/components/PageDiscover'
import BookList from '@/components/PageBookList'
import User from '@/components/PageUser'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', component: PageHome },
    { path: '/discover', component: Discover },
    { path: '/booklist', component: BookList },
    { path: '/user', component: User }
  ]
})
