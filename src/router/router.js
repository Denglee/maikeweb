import Vue from 'vue'
import VueRouter from 'vue-router'
import staticRoute from "./staticRoute";


Vue.use(VueRouter)

const routes = staticRoute;


const router = new VueRouter({
  routes
})

export default router
