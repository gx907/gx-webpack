import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const constantRoutes = []
const createRouter = () =>
  new Router({
    // mode: 'history', // require service support
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes
  })
  const router =  createRouter() 
export default router