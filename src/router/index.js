import { createRouter, createWebHistory } from "vue-router";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/', 
      name: 'home',
      component: () => import('../views/home.vue')
    },
    {
      path: '/class', 
      name: 'class',
      component: () => import('../views/classification.vue'),
      children: [
        {
          path:'one',
          name:'classone',
          component: () =>import('../views/class/classone.vue')
        },
        {
          path:'two',
          name:'classtwo',
          component: () =>import('../views/class/classtwo.vue')
        },
        {
          path:'three',
          name:'classthree',
          component: () =>import('../views/class/classthree.vue')
        }
      ]
    },{
      path: '/orders', 
      name: 'orders',
      component: () => import('../views/orders.vue'),
     
    },{
      path: '/order',
      name: 'order',
      component: () => import('../views/order/orderdetail.vue')
    },{
      path: '/personal', 
      name: 'personal',
      component: () => import('../views/personal.vue')
    },{
      path: '/two_three',
      name: 'two_three',
      component: () => import('../views/order/ordertwo_three.vue')
    }
  ],
});

export default router;