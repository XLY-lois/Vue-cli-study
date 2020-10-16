import { createRouter, createWebHashHistory } from 'vue-router'
import routes from './router'

//路由实例
const router = createRouter({
  history: createWebHashHistory(),
  routes:routes
})

export default router
