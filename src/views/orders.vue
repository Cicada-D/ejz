<style scoped></style>

<template>
  <van-tabs v-model:active="one">
    <van-tab title="普通订单">
      <van-tabs v-model:active="one_two">
        <van-tab title="待确认">
          <orderone v-for="forder in forders" :list="forder"></orderone>
        </van-tab>
        <van-tab title="待服务">
          <van-empty description="描述文字" />
        </van-tab>
        <van-tab title="验收评价">
          <van-empty description="描述文字" />
        </van-tab>
        <van-tab title="已取消">
          <orderone v-for="forder in forders" :list="forder"></orderone>
        </van-tab>
        <van-tab title="全部">
          <orderone v-for="forder in forders" :list="forder"></orderone>
        </van-tab>
      </van-tabs>
    </van-tab>
    <van-tab title="周期服务">
      <van-tabs v-model:active="two">
        <van-tab title="已服务">
          <van-empty description="描述文字" />
        </van-tab>
        <van-tab title="待服务">
          <van-empty description="描述文字" />
        </van-tab>
        <van-tab title="已取消">
          <van-empty description="描述文字" />
        </van-tab>
      </van-tabs>
    </van-tab>
  </van-tabs>
  <vantabber></vantabber>
  <!-- <lunboone></lunboone> -->
  <!-- <orderone></orderone> -->
  <!-- <ordertwo></ordertwo> -->
  <!-- <orderthree></orderthree> -->
  <!-- <orderdetail></orderdetail> -->
</template>

<script setup>
import { ref } from 'vue'
import orderone from '../views/order/orderone.vue'
import ordertwo from '../views/order/ordertwo.vue'
import orderthree from '../views/order/orderthree.vue'
import lunboone from '../views/lunbo/lunboone.vue'
import orderdetail from '../views/order/orderdetail.vue'
import vantabber from './vantabber.vue'
const one = ref(0)
const one_two = ref(0)
const two = ref(0)
const forders = ref([
  {
    oid: 'J234123JNKSd23',
    ty: '化纤地毯',
    xdtime: '2020-1-3',
    fwtime: '2020-1-7 09:09~2020-1-7 13:00',
    dizhi: '江西省南昌市东华理工大学研一',
    telephone: '1381381008',
    zj: '800',
    yh: '0',
    yfje: '800',
  },
])



// beforeRouteEnter(to, from, next) {
//   // 在组件生命周期beforeCreate阶段触发
//   console.log('组件内路由前置守卫 beforeRouteEnter', this) // 访问不到this
//   next((vm) => {
//     console.log('组件内路由前置守卫 vm', vm) // vm 就是this
//   })
// }

</script>
