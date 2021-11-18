import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import Blog from '../components/Blog.vue'
import Login from '../views/Login.vue'
import BlogHome from '../views/BlogHome.vue'
import mainpage from '../components/mainpage.vue'

Vue.use(VueRouter)


const routes = [
  
  {
    path: '/mainpage',
    name: 'mainpage',
    component: mainpage
  },
  {
    path: '/blogHome',
    name: 'BlogHome',
    component: BlogHome
  },
  {
    path: '/',
    name: 'Blog',
    component: Blog
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
