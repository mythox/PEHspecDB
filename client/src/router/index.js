import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Dashboard from '@/components/User/Dashboard'
import Material from '@/components/Material/Material'
import NewMaterial from '@/components/Material/NewMaterial'
import MaterialSpec from '@/components/Material/MaterialSpec'
import Signin from '@/components/User/Signin'
import Register from '@/components/User/Register'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/material',
      name: 'Material',
      component: Material
    },
    {
      path: '/newmaterial',
      name: 'NewMaterial',
      component: NewMaterial
    },
    {
      path: '/materialspec',
      name: 'MaterialSpec',
      component: MaterialSpec
    },
    {
      path: '/signin',
      name: 'Signin',
      component: Signin
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    }
  ],
  mode: 'history'
})
