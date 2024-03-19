import { createRouter, createWebHistory } from 'vue-router'
import routes from './route.js'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

router.beforeEach(async (_to, _from, next) => {
  next()
})

export default router
