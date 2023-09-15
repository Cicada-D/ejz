<style scoped>
.van-row {
    background-color: aliceblue;
    padding: 10px;
}

.van-list {
    text-align: center;
}

.title {
    background-color: rgb(201, 202, 202);
    padding: 10px 0;
}
span {
    font-size: 16px;
    color: rgb(0, 0, 0);
}
.van-col {
    padding: 10px;
    word-wrap: break-word;
    background-color: #ffffff;
}
p {
    font-size: 14px;
    color: rgb(145, 147, 149);
    font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", Helvetica, Segoe UI, Arial, Roboto, "PingFang SC", "miui", "Hiragino Sans GB", "Microsoft Yahei", sans-serif;
}
</style>


<template>
    <van-row >
        <van-col class="title" span="24" style="text-align: center; padding: 10px 0; background-color:  rgb(201, 202, 202);">
            -介绍详情-
        </van-col>
        <van-col span="12" style="padding-right: 0;">
            <van-cell class="title" title="服务类型" title-style="text-align: center" />
            <van-list v-model:loading="loading" :finished="finished" @load="onLoad">
                <van-cell v-for="item in list.list[1].ttype.split(',')" :key="item" :title="item" />
            </van-list>
        </van-col>
        <van-col span="12" style="padding-left: 0;">
            <van-cell class="title" title="会员价格" title-style="text-align: center" />
            <van-list v-model:loading="loading" :finished="finished" @load="onLoad">
                <van-cell v-for="item in list.list[0].jiage.split(',')" :key="item" :title="item" />
            </van-list>
        </van-col>
        <van-col span="24" style="border-top: 1px solid rgb(213, 211, 211);">
            <p>
                <span >
                    服务规则:
                </span>
                alsdjlajsdjalsdjlkasjdalsdjlasjdkjajdalsdjaksldjalsjdalsdjlkajd
            </p>
            <p>
                <span >
                    温馨提示:
                </span>
                alsdjlajsdjalsdjlkasjdalsdjlasjdkjajdalsdjaksldjalsjdalsdjlkajd
            </p>
        </van-col>
    </van-row>
</template>

<script setup>
import { ref } from 'vue'




const list = defineProps({
    list: Object
})
// console.log(list.listjg.split(','))
// console.log(list.list[1].ttype.split(','))

const loading = ref(false);
const finished = ref(true);


// const onLoad = () => {
//       // 异步更新数据
//       // setTimeout 仅做示例，真实场景中一般为 ajax 请求
//       setTimeout(() => {
//         for (let i = 0; i < 1; i++) {
//           list.value.push(list.value.length + 1);
//         }

//         // 加载状态结束
//         loading.value = false;

//         // 数据全部加载完成
//         if (list.value.length >= 40) {
//           finished.value = true;
//         }
//       }, 1000);
//     };
</script>