<style scoped></style>

<template>
  <van-tabs v-model:active="one">
    <van-tab title="普通订单">
      <van-tabs v-model:active="one_two" @click-tab="getall">
        <van-tab title="待确认">
          <orderone v-for="forder in forders1" :list="forder"></orderone>
        </van-tab>
        <van-tab title="待服务">
          <orderone v-for="forder in forders2" :list="forder"></orderone>
        </van-tab>
        <van-tab title="验收评价">
          <van-empty description="描述文字" />
        </van-tab>
        <van-tab title="已取消">
          <orderone v-for="forder in forders3" :list="forder"></orderone>
        </van-tab>
        <van-tab title="全部">
          <orderone v-for="forder in forders4" :list="forder"></orderone>
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
</template>

<script setup>
import { ref, onMounted } from 'vue'
import orderone from '../views/order/orderone.vue'
import vantabber from './vantabber.vue'

import {
  get_all_bid,
  get_cancell_bid,
  get_wait_bid,
  get_ok_bid,
} from '../api/bid'
const one = ref(0)
const one_two = ref(0)
const two = ref(0)
const forders1 = ref([])
const forders2 = ref([])
const forders3 = ref([])
const forders4 = ref([])

const getall = () => {
  if (one_two.value == 0) {
    get_ok_Bid()
  } else if (one_two.value == 1) {
    get_wait()
  } else if (one_two.value == 3) {
    get_cancell()
  } else if (one_two.value == 4) {
    init_bid()
  }
}

const init_bid = async () => {
  const res = (
    await get_all_bid({
      username: localStorage.getItem('username'),
    })
  ).data
  forders4.value = res
}
const get_ok_Bid = async () => {
  const res = (
    await get_ok_bid({
      username: localStorage.getItem('username'),
    })
  ).data
  forders1.value = res
  console.log(res)
}

const get_cancell = async () => {
  const res = (
    await get_cancell_bid({
      username: localStorage.getItem('username'),
    })
  ).data
  forders3.value = res
  // console.log('取消')
  console.log(res)
}
const get_wait = async () => {
  const res = (
    await get_wait_bid({
      username: localStorage.getItem('username'),
    })
  ).data
  forders2.value = res
  // console.log('等待')
  console.log(forders2.value)
}
get_ok_Bid()
onMounted(() => {
  get_ok_Bid()
})
</script>
