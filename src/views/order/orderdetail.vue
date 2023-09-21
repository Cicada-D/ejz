<style scoped>
.row {
  background-color: aliceblue;
  padding: 10px;
}

.title,
.head {
  text-align: center;
  padding-top: 4px;
  font-size: 14px;
  color: rgb(96, 96, 97);
}

.van-row .van-col {
  background-color: white;
  padding: 6px 5px;
}

.head {
  background-color: rgb(209, 208, 206);
}

.price {
  color: red;
}
</style>

<template>
  <van-nav-bar title="标题" left-text="返回" left-arrow @click-left="onClickLeft" />
  <van-row class="row" v-for="order in orders">
    <van-col span="24" style="background-color: rgb(209, 208, 206)">
      <van-row align="center">
        <van-col span="6" class="head" style="background-color: rgb(209, 208, 206)">
          服务信息
        </van-col>
      </van-row>
    </van-col>
    <van-col span="24" class="van-hairline--bottom">
      <van-row align="center">
        <van-col span="6" class="title"> 订单编号 </van-col>
        <van-col span="18" class="van-multi-ellipsis--l2">
          {{ order.oid }}
        </van-col>
      </van-row>
    </van-col>
    <van-col span="24" class="van-hairline--bottom">
      <van-row align="center">
        <van-col span="6" class="title"> 服务类型: </van-col>
        <van-col span="18" class="van-multi-ellipsis--l2">
          {{ order.ty }}
        </van-col>
      </van-row>
    </van-col>
    <van-col span="24" class="van-hairline--bottom">
      <van-row align="center">
        <van-col span="6" class="title"> 下单时间: </van-col>
        <van-col span="18" class="van-multi-ellipsis--l2">
          {{ order.xdtime }}
        </van-col>
      </van-row>
    </van-col>
    <van-col span="24" class="van-hairline--bottom">
      <van-row align="center">
        <van-col span="6" class="title"> 服务时间: </van-col>
        <van-col span="18" class="van-multi-ellipsis--l2">
          {{ order.fwtime }}
        </van-col>
      </van-row>
    </van-col>
    <van-col span="24" class="van-hairline--bottom">
      <van-row align="center">
        <van-col span="6" class="title"> 服务地址: </van-col>
        <van-col span="18" class="van-multi-ellipsis--l2">
          {{ order.dizhi }}
        </van-col>
      </van-row>
    </van-col>
    <van-col span="24" class="van-hairline--bottom">
      <van-row align="center">
        <van-col span="6" class="title"> 联系电话: </van-col>
        <van-col span="18" class="van-multi-ellipsis--l2">
          {{ order.telephone }}
        </van-col>
      </van-row>
    </van-col>
    <van-col span="24" class="van-hairline--bottom">
      <van-row align="center">
        <van-col span="6" class="title"> 留言: </van-col>
        <van-col span="18" class="van-multi-ellipsis--l2">
          {{ order.comment }}
        </van-col>
      </van-row>
    </van-col>
  </van-row>

  <van-row class="row" v-for="order in orders">
    <van-col span="24" style="background-color: rgb(209, 208, 206)">
      <van-row align="center">
        <van-col span="6" class="head" style="background-color: rgb(209, 208, 206)">
          支付信息
        </van-col>
      </van-row>
    </van-col>
    <van-col span="24" class="van-hairline--bottom">
      <van-row align="center">
        <van-col span="6" class="title"> 订单总价: </van-col>
        <van-col span="18" class="van-multi-ellipsis--l2 price">
          {{ order.zj }} 元
        </van-col>
      </van-row>
    </van-col>
    <van-col span="24" class="van-hairline--bottom">
      <van-row align="center">
        <van-col span="6" class="title"> 优惠金额: </van-col>
        <van-col span="18" class="van-multi-ellipsis--l2 price">
          {{ order.yh }} 元
        </van-col>
      </van-row>
    </van-col>
    <van-col span="24" class="van-hairline--bottom">
      <van-row align="center">
        <van-col span="6" class="title"> 应付金额: </van-col>
        <van-col span="18" class="van-multi-ellipsis--l2 price">
          {{ order.yfje }} 元
        </van-col>
      </van-row>
    </van-col>
    <van-col span="24">
      <van-row justify="space-around">
        <van-col span="10">
          <van-button  v-if="button_one" style="background-color: white; border-radius: 20px;" @click="qx">
            {{ title_a }}
          </van-button>
        </van-col>
        <van-col span="10" >
          <van-button v-if="button_two" style="background-color: rgb(255, 102, 0); color: white; border-radius: 20px;" @click="fk">
            {{ title_c }}
          </van-button>
        </van-col>
      </van-row>
    </van-col>
  </van-row>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { change_bid, cancell_bid,reply_change_bid } from '../../api/bid'
const route = useRoute()
const router = useRouter()

const orders = ref([
  {
    oid: route.query.num,
    ty: route.query.service,
    xdtime: route.query.createdAt,
    fwtime: route.query.date,
    dizhi: route.query.address,
    telephone: route.query.tel,
    zj: route.query.money,
    yh: '0',
    yfje: route.query.money,
    comment: route.query.comment,
    state: route.query.state
  },
])
const onClickLeft = () => history.back()



const qx = () => {
  cancell_bid({ num: route.query.num })
  console.log(route.query.num)

  router.push('/orders')
}
const fk = () => {
  // console.log(orders.value[0].state)
if ( orders.value[0].state == '1'){
  change_bid({ num: route.query.num })

}else if (orders.value[0].state == '2'){
  reply_change_bid({num : route.query.num})
  console.log(route.query.num)
}

  router.push('/orders')
}

var title_a = ref()
var title_c = ref()
var button_one = ref(true)
var button_two = ref(true)

const change_t = () => {
  console.log(orders.value[0].state)
  if (orders.value[0].state == '1') {
    title_a.value = '取消订单'
    title_c.value = '去付款'
  } else if (orders.value[0].state == '2') {
    title_c = '去评价'

    button_one= false
  } else if (orders.value[0].state == '3') {
    button_one = false
    button_two = false
  } else if (orders.value[0].state == '5') {
    button_one = false
    button_two = false
  }
}
change_t()
</script>
