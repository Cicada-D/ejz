<style scoped>
.title {
  font-size: 14px;
  margin: 10px 0 15px;
}
</style>

<template>
  <van-row>
    <van-col span="24"> 家政服务 </van-col>
    <van-col span="24" style="margin: 10px 0 15px">
      <van-image
        width="100%"
        height="10rem"
        fit="contain"
        src="/src/assets/项目分类/4.jpg"
      />
    </van-col>
    <van-col span="24">
      <van-row>
        <van-col
          span="6"
          v-for="(item, index) in list"
          :key="index"
          @click="changeroute(item.title, item.method, item.price)"
          style="text-align: center"
        >
          <van-icon
            size="40"
            class="iconfont"
            class-prefix="icon"
            :name="item.src"
          />
          <div class="title">{{ item.title }}</div>
        </van-col>
      </van-row>
    </van-col>
  </van-row>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { get_first_Service_List, get_second_List } from '../../api/service'
const router = useRouter()

const list = ref([])
const changeroute = (name, ttype, jiage) => {
  router.push({
    name: 'two_three',
    query: {
      title: name,
      ttype: ttype,
      jiage: jiage,
    },
  })
}
const get_first_service = async () => {
  const res = (await get_first_Service_List()).data
  list.value = res
  console.log(list.value)
}

get_first_service()
</script>
