import { createRouter, createWebHistory } from 'vue-router'

import { useAuth } from '@/stores/auth'

const HomeView = () => import('@/views/HomeView/HomeView.vue')
const AuthView = () => import('@/views/AuthView/AuthView.vue')

const isAuthorized = () => {
  const auth = useAuth()
  return !!auth.token
}

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/auth',
    name: 'auth',
    component: AuthView,
    meta: {
      isPublic: true
    }
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
  scrollBehavior(to) {
    if (to.hash) {
      return { el: to.hash, top: 32 }
    }
  }
})

router.beforeEach(async (to, from) => {
  // Redirect to exisiting route if route does not exist
  if (!to.name) {
    return { name: 'home' }
  }

  // Redirect to /auth if unauthorized and route is not public
  if (!(isAuthorized() || to.meta.isPublic)) {
    let query = {}

    if (to.fullPath !== '/') {
      query = { ...query, next: encodeURIComponent(to.fullPath) }
    }

    return {
      name: 'auth',
      query
    }
  }
})

export default router
