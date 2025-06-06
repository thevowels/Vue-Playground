import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MyComponent from '@/views/MyComponent.vue'
import Counter from '@/Components/Counter.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/temp',
      name: 'temp',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/TempView.vue'),
    },
    {
      path: '/components',
      name: 'components',
      component: MyComponent,
      children:[
        {
          path: 'counter',
          component: Counter
        }
      ]
    }
  ],
})

export default router
