import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Material from '@/components/Material/Material'
import NewMaterial from '@/components/Material/NewMaterial'
import Signin from '@/components/User/Signin'
import Signout from '@/components/User/Signout'
import MaterialVuex from '@/components/Material/MaterialVuex'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
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
      path: '/signin',
      name: 'Signin',
      component: Signin
    },
    {
      path: '/signout',
      name: 'Signout',
      component: Signout
    },
    {
      path: '/materialvuex',
      name: 'MaterialVuex',
      component: MaterialVuex
    }
  ],
  mode: 'history'
})
