<style scoped>
:deep(.van-sticky) {
    border-radius: 20px;
    /* background-color: rgba(186, 183, 183, 0.255); */
}

.van-button {
    width: 80%;
    left: 10%;
    background-color: rgba(255, 255, 255, 0.774);
    color: rgb(255, 102, 0);
    border-radius: 20px;
    font-size: 16px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
</style>

<template>
    <van-nav-bar :title="title" left-text="返回" left-arrow @click-left="onClickLeft" />
    <lunbo :list="lunbotu"></lunbo>

    <ordertwo :list="ttype" @func="select_two"></ordertwo>
    <orderthree :list="item"></orderthree>

    <van-sticky :offset-bottom="20" position="bottom">
        <van-button @click="yuyue(item)">点击预约</van-button>
    </van-sticky>
    <van-toast v-model:show="show" style="padding: 0">
        <template #message>
            <van-image width="200" height="140" style="display: block" />
        </template>
    </van-toast>
</template>


<script setup>
import lunbo from '../lunbo/lunboone.vue'
import ordertwo from '../order/ordertwo.vue'
import orderthree from '../order/orderthree.vue'
import { useRouter, useRoute } from 'vue-router'
import { ref } from 'vue'
// import { type } from 'express/lib/response'
import { showSuccessToast, showFailToast } from 'vant';

const onClickLeft = () => history.back();

const router = useRouter()
const route = useRoute()
const title = route.query.title
const ttype = route.query.ttype
const jiage = route.query.jiage

const item = ref([
    {
        jiage: jiage
    }, {
        ttype: ttype
    }
])

var type_two
var jiage_two
const select_two = (cdata, index) => {
    type_two = cdata
    jiage_two = item.value[0].jiage.split(',')[index]
    console.log(item.value[0].jiage.split(',')[index])
}

const yuyue = () => {
    console.log(type_two)
    if (!type_two) {
        showFailToast('请选择服务类型');
    } else {
        router.push({
            path: '/ddtj',
            query: {
                type: type_two,
                jiage: jiage_two
            }
        })
    }
}

const lunbotu = ref([
    {
        src: '/src/assets/项目分类/首页/图标/clear7.jpg'
    }
])
</script>