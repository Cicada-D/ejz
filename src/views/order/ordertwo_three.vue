<style scoped>
:deep(.van-sticky) {
    border-radius: 20px;
    /* background-color: rgba(186, 183, 183, 0.255); */
}
.van-button {
    width: 80%;
    left: 10%;
    background-color:rgba(255, 255, 255, 0.774);
    color: rgb(255, 102, 0);
    border-radius: 20px;
    font-size: 16px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

</style>

<template>
    <van-nav-bar title="标题" left-text="返回" left-arrow @click-left="onClickLeft" />
    <lunbo></lunbo>
    <ordertwo></ordertwo>
    <orderthree></orderthree>
    
    <van-sticky :offset-bottom="20" position="bottom">
        <van-button @click="yuyue">点击预约</van-button>
    </van-sticky>
</template>


<script setup>
import lunbo from '../lunbo/lunboone.vue'
import ordertwo from '../order/ordertwo.vue'
import orderthree from '../order/orderthree.vue'
import {useRouter} from 'vue-router'

const onClickLeft = () => history.back();

const router = useRouter()

const yuyue = () => {
    router.push('/ddtj')
}

</script>