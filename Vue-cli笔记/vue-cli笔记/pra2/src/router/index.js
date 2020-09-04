import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Hello from '@/components/Hello'
import Index from '@/components/Index'
import UsersData from '@/components/UsersData'
import ShoppingCart from '@/components/ShoppingCart'
import CountAge from '@/components/CountAge'
import CountGender from '@/components/CountGender'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
    },{
      path: '/hello',
      name: 'Hello',
      component: Hello
    },{
      path: '/usersdata',
      name: 'UsersData',
      component: UsersData,
      children:[
        {
          path: 'countage',
          name: 'CountAge',
          component: CountAge
        },{
          path: 'countgender',
          name: 'CountGender',
          component: CountGender
        },
      ]
    },{
      path: '/helloworld',
      name: 'HelloWorld',
      component: HelloWorld
    },{
      path: '/shoppingcart',
      name: 'ShoppingCart',
      component: ShoppingCart
    }
    // },{
    //   path: '/countage',
    //   name: 'Countage',
    //   component: CountAge
    // },

  ]
})
