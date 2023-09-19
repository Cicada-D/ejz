<style scoped>
.danwei,
.jiage {
  color: chocolate;
  font-family: large;
  vertical-align: bottom;
}

.jiage {
  font-size: 20px;
}

.van-row {
  background-color: aliceblue;
  padding: 10px;
}

:deep(.van-icon-arrow:before) {
  content: '';
}
</style>

<template>
  <van-row justify="center">
    <van-col span="24" class="van-hairline--bottom">
      <van-cell :title="title_t" :value="title_v" />
    </van-col>
    <van-col span="24" class="van-hairline--bottom">
      <van-cell is-link :to="ddxq">
        <!-- 使用 title 插槽来自定义标题 -->
        <template #title>
          <div class="van-multi-ellipsis--l2">
            <span class="custom-title" style="color: rgb(206, 207, 207)">订单编号:</span>
            <span style="margin-left: 10px">{{ zorder.list.num }}</span>
          </div>
          <div class="van-multi-ellipsis--l2">
            <span class="custom-title" style="color: rgb(206, 207, 207)">服务时间:</span>
            <span style="margin-left: 10px">{{ zorder.list.date }}</span>
          </div>
          <div class="van-multi-ellipsis--l2">
            <span class="custom-title" style="color: rgb(206, 207, 207)">服务地址:</span>
            <span style="margin-left: 10px">{{ zorder.list.address }}</span>
          </div>
          <div class="van-multi-ellipsis--l2">
            <span class="custom-title" style="color: rgb(206, 207, 207)">下单时间:</span>
            <span style="margin-left: 10px">{{ zorder.list.createdAt }}</span>
          </div>
        </template>
      </van-cell>
    </van-col>
    <van-col span="24">
      <van-cell style="align-items: center">
        <template #title>
          <div>
            <span class="danwei"> ￥ </span>
            <span class="jiage"> {{ zorder.list.money }} </span>
          </div>
        </template>
        <template #value v-if="button">
          <van-button ref="button" round size="small" color="chocolate"> {{ title_b }} </van-button>
        </template>
      </van-cell>
    </van-col>
  </van-row>
</template>

<script setup>
import { ref } from 'vue'
// import { defineProps } from 'vue';

const zorder = defineProps({
  list: Object,
})

var button = ref(true)

const title_t = ref(zorder.list.service)
var title_v = ref()
var title_b = ref()
const change_v = () => {
  if( zorder.list.state == '1') {
    title_v = '待付款'
    title_b = '去付款'
  }else if ( zorder.list.state == '2') {
    title_v = '待评价'
    title_b = '去评价'
  }else if ( zorder.list.state == '3') {
    title_v = '已取消'
    button = false
  }
}
change_v()
const ddxq = ref({
  name: 'order',
  query: {
    num: zorder.list.num,
    service: zorder.list.service,
    createdAt: zorder.list.createdAt,
    date: zorder.list.date,
    address: zorder.list.address,
    tel: zorder.list.tel,
    money: zorder.list.money,
  },
})
// change_bu()
</script>
