import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = []

const files = require.context('./',false,/\.router.js$/)

files.keys().forEach(key => {
  routes.push(...files(key).default)
})
console.log(routes)
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
