<style scoped>
.title {
    font-size: 14px;
    margin: 10px 0 15px;
}
</style>

<template>
    <van-row>
        <van-col span="24">
            家电清理
        </van-col>
        <van-col span="24" style="margin: 10px 0 15px;">
            <van-image width="100%" height="10rem" fit="contain"
                src="/src/assets/项目分类/5.jpg" />
        </van-col>
        <van-col span="24">
            <van-row >
                <van-col span="6" v-for="(item, index) in list" :key="index" @click="changeroute(item.title,item.type,item.jiage)" style="text-align: center;">
                    <van-icon size="40" class="iconfont" class-prefix='icon' :name='item.src' />
                    <div class="title">{{ item.title }}</div>
                </van-col>
            </van-row>
        </van-col>

    </van-row>
</template>



<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router';




const list = ref([
    {
        src: '/src/assets/项目分类/首页/图标/厨房保洁.png',
        title: '厨房保洁',
        type: '无家具装修,有家具装修,别墅开荒保洁',
        jiage: '50,80,100'
    }, {
        src: '/src/assets/项目分类/首页/图标/空调.png',
        title: '空调清洗',
        type: '无家具装修,有家具装修,别墅开荒保洁',
        jiage: '50,80,100'
    }, {
        src: '/src/assets/项目分类/首页/图标/油烟机清洗.png',
        title: '油烟机清洗',
        type: '无家具装修,有家具装修,别墅开荒保洁',
        jiage: '50,80,100'
    }, {
        src: '/src/assets/项目分类/首页/图标/家电清洗.png',
        title: '家电套餐',
        type: '无家具装修,有家具装修,别墅开荒保洁',
        jiage: '50,80,100'
    }, {
        src: '/src/assets/项目分类/首页/图标/洗衣机.png',
        title: '洗衣机清洗',
        type: '无家具装修,有家具装修,别墅开荒保洁',
        jiage: '50,80,100'
    }, {
        src: '/src/assets/项目分类/首页/图标/热水器清洗.png',
        title: '热水器清洗',
        type: '无家具装修,有家具装修,别墅开荒保洁',
        jiage: '50,80,100'
    }, {
        src: '/src/assets/项目分类/首页/图标/地暖清洗.png',
        title: '地暖清洗',
        type: '无家具装修,有家具装修,别墅开荒保洁',
        jiage: '50,80,100'
    },
])

const router = useRouter()
const changeroute = (name,ttype,jiage) => {
    router.push({
    name: 'two_three',
    query:{
      title: name,
      ttype: ttype,
      jiage: jiage
    }
  })
}
</script>