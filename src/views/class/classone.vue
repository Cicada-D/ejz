<style scoped>
.title {
    font-size: 14px;
    margin: 10px 0 15px;
}

</style>

<template>
    <van-row>
        <van-col span="24">
            热门
        </van-col>
        <van-col span="24" style="padding-top: 20px;">
            <van-row>
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

const list = ref([
    {
        src: '/src/assets/项目分类/首页/图标/开荒保洁.png',
        title: '开荒保洁'
    },
    {
        src: '/src/assets/项目分类/首页/图标/大扫除.png',
        title: '大扫除新'
    }, {
        src: '/src/assets/项目分类/首页/图标/擦玻璃.png',
        title: '擦玻璃'
    }, {
        src: '/src/assets/项目分类/首页/图标/深度保洁.png',
        title: '深度保洁'
    }, {
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
    }
])
const router = useRouter()

const changeroute = () => {
    router.push('two_three')
}
</script>