<style scoped>
.cell {
  font-size: 16px;
}

.cellg {
  padding-top: 25px;
  background-color: rgb(243, 244, 246);
}

:deep(.van-cell__value) {
  color: black;
}

:deep(textarea) {
  background-color: rgb(243, 244, 246);
  border-radius: 20px;
  padding: 5px;
}
</style>

<template>
  <vannavbar :title="titlen"></vannavbar>
  <van-form style="background-color: rgb(243, 244, 246); height: 800px">
    <van-cell-group class="cellg">
      <van-cell class="cell" :value="type_name">
        <template #title> 服务项目 </template>
      </van-cell>
      <van-cell is-link :to="dzgl">
        <template #title> 地址 </template>
        <template #value>
          {{ address }}
        </template>
      </van-cell>
      <van-cell title="服务数量">
        <template #value>
          <van-field v-model="value" placeholder="输入多少平米" input-align="right" style="padding: 0"
            @change="all_price(value)" />
        </template>
      </van-cell>
      <van-cell title="服务时间" is-link @click="showPopup">
        <template #value>
          <span style="color: rgb(255, 102, 0)">{{ select_date }}</span>
        </template>
      </van-cell>
      <van-popup v-model:show="show" style="width: 80%">
        <van-date-picker @confirm="qd" v-model="currentDate" title="选择日期" :min-date="minDate" :max-date="maxDate" />
      </van-popup>

      <van-cell title="优惠券">
        <template #value> 无可用优惠券 </template>
      </van-cell>
      <van-field class="" v-model="messages" rows="10" label-align="top" autosize label="留言" type="textarea"
        placeholder="请输入留言" />
    </van-cell-group>
  </van-form>
  <van-submit-bar :price="price" button-text="立即预约" tip-icon="after-sale" label="订单总额" text-align="left"
    @submit="onSubmit">
  </van-submit-bar>

  <van-toast v-model:show="show_one" style="padding: 0">
    <template #message>
      <van-image :src="image" width="200" height="140" style="display: block" />
    </template>
  </van-toast>
</template>

<script setup>
import vannavbar from '../vannavbar.vue'
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
const router = useRouter()
import { bid_add } from '../../api/bid'
import { showToast } from 'vant'


const titlen = '订单确定'
const show = ref(false)
const value = ref('')
const show_one = ref(false)

const showPopup = () => {
  show.value = true
}
const messages = ref('')
var price = ref(0)
const route = useRoute()
const type_name = route.query.type
const address = ref(route.query.address)
const dzgl = ref({
  path: '/dzgl',
  query: {
    type: type_name,
    jiage: route.query.jiage
  },
})

const nowDate = new Date()
const data = ref({
  year: nowDate.getFullYear(),
  month: nowDate.getMonth(),
  date: nowDate.getDate(),
})
console.log(data.value)
const currentDate = ref([data.value.year, data.value.month, data.value.date])
const minDate = new Date(data.value.year, data.value.month, data.value.date)
const maxDate = new Date(data.value.year, data.value.month, 30)

var select_date = ref('选择时间')
const qd = ({ selectedValues }) => {
  // console.log(selectedValues.join('-'));
  show.value = false
  select_date = selectedValues.join('-')
}

const onSubmit = () => {
  let list = {
    username: localStorage.getItem('username'),
    service: type_name,
    address: address.value,
    date: select_date,
    comment: messages.value,
    tel: route.query.tel,
    money: price,
  }
  if (value.value == '') {
    showToast({
      message: '请填写好平方'
    })
  } else {
    if (list.date.value == '选择时间' || list.date.value == '') {
      showToast({
        message: '请选择好时间',
        // position: 'top',
      })
    } else {
      bid_add(list)
      router.push('/orders')
    }
  }


}

const all_price = (value) => {
  price.value = route.query.jiage * value * 100
  console.log(price)
}

</script>
