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
                src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg" />
        </van-col>
        <van-col span="24">
            <van-row >
                <van-col span="6" v-for="(item, index) in list" :key="index" @click="changeroute" style="text-align: center;">
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


const router = useRouter()

const changeroute = () => {
    router.push('two_three')
}
const list = ref([
    {
        src: '/src/assets/项目分类/首页/图标/厨房保洁.png',
        title: '厨房保洁'
    }, {
        src: '/src/assets/项目分类/首页/图标/空调.png',
        title: '空调清洗'
    }, {
        src: '/src/assets/项目分类/首页/图标/油烟机清洗.png',
        title: '油烟机清洗'
    }, {
        src: '/src/assets/项目分类/首页/图标/家电清洗.png',
        title: '家电套餐'
    }, {
        src: '/src/assets/项目分类/首页/图标/洗衣机.png',
        title: '洗衣机清洗'
    }, {
        src: '/src/assets/项目分类/首页/图标/热水器清洗.png',
        title: '热水器清洗'
    }, {
        src: '/src/assets/项目分类/首页/图标/地暖清洗.png',
        title: '地暖清洗'
    },
])

</script>