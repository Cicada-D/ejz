<template>
    <vannavbar :title="title"></vannavbar>
    <van-row justify="space-around" align="center" style="background-color: rgb(255, 102, 0)">
        <van-col span="20" style="border-radius: 20px">
            <van-row align="center" wrap="false" gutter="">
                <van-col span="8" style="margin-right: -28px">
                    <van-button size="large" to="index" style="border: none; height: 34px; border-radius: 20px">
                        <span style="font-size: 16px">江西...</span>
                        <van-icon name="arrow-down" size="10" style="width: 28px; line-height: 20px" />
                    </van-button>
                </van-col>

                <van-col span="12">
                    <van-search v-model="value" shape="round" background=" rgb(255, 102, 0)" placeholder="请输入搜索关键词"
                        autofocus="true" @update:model-value="search" />
                </van-col>
            </van-row>
        </van-col>
        <van-col span="2" style="text-align: center; color: aliceblue">
            <van-icon name="chat-o" size="25" title="1" />
            <div>消息</div>
        </van-col>
    </van-row>
    <van-col span="24">
        <van-row>
            <van-col span="6" v-for="(item, index) in item_list" :key="index"
                @click="changeroute(item.title, item.method, item.price)" style="text-align: center">
                <van-icon size="40" class="iconfont" class-prefix="icon" :name="item.src" />
                <div class="title">{{ item.title }}</div>
            </van-col>
        </van-row>
    </van-col>
</template>






<script setup>
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import {
    get_Service_List,
} from '../api/service.js'
import vannavbar from './vannavbar.vue';
const router = useRouter()
const title = ref('搜索栏')
const item_list = ref([])
const value = ref('')
let list = ref([])
let temp = ref([])
const init_Item_List = async () => {
    const res = (await get_Service_List()).data
    for (let j = 0; j < res.length; j++) {
        for (let i = 0; i < res[j].length; i++) {
            list.value.push(res[j][i])
        }
    }
}


const changeroute = (name, method, price) => {
  router.push({
    name: 'two_three',
    query: {
      title: name,
      ttype: method,
      jiage: price,
    },
  })
}
const search = () => {
    console.log(list.value)
    if(value.value==''){
        item_list.value=[]
    }else{
        item_list.value = list.value.filter((item)=>{
        if(item.title.includes(value.value)){
            console.log(item)
            return item
        }
    })
    }
}

init_Item_List()
</script>

<style scoped>
/* .head {
    display: flex;
    justify-content: space-between;
    background-color: aliceblue;
    width: 100%;
    min-width: 509px;
} */

/* .find {
    display: flex;
    border: 1px solid black;
    background-color: white;
    border-radius: 20px;
    margin: 20px 20px;
    padding: 3px 10px;
    height: 30px;
}

.xiaoxi {
    margin: 20px 20px;
    text-align: center;
}

.xiaoxi .icon {
    margin: 0;
}

.find input {
    border: none;
    height: 28px;
}

.dizhi {

    border: none;
    border-right: 1px solid black;
    width: 80px;
    line-height: 30px;
    margin-right: 10px;
}

.icon {
    width: 20px;
    height: 20px;
    margin: 4px 4px 0 0;
} */

.van-search {
    --van-search-padding: 10px 0;
}

.custom-indicator {
    position: absolute;
    right: 5px;
    bottom: 5px;
    padding: 2px 5px;
    font-size: 12px;
    background: rgba(0, 0, 0, 0.1);
}

.van-swipe__indicators {
    bottom: 0%;
}

:deep(.van-swipe__indicator) {
    width: 15px;
    background-color: chocolate;
    border-radius: 20%;
}

.van-swipe {
    padding: 20px 0;
}
</style>
