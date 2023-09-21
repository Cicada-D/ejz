import { createRouter, createWebHistory } from "vue-router"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/home.vue"),
    },
    {
      path: "/class",
      name: "class",
      component: () => import("../views/classification.vue"),
      children: [
        {
          path: "one",
          name: "classone",
          component: () => import("../views/class/classone.vue"),
        },
        {
          path: "two",
          name: "classtwo",
          component: () => import("../views/class/classtwo.vue"),
        },
        {
          path: "three",
          name: "classthree",
          component: () => import("../views/class/classthree.vue"),
        },
      ],
    },
    {
      path: "/orders",
      name: "orders",
      component: () => import("../views/orders.vue"),
    },
    {
      path: "/order",
      name: "order",
      component: () => import("../views/order/orderdetail.vue"),
    },
    {
      path: "/personal",
      name: "personal",
      component: () => import("../views/personal.vue"),
    },
    {
      path: "/two_three",
      name: "two_three",
      component: () => import("../views/order/ordertwo_three.vue"),
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../views/login.vue"),
    },
    {
      path: "/regist",
      name: "regist",
      component: () => import("../views/regist.vue"),
    },
    {
      path: "/wdqb",
      name: "wdqb",
      component: () => import("../views/personal/wdqb.vue"),
    },
    {
      path: "/dzgl",
      name: "dzgl",
      component: () => import("../views/personal/dzgl.vue"),
    },
    {
      path: "/tjxdz",
      name: "tjxdz",
      component: () => import("../views/personal/tjxdz.vue"),
    },
    {
      path: "/ddtj",
      name: "ddtj",
      component: () => import("../views/personal/ddtj.vue"),
    },
    {
      path: '/sat',
      name: 'sat',
      component: () => import('../views/personal/sat.vue')
    },
    {
      path: '/option',
      name: 'option',
      component: () => import('../views/personal/option.vue')
    },
    {
      path: '/zshy',
      name: 'zshy',
      component: () => import('../views/personal/zshy.vue')
    }
  ],
})

router.beforeEach((to, from, next) => {
  console.log("前置路由守卫", to, from)
  if (to.name === "orders" || to.name == 'personal'||to.name=='ddtj') {
    if (localStorage.getItem("token") === "0") {
      //控制权限的具体规则
      console.log('1')
      next() //放行
    } else {
      router.push("/login")
      console.log('2')

    }
  } else {
    console.log('3')

    next() //放行
  }
}
)
export default router
