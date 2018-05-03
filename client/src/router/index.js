import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import EditBusiness from '@/components/editbusiness'
import UpdateBusiness from '@/components/updateBusiness'
import AddBusiness from '@/components/addbusiness'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/editbusiness',
      name: 'EditBusiness',
      component: EditBusiness
    },
    {
      path: '/updateBusiness',
      name: 'UpdateBusiness',
      component: UpdateBusiness
    },
    {
      path: '/addbusiness',
      name: 'AddBusiness',
      component: AddBusiness
    }
  ]
})
