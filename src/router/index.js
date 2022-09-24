import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import IndexShop from '../views/shop/IndexShop.vue'
import DetailShop from '../views/shop/DetailShop.vue'
import CheckoutShop from '../views/shop/CheckoutShop.vue'
import CartShop from '../views/shop/CartShop.vue'
import LoginAuth from '../views/auth/LoginAuth.vue'
import IndexBlog from '../views/blog/IndexBlog.vue'
import DetailBlog from '../views/blog/DetailBlog.vue'
import ContactView from '../views/ContactView.vue'
import BlankView from '../views/blog/BlankView.vue'
import store from '@/store'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/shop',
    name: 'Shop',
    component: IndexShop
  },
  {
    path: '/shop/detail',
    name: 'ShopDetail',
    component: DetailShop
  },
  {
    path: '/shop/checkout',
    name: 'CheckoutShop',
    component: CheckoutShop,
    meta : { auth:true }
  },
  {
    path: '/cart/:slug',
    name: 'Cartshop',
    component: CartShop,
    meta: { auth:true }
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/login',
    name: 'loginAuth',
    component: LoginAuth,
    meta: { guest:true }
  },
  {
    path: '/blog',
    name: 'blog',
    component: IndexBlog
  },
  {
    path: '/blog/detail',
    name: 'BlogDetail',
    component: DetailBlog
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView
  },{
    path : '/blankview',
    name : 'Blankview',
    component: BlankView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  if(to.meta.auth && !store.getters['auth/authenticated']) router.push('/login')
  if(to.meta.guest && store.getters['auth/authenticated']) router.push('/')

  next()
})

export default router
