<style scoped>
:deep(.van-sidebar-item) {
    width: 100%;
}

</style>

<template>
    <van-nav-bar title="商品列表" />
    <van-row style="height: 700px;" justify="center">
        <van-col span="6" >
            <van-sidebar v-model="active"  >
                <van-sidebar-item v-for="li in list" :title="li.title"  :to="li.path" style="text-align: center;"/>
            </van-sidebar>
        </van-col>
        <van-col span="18" >
            <router-view to="/class/one"></router-view>
        </van-col>
    </van-row>
    <vantabber></vantabber>
</template>

<script setup>

import { ref } from 'vue'
import vantabber from './vantabber.vue';
const active = ref()


const list = ref([
    {
        path: "/class/one",
        title: "热门"
    },
    {
        path: "/class/two",
        title: "家政服务"
    },
    {
        path: "/class/three",
        title: "家电清理"
    }
])
</script>
