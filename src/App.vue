<style scoped>
.icon {
    width: 20px;
    height: 20px;
}

</style>
<template>
    <router-view ></router-view>
    <!-- <div style="height: 50px;">
    </div> -->
    <!-- <van-tabbar route >
        <van-tabbar-item v-for="icon in icons" replace :to="icon.to" >
            <span>{{icon.title}}</span>
            <template #icon="props">
                <svg class="icon">
                    <use :xlink:href="icon.src"></use>
                </svg>
            </template>
        </van-tabbar-item>
    </van-tabbar> -->
</template>

<script setup>
import { ref } from 'vue';

const active = ref('home')

const icons = ref([
    {
        src: '#icon-shouye',
        title: '首页',
        to: '/'
    },{
        src: '#icon-fenlei',
        title: '分类',
        to: '/class/one'
    },{
        src: '#icon-dingdan',
        title: '订单',
        to: '/orders'
    },{
        src: '#icon-wode',
        title: '我的',
        to: '/personal'
    },
])
console.log(active.value)
</script>