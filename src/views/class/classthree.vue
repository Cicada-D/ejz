<style scoped>
.title {
  font-size: 14px;
  margin: 10px 0 15px;
}
</style>

<template>
  <van-row>
    <van-col span="24"> 家电清理 </van-col>
    <van-col span="24" style="margin: 10px 0 15px">
      <van-image
        width="100%"
        height="10rem"
        fit="contain"
        src="/src/assets/项目分类/5.jpg"
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
import { get_second_List } from '../../api/service'

const router = useRouter()

const list = ref([
  //   {
  //     src: '/src/assets/项目分类/首页/图标/厨房保洁.png',
  //     title: '厨房保洁',
  //     type: '无家具装修,有家具装修,别墅开荒保洁',
  //     jiage: '50,80,100',
  //   },
])

const get_second_service_list = async () => {
  const res = (await get_second_List()).data
  list.value = res
  console.log(list.value)
}
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

get_second_service_list()
</script>
