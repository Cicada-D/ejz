<style scoped></style>

<template>
  <vannavbar :value="titlen"></vannavbar>
  <van-address-list
    v-model="chosenAddressId"
    :list="list"
    default-tag-text="默认"
    @add="onAdd"
    @edit="onEdit"
    @select="select_add($event)"
  />
</template>

<script setup>
import vannavbar from '../vannavbar.vue'
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { get_address } from '../../api/address'

const route = useRoute()
const titlen = ref('地址管理')
const select_add = (item, index) => {
  console.log(item)
  router.push({
    path: '/ddtj',
    query: {
      type: route.query.type,
      address: item.address,
      tel: item.tel,
    },
  })
}
const chosenAddressId = ref()
const list = ref([])
const getaddress = async () => {
  const res = (
    await get_address({ username: localStorage.getItem('username') })
  ).data
  list.value = res
  for (let i = 0; i < list.value.length; i++) {
    if (list.value[i].tag == 1) {
      list.value[i].isDefault = true
      list.value[i].id = String(i)
      chosenAddressId.value = String(i)
    } else {
      list.value[i].isDefault = false
      list.value[i].id = String(i)
    }
  }
}
getaddress()

onMounted(() => {
  getaddress()
})

// const disabledList = [
//     {
//         id: '3',
//         name: '王五',
//         tel: '1320000000',
//         address: '浙江省杭州市滨江区江南大道 15 号',
//     },
// ];
const router = useRouter()

const onAdd = () => {
  router.push('/tjxdz')
}
const onEdit = (item, index) => {}
</script>
