import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/products',
      name: 'ProductList',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ProductList.vue'),
    },
    {
      path: "/products/:id",
      name: "ProductDetails",
      component: () => import('../components/ProductDetails.vue'),
      props: true,
    },
    {
      path: "/cart",
      name: "Cart",
      component: () => import('../views/Cart.vue'),
    },
    {
      path: "/checkout",
      name: "Checkout",
      component: () => import('../components/Checkout.vue'),
    },
    {
      path: "/login",
      name: "Login",
      component: () => import('../components/Login.vue'),
    },
    {
      path: "/signup",
      name: "Signup",
      component: () => import('../components/Signup.vue'),
    },
  ],
})

export default router
